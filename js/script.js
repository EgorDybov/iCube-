const discountProducs = document.querySelector('.discount__product__cards');
const newProducts = document.querySelector('.new__product__cards');
const products = document.querySelector('.product__cards');

const tabNew = document.querySelector('.tab__news');
const tabPopular = document.querySelector('.tab__popular');
const tabPromotion = document.querySelector('.tab__promotion');



// Функция для активации вкладки "Новые"
const activateNewTab = () => {
    products.classList.remove('products__hidden');
    newProducts.classList.add('products__hidden');
    discountProducs.classList.add('products__hidden');
    
    tabNew.classList.add('active__tab');
    tabPopular.classList.remove('active__tab');
    tabPromotion.classList.remove('active__tab');
};

// Активируем вкладку "Новые" при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    activateNewTab();
});

tabNew.addEventListener('click', () => {
    products.classList.remove('products__hidden');
    newProducts.classList.add('products__hidden');
    discountProducs.classList.add('products__hidden');
    
    tabNew.classList.add('active__tab');
    tabPopular.classList.remove('active__tab');
    tabPromotion.classList.remove('active__tab');
})

tabPopular.addEventListener('click', () => {
    products.classList.add('products__hidden');
    newProducts.classList.remove('products__hidden');
    discountProducs.classList.add('products__hidden');

    tabNew.classList.remove('active__tab');
    tabPopular.classList.add('active__tab');
    tabPromotion.classList.remove('active__tab');
})

tabPromotion.addEventListener('click',() => {
    products.classList.add('products__hidden');
    newProducts.classList.add('products__hidden');
    discountProducs.classList.remove('products__hidden');

    tabNew.classList.remove('active__tab');
    tabPopular.classList.remove('active__tab');
    tabPromotion.classList.add('active__tab');
})