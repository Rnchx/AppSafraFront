class Products {
    constructor(  name, price, description, type, validity, photo) {
      this.name = name;
      this.price = price ;
      this.description = description;
      this.id = this.generateId();
      this.type = type;
      this.validity = validity;
      this.photo = photo;
    }
    generateId() {
      return Math.floor(Math.random() * 1000);
    }
  }
  
  export default Products;