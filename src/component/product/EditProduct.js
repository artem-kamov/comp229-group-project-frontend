import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUndo } from '@fortawesome/free-solid-svg-icons';
import { read, update } from "../../datasource/api-product";
import ProductModel from "../../datasource/productModel";

const EditProduct = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    let [product, setProduct] = useState(new ProductModel());

    useEffect(() => {
        read(id).then((data) => {
            if (data) {
                setProduct(new ProductModel(
                    data.selectedProduct.id,
                    data.selectedProduct.title,
                    data.selectedProduct.description,
                    data.selectedProduct.price,
                    data.selectedProduct.currency,
                    data.selectedProduct.location,
                    data.selectedProduct.image,
                    data.selectedProduct.category,
                    data.selectedProduct.postedAt,
                    data.selectedProduct.owner,
                ));
            }
        }).catch(err => {
            alert(err.message);
            console.log(err)
        });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const loggedUserId = sessionStorage.getItem('id')
        let updatedProduct = {
            title: product.title,
            description: product.description,
            price: product.price,
            currency: product.currency,
            location: product.location,
            image: product.image,
            category: product.category,
            postedAt: new Date(Date.now()).toUTCString(),
            owner: loggedUserId,
        }

        update(product.id, updatedProduct).then(data => {
            if (data && data.success) {
                alert(data.message);
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
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
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
                                placeholder="Enter an image"
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
    <FontAwesomeIcon icon={faEdit} />
    Submit
</button>

<Link href="#" to="/products/list" className="btn btn-warning">
    <FontAwesomeIcon icon={faUndo} />
    Cancel
</Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
