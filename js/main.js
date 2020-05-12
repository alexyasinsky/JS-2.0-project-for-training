const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = 'https://via.placeholder.com/120') => {
  return `<div class="product-item">
            <img src="${img}"></img>          
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="buy-btn btn"><i class="fas fa-shopping-cart"></i>Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  list.forEach(item => {
    document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(item.title, item.price));
  });
}

 /* 2 вариант: 
    const renderProducts = (list) => {
    const productList = list.reduce((result, good) => {
      return result + renderProduct(good.title, good.price);
    }, '');
    document.querySelector('.products').innerHTML = productList;
  }; 
*/

const cartBtn = document.querySelector('.btn-cart');
cartBtn.addEventListener('click', () => renderProducts(products));
