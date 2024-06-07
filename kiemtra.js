/* bai 1 */
let name = "Thuỳ Dương"
let age = "17"
let address="Đường Tên Lửa,phường Bình Trị Đông B,quận Bình Tân"
const student ={
    name : name,
    age : age,
    address : address,
}
localStorage.setItem('students',JSON.stringify(student))
function hocsinh () {
    console.log(student)

}
hocsinh();
/* bai2 */
var smartPhones =[
    {name:'iphone',price : 649},
    {name: 'Galaxy S6',price:576},
    {name: 'Galaxy Note 5',price:489}

];
function getPrices(array){
    return array.map(phone =>phone.price)
}
var price = getPrices(smartPhones)
console.log(price)
/* bai3*/
const foo0=(x,y,z)=>{
    console.log(10,3,4)
}
foo0();

const foo = ()=>{
    console.log('Hello')
}
foo();


const foo1 = (a,b)=>{return a+b*100

}
foo1(3,2);
console.log(foo1)