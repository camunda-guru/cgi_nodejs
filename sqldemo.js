var sql = require('mssql');

var config = {
    user: 'sa',
    password: 'vignesh',
    server: 'VIGNESHBALA',
// You can use 'localhost instance' to connect to named instance
    database: 'TESTDB',

    options: {
        encrypt: true
// Use this if you're on Windows Azure
    }


}

var connection = new sql.ConnectionPool(config, function(err) {
    // ... error checks

// Query
    console.log(err);
    var request = new sql.Request(connection);
// or: var request = connection.request();
    request.query('select * from dbo.Customer', function(err, recordset) {
        // ... error checks

        console.log(recordset);

        
    });
});
