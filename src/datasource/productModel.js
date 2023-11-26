class ProductModel
{
    constructor(id, title, description, price, currency, location, image, category, postedAt, owner ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.currency = currency
        this.location = location;
        this.image = image;
        this.category = category;
        this.postedAt = postedAt;
        this.owner = owner;
    }
}

export default ProductModel;