const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        catalogProducts: [],
        catalogImg: 'https://placehold.it/200x150',
        cartUrl: '/getBasket.json',
        cartProducts: [],
        cartImg: 'https://placehold.it/50x100',
        filterValue: "",
        filteredProducts: [],
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProductToCart(element) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let productId = element.id_product;
                        let find = this.cartProducts.find(product => product.id_product === productId);
                        if (find) {
                            find.quantity++;
                        } else {
                            let product = {
                                id_product: productId,
                                price: +element.price,
                                product_name: element.product_name,
                                quantity: 1,
                            };
                            this.cartProducts.push(product);
                        }
                    } else {
                        alert('Error');
                    }
                });
        },
        deleteProductFromCart(element) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let productId = +element.id_product;
                        let find = this.cartProducts.find(product => product.id_product === productId);
                        if (find.quantity > 1) { // если товара > 1, то уменьшаем количество на 1
                            find.quantity--;
                        } else { // удаляем
                            this.cartProducts.splice(this.cartProducts.indexOf(find), 1);
                        }
                    } else {
                        alert('Error');
                    }
                })
        },
        showCart() {
            document.querySelector('.cart-block').classList.toggle('invisible');
        },
        filter(value) {
            const regexp = new RegExp(value, 'i');
            this.filteredProducts = this.catalogProducts.filter(product => regexp.test(product.product_name));
            this.catalogProducts.forEach(el => {
                const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
                if(!this.filteredProducts.includes(el)){
                    block.classList.add('invisible');
                } else {
                    block.classList.remove('invisible');
                }
            });
        },

    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.catalogProducts.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartProducts.push(el);
                }
            });
    },


});
