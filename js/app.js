let bars = document.querySelector('#bars');
let close = document.querySelector('#close');
let menu = document.querySelector('.navbar');
let search = document.querySelector('#search');
let searchForm = document.querySelector('.form-search');
let eyeLogin = document.querySelector('#eyelogin');
let eyeRegister = document.querySelector('#eyeregister');

// menu
bars.onclick = () => {
    menu.classList.toggle('active');
    bars.classList.toggle('fa-xmark');
}

// search
search.onclick = () => {
    searchForm.classList.toggle('active');
    search.classList.toggle('fa-xmark');
}
window.onscroll = () => {
    searchForm.classList.remove('active');
    search.classList.remove('fa-xmark');
}

// show password
const showEyeLogin = () => {
    eyeLogin.classList.toggle('fa-eye');
    eyeLogin.classList.toggle('fa-eye-slash');

    const input = document.querySelector('#password');
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}
const showEyeRegister = () => {
    eyeRegister.classList.toggle('fa-eye'); 
    eyeRegister.classList.toggle('fa-eye-slash');
    const input = document.querySelector('#enter-password');
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

// swiper
function swiperBanner() {
    const swipers = new Swiper(".mySwiper", {
        direction: 'horizontal',
        loop: true,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}
swiperBanner();

// pagenation
let thisPage = 1; // ban đầu trang hiện tại bằng 1
let limit = 6; // mỗi trang sẽ có 6 sản phẩm


// // form login
function signUp(e) {
    event.preventDefault();
    const name = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#enter-password').value;
    const user = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    }

    const json = JSON.stringify(user);
    localStorage.setItem(name, json);
    alert('Đăng ký thành công');
}

function signIn(e) {
    event.preventDefault();
    const name = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const user = localStorage.getItem(name);
    const json = JSON.parse(user);

    if(user == null) {
        alert("Thông tin đăng nhập không được để trống!");
    }if(name == json.name && password == json.password && email == json.email) {
        alert('Đăng nhập thành công');
        window.location.href = 'index.html';
    }else if(name != json.name && password != json.password && email != json.email) {
        alert('Thông tin đăng nhập không đúng!');
    }
}

