const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
]
function createArrayOfArrays(countries) {
  let output = []
  for (let i = 0; i < countries.length; i++) {
    let string = countries[i].toLowerCase()
    const caps = string.charAt(0).toUpperCase() + string.slice(1)
    let beginning = countries[i].slice(0, 3)
    let length = countries[i].length
    let array = [caps, beginning, length]
    output.push(array)
  }
  return output
}
console.log(createArrayOfArrays(countries))

//   createArrayOfArrays(countries)
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
