import "./CommentsRendered.scss";

const CommentsRendered = ({ comment }) => {
  const { comments } = comment;
  const commentLists = comments.map((element) => {
    return (
      <div className="comment-container" key={element.id}>
        <div className="comment-container__icon"></div>
        <div className="comment-container__descrip">
          <div className="comment-container__items">
            <p className="comment-container__name">{element.name}</p>
            <p className="comment-container__details">
              {new Date(element.timestamp).toLocaleDateString()}
            </p>
          </div>
          <p className="comment-container__para">{element.comment}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>{commentLists}</div>
    </>
  );
};
export default CommentsRendered;
