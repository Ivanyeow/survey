import React, { useState, useEffect } from "react";
// import type { RadioChangeEvent } from "antd";
import { Input, Radio, Space } from "antd";

const Question = ({ data, formValues, setFormValues }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setFormValues({ ...formValues, [data.question]: value });
  }, [value]);

  const handleRadioChange = (e) => {
    setValue(e.target.value);
  };

  const checkMultiple = (data) => {
    if (data.question.toLowerCase().includes("Select all that apply")) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <h1>{data.question}</h1>
      {checkMultiple(data) === false ? (
        <Radio.Group onChange={handleRadioChange}>
          <Space direction="vertical">
            {data.choices.map((answers, index) => (
              <Radio value={answers} key={index}>
                {answers}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      ) : (
        <div>Check box</div>
      )}
    </div>
  );
};

export default Question;
