class ProductModel
{
    constructor(id, title, description, price, currency, location, image, category, postedAt, /* seller */){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.currency = currency
        this.location = location;
        this.image = image;
        this.category = category;
        this.postedAt = postedAt;
        // this.seller = seller;
    }
}

export default ProductModel;