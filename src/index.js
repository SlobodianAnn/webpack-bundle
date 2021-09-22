import "./styles/index.scss";

const test = "some test info"

const myobject = {
  valueOne: '7541',
  valueTwo: 7451,
}

const anotherObj = {
  ...myobject,
  valueThird: 5214,
}
console.log(test)
console.log(myobject)
console.log(anotherObj)