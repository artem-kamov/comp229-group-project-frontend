import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import ProductModel from "../../datasource/productModel";
import { create } from "../../datasource/api-product";

const AddProduct = () => {

    let navigate = useNavigate();
    let [product, setProduct] = useState(new ProductModel());

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevFormData) => ({ ...prevFormData, [name]: value }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {
            // id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            currency: product.currency,
            location: product.location,
            image: product.image,
            category: product.category,
            postedAt: new Date(Date.now()).toUTCString(),
            owner: "655016da7569dcec6baa7951",
            
        }

        create(newProduct).then(data => {
            if (data && data.id) {
                alert("Item added with the id " + data.id);
                navigate("/products/list");
            }
            else {
                alert(data.message);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err)
        });

    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add a new product</h1>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            {/* <input type="hidden"
                                name="id"
                                value={product.id || ''}>
                            </input> */}
                            <label htmlFor="itemTextField">Product Name</label>
                            <input type="text" className="form-control"
                                id="titleTextField"
                                placeholder="Enter the title for the product"
                                name="title"
                                value={product.title || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="QtyTextField">Description</label>
                            <input type="text" className="form-control"
                                id="descriptionTextField"
                                placeholder="Enter short description here"
                                name="description"
                                value={product.description || ''}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="PriceTextField">Price</label>
                            <input type="number" className="form-control"
                                id="PriceTextField"
                                placeholder="$0"
                                name="price"
                                value={product.price || 0}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="currencyTextField">Currency</label>
                            <input type="text" className="form-control"
                                id="currencyTextField"
                                placeholder="Enter a currency"
                                name="currency"
                                value={product.currency || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="locationTextField">Location</label>
                            <input type="text" className="form-control"
                                id="locationTextField"
                                placeholder="Enter a location"
                                name="location"
                                value={product.location || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageTextField">Image</label>
                            <input type="text" className="form-control"
                                id="imageTextField"
                                placeholder="Enter a image"
                                name="image"
                                value={product.image || ''}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoryTextField">Category</label>
                            <input type="text" className="form-control"
                                id="categoryTextField"
                                placeholder="Enter a category"
                                name="category"
                                value={product.category || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <button className="btn btn-primary" type="submit">
                            <i className="fas fa-edit"></i>
                            Submit
                        </button>

                        <Link href="#" to="/products/list" className="btn btn-warning">
                            <i className="fas fa-undo"></i>
                            Cancel
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
