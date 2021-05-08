import React from "react";

//image
import image from "../src/836 [Converted].svg";

import Store from "./store/store";
import { Provider } from "react-redux";

import { Link } from "react-router-dom";
//routes
import Routes from "./routes";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/tech">Technology</Link>
            </li>
          </ul>
        </nav>
        <header>
          <h1>NEWS FOR YOU📰</h1>
          {/* <h2>Deepak Mohit Priyank Pushkar</h2> */}
          {/* <h3>Ham chaar chutiye phir se S laayenge😁🤣😆</h3> */}

          <img src={image} />
        </header>

        <main>
          <Routes />
        </main>
      </div>
    </Provider>
  );
}

export default App;
