/**
 * Created by BALASUBRAMANIAM on 11/09/2017.
 */
//method1

function User(name,email)
{
    this.name=name;
    this.email=email;
}

//method 2

var obj =new Object;
obj.name="dsjf";
obj.email="sfkg@gmail.com";

//method 3
objjson={
    name:"sfkgk",
    email:"dkjfk@gmail.com"
}

//method 4
class User
{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
}

//method5

class TUser
{
    private name:string;
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }

}

