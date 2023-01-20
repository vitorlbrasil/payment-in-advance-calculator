import React, { useState } from "react";
import "./App.css";
import { IAnticipatedAmounts } from "./interfaces/IAnticipatedAmounts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormContainer from "./components/FormContainer";
import AnticipatedAmountsContainer from "./components/AnticipatedAmountsContainer";

function App() {
  const [anticipatedAmounts, setAnticipatedAmounts] =
    useState<IAnticipatedAmounts | null>(null);

  return (
    <div className="App">
      <ToastContainer />

      <div className="container">
        <FormContainer setAnticipatedAmounts={setAnticipatedAmounts} />

        {anticipatedAmounts && (
          <AnticipatedAmountsContainer
            anticipatedAmounts={anticipatedAmounts}
          />
        )}
      </div>
    </div>
  );
}

export default App;
