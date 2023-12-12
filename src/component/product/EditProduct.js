import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUndo } from '@fortawesome/free-solid-svg-icons';
import { read, update } from "../../datasource/api-product";
import ProductModel from "../../datasource/productModel";

const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(new ProductModel());
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        read(id).then((data) => {
            if (data) {
                setProduct(new ProductModel(
                    data.selectedProduct[0].id,
                    data.selectedProduct[0].title,
                    data.selectedProduct[0].description,
                    data.selectedProduct[0].price,
                    data.selectedProduct[0].currency,
                    data.selectedProduct[0].location,
                    data.selectedProduct[0].image,
                    data.selectedProduct[0].category,
                    data.selectedProduct[0].postedAt,
                    data.selectedProduct[0].owner,
                ));
                setEndDate(data.selectedProduct[0].lifetime.endDate || "");
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedProduct = {
            title: product.title,
            description: product.description,
            price: product.price,
            currency: product.currency,
            location: product.location,
            image: product.image,
            category: product.category,
            postedAt: new Date(Date.now()).toUTCString(),
            owner: "655016da7569dcec6baa7951",
            lifetime: {
                endDate: endDate,
            },
        };

        update(product.id, updatedProduct).then(data => {
            if (data && data.success) {
                alert(data.message);
                navigate("/products/list");
            } else {
                alert(data.message);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={handleSubmit} className="form">
                        {/* Product Name */}
                        <div className="form-group">
                            <label htmlFor="titleTextField">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="titleTextField"
                                placeholder="Enter the title for the product"
                                name="title"
                                value={product.title || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="form-group">
                            <label htmlFor="descriptionTextField">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descriptionTextField"
                                placeholder="Enter short description here"
                                name="description"
                                value={product.description || ""}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Price */}
                        <div className="form-group">
                            <label htmlFor="priceTextField">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="priceTextField"
                                placeholder="$0"
                                name="price"
                                value={product.price || 0}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Currency */}
                        <div className="form-group">
                            <label htmlFor="currencyTextField">Currency</label>
                            <input
                                type="text"
                                className="form-control"
                                id="currencyTextField"
                                placeholder="Enter a currency"
                                name="currency"
                                value={product.currency || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Location */}
                        <div className="form-group">
                            <label htmlFor="locationTextField">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="locationTextField"
                                placeholder="Enter a location"
                                name="location"
                                value={product.location || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Image */}
                        <div className="form-group">
                            <label htmlFor="imageTextField">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imageTextField"
                                placeholder="Enter an image"
                                name="image"
                                value={product.image || ""}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Category */}
                        <div className="form-group">
                            <label htmlFor="categoryTextField">Category</label>
                            <input
                                type="text"
                                className="form-control"
                                id="categoryTextField"
                                placeholder="Enter a category"
                                name="category"
                                value={product.category || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* End Date */}
                        <div className="form-group">
                            <label htmlFor="endDateInput">Listing Expire Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="endDateInput"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>

                        {/* Submit and Cancel Buttons */}
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">
                                <FontAwesomeIcon icon={faEdit} /> Submit
                            </button>

                            <Link to="/products/list" className="btn btn-warning">
                                <FontAwesomeIcon icon={faUndo} /> Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{ marginBottom: "20px" }}></div>
        </div>
    );
};

export default EditProduct;
