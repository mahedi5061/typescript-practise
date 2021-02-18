let myTaka:number=50;
myTaka=30;
const isFamous:string='ami';

function add(num1:number|string,num2:number|string):string{
    return num1+ ''+num2;
}
add(5,6);
add('Adam','Smith');

function fullName(firstName:string, lastName:string):string{
    return firstName+lastName;
}
const user=fullName('Glenn','Maxwell');
 
const multiply=(x:number,y:number)=>x*y;
console.log(multiply(5,5));

let multiply2:(x:number,y:number)=>number
multiply2=(x,y)=>x*y;
console.log(multiply2(6,6));

