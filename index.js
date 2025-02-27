
// cart buttons
let cartQuantity = 0;
let button = document.getElementById('button');
let button1 = document.getElementById('button1');
// let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

button.addEventListener('click', function () {
    cartQuantity = cartQuantity;
    document.getElementById('demo').innerHTML = cartQuantity;
    alert(`You Cart: ${cartQuantity} `)
})

button1.addEventListener('click', function () {
    cartQuantity = cartQuantity + 1 ;
    document.getElementById('demo').innerHTML = cartQuantity;
})
// button2.addEventListener('click', function () {
//     cartQuantity = cartQuantity + 1;
//     document.getElementById('demo').innerHTML = cartQuantity;
// })

button3.addEventListener('click', function () {
    cartQuantity = 0;
    document.getElementById('demo').innerHTML = cartQuantity;
})
button.style.height ='40px'
button1.style.height ='40px'
button3.style.height ='40px'

// login and signup buttons

let login = document.getElementById('login');
let user = document.getElementById('user')
user.addEventListener('click', () => {
    login.classList.toggle('link')
})