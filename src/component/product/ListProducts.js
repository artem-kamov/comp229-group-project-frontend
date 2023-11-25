import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../../datasource/api-product";

const ListProducts = () => {

    let [productsList, setProductsList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        list().then((data) => {
            console.log('esta es la data', data)
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

    };

    return (
         //   -- Main Content --
         <main className="container" style={{ paddingTop: 80 }}>
         <div className="row">
             <h1>Products List</h1>

             <div>
                 <Link to="/products/add" className="btn btn-primary align-self-end" role="button">
                     <i className="fas fa-plus-circle"></i>
                     Add a new Item
                 </Link>
             </div>
             <br />
             <br />
             <div className="table-responsive" >
                 {isLoading && <div>Loading...</div>}
                 {!isLoading && 
                 <table className="table table-bordered table-striped table-hover">
                     <thead>
                         {/* -- Header Row-- */}
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
                         {/* -- Repeatable Template Row -- */}
                         {productsList.map((product, i) => {
                             return (<tr key={i}>

                                 <td className="text-center"> {product.title|| ''} </td>
                                 <td className="text-center"> {product.currency} {product.price} </td>
                                 <td className="text-center"> {product.category || ''} </td>
                                 <td className="text-center"> {product.location || ''} </td>
                                 <td className="text-center"><img src={product.image} alt="No available" /> </td>
                                 <td className="text-center">
                                     <Link className="btn bg-primary btn-primary btn-sm" to={'/products/edit/' + product.id}>
                                         <i className="fas fa-pencil-alt"></i>
                                     </Link>
                                 </td>
                                 <td className="text-center">
                                     <button
                                         className="btn bg-danger btn-danger btn-sm"
                                         onClick={() => handleRemove(product.id)}>
                                         <i className="fas fa-trash-alt"></i>
                                     </button>
                                 </td>
                             </tr>)
                         })}
                     </tbody>
                 </table>}
             </div>
         </div >
     </main >)
};

export default ListProducts;
