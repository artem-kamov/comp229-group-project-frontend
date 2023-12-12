import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listOne } from "../../datasource/api-product";
import MessageModel from "../../datasource/messageModel";
import { postQuestion, findThreadByProductId, postAnswer } from "../../datasource/api-message";

const IndividualProduct = () => {
  let [individualProduct, setIndividualProduct] = useState([]);
  let [questionContent, setQuestionContent] = useState(null);
  let [questionArray, setQuestionArray] = useState([]);
  let [updateMessages, setUpdateMessages] = useState(false);
  let [answerContent, setAnswerContent] = useState('');
  let [answerTextboxVisible, setAnswerTextboxVisible] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    listOne(id).then((data) => {
      setIndividualProduct(data.selectedProduct)
    }).catch(err => {
      alert(err.message);
      console.log(err);
    });
  }, [id]);


  useEffect(() => {
    findThreadByProductId(id).then((data) => {
      console.log('ata.messages', data.messages)
      setQuestionArray(data.messages)
      setQuestionContent('')
    }).catch(err => {
      alert(err.message);
      console.log(err);
    });
  }, [updateMessages, id]);

  const submitQuestion = async () => {
    const loggedUserId = sessionStorage.getItem('id')
    const newMessage = new MessageModel('question', questionContent, loggedUserId, individualProduct.id)

    try {
      const response = await postQuestion(newMessage);
      if (response.success) {
        setUpdateMessages(!updateMessages);
      }


    } catch (err) {
      alert('Error sending message')
    }

  }

  const submitAnswer = async (questionId) => {
    const loggedUserId = sessionStorage.getItem('id')
    console.log('loggedUserId', clearTimeout)
    console.log('individualProduct.owner', individualProduct.owner)
    if (!loggedUserId || loggedUserId !== individualProduct.owner) {
      alert('You need to be signed in as the owner of the product to answer questions.')
      setAnswerTextboxVisible(0)
      setAnswerContent('')
      return;
    }

    const newMessage = new MessageModel('answer', answerContent, loggedUserId, null, questionId)

    try {
      const response = await postAnswer(newMessage);
      if (response.success) {
        setUpdateMessages(!updateMessages);
        setAnswerContent('')
      }


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

        {questionArray.map((elem, index) => {
          if (elem.answers) {
            return (
              <>
                <div className="col-md-6 ps-3 pt-3 pb-3 text-start" style={{ fontWeight: 'bold' }}>
                  {index + 1 + '. ' + elem.content}
                </div>
                <div className="col-md-6 ps-5 pt-1 pb-2 text-start" >
                  {'A: ' + elem.answers.content}
                </div>
              </>)
          } else {
            return (
              <>
                <div className="row">
                  <div className="col-md-6 ps-3 pt-3 pb-3 text-start" style={{ fontWeight: 'bold' }}>
                    {index + 1 + '. ' + elem.content}
                  </div>
                  <div className="col-md-6 ps-3 pt-3 pb-3 text-end" style={{ fontWeight: 'bold' }}>
                    <button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }} onClick={() => setAnswerTextboxVisible(index + 1)}>
                      <i className="fas fa-edit"></i> Answer this question
                    </button>
                  </div>

                </div>
                {answerTextboxVisible === (index + 1) && <div className="row">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write an answer"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      value={answerContent}
                      onChange={(e) => setAnswerContent(e.target.value)}
                    />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => submitAnswer(elem._id)}>
                      Submit
                    </button>
                  </div>
                </div>}
              </>
            )
          }


        })}
      </>
    </main>
  );
};

export default IndividualProduct;
