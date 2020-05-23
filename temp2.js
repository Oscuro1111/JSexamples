



async function* gen() {
  yield new Promise((resolve, reject) => {
    setTimeout((_) => {
      resolve("DATA");
    }, 1000);
  });
  yield 2;
  yield 3;
}

var gen_ = gen();

var prom = null;

var retData = (data, callback, next, state) => {
  callback(data, next, state);
};

var loopInstruction = (data, next, state) => {
  if (data.value) {
    console.log(data.value);
    next(state);
  } else if (data.done) {
    return true;
  } else {
    throw new Error("Unexpected promise handle");
  }
};

var aloop = (_) => (_gen) => {
  _gen.next().then((data) => {
    retData(data, loopInstruction, aloop(), _gen);
  });
};

aloop()(gen_);

/*(async _=>{
for await (const d of gen_){
	console.log(d);
}
}
)();
*/

//console.log(gen_.next().then(e=>console.log(e)));

/*
{

var itrator =gen();
for(var d=null;d=itrator.next().value;){  //resturn itrator
	console.log(d);
}


or 

for(let data of gen()){
	console.log(data);
}
*/
