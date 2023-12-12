import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { list, remove } from "../../datasource/api-product";

const ListProducts = () => {
    let [productsList, setProductsList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        list().then((data) => {
            if (data.success) {
                setProductsList(data.products);
                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }, []);

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            remove(id).then(data => {
                if (data && data.success) {
                    const newList = productsList.filter((product) => product.id !== id);
                    setProductsList(newList);
                } else {
                    alert(data.message);
                }
            }).catch(err => {
                alert(err.message);
                console.log(err)
            });
        };
    };

    return (
        <main className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <h1>Products List</h1>
                <div>
                    <Link to="/products/add" className="btn btn-primary align-self-end" role="button">
                        <FontAwesomeIcon icon={faPlusCircle} />
                        Add a new Item
                    </Link>
                </div>
                <br />
                <br />
                <div className="table-responsive">
                    {isLoading && <div>Loading...</div>}
                    {!isLoading &&
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Category</th>
                                    <th className="text-center">Location</th>
                                    <th className="text-center">Image</th>
                                    <th className="text-center" colSpan="3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsList.map((product, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className="text-center">
                                                <Link className="link-primary" to={'/products/detail/' + product.id}>
                                                    {product.title}
                                                </Link>
                                            </td>
                                            <td className="text-center">{product.currency} {product.price}</td>
                                            <td className="text-center">{product.category || ''}</td>
                                            <td className="text-center">{product.location || ''}</td>
                                            <td className="text-center"><img src={product.image} alt="No available" width={50}/></td>
                                            <td className="text-center">
                                                <Link className="btn bg-primary btn-primary btn-sm" to={'/products/edit/' + product.id}>
                                                    <FontAwesomeIcon icon={faPencilAlt} />
                                                </Link>
                                            </td>
                                            <td className="text-center">
                                                <button
                                                    className="btn bg-danger btn-danger btn-sm"
                                                    onClick={() => handleRemove(product.id)}>
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </main>
    );
};

export default ListProducts;
