//Example of promise in JS
const somethingWillHappen = () => {
  return new Promise( (resolve, reject) => {
    if(true){
      resolve('Hey!');
    } else {
      reject('Whoops!');
    }
  });
};

somethingWillHappen()
  .then( response => {console.log(response)})
  .catch( err => {console.error(err)})

const somethingWillHappen2 = () => {
  return new Promise( (resolve, reject) => {
    if(true){
      setTimeout(() => {
        resolve('True');
      }, 2000);
    }else {
      const error = new Error("Whoops!");
      reject(error);
    }
  })
}

somethingWillHappen2()
.then(response => console.log(response))
.catch( err => console.error(err))

//Stuff with promisse all