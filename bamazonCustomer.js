var mysql = require("mysql");
var inquirer = require("inquirer");


// mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) console.log(err);
    console.log("Connected as id: " + connection.threadId);
    // amazonSearch();
    viewProducts();
})

// The app starts and the store data prints out
function viewProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if(err) throw err;

        console.log("Welcome To The Amazing bAmazon Store!! \n");
        
        console.log("============================================================================================================================");

        for(var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Stock Quanity: " + res[i].stock_quantity);
            console.log("============================================================================================================================");
        }
        amazonSearch();
});


// The user messages
function amazonSearch() {
    inquirer.prompt({
        name: "product_id",
        type: "input",
        message: [
            "What is the ID of the product you would like to buy?",
        ]
    })
        .then(function (answer) {
            if (answer.product_id) { //check if user entered product_id
                productSearch(answer.product_id); //call the function that searches for the product in the DB
            }
        });
}

// Updated table when order is filled
// function newQuantity() {
//     inquirer.prompt({
//         name: "new",
//         type: "input",
//         message: [
//             "New table data!"
//         ]
//     })
//     .then(function (answer) {
//         var newQuantity = parseInt(res[0].stock_quantity - answer.quantity);
//         console.log("new");
//         connection.query(
//             "UPDATE products SET ? WHERE",
//             [{
//                 stock_quantity: newQuantity,
//                 product_id: (res[0].price * answer.quantity)
//             },
//             {
//                 item_id: answer.product_id
//             }],
//         )
//     });
// }


// Place the order and check to see if store has enough
function productSearch(product_id) {
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: ["How many units would you like to buy?"]
        })
        .then(function (answer) {
            var query = "SELECT * FROM bamazonDB.products WHERE item_id = ? AND stock_quantity > ?";
            connection.query(query, [product_id, answer.quantity], function (err, res) {
                console.log(err, res);
                if (res.length > 0) { //if there are results - output products
                    for (var i = 0; i < res.length; i++) {
                        console.log(
                            "Item: " + res[i].item_id +
                            " || Product Name: " + res[i].product_name +
                            " || Departmnet Name: " + res[i].department_name +
                            " || Price: " + res[i].price +
                            " || Stock Quanity: " + res[i].stock_quantity
                        );
                    }
                }
                else { // if no results - error
                    console.log('Not enough inventory!');
                }
                newSearch();
            });
        });
}


// Ask the customer if they want to make another purchase or not
    var y = "yes";
    var n = "no";

    function newSearch() {
        inquirer.prompt({
            name: "new",
            type: "input",
            message: [
                "Would you like to purchase something else?",
                "y for yes?", "n for no?"
            ]
        })
        .then(function (answer) {
            if (answer.new === "y") {
                console.log("Ok, no problem!");
                amazonSearch();
                // newQuantity();
            }

            else if (answer.new === "n") {
                console.log("Your order has been filled!");
                console.log("Price: " + answer.price);
            }
        });
    };
    }