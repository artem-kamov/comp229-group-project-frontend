import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listOne } from "../../datasource/api-product";
import MessageModel from "../../datasource/messageModel";
import { postQuestion } from "../../datasource/api-message";

const IndividualProduct = () => {
  let [individualProduct, setIndividualProduct] = useState([]);
  let [questionContent, setQuestionContent] = useState(null);
  let [questionArray, setQuestionArray] = useState([]);
  // let [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    listOne(id).then((data) => {
      console.log('product', data);
      setIndividualProduct(data.selectedProduct)
    }).catch(err => {
      alert(err.message);
      console.log(err);
    });
  }, []);
  

  useEffect(() => {
    listOne(id).then((data) => {
      setIndividualProduct(data.selectedProduct)
    }).catch(err => {
      alert(err.message);
      console.log(err);
    });
  }, []);

  const submitQuestion= async () => {
    const newMessage = new MessageModel('question', questionContent, null, individualProduct.id) //author id missing

    try {
      const response = await postQuestion(newMessage);


    } catch (err) {
      alert('Error sending message')
    }

  }

  return (
    <main className="container" style={{ paddingTop: 80 }}>
      <div className="row">
        <div className="col-md-6">
          {individualProduct.image
            ? <img src={individualProduct.image} alt="Unavailable" className="img-fluid" />
            : <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} alt="NoImage" className="img-fluid" />}

        </div>
        <div className="col-md-6">
          <h2>{individualProduct.description}</h2>
          <p>Price: {individualProduct.price} {individualProduct.currency}</p>
          <p>Location: {individualProduct.location}</p>
          <p>Category: {individualProduct.category}</p>
          <p>Posted since: {new Date(individualProduct.postedAt).toLocaleDateString()}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h2>Q&A</h2>
        </div>
        {/* <div className="col-md-6">
          <button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
            <i className="fas fa-edit"></i> Ask a question
          </button>
        </div> */}
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ask a question"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={questionContent}
          onChange={(e) => setQuestionContent(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => submitQuestion()}>
          Submit
        </button>
      </div>
      <>
      <div className="row">
        {questionArray.map((elem) => { 
          return elem
        })}
      </div>
      </>
    </main>
  );
};

export default IndividualProduct;
