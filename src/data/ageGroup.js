const AGES = [];
for (let i = 0; i < 7; i++) {
    const age = Math.floor(Math.random() * 100);
    console.log(i)
    AGES.push(age)
}


export const AGE_GROUP = [
    {
        age: "18-24",
        percentage: AGES[0]
    },  
    {
        age: "25-34",
        percentage: AGES[1]
    }, 
    {
        age: "35-44",
        percentage: AGES[2]
    }, 
    {
        age: "45-54",
        percentage: AGES[3]
    }, 
    {
        age: "55-64",
        percentage: AGES[4]
    }, 
    {
        age: "65-69",
        percentage: AGES[5]
    }, 
    {
        age: "70+",
        percentage: AGES[6]
    }
]


export const COLORS = [
    '#3066DE',
    '#20A39E',
    '#61D095',
    '#FFDA49',
    'FF5B5B',
    '#004687',
    '#ffab41',
]