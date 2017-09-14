/**
 * Created by BALASUBRAMANIAM on 27/08/2017.
 */
var oracledb = require('oracledb');
var nextName = ['john','Dev'];
var nextId = [57,5477];
oracledb.getConnection(
    {
        user          : "System",
        password      : "vignesh",
        connectString : "localhost/XE"
    },
    function(err, connection)
    {
        if (err) { console.error(err); return; }
        connection.execute(
        "SELECT * from irs.trader",
        function(err, result)
        {
            if (err) { console.error(err); return; }
            console.log(result.rows);
        });

        connection.execute(
            "UPDATE irs.trader SET TraderName = :name WHERE TraderId = :id",
            {name: nextName[0], id: nextId[0]},
            {autoCommit : true},
            function(err, result)
            {
                if (err) {console.error(err.message);}
                else {
                    console.log("Rows updated " + result.rowsAffected);
                    console.log('sonuc', {result: nextName[0],traderId: nextId[0]});
                    doRelease(connection);  //!!
                }
            });
        connection.execute(
            "UPDATE irs.trader SET TraderName = :name WHERE TraderId = :id",
            {name: nextName[1], id: nextId[1]},
            {autoCommit : true},
            function(err, result)
            {
                if (err) {console.error(err.message);}
                else {
                    console.log("Rows updated " + result.rowsAffected);
                    console.log('sonuc', {result: nextName[1],traderId: nextId[1]});
                    //doRelease(connection);  //!!
                }
            });

    });

// Release the connection
function doRelease(connection)
{
    connection.release(
        function(err) {
            if (err) { console.error(err.message); }
        });
}