var customerName = 'bob'
var bestCustomer;
const leastFavoriteCustomer = 'marvin'


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName

}
function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer

}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'rob'
    return leastFavoriteCustomer

}
