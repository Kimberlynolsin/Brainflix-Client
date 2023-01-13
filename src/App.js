import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

// Check the render method of `HomePage`.
//     at createFiberFromTypeAndProps (react-dom.development.js:28439:1)
//     at createFiberFromElement (react-dom.development.js:28465:1)
//     at createChild (react-dom.development.js:15109:1)
//     at reconcileChildrenArray (react-dom.development.js:15404:1)
//     at reconcileChildFibers (react-dom.development.js:15821:1)
//     at reconcileChildren (react-dom.development.js:19167:1)
//     at mountIndeterminateComponent (react-dom.development.js:20157:1)
//     at beginWork (react-dom.development.js:21587:1)
//     at beginWork$1 (react-dom.development.js:27426:1)
//     at performUnitOfWork (react-dom.development.js:26557:1)