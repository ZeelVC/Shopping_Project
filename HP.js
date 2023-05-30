const Signup = document.getElementById('Signup');
const close1 = document.getElementById('close1');
const cont = document.getElementById('container');
if(Signup){
    Signup.addEventListener('click', () => {
        cont.classList.add('active1');
    })
}
if(close1){
    close1.addEventListener('click', () => {
        cont.classList.remove('active1');
    })
}

const Login = document.getElementById('Login');
const close2 = document.getElementById('close2');
const cont1 = document.getElementById('container1');
if(Login){
    Login.addEventListener('click', () => {
        cont1.classList.add('active1');
    })
}
if(close2){
    close2.addEventListener('click', () => {
        cont1.classList.remove('active1');
    })
}

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let availablekeywords = [
    'Mobile',
    'Tablet',
    'Airdopes',
    'Earphones',
    'Laptop',
    'Smart Watches',
    'Speaker',
    'Vegetables',
    'Utensils',
    'Surat',
    'Katargam',
    'Ahemdabad',
    'Kolkata',
    'Mumbai',
    'Delhi',
    'Vadodra',
    'Gujarat',
    'Mahareshtra',
    'Junk foods',
    'Bread',
    'Sauces',
    'Maggi Sauce',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-boxsea");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}


function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}




