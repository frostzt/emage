import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Upload from "./Components/UploadComponent/Upload";

// Style
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Upload} />
      </Switch>
    </div>
  );
}

export default App;
