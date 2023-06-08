const timeConversion = (s) => {
  const partOfDay = s.slice(8)
  s = s.slice(0, 8)
  var time = s.split(':').map(n => Number(n))
  if(partOfDay === 'AM')
      if(time[0] < 12){
          return s
      }else{
          time[0] -= 12
          time = time.map(t => t < 10 ? `0${t}` : t)
          return `${time[0]}:${time[1]}:${time[2]}`
      }
  else{
      if(time[0] >= 12){
          return s
      }else{
          time[0] += 12
          time = time.map(t => t < 10 ? `0${t}` : t)
          return `${time[0]}:${time[1]}:${time[2]}`
      }
  }
}

console.log(timeConversion('07:05:45PM'))