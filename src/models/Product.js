export default class Product {
    constructor(name, price, type, validity, description, photo, idCategory)  {
      this.id = this.generateId();
      this.name = name;
      this.price = price;
      this.type = type;
      this.validity = validity;
      this.description = description;
      this.photo = photo;
      this.idCategory = idCategory
    }
  
    generateId() {
      return Math.floor(Math.random() * 1000);
    }
  }