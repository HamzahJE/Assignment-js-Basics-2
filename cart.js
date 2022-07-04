///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.map(element => element[`price`]).reduce((acc,curr) =>(acc+curr))

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice= (cartTotal,couponValue,tax)=>{
     sumTotal=((cartTotal*(1+tax))-couponValue)
    return sumTotal
}

const finalPrice=calcFinalPrice(summedPrice,3,.06)
console.log(`The Final total is $${finalPrice}`)
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
 The customer will have the following properties:
 1)customerAge: how long has the person been you customer.Might be used to give special discounts. integer since its a number 
 2)age: how old the customer is. To find relevant deals and ads. integer since its a number 
 3)gender. To find relevant deals and ads. string for input such as male/female
 4)PreferredPaymentMethod: weather the customer prefers card or cash or mobile. To better accomidate customer needs. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer={
    customerAge:5,
    age:48,
    gender:`male`,
    perferredPaymentMethod: `cash`
}
