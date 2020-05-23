
//Duplex stream from scratch 


//const stream = require('stream');


//Type of streams

//Writabel stream,fs.createWritableStream()
//Readable stream fs.createReadableStream()
//Duplex implements both streams <net.Sockets>

//transform streams 
//Utility functions
//1)stream.pipeline()
//2)stream.finished()
//3)stream.Readable.form()
//Modes of Streams 
//1)Object Mode
//2)Buffer Mode


//Object Mode
//=>1)Streams created by Node.js API operated on
//strings and Buffer (orUint8Array)Objects .
//Possible to implement streams such that work with other
//Types of js types and values
//Streams consider  to operated in object mode


var through2 = require('through2')
var split2 = require('split2')

var stream = through2({ objectMode: true }, function(chunk, enc, callback) {
    var string = chunk.toString()
     var result = string.replace(/\n/, '').toUpperCase().split(/[ \t \r]/);

    this.push(result);//write to stream buffer
  
//Flushing stream data
  callback();

     
});

stream.on('data', function(data) {
    var toString = Object.prototype.toString.call(data);
    console.log('type of data:', toString);
    console.log('data:', data, '\n');

});



process.stdin.pipe(split2()).pipe(stream);


//Whwn ever any async code is added stream will resume tand keep the process active



process.on("SIGINT",function(){
	console.log("ctrl+C is pressed");
	process.exit();
});



