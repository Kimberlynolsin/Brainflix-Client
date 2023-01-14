import "./Comments.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import RenderedComments from "../RenderedComments/RenderedComments";

const Comments = ({comments}) => {

  
  return (
    <>
      <section className="comments-section">
        <form className="comment__form">
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
            <label className="comment__form__container__submit">
              <input type="button" value="COMMENT" id="submit" />
            </label>
          </div>
        </form>

        <RenderedComments comment={comments} />
      </section>
    </>
  );
};

export default Comments;
