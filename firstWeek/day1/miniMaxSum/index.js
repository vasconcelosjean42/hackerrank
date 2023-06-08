const miniMaxSum = (arr) => {
  var allSumValues = []
  arr.forEach((num, i) => {
      const fourNumbers = arr.filter((a, ai) => ai != i)//3,5,7,9
      const threeForSum = fourNumbers.map((fn, i) => {
          const lengthFN = fourNumbers.length - 1
          var i1 = i + 1
          var i2 = i + 2
          if (i1 > lengthFN){
              i1 = 0
              if(i2 > lengthFN)
                  i2 = 1
          }
          if(i2 > lengthFN)
              i2 = 0
          return([fn, fourNumbers[i1], fourNumbers[i2]])
      })    
      //[ [ 3, 5, 7 ], [ 5, 7, 9 ], [ 7, 9, 3 ], [ 9, 3, 5 ] ]
      threeForSum.map(tfs => {
         const values = tfs.reduce((prev, cur) => prev + cur, num)
         allSumValues.push(values) 
      })  
  })
  console.log(`${Math.min(...allSumValues)} ${Math.max(...allSumValues)}`)
}

miniMaxSum([1,2,3,4,5])