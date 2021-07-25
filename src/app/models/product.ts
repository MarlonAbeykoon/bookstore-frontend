export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id, name, description = '', price = 0, imageUrl = 'https://easybooks.lk/image/cache/data/Publications/School-Educational-Books-New/Grade-11/SEB104%20Sinhala%20Wada%20potha%20Grade%2011%20Cover%20New-700x850.jpg') {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
