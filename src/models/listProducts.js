import Product from "./Product";

class productRepository {
  constructor() {
    this.products = [];
  }

  saveToDatabase(product) {
    console.log(product);
    // fetch('http://10.88.200.157:4000/products', {
      fetch('http://192.168.15.111:4000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => {
        console.log('Status Code:', response.status);
        console.log(response.body);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Produto salvo com sucesso:', data);
        this.products.push(product);
      })
      .catch(error => {
        console.error('Erro ao salvar produto:', error);
      });
  }


  updateInDatabase(name, price, description, type, validity, photo, idCategory) {
    // const url = `http://10.88.200.157:4000/products/${id}`;
    const url = `http://192.168.15.111:4000/products/${id}`

    fetch(url, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        name,
        price,
        description,
        type,
        validity,
        photo,
        idCategory
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Converte a resposta para JSON
      })
      .then(data => {
        console.log('Produto atualizado com sucesso:', data);
        const index = this.products.findIndex(p => p.id === id);
        if (index > -1) {
          this.products[index].name = name;
          this.products[index].price = price;
          this.products[index].description = description;
          this.products[index].type = type;
          this.products[index].validity = validity;
          this.products[index].photo = photo;
          this.products[index].idCategory = idCategory;
        }
      })
      .catch(error => {
        console.error('Erro ao atualizar produto:', error);
      });
  }

  getAll() {
    return this.products;
  }

  get(id) {
    return this.products.find((product) => product.id === id);
  }

  remove(id) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}

const ProductRepository = new productRepository();
const newProduct = new Product(Product.name, Product.price, Product.description, Product.type, Product.validity, Product.photo, Product.idCategory);

ProductRepository.saveToDatabase(newProduct);

export default ProductRepository;
