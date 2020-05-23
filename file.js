




const promise = new Promise((resolve, rejects) => {
  setTimeout(() => {
    console.log("Done Working");
    resolve("Data");
  }, 5000);
});


async function* Gen() {
  yield promise.then((data) => data); //reolve promise then retrun pending promise  to the loop awaiting in which value is stored
}

(async (_gen) => {
  for await (const d of _gen) {
    //Wait untile the promise get resolvedand return resolved promise to extraxte value

    console.log(d);
  }
})(Gen()); //Retutn asynGenrators kind of itrator which retuen resolved promise or wrapped values in pending promises

console.log("Hello");
