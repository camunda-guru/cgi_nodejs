/**
 * Created by BALASUBRAMANIAM on 24/08/2017.
 */
Data=[];
Data.push(4937);
Data.push("Prakash");
Data.push(true);
Data.push(4937.437956);
Data.push(new Date());
console.log(Data)
for(i=0;i<10;i++)
{
    Data.push((Math.random()))
}
console.log(Data)

var result = Array.from("RPS Consulting");
console.log(result);


function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);

function testNumber(value)
{
    return typeof(value)=='number'
}

var filteredData=Data.filter(testNumber);
console.log(filteredData);

//enhanced for loop
console.log("Enhanced loop");
for (pos in Data)
{
    if (pos<5)
     console.log(Data[pos]);
}



//var args
console.log(typeof(new Array()))
//spread operator
function restParam(...data)
{
          console.log(data);
}

restParam('TN',"KL",'KN');
restParam('TN',"KL");
restParam('TN');
restParam('TN');
restParam(new Array('TN',"KL"),new Array('TL','CH','KA'));
//restParam(new Array('TN'));
//restParam();
