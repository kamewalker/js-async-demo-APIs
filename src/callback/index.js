const suma = (n1,n2) => {
  return n1+ n2;
}

const calcular = (n1,n2, callback) => {
  return callback(n1,n2);
}

console.log("suma: ", calcular(2,5,suma));

const date = (callback) => {
  console.log(new Date);
  setTimeout( () => {
    let date = new Date;
    callback(date);
  }, 3000)
}

const printDate = (dateNow) => {
  console.log(dateNow);
}

date(printDate);