
const houses = require('./db.json')
let housesId = 4


module.exports = {
getHouses: (req, res) => res.status(200).send(houses),

deleteHouse: (req, res) => {
    const id = +req.params.id
    
    for (let i = 0; i < houses.length; i++) {
        if(houses[i].id === id) {
            houses.splice(i, 1)
            res.status(200).send(houses)
            return
        }
    }
    res.status(400).send('House not found')
},

createHouse: (req, res) => {
    let {address, price, imageURL} = req.body
     
    houses.push({
        id: housesId,
        address: address,
        price: price,
        imageURL: imageURL
    })

    housesId++

    res.status(200).send(houses)
},
 
updateHouse: (req, res) => {
    const id = +req.params.id
    const type = req.body.type

    let housesIndex 
    for (let i = 0; i < houses.length; i++){
        if (houses[i].id === id) {
            housesIndex = i
        }
    }
    if (houses[i].price <= 10000 && type === 'minus') {
        houses[index].price = 0
        res.status(200).send(houses)
    } else if (type === 'plus') {
        houses[index].price += 10000
        res.status(200).send(houses)
    } else if (type === 'minus') {
        houses[index].price -= 10000
        res.status(200).send(houses)
    } else {
        res.sendStatus(400)
    }
    }


    }