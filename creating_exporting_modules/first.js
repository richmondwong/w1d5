var arr = []

var listCreator = function(input){
  arr.push(input)
}

var listSorter = function(inputList){
inputList.sort(function(a,b){return a-b})
}


var viewArr = function(){
console.log(arr)
}


module.exports = {
  listCreator: listCreator,
  listSorter: listSorter,
  viewArr: viewArr
}