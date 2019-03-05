var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected as id: " + connection.threadId);
    amazonSearch();
});


function amazonSearch() {
    inquirer.prompt({
        name: "idOrUnits",
        type: "input",
        message: [ 
            "What is the ID of the product you would like to buy?",
            "How many units would you like to buy?"
            ]
    })
    .then(function(answer) {
        // if(answer.idOrUnits) {
        //     console.log(answer.idOrUnits);
        // } else {
            
        // }

        switch (answer.action) {
        case "What is the ID of the product you would like to buy?":
        productSearch();
        break;

        case "How many units would you like to buy?":
        unitSearch();
        break;
        }
    });
}

function productSearch() {
    inquirer
        .prompt ({
        name: "product",
        type: "input",
    })
   .then(function(answer) {
    var query = "Select product name?";
    connection.query(query, {product_name: answer.product }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].prooduct);
        }
        amazonSearch();
    });
   });
}

function unitSearch() {
    inquirer
        .prompt ({
        name: "units",
        type: "input",
    })
   .then(function(answer) {
    var query = "Select number of units?";
    connection.query(query, {stock_quanity: answer.units }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].units);
        }
        amazonSearch();
    });
   });
}