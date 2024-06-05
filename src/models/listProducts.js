import axios from 'axios';
import Product from "./Product";

class productRepository {
  constructor() {
    this.products = [];
  }

  saveToDatabase(product) {
    // Adicione uma verificação para garantir que todos os campos obrigatórios estejam presentes
  
    axios.post('http://10.88.194.76:4000/products', product)
     .then(response => {
        console.log('Produto salvo com sucesso:', response.data);
        this.products.push(product); // Atualize o estado local com o produto salvo
      })
     .catch(error => {
        console.error('Erro ao salvar produto:', error);
      });
  }

  updateInDatabase( name, price, type, validity, description, photo, idCategory) {
    axios.put(`http://10.88.194.76:4000/products/${id}`, {
      name,
      price,
      type,
      validity,
      description,
      photo,
      idCategory
    })
   .then(response => {
      console.log('Produto atualizado com sucesso:', response.data);
      const index = this.products.findIndex(p => p.id === id);
      if (index > -1) {
        this.products[index].name = name;
        this.products[index].price = price;
        this.products[index].type = type;
        this.products[index].validity = validity;
        this.products[index].description = description;
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
const newProduct = new Product(Product.name, Product.price, Product.type, Product.validity, Product.description, Product.photo, Product.idCategory) ;

ProductRepository.saveToDatabase(newProduct);

export default ProductRepository;
