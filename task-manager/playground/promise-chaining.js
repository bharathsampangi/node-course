require('../src/db/mongoose')
const User = require("../src/models/User")

// User.findByIdAndUpdate('5e660f5f8c36b21e6c631948', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e660f5f8c36b21e6c631948', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})