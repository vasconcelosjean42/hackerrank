const diagonalDifference = (arr) => {
  var aux = 0
  const firstDiagonal = arr.reduce((prev, cur) => prev + cur[aux++]
  , 0)
  aux = arr.length
  const secondDiagonal = arr.reduce((prev, cur) => prev + cur[--aux]
  , 0)
  return Math.abs(firstDiagonal - secondDiagonal)
}

arr = [[11,2,4],[4,5,6],[10,8,-12]]
console.log(diagonalDifference(arr))