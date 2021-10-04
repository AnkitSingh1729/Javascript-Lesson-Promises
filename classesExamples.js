
// house

this.table = 'wondow table';



const cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);

}



this.garage = {
    table : 'garage table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)  // Here function is inside an object, so "this" refers to the object
    }

};



let johnsRoom = {
    table : 'johns table',
    cleanTable(){                               // here cleanTable is a method
        console.log(`cleaning ${this.table}`)
    }
};



// simple function invoke
console.log(johnsRoom.table);  // cannot use this.johnsRoom, because of let Keyword(stores in script not window)
johnsRoom.cleanTable();

// call()

cleanTable.call(this, "Nirma");  // passing "this" here is recommended, if we want the function cleanTable to access the window scope
cleanTable.call(this.garage, "jaya");
cleanTable.call(johnsRoom, "sushma");







// Inner function using arrow function

const cleanTableIF = function(soap){
    const innerFunction = (_soap) => {
        console.log(`cleaning ${this.table} using ${_soap}`);
    }
    innerFunction(soap);
}
cleanTableIF("rekha");





// Inner function using call

const cleanTableC = function(soap){
    function innerFunction (soap_){
        console.log(`cleaning ${this.table} using ${soap_}`);
    }
    innerFunction.call(this, soap);
}
cleanTableC("rekha devi");







// // "this" inside a constructor

//  let createRoom = function(name){

//      this.table = `${name}s table`;

//  }



// const jillsRoom = new createRoom('jill');

// createRoom.prototype.cleanTable = function(soap){

//     console.log(`cleaning ${this.table} using ${soap}`);

// }

//  jillsRoom.cleanTable("simran")





 // "this" inside class

 class createRoom {
     constructor(name){
         this.table = `${name}s table`
     }
     cleanTable = function(soap){
         console.log(`cleanig ${this.table} using ${soap}`);
     }
 }

 const jillsRoom = new createRoom('jill');
 jillsRoom.cleanTable("simran");






// in global = this goes to widnow object
 // class to count number of students so far and check their eligibility

//  var count = 345;  // we can also use var instead of "static" inside the class

 class student {

     static  count = 0;  // Dont know how the "static" keyword is helping us

     constructor(name, age, marks){
         this.name = name;                   //  object.age
         this.age = age;
         this.marks = marks;
         student.count = student.count+1;       // class.count                                                                          // This is very strange
     }
     static row = 1;
 
     eligibilty = function () {
         if (this.marks < 40){
             console.log("Not Eligible")
         }else {
             console.log("Eligible");
         }
     }

  placement = (age) => {
         if (age <= this.age && this.eligibilty){
             return true;

         }else {

             return false;

         }

     }

 }

console.log(this.count);
 const ram = new student("ram", 23, 54);
 console.log(student.count);
 const rama = new student("rama", 23, 34);
 console.log(student.count);
 rama.eligibilty();
 console.log(rama.placement(22));