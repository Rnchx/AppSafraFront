export default class Product {
    constructor(name, price, description, type, validity, photo, idCategory)  {
      this.id = this.generateId();
      this.name = name;
      this.price = price;
      this.description = description;
      this.type = type;
      this.validity = validity;
      this.photo = photo;
      this.idCategory = idCategory
    }
  
    generateId() {
      return Math.floor(Math.random() * 1000);
    }
  }