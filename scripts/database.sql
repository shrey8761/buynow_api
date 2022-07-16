-- Active: 1657821992135@@127.0.0.1@5432@api@public
CREATE TABLE Products_table(  
    product_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product_name VARCHAR(30), /* data type text not prefered because to optimize memory, */
    price INTEGER,
    availabilty SMALLINT,
    rating SMALLINT
);

INSERT INTO products_table(product_name,price,availabilty,rating) VALUES('Iphone 12',150000,10,10);

INSERT INTO products_table(product_name,price,availabilty,rating) VALUES('Samsung',100000,9,9);

INSERT INTO products_table(product_name,price,availabilty,rating) VALUES('Redmo',10000,4,4);


