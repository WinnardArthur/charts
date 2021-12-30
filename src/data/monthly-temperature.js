const Temperatures = [];
const Total = 100;
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


for (let i = 0; i < Total; i++ ) {
    Temperatures.push(Math.floor(Math.random() * 100))
}


export const TEMPERATURE = {
    "2019": [
        {
            month: months[0],
            temperature: Temperatures[0]
        },
        {
            month: months[0],
            temperature: Temperatures[0]
        },
        {
            month: months[1],
            temperature: Temperatures[1]
        },
        {
            month: months[2],
            temperature: Temperatures[2]
        },
        {
            month: months[3],
            temperature: Temperatures[3]
        },
        {
            month: months[4],
            temperature: Temperatures[4]
        },
        {
            month: months[5],
            temperature: Temperatures[5]
        },
        {
            month: months[6],
            temperature: Temperatures[6]
        },
        {
            month: months[7],
            temperature: Temperatures[7]
        },
        {
            month: months[8],
            temperature: Temperatures[8]
        },
        {
            month: months[9],
            temperature: Temperatures[9]
        },
        {
            month: months[10],
            temperature: Temperatures[10]
        },
        {
            month: months[11],
            temperature: Temperatures[11]
        },

    ]
}