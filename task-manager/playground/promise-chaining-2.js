require("../src/db/mongoose")
const Task = require("../src/models/Task")

// Task.findByIdAndDelete('5e66125824e5fd3ed85fadf1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount('5e66264e8a5d799c60d3a322', false).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
