
const product = [
    {id: 1, image: "./img/data_product/h1.jpg", name: 'Nike Air Max', price: "500.000", qty: 1},
    {id: 2, image: "./img/data_product/h2.jpg", name: 'Adidas Superstar', price: "500.000", qty: 1},
    {id: 3, image: "./img/data_product/h3.jpg", name: 'Adidas Yeezy', price: "500.000", qty: 1},
    {id: 4, image: "./img/data_product/h4.jpg", name: 'Converse Chuck Taylor All Star', price: "500.000", qty: 1},
    {id: 5, image: "./img/data_product/h5.jpg", name: 'Vans Old Skool', price: "500.000", qty: 1},
    {id: 6, image: "./img/data_product/h6.jpg", name: 'Biti’s Hunter', price: "500.000", qty: 1},
    {id: 7, image: "./img/data_product/h7.jpg", name: 'Balenciaga Triple S', price: "500.000", qty: 1},
    {id: 8, image: "./img/data_product/h8.jpg", name: 'Alexander McQueen', price: "500.000", qty: 1}
];
let cart_data = [];

const openBtn = document.querySelector('#shopping');
const cart = document.querySelector('.sidecart');
const close_btn = document.querySelector('#close_btn');
const backdrop = document.querySelector('.backdrop');
const itemsEl = document.querySelector('.items');
const cartsItem = document.querySelector('.cart_items');
const items_num = document.querySelector('#items_num');
const total = document.querySelector('#subtotal_price');
const productItems = document.querySelector('.product-items');

openBtn.addEventListener('click', openCart);
close_btn.addEventListener('click', closeCart);
backdrop.addEventListener('click', closeCart);

function openCart() {
    cart.classList.add('open');
    backdrop.classList.add('show');
    setTimeout(() => {
        backdrop.style.display = "block";
    }, 0)
    cart.style.transition = "0.5s all";
}
function closeCart() {
    cart.classList.remove('open');
    backdrop.classList.remove('show');
    
    setTimeout(() => {
        backdrop.style.display = "none";
    }, 500)
}

// add item to cart
function addItem(index, itemId) {
    const foundedItem = cart_data.find((item) => item.id.toString() === itemId.toString())
    if(foundedItem) {
        increase(itemId)
    }else {
        cart_data.push(product[index])
    }
    updateCart();
    openCart();
}
// remove item
function removeCartItem(itemId) {
    cart_data = cart_data.filter(item => item.id != itemId)
    updateCart();
}
// increase
function increase(itemId) {
    cart_data = cart_data.map((item) => item.id.toString() === itemId.toString() ? {...item, qty: item.qty + 1} : item)
    updateCart();
}
// decrease
function decrease(itemId) {
    cart_data = cart_data.map((item) => item.id.toString() === itemId.toString() ? {...item, qty: item.qty > 1 ? item.qty - 1 : item.qty} : item)
    updateCart();
}
// item number
function calcItemNum() {
    let count = 0;
    cart_data.forEach((item) => (count += item.qty))
    items_num.innerText = count;
}
// total
function subTotalPrice() {
    let count = 0;
    cart_data.forEach((item) => (count += item.price * item.qty))
    total.innerText = `${count.toLocaleString("vi-VN")}.000đ`;
}

function renderItem() {
    product.forEach((item, index) => {
        const productItem = document.createElement('div');
        productItem.classList.add('card');
        productItem.onclick = () => addItem(index, item.id)
        productItem.innerHTML = `
            <div class="card-header">
                <img class="image" src=${item.image} alt="">
            </div>
            <div class="card-body">
                <div class="title">
                    <h2><a href="#">${item.name}</a></h2>
                </div>
                <div class="price">
                    <strong>$</strong>
                    <span>${item.price} đ</span>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn">Thêm giỏ hàng</button>
            </div>
        `
        productItems.appendChild(productItem);
    });
}
renderItem();

function renderCartItems() {
    cartsItem.innerHTML = ''
    cart_data.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="remove-item" onclick="removeCartItem(${item.id})">
                <span>&times;</span>
            </div>
            <div class="item-img">
                <img src=${item.image} alt="" style="width: 100px;">
            </div>
            <div class="item-details">
                <p style="font-size: 1.5rem;">${item.name}</p>
                <strong style="font-size: 1.5rem;">${item.price}</strong>
                <div class="qty">
                    <span onclick="decrease(${item.id})">-</span>
                    <strong style="font-size: 1.5rem;">${item.qty}</strong>
                    <span onclick="increase(${item.id})">+</span>
                </div>
            </div>
        `
        cartsItem.appendChild(cartItem);

    });
}
renderCartItems();

function updateCart() {
    renderCartItems();
    calcItemNum();
    subTotalPrice();
}