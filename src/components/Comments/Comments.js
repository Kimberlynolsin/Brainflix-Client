import "./Comments.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import CommentsRendered from "../CommentsRendered/CommentsRendered";

const Comments = ({ comments }) => {
  return (
    <>
      <section className="comments-section">
        <form className="comment__form">
          <div>
            <img
              src={mohan}
              alt="user profile"
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
        <CommentsRendered comment={comments} />
      </section>
    </>
  );
};

export default Comments;
