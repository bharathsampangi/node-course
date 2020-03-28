const https = require("https")

const url = 'https://api.darksky.net/forecast/e5925ec2b54052bd96bc3a55980c1052/40,70'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()