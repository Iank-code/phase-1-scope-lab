// Write your solution in this file!

/* declare customerName to be bob in global scope */
var customerName = 'bob'
var bestCustomer
const leastFavoriteCustomer = 'michelle'

function upperCaseCustomerName(){
    return customerName.toUpperCase()
    // return console.log(`${upperName}`)
}
upperCaseCustomerName()


//setBestCustomer
function setBestCustomer(){
    bestCustomer = 'not bob'
}

//overwrites the best customer
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

//unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Michael'
}