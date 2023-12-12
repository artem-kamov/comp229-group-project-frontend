class MessageModel
{
    constructor(type, content, authorId, productId, questionId, answerId ){
        this.type = type;
        this.content = content;
        this.authorId = authorId;
        this.productId = productId
        this.questionId = questionId;
        this.answerId = answerId;
    }
}

// Answer request
// {
//   "type": "answer",
//   "content": "It was used for 2 weeks",
//   "authorId": "655029fb19dff4cc668304e5",
//   "productId": null,
//   "questionId": "656a6dfc52459ea8d81a91fa",
//   "answerId": null
//   }

// question request
// {
//   "type": "question",
//   "content": "How much time has been used?",
//   "authorId": null,
//   "productId": "654d57bc5b1668efe931b51d",
//   "questionId": null,
//   "answerId": null
//   }

export default MessageModel;