/*

What is Null?
--------------
It denotes that, the variable is declared and initialized and currently doesn’t hold a value. and value can be expected in the future.

*/

let connection = null; // here we declared a variable connection will value null.

function connectToDatabase() {
    if (connection === null) { 
        connection = "createDatabaseConnection()"; // here we assigned a value to null as a string. 
    }
    return connection;
}

console.log(connectToDatabase());