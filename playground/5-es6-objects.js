const product = {
    label: 'Red'
}

const { label: name, rating = 5 } = product
console.log(name)
console.log(rating)