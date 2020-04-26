for(let i = 0; i < companies.length; i++){
    console.log(companies[i])
}

//forEach
companies.forEach(function(company) {
    console.log(company)
})

//FOR LOOP

let canDrink = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i])
    }
}
console.log(canDrink)

//FILTER

const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true
    }
});
console.log(canDrink)

const canDrink = ages.filter(age => age >= 21)
console.log(canDrink)

const filterArr = companies.filter(function(cb){
    if(cb.category === 'Retail'){
        // console.log(cb)
        return true
    }
});
console.log(filterArr)

const filterArr = companies.filter(cb => cb.category === 'Retail')
console.log(filterArr)

const eightyCompanies = companies.filter(cb => (cb.start >= 1980 && cb.start < 1990));
console.log(eightyCompanies)

//MAP

const companyName = companies.map(function(cb) {
    return cb.name
});
console.log(companyName)

const testMap = companies.map(function(cb){
    return `${cb.name} [${cb.start} - ${cb.end}]`
});
console.log(testMap)

const testMap = companies.map(cb => `${cb.name} [${cb.start} - ${cb.end}`)
console.log(testMap)

const ageSquare = ages.map(cb => Math.sqrt(cb));
console.log(ageSquare)

const agesTwo = ages.map(cb => cb * 2)
console.log(agesTwo)

//SORT

const sortCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start){
        return 1
    } else{
        return -1
    }
});
console.log(sortCompanies)

const sortCompanies = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1);
console.log(sortCompanies)

//Ascending Order
const sortAges = ages.sort((a, b) => a - b)
console.log(sortAges)

//Decending Order
const sortAges = ages.sort((a, b) => b - a)
console.log(sortAges)

//for loop to calculate sum of all age

var ageSum = 0;

for(let i = 0; i < ages.length; i++){
    ageSum += ages[i]
}
console.log(`Sum of age is  ${ageSum}`)