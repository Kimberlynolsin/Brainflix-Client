import "./RenderedComments.scss";

const RenderedComments = (props) => {
  const commentLists = props.text.comments.map((element) => {

    return (
      <>
        <div className="comment">
          <div className="comment__container">
            <div className="comment__container__icon"></div>
            <div className="comment__container">
              <p className="comment__container__name">{element.name}</p>
              <p className="comment__container__details">{new Date().toLocaleDateString(element.timestamp)}</p>
            </div>
          </div>
          <p className="comment__para">{element.comment}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <div>{commentLists}</div>
    </>
  );
};
export default RenderedComments;


