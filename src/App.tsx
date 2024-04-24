import React from "react";
import "./App.css";
import { GlobalRoutes } from "./configs/global-routes";
import { ScrollToTop } from "./services/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <div className="App">
        <main className="main pl-14">
          <ScrollToTop />
          <GlobalRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
