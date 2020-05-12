const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  return new Promise ((resolve,reject) => {
    xhr.onload = () => {
      if (xhr.status !== 200) {
        reject(console.log('Error'));
      } else {
        resolve(xhr.responseText);
      }
    };
  });
};

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    // this._getProducts()
    //     .then(data => {
    //       this.goods = [...data];
    //       this._render();
    //     });
  }

  _fetchProducts() {
    getRequest(`${API}/catalogData.json`).then(data => {
      this.goods = JSON.parse(data);
      this._render();
    });
  }

  // _getProducts() {
  //   return fetch(`${API}/catalogData.json`)
  //       .then(response => response.json())
  //       .catch(error => {
  //         console.log(error);
  //       });
  // }

  calcSum() {
    return this.goods.reduce((sum, good) => sum + good.price, 0);
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}


class Basket {
  constructor(){
    this.container = document.querySelector(".cart");
    this.goods = [];
    this._addBasketButtonsListeners();
    this.addProduct();
    this.removeProduct();
    this.getBasketList();
    this._renderBasket();
  
  
  }

  _addBasketButtonsListeners() {
    let buttons = document.querySelectorAll('.buy-btn');
    for (let button of buttons) {
      button.addEventListener('click', this.addProduct);
    }
  }

  addProduct() {
    let id = this.parentElement;

  }

  removeProduct() {

  }

  getBasketList() {

  }

  _renderBasket() {

  }

}

new Promise ((resolve, reject) => {
  new ProductList();
  resolve();
}).then(new Basket);


