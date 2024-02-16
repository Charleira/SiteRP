// Função para obter a lista de produtos
function getProducts() {
    return [
      { id: 1, name: 'Produto 1', price: 10.99 },
      { id: 2, name: 'Produto 2', price: 15.99 },
      { id: 3, name: 'Produto 3', price: 19.99 },
      { id: 4, name: 'Produto 4', price: 24.99 },
      { id: 5, name: 'Produto 5', price: 29.99 }
    ];
  }
  // Função para obter um produto por ID
  function getProductById(id) {
    const products = getProducts();
    return products.find(product => product.id === id);
  }
  
  // Função para adicionar um produto ao carrinho
  function addProductToCart(product, quantity) {
    const cart = session.cart || [];
    const existingProduct = cart.find(item => item.product.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
  
    session.cart = cart;
  }
  
  // Função para remover um produto do carrinho
  function removeProductFromCart(id) {
    const cart = session.cart || [];
    session.cart = cart.filter(item => item.product.id !== id);
  }
  
  // Função para calcular o preço total do carrinho
  function calculateCartTotal() {
    const cart = session.cart || [];
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
  
  // Exporte as funções para serem usadas em outros lugares
  module.exports = {
    getProducts,
    getProductById,
    addProductToCart,
    removeProductFromCart,
    calculateCartTotal
  };