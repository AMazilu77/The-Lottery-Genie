const mongoose = require('mongoose');
const Winning = require('../models/winModel');
const dbtitle = 'the-lottery-genie';

mongoose.connect(`mongodb://localhost/${dbtitle}`);

Winning.collection.drop();

const luckyNumbers = [];
const Wishes = 0;
const megaNum = [{

        drawDate: "2018-07-20winningNumber ",
        megaBall: "01",
        multiplier: "02",
        winningNumber: "01 14 30 44 62"

    },
    {
        drawDate: "2018-07-17winningNumber ",
        megaBall: "12",
        multiplier: "05",
        winningNumber: "40 41 61 66 67"
    },
    {
        drawDate: "2018-07-13winningNumber ",
        megaBall: "02",
        multiplier: "02",
        winningNumber: "21 22 39 59 68"
    },
    {
        drawDate: "2018-07-10winningNumber ",
        megaBall: "14",
        multiplier: "03",
        winningNumber: "01 17 28 56 70"
    },
    {
        drawDate: "2018-07-06winningNumber ",
        megaBall: "16",
        multiplier: "03",
        winningNumber: "02 10 46 50 56"
    },
    {
        drawDate: "2018-07-03winningNumber ",
        megaBall: "23",
        multiplier: "02",
        winningNumber: "13 35 45 49 68"
    },
    {
        drawDate: "2018-06-29winningNumber ",
        megaBall: "23",
        multiplier: "04",
        winningNumber: "02 32 47 49 68"
    },
    {
        drawDate: "2018-06-26winningNumber ",
        megaBall: "19",
        multiplier: "02",
        winningNumber: "17 25 29 39 60"
    },
    {
        drawDate: "2018-06-22winningNumber ",
        megaBall: "20",
        multiplier: "02",
        winningNumber: "02 06 11 27 44"
    },
    {
        drawDate: "2018-06-19winningNumber ",
        megaBall: "14",
        multiplier: "03",
        winningNumber: "11 13 28 65 70"
    },
    {
        drawDate: "2018-06-15winningNumber ",
        megaBall: "06",
        multiplier: "02",
        winningNumber: "01 11 37 47 51"
    },
    {
        drawDate: "2018-06-12winningNumber ",
        megaBall: "03",
        multiplier: "02",
        winningNumber: "01 03 05 08 70"
    },
    {
        drawDate: "2018-06-08winningNumber ",
        megaBall: "13",
        multiplier: "02",
        winningNumber: "14 30 33 44 56"
    },
    {
        drawDate: "2018-06-05winningNumber ",
        megaBall: "04",
        multiplier: "02",
        winningNumber: "22 33 41 48 52"
    },
    {
        drawDate: "2018-06-01winningNumber ",
        megaBall: "17",
        multiplier: "03",
        winningNumber: "05 24 52 62 66"
    },
    {
        drawDate: "2018-05-29winningNumber ",
        megaBall: "02",
        multiplier: "03",
        winningNumber: "02 11 55 58 67"
    },
    {
        drawDate: "2018-05-25winningNumber ",
        megaBall: "25",
        multiplier: "04",
        winningNumber: "11 14 51 64 68"
    },
    {
        drawDate: "2018-05-22winningNumber ",
        megaBall: "09",
        multiplier: "03",
        winningNumber: "16 17 21 36 48"
    },
    {
        drawDate: "2018-05-18winningNumber ",
        megaBall: "11",
        multiplier: "02",
        winningNumber: "09 26 53 64 66"
    },
    {
        drawDate: "2018-05-15winningNumber ",
        megaBall: "21",
        multiplier: "02",
        winningNumber: "21 34 44 49 61"
    },
    {
        drawDate: "2018-05-11winningNumber ",
        megaBall: "22",
        multiplier: "03",
        winningNumber: "14 38 40 53 70"
    },
    {
        drawDate: "2018-05-08winningNumber ",
        megaBall: "13",
        multiplier: "02",
        winningNumber: "08 15 39 64 67"
    },
    {
        drawDate: "2018-05-04winningNumber ",
        megaBall: "21",
        multiplier: "04",
        winningNumber: "04 05 10 12 18"
    },
    {
        drawDate: "2018-05-01winningNumber ",
        megaBall: "01",
        multiplier: "04",
        winningNumber: "02 07 20 55 70"
    },
    {
        drawDate: "2018-04-27winningNumber ",
        megaBall: "11",
        multiplier: "02",
        winningNumber: "02 29 38 63 66"
    },
    {
        drawDate: "2018-04-24winningNumber ",
        megaBall: "10",
        multiplier: "03",
        winningNumber: "03 19 31 32 48"
    },
    {
        drawDate: "2018-04-20winningNumber ",
        megaBall: "04",
        multiplier: "02",
        winningNumber: "01 15 18 32 45"
    },
    {
        drawDate: "2018-04-17winningNumber ",
        megaBall: "22",
        multiplier: "04",
        winningNumber: "12 34 44 47 65"
    },
    {
        drawDate: "2018-04-13winningNumber ",
        megaBall: "10",
        multiplier: "04",
        winningNumber: "08 09 32 42 59"
    },
    {
        drawDate: "2018-04-10winningNumber ",
        megaBall: "20",
        multiplier: "02",
        winningNumber: "05 13 31 43 53"
    },
    {
        drawDate: "2018-04-06winningNumber ",
        megaBall: "20",
        multiplier: "04",
        winningNumber: "16 33 51 54 67"
    },
    {
        drawDate: "2018-04-03winningNumber ",
        megaBall: "14",
        multiplier: "02",
        winningNumber: "04 29 39 42 62"
    },
    {
        drawDate: "2018-03-30winningNumber ",
        megaBall: "01",
        multiplier: "03",
        winningNumber: "11 28 31 46 59"
    },
    {
        drawDate: "2018-03-27winningNumber ",
        megaBall: "13",
        multiplier: "03",
        winningNumber: "07 25 43 56 59"
    },
    {
        drawDate: "2018-03-23winningNumber ",
        megaBall: "17",
        multiplier: "03",
        winningNumber: "04 08 23 53 59"
    },
    {
        drawDate: "2018-03-20winningNumber ",
        megaBall: "09",
        multiplier: "03",
        winningNumber: "14 38 51 64 70"
    },
    {
        drawDate: "2018-03-16winningNumber ",
        megaBall: "11",
        multiplier: "03",
        winningNumber: "01 13 26 33 52"
    },
    {
        drawDate: "2018-03-13winningNumber ",
        megaBall: "17",
        multiplier: "05",
        winningNumber: "06 30 58 60 61"
    },
    {
        drawDate: "2018-03-09winningNumber ",
        megaBall: "22",
        multiplier: "04",
        winningNumber: "07 17 18 46 66"
    },
    {
        drawDate: "2018-03-06winningNumber ",
        megaBall: "22",
        multiplier: "05",
        winningNumber: "01 04 26 35 39"
    },
    {
        drawDate: "2018-03-02winningNumber ",
        megaBall: "08",
        multiplier: "04",
        winningNumber: "24 28 42 60 64"
    },
    {
        drawDate: "2018-02-27winningNumber ",
        megaBall: "23",
        multiplier: "03",
        winningNumber: "10 17 21 38 43"
    },
    {
        drawDate: "2018-02-23winningNumber ",
        megaBall: "09",
        multiplier: "04",
        winningNumber: "07 11 13 19 58"
    },
    {
        drawDate: "2018-02-20winningNumber ",
        megaBall: "14",
        multiplier: "03",
        winningNumber: "17 19 23 24 43"
    },
    {
        drawDate: "2018-02-16winningNumber ",
        megaBall: "16",
        multiplier: "03",
        winningNumber: "14 38 48 53 58"
    },
    {
        drawDate: "2018-02-13winningNumber ",
        megaBall: "01",
        multiplier: "04",
        winningNumber: "05 12 15 46 49"
    },
    {
        drawDate: "2018-02-09winningNumber ",
        megaBall: "14",
        multiplier: "03",
        winningNumber: "28 34 41 46 47"
    },
    {
        drawDate: "2018-02-06winningNumber ",
        megaBall: "25",
        multiplier: "03",
        winningNumber: "14 17 25 48 58"
    },
    {
        drawDate: "2018-02-02winningNumber ",
        megaBall: "04",
        multiplier: "03",
        winningNumber: "01 04 14 17 40"
    },
    {
        drawDate: "2018-01-30winningNumber ",
        megaBall: "24",
        multiplier: "03",
        winningNumber: "29 41 42 49 57"
    },
    {
        drawDate: "2018-01-26winningNumber ",
        megaBall: "01",
        multiplier: "04",
        winningNumber: "10 16 27 38 43"
    },
    {
        drawDate: "2018-01-23winningNumber ",
        megaBall: "07",
        multiplier: "04",
        winningNumber: "02 06 30 31 55"
    },
    {
        drawDate: "2018-01-19winningNumber ",
        megaBall: "23",
        multiplier: "03",
        winningNumber: "03 17 23 49 66"
    },
    {
        drawDate: "2018-01-16winningNumber ",
        megaBall: "18",
        multiplier: "03",
        winningNumber: "03 11 23 29 59"
    },
    {
        drawDate: "2018-01-12winningNumber ",
        megaBall: "24",
        multiplier: "04",
        winningNumber: "17 18 33 46 60"
    },
    {
        drawDate: "2018-01-09winningNumber ",
        megaBall: "23",
        multiplier: "03",
        winningNumber: "16 29 31 65 67"
    },
    {
        drawDate: "2018-01-05winningNumber ",
        megaBall: "10",
        multiplier: "03",
        winningNumber: "28 30 39 59 70"
    },
    {
        drawDate: "2018-01-02winningNumber ",
        megaBall: "22",
        multiplier: "04",
        winningNumber: "01 42 47 64 70"
    }
];

const MegaMillionMaker = megaNum.map(number => {
    const NumberX = new Winning(number)
    return NumberX.save()
        .then(NumberX => {
            return NumberX.winningNumber;
        })
        .catch(error => {
            throw new Error(`Impossible to add the winner. ${error}`)
        })
})


let findNumbers = Promise.all(MegaMillionMaker)
    .then(numbers => {
        return NumberX.map(NumberX => {
            return numberX.findOne({
                    drawDate: Winning.drawDate,
                    winningNumber: winning.winningNumber
                })

                .then(number => {
                    if (!number) {
                        throw new Error(` ${winning.WinningNumber} has not won`);
                    }
                    return Object.assign({}, number, {
                        Winner: winningNumber._id
                    });
                })
        });
    })







// const luckyCharms = luckyNumbers.map(number => {
//     const luckX = new LuckyNumber(Luck)
//     return luckX.save()
//         .then(luckX => {
//             return luckX.user
//         })
// })

// const WishMaster = Wishes.map(wishNumber => {
//     const WishX = new Wish
// })