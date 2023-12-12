import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductModel from "../../datasource/productModel";
import { create } from "../../datasource/api-product";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(new ProductModel());
  const [imageFile, setImageFile] = useState(null);
  const [endDate, setEndDate] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title: product.title,
      description: product.description,
      price: product.price,
      currency: product.currency,
      location: product.location,
      category: product.category,
      postedAt: new Date(Date.now()).toUTCString(),
      lifetime: {
        endDate: endDate,
      },
    };

    create(newProduct, imageFile, endDate)
      .then((data) => {
        if (data && data.result.id) {
          alert("Item added with the id " + data.id);
          navigate("/products/list");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  return (
    <div className="container" style={{ paddingTop: 80 }}>
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <h1>Add a new product</h1>
          <form onSubmit={handleSubmit} className="form">
            {/* Product Name */}
            <div className="form-group">
              <label htmlFor="titleTextField" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="titleTextField"
                placeholder="Enter the title for the product"
                name="title"
                value={product.title || ""}
                onChange={handleChange}
                style={{ marginLeft: 0, width: "100%" }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="descriptionTextField" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="descriptionTextField"
                placeholder="Enter short description here"
                name="description"
                value={product.description || ""}
                onChange={handleChange}
                style={{ marginLeft: 0, width: "100%" }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="priceTextField" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="priceTextField"
                placeholder="$0"
                name="price"
                value={product.price || 0}
                onChange={handleChange}
                style={{ marginLeft: 0, width: "100%" }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="currencyTextField" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
                Currency
              </label>
              <input
                type="text"
                className="form-control"
                id="currencyTextField"
                placeholder="Enter a currency"
                name="currency"
                value={product.currency || ""}
                onChange={handleChange}
                style={{ marginLeft: 0, width: "100%" }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="locationTextField" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="locationTextField"
                placeholder="Enter a location"
                name="location"
                value={product.location || ""}
                onChange={handleChange}
                style={{ marginLeft: 0, width: "100%" }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoryTextField" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryTextField"
                placeholder="Enter a category"
                name="category"
                value={product.category || ""}
                onChange={handleChange}
                style={{ marginLeft: 0, width: "100%" }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="imageFileInput" style={{ marginBottom: "10px", display: "block", textAlign: "left" }}>
                Image
              </label>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <input
                  type="file"
                  className="form-control-file"
                  id="imageFileInput"
                  name="imageFile"
                  onChange={handleImageChange}
                />
                {imageFile && (
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Product Image"
                    style={{ width: "100px", height: "100px", marginTop: "10px" }}
                  />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="endDateInput" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
                  Listing Expire Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="endDateInput"
                  placeholder="YYYY-MM-DD"
                  value={endDate}
                  onChange={handleEndDateChange}
                  style={{ marginLeft: 0, width: "100%" }}
                />
              </div>
            </div>


            {/* Submit and Cancel Buttons */}
            <div className="form-group">
              <button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                <i className="fas fa-edit"></i> Submit
              </button>

              <Link to="/products/list" className="btn btn-warning">
                <i className="fas fa-undo"></i> Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}></div>
    </div>
  );
};

export default AddProduct;
