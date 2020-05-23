//pure streams

var { Readable } = require("stream");

var { on } = require("events");

var fs = require("fs");

const files = ["file.temp.text", "exp1.js"];

async function* Data() {
  let i = 0;
  while (files.length > i) {
    yield fs.createReadStream(files[i]);
    i++;
  }
}

//Listening from  the events

async function* ON(t_, eventName) {
  yield on(t_, eventName); //return Async genrator genrator
}

async function* helper(data) {
  var done = false;

  while (!done) {
    console.log("Waiting");

    yield await data.next().then((e) => {
      console.log("Done doing resolved");
      if (e.value.toString("utf8") === "____EOF____") {
        //console.log("EOF");
        done = true;
        return e.value;
      } else return e.value;
    });
    console.log("Done sending pending romise");
  }
}

(async (_) => {
  for await (const t_ of Data()) {
    var id;
    var i;
    (async (_) => {
      i = 0;
      id = setInterval((_) => {
        if (i > 10) {
          t_.emit("data", "____EOF____");
          clearInterval(id);
        } else t_.emit("data", "well");
        i++;
      }, 30000);
    })();
    for await (const data of ON(t_, "data")) {
      for await (const d of helper(data)) {
        console.log(d.toString("utf8"));
      }
    }
  }
})();

console.log("Done");
