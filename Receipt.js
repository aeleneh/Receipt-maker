// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {   //step1
   for (var i = 0; i < dishData.length; i++) {   // step 2
         let finalPrice = 0                                           // step 3
        if (taxBoolean == true) {                  // step 4
            let name = dishData[i]['name'];
            let price = dishData[i]['price'];  // Step 4
            finalPrice = price * tax
            console.log(`Dish: ${name}` + " " + `Price: $${finalPrice}`)      
        } else if (taxBoolean == false) {            //step 5
            let name = dishData[i]['name'];
            let price = dishData[i]['price'];
            //console.log('Prices without tax:');
            finalPrice = price
            console.log(`Dish: ${name}` + " " + `Price: $${finalPrice}`)
        } else {                                        //step 6
            console.log("You need to pass a boolean to the getPrices call!")
            return;
        }
    }
}
console.log(getPrices(true));
console.log(getPrices(false));

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {   //Step 8
        getPrices(taxBoolean);                   //Step 9
        try {                                    //Step 10
            if (typeof(guests) == 'number' && guests > 0 && guests < 30) {  //Step 11
                let discount = 0;
                    if (guests < 5) {
                        discount = 5;
                        console.log('Discount is: $' + discount);
                        
                    } else if (guests >= 5) {
                        discount = 10;
                        console.log('Discount is: $' + discount);
                    }
            } else {                                                          //step 12
                console.log('the second argument must be a number between 0 and 30');
            }
        } catch (err) { // Code throws error
            console.log('catch', err);
        }
    }
//Call getDiscount();

console.log(getDiscount(true, 2));
console.log(getDiscount(false, 10));
