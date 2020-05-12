class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
    this.summarizePrices();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ]
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  summarizePrices() {
    let sum = 0;
    for (let good of this.goods) {
      sum += good.price;
    }
    alert(`Сумма товаров на странице равна ${sum} \u20bd`);
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
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
new ProductList();


class Basket {
  constructor(container = ".basket") {
    this.container = container; //контейнер в разметке, куда будет вставляться корзина
    this.productsAdded = []; //массив, куда будут попадать продукты, добавленные в корзину
    this._renderBasketList(); //метод отрисовки корзины
  }

  _renderBasket() {

  }
}

class BasketItem {
  constructor(product) {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  renderBasketItem() { 
    // метод отрисовки позиции в корзине (разметка)
  }
}

// метод, добавляющий товар в BasketList.productsAdded, я бы добавил в класс ProductItem, т.к. кнопка находится в карточке товара

