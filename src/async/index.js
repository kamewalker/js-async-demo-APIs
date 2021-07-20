const doSomethingAsync = () => {
  return new Promise ((resolve,reject) => {
    (true)
      ? setTimeout(() => resolve('Do Something async'), 3000)
      : reject(new Error ('Test Error'))
  });
}

const doSomethingAsyncAgain = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('Before');
doSomethingAsyncAgain();
console.log('After');

const anotherFunction = async () => {
  try{
    const something = await doSomethingAsyncAgain()
    console.log(something);
  }catch(error){
    console.error(error);
  }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');