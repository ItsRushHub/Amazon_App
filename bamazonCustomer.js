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
    console.log("Connected as id: " + connection.threadId);

});


var start = function() {
    inquirer.prompt({
        name: "idOrUnits",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
                "How many units would like to buy?",
    }).then(function(answer) {
        if(answer.idOrUnits) {
            console.log(answer.idOrUnits);
        } else {
            
        }

    });

}