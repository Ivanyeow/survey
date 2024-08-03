import "./App.css";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import { surveyQuestions } from "./constant/questions";
import React, { useState } from "react";
import { Button } from "antd";
const App = () => {
  const [formValues, setFormValues] = useState();
  const onSubmit = () => {
    console.log(formValues);
  };

  // const onSubmit = () => {

  // };

  return (
    <>
      {/* start of navbar */}

      <Navbar />
      {/* end of navbar */}
      {/* start of banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          className="object-none object-top w-full h-full"
          src="https://images2.alphacoders.com/134/thumb-1920-1347610.png"
          alt="Hot Spicy Chicken Sauce"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-2xl p-2 rounded">
            HOT SPICY CHICKEN SAUCE
          </span>
        </div>
      </div>
      {/* end of banner */}
      {/* start of questionaire section */}
      <div className="bg-yellow-200">
        Just a couple of questions...
        {surveyQuestions.map((q, index) => (
          <Question
            key={index}
            data={q}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        ))}
        <Button type="primary" size="large" onClick={onSubmit}>
          Share your thoughts!
        </Button>
      </div>

      {/* start of questionaire section */}
    </>
  );
};

export default App;
