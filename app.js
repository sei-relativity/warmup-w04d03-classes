class Shop {
    constructor(name) {
      this.id = Math.random() * 100;
      this.name = name;
      this.products = [];
    }
  
    addProduct(name, price, stock = 1) {
      if (this.products.length > 0) {
        const index = this.products.findIndex(prod => prod.name === name);
        if (index != -1) {
          this.products[index].stock += stock;
          this.products[index].price = price;
        } else {
          this.products.push({ name, price, stock });
        }
      } else {
        this.products.push({ name, price, stock });
      }
    }
  
    sale(percentage) {
      console.log(`Hooray! We have a ${percentage}% sale!`);
      this.products.forEach(product => {
        product.price = (product.price * percentage) / 100;
        console.log(`${product.name} is now ${product.price}`);
      });
    }
  
    stock(name) {
      const index = this.products.findIndex(prod => prod.name === name);
      if (index == -1) {
        console.log("Please check the product's name and try again");
      } else {
        console.log(
          `${this.products[index].name} has ${this.products[index].stock} in stock`
        );
      }
    }
  
    showProducts() {
      console.log("Our Products:");
      this.products.forEach(product => {
        console.log(
          `Name: ${product.name}, Price: ${product.price}, Stock: ${product.stock}`
        );
      });
    }
  
    purchase(name, stock = 1) {
      const index = this.products.findIndex(prod => prod.name === name);
      if (index !== -1) {
        this.products.forEach(product => {
          if (product.name === name) {
            if (product.stock >= stock) {
              product.stock -= stock;
              console.log(
                `${product.name} purchased! ,  New stock is now ${product.stock}`
              );
            } else {
              console.log(`${product.name} does not have ${stock} in stock`);
            }
          }
        });
      } else {
        console.log("Please check the product's name and try again");
      }
    }
  
    removeProduct(name) {
      const index = this.products.findIndex(prod => prod.name === name);
      if (index !== -1) {
        this.products.splice(index, 1);
        console.log(`${name} has been removed from the products`);
      } else {
        console.log(`Please check the product's name and try again`);
      }
    }
  }
  
  shop = new Shop("Supermarket");
  // shop.addProduct("Apples", 10, 5);
  // shop.addProduct("Bananas", 6, 2);
  // shop.addProduct("Apples", 10);
  // shop.addProduct("Oranges", 10, 5);
  //   shop.showProducts()
  
  //   shop.sale(50)
  //   shop.purchase("Bananas")
  //   shop.stock("Bananas")
  //   shop.removeProduct('Bananas');
  //   shop.showProducts()
  // shop.stock("Apples")
   