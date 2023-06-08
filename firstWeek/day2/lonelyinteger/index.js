const lonelyinteger = (a) => {
  var value = 0
  a.some((number, index) => {
    const newArr = a.filter((na, i) => i !== index)
    value = number
    return (newArr.find(na => na === number) === undefined)
  })
  return value
}

console.log(lonelyinteger([0,3,2,1,0,1,2]))