// const express = require('express')
// const app = express()
// const cors = require('cors')
// const PORT = 8002

//app.use(cors())

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8002

let ballers = {
    'lebron james': {
        'birthLocation': 'Akron, Ohio',
        'college': 'N/A',
        'draft position': '1st',
        'PPG': 27.1,         
        'RPG': 6.0,
        'APG': 5.8,
        'SPG': 1.6,
        'BPG': .8,
         },
    'michael jordan':{
        'birthLocation': 'Brooklyn, NY',
        'college': 'North Carolina',
        'draft position': '3rd',
        'PPG': 30.1,         
        'RPG': 6.2,
        'APG': 5.3,
        'SPG': 2.3,
        'BPG': .8,
    },
    'unknown':{
        'birthLocation': 'unknown',
        'college': 'unknown',
        'draft position': 'unknown',
        'PPG': 0,         
        'RPG': 0,
        'APG': 0,
        'SPG': 0,
        'BPG': 0,
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) => {
    const ballerName = request.params.name.toLowerCase()
    if(ballers[ballerName]){
        response.json(ballers[ballerName])
    }else{
        response.json('unknown')
    }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`We runnin! on ${PORT}`)
})



// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// app.get('/api/:name', (request, response) => {
//     const rapperName = request.params.name.toLowerCase()
//     if(rappers[rapperName]){
//         response.json(rappers[rapperName])
//     }else{
//         response.json(rappers['unknown'])
//     }
// })

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })