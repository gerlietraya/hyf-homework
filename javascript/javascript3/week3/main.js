//shoppingcart
//Step 3: Shopping cart using factory functions
function createProduct(name, price) {
    return {
        name: name,
        price: price,
    }
}

function createShoppingCart(products) {
    return {
        addProduct: function(product) {
            // Implement functionality here
            products.push(product)
        },
        removeProduct: function(product) {
            // Implement functionality here
            
        },
        getTotal: function() {
            // Implement functionality here
        },
        renderProducts: function() {
            // Implement functionality here
        },
        getUser: function() {
            // Implement functionality here
        }
    }
}

const flatscreen = createProduct('flat-screen', 5000);
const shoppingCart = createShoppingCart([flatscreen]);
console.log(shoppingCart.addProduct('washing machine'));
