const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
]

function filterScore(number) {
  return users.filter((user) => user.scores > number)
}
// console.log(filterScore(85))

function addUser(newUser) {
  let array = users.filter((user) => user.name === newUser.name)
  if (!array.length) {
    users.push(newUser)
  }
  return users
}
// console.log(
//   addUser({
//     name: "Thomastk",
//     scores: 90,
//     skills: ["HTM", "CSS", "JS"],
//     age: 20,
//   })
// )
function addUserSkill(name, skill) {
  return users.map((user) => {
    if (user.name === name) {
      user.skills.push(skill)
    }
    return user
  })
}
// console.log(addUserSkill("Martha", "123"))
function editUser(name, key, value) {
  return users.map((user) => {
    if (user.name === name) {
      user[[key]] = value
    }
    return user
  })
}
console.log(editUser("Martha", "name", "mydear"))
