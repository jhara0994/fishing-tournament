const db = require('../config/connection')
const { Angler, Fish } = require('../models')

db.once('open', async () => {
    await Fish.deleteMany()

    const fish = await Fish.insertMany([
        { type: "bass", weight: 5, length: 26, image: "", catchTime: 1/5/22 },
        { type: "bass", weight: 7, length: 30, image: "", catchTime: 1/5/22 },
        { type: "bass", weight: 3, length: 22, image: "", catchTime: 1/5/22 },
        { type: "catfish", weight: 3.5, length: 23, image: "", catchTime: 1/5/22 },
        { type: "bass", weight: 15, length: 32, image: "", catchTime: 1/4/22 },
        { type: "brim", weight: 16, length: 30, image: "", catchTime: 1/4/22 },
        { type: "bass", weight: 12, length: 26, image: "", catchTime: 1/5/22 },
        { type: "catfish", weight: 11, length: 26, image: "", catchTime: 1/4/22 },
    ])
    console.log('************ FISH DATA SEEDED! ************');

    await Angler.deleteMany()
    const anglers = await Angler.insertMany([
        { 
            firstName: "Jared", 
            lastName: "Haralson", 
            DOB: 12/18/1982, 
            username: "jhara0994", 
            email: "jared@gmail.com", 
            password: "pass123", 
            status: "Amateur",
            fish: fish[0, 3, 7]._id 
        },
        { 
            firstName: "Pete", 
            lastName: "Jargon", 
            DOB: 1/7/1997, 
            username: "jargon12", 
            email: "metabit@aol.com", 
            password: "pass123", 
            status: "Pro",
            fish: fish[1, 2]._id 
        },
        { 
            firstName: "Samantha", 
            lastName: "Haralson", 
            DOB: 5/15/1985, 
            username: "queenB", 
            email: "samantha@gmail.com", 
            password: "pass123", 
            status: "Amateur",
            fish: fish[5]._id 
        },
        { 
            firstName: "Bill", 
            lastName: "Dance", 
            DOB: 10/07/1940, 
            username: "fishDance40", 
            email: "dance@gmail.com", 
            password: "pass123", 
            status: "Pro",
            fish: fish[6]._id  
        },
        { 
            firstName: "Jacob", 
            lastName: "Wheeler", 
            username: "jWheel", 
            email: "jacob@gmail.com", 
            password: "pass123", 
            status: "Pro",
            fish: fish[4]._id    
        }
    ])
    console.log('************ ANGLERS SEEDED! ************');

    process.exit()

})