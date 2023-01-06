import "./RenderedComments.scss";

const RenderedComments = (props) => {
    
    const commentLists = props.text.comments.map((element) => {
    const formattedDate = new Date().toLocaleDateString(element.timestamp)  
        
    return (
    <>
      <div id={element.id}>
        <p className="comment__details">{element.name}</p>
        <p className="comment__details">{formattedDate}</p>
      </div>
      <div>
        <p className="comment__para">{element.comment}</p>
      </div> 
    </>
    )
  });

  return (
    <>
      <div className="comment">
        <div className="comment__icon"></div>
        {commentLists}
      </div>
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
