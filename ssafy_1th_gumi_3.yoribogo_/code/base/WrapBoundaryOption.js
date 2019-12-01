module.exports.function = function wrapBoundaryOption (lowerBound, upperBound) {
  let result = {
    lowerBoundFlag : false,
    upperBoundFlag : false,
    upperBound : 2000,
    lowerBound : 0,
  }
  var console = require('console');
  
  console.log("LOWBOUND> ", lowerBound);
  console.log("UPPERBOUND> ", upperBound);

  if(lowerBound != undefined && lowerBound != 0){
    result.lowerBoundFlag = true;
    result.lowerBound = lowerBound;
  }
  if(upperBound != undefined && upperBound != 0){
    result.upperBoundFlag = true;
    result.upperBound = upperBound;
  }
  return result;
}
