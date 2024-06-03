import escolas  from "../data/eescolas";
import Product from "./Product";

class listProduct {
  constructor() {
    this.productArray = [];
  }

  add(listProduct) {
    this.productArray.push(listProduct)
  }

  getListaProdutos() {
    return this.productArray;
  }

  deleteProdutos(id) {
    this.productArray = this.productArray.filter((produto) => produto.id !== id);
  }
  getProdutosPorId(id) {
    return this.productArray.find((listProduct) => listProduct.id === id)
  }

  atualizarProdutos(id, name, price, description, type, validity, photo) {
    const produto = this.getProdutosPorId(id);

    if (produto) {
        produto.name = name;
        produto.price = price ;
        produto.description = description;
        produto.type = type;
        produto.validity = validity;
        produto.photo = photo;
    }

    return produto;
  }
}

const productRepository = new listProduct();
const newProduct = new Product(escolas.name, escolas.price,  escolas.description, escolas.type, escolas.validity, escolas.photo);

productRepository.add(newProduct);

export default productRepository;