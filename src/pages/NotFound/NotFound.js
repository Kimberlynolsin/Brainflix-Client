import "./NotFound.scss";
const NotFound = () => {
  return (
    <div className="not-found__container">
      <h2>Page Not Found. Error code 404</h2>
      <div>
      <iframe
        src="https://giphy.com/embed/de9SqBlr1ViwvGwzWp"
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/ndr-esc-eurovision-eurovisionde-de9SqBlr1ViwvGwzWp">
        </a>
      </p>
      </div>
    </div>
  );
};

export default NotFound;
