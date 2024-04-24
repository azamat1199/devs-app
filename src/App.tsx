import React from "react";
import "./App.css";
import { GlobalRoutes } from "./routes/global-routes";
import { ScrollToTop } from "./hooks/helpers/ScrollToTop/ScrollToTop";

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
