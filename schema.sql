CREATE DATABASE bamazonDB;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR (100),
department_name VARCHAR (100),
price DECIMAL (3.2),
stock_quantity INTEGER (10),
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Fire HD Tablet", "Electronics", 59.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Wireless Bluetooth", "Electronics", 12.74, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Stereo Earphones", "Electronics", 15.20, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("HD Home Wireless Security Camera", "Electronics", 28.99, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Otium Wireless Headphones", "Electronics", 14.95, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Dragon Touch Kids Tablet", "Electronics", 55.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("2 Way Long Range Walkie Talkies Set", "Electronics", 164.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Mini PC", "Electronics", 173.13, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Smart WiFi Router", "Electronics", 39.99, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Outdoor/Indoor Video Surveillance Home", "Electronics", 53.58, 50);