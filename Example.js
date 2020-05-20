
//pure streams


var {Readable}  = require('stream');

var {on,EventEmitter} = require('events');



var fs  =  require('fs');



const  files = [
   "file.temp.text",
];

async function *Data(){

  let i = 0; 
     while(files.length>i){

         yield  fs.createReadStream(files[i]); 
         i++;
  } 
}



async function *ON(t_,eventName){

	      yield  on(t_,eventName);
          
}

async function *helper(data){

var done =false;

         while(!done){

             yield await data.next().then(e=>{
                                          if(e.value.toString("utf8")==="____EOF____"){
                                            console.log("EOF");
                                              done=true;
                                            }else return e.value;
                                      });
         }
 
}



(async _=>{
 
	for await (const  t_ of Data()){
          var id;
          var i ;
 (async _=>{
    
 i=0  ;
id = setInterval( _=>{ if(i>10){
          t_.emit("data","____EOF____");
          clearInterval(id);
    }else
          t_.emit("data","well");

          i++;
         },2000);

 })();
			    for await (const data of ON(t_,"data")) {

             for await (const d of helper(data)){
      
              console.log(d.toString("utf8"));
             }
          }
	}
})();


console.log("Done");
