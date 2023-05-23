//ES5 way of handling class and object
 function employee(name, age){
    // data member
    this.name =name
    this.age= age

    //member functions
    this.showData= function(){
        console.log(this.name, this.age)
    }
}
var emp1= new employee("yashika", 31)

emp1.showData()