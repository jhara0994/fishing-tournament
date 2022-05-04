const db = require('../config/connection')
const { Angler, Fish, CatAngler, CatFish } = require('../models')

db.once('open', async () => {
    await CatFish.deleteMany()

    const catFish = await CatFish.insertMany([
        { fishType: "small-mouth bass" },
        { fishType: "large-mouth bass" },
        { fishType: "catfish" },
        { fishType: "brim" },
        { fishType: "gar" }
    ])
    console.log('************ FISH CATEGORIES SEEDED! ************');

    await Fish.deleteMany()

    const fish = await Fish.insertMany([
        { type: [catFish[1]._id], weight: 25, length: 26, image: "", catchTime: 1/5/22 },
        { type: [catFish[0]._id], weight: 17, length: 30, image: "", catchTime: 1/5/22 },
        { type: [catFish[1]._id], weight: 18, length: 22, image: "", catchTime: 1/5/22 },
        { type: [catFish[2]._id], weight: 13, length: 23, image: "", catchTime: 1/5/22 },
        { type: [catFish[0]._id], weight: 15, length: 32, image: "", catchTime: 1/4/22 },
        { type: [catFish[3]._id], weight: 2, length: 30, image: "", catchTime: 1/4/22 },
        { type: [catFish[4]._id], weight: 12, length: 26, image: "", catchTime: 1/5/22 },
        { type: [catFish[2]._id], weight: 11, length: 26, image: "", catchTime: 1/4/22 },
    ])
    console.log('************ FISH DATA SEEDED! ************');

    await CatAngler.deleteMany()

    const catAngler = await CatAngler.insertMany([
        { anglerSkill: "Pro" },
        { anglerSkill: "Amateur" },
        { anglerSkill: "Celebrity" }
    ])
    console.log('************ ANGLER CATEGORIES SEEDED! ************');

    await Angler.deleteMany()

    const anglers = await Angler.insertMany([
        { 
            firstName: "Jared", 
            lastName: "Haralson", 
            DOB: 12/18/1982, 
            username: "jhara0994", 
            email: "jared@gmail.com", 
            password: "pass123", 
            status: catAngler[1]._id,
            fish: [fish[0]._id, fish[3]._id, fish[7]._id]
        },
        { 
            firstName: "Pete", 
            lastName: "Jargon", 
            DOB: 1/7/1997, 
            username: "jargon12", 
            email: "metabit@aol.com", 
            password: "pass123", 
            status: catAngler[0]._id,
            fish: [fish[1]._id, fish[2]._id]
        },
        { 
            firstName: "Samantha", 
            lastName: "Haralson", 
            DOB: 5/15/1985, 
            username: "queenB", 
            email: "samantha@gmail.com", 
            password: "pass123", 
            status: catAngler[1]._id,
            fish: fish[5]._id
        },
        { 
            firstName: "Bill", 
            lastName: "Dance", 
            DOB: 10/07/1940, 
            username: "fishDance40", 
            email: "dance@gmail.com", 
            password: "pass123", 
            status: catAngler[2]._id,
            fish: fish[6]._id 
        },
        { 
            firstName: "Jacob", 
            lastName: "Wheeler", 
            username: "jWheel", 
            email: "jacob@gmail.com", 
            password: "pass123", 
            status: catAngler[0]._id,
            fish: fish[4]._id   
        }
    ])
    console.log('************ ANGLERS SEEDED! ************');

    process.exit()

})