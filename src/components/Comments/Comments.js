import "./Comments.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import RenderedComments from "../RenderedComments/RenderedComments";

const Comments = (props) => {
  return (
    <>
      <form className="comment__form" id="formId">
        <div>
          <img
            src={mohan}
            alt="profile picture"
            className="comment__form__img"
          />
        </div>
        <div className="comment__form__container">
          <label className="comment__form__container__input">
            Join the Conversation
            <textarea
              name="comment"
              placeholder="Add a new comment"
              id="submit"
            ></textarea>
          </label>
          <input type="submit" value="COMMENT" id="submit" />
        </div>
      </form>
      
      <RenderedComments text={props.comments} />
    </>
  );
};

export default Comments;
