
console.log(process.memoryUsage());

var stream = new (require("events").EventEmitter)();
const _on = (stream, eventname) => {
  return ((_) => {
    const Gen = async function* () {
     
        let onData;
        let onErr;
      while (true) {
        let prom = new Promise((resolve, reject) => {
             onData = (chunk) => {
                resolve(chunk);
              };
        
               onErr = (e) => {
                reject(e);
              };
        
          stream.on(eventname, onData);
          stream.on("error", onErr);
        })
          .catch((e) => {
            throw e;
          })
          .finally(() => {
            //cleaning for avoiding memory leakes of each new promise
            stream.removeListener(eventname, onData); //removeListener(eventname,lisener ref);
            stream.removeListener("error", onErr);
          });
        

        yield prom;
      }
    };
    return Gen();
  })();
};

(async (_) => {
  (async (_) => {
    var id;
    var i = 0;
    id = setInterval((_) => {
      if (i > 10) {
        clearInterval(id);
        return;
      }
      stream.emit("data", "Recieved data.");
      i++;
    }, 10000);
  })();


  let temp  =process.memoryUsage();
  for await (const data of _on(stream, "data")) {
    
    
    //console.log(process.memoryUsage().heapUsed-temp.heapUsed);
    
    console.log(process.ppid);
    console.log(data);
  }
})();

console.log(process.memoryUsage());

