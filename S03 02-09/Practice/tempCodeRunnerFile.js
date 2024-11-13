/*

What is Null?
--------------
It denotes that the variable is declared and initialized and currently doesn’t hold a value. Still, a value can be expected in the future.

*/

let connection = null;

function connectToDatabase() {
    if (connection === null) {
        connection = "createDatabaseConnection()";
    }
    return connection;
}

console.log(connectToDatabase());