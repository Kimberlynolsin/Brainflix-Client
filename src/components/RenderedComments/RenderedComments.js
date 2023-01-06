import "./RenderedComments.scss";

const RenderedComments = (props) => {
  const commentLists = props.text.comments.map((element) => {
    // const formattedDate = new Date().toLocaleDateString(element.timestamp);

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

// const Shops = (props) => {
//     const shopList = props.shops
//       .filter((shop) => shop.rating > 5)
//       .map((shop) => <Shop key={shop.id} name={shop.name} hours={shop.hours} />);

//     return (
//       <section className="shops">
//         <h2>Shop Hours:</h2>
//         <ul className="shops__list">{shopList}</ul>
//       </section>
//     );
//   };

//   export default Shops;
