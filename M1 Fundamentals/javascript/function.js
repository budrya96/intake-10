// function display(fname,lname){
//     console.log(fname,lname)
// }
// display("Budry","Ahmed");


// function display(num1,num2){
//     console.log(num1 + " + " + num2 + " = " + (num1+num2))
// }
// display(33,26);

// function display(num){
//     console.log(num + " cubed is: " + (num*num*num))
// }
// display(5);

// function display(country){
//     console.log(country.length)
// }

// display("canada");


// function display(radius){
//     const pi = 3.142;
//     const diameter = radius * 2;
//     const area = pi * radius ** 2;
//     console.log(`Diameter: ${diameter}`);
//     console.log(`Area: ${area}`);
// }
// display(10);


function display(){
    let rand = Math.floor(Math.random()*10) //Randomly generates a number between 1 and 10
    if(rand%2 == 0){
        console.log(rand + ' is even')
    }
    else{
        console.log(rand + ' is odd')
    }
}
display();



    

