import { v4 as uuidv4 } from 'uuid';

class Product {
  constructor(brand, price, img_url, available) {
    this._id = uuidv4();
    this.brand = brand;
    this.price = price;
    this.img_url = img_url;
    this.available = available;
  }
}

export  {Product};