import { useState } from "react";
import { predictDiabetes } from "../api";

export default function PredictionForm() {
  const [form, setForm] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = Object.values(form).map(Number);
    const res = await predictDiabetes(values);

    setResult(res.result);
  };

  return (
    <div className="bg-gray-900 p-5">
      <div className="w-1/4 rounded-2xl flex-col bg-gray-300 text-black p-10 m-auto">
        <h2 className="font-bold text-center text-xl p-2 uppercase">
          Diabetes Prediction
        </h2>

        <form className="" onSubmit={handleSubmit}>
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key}
              value={form[key]}
              onChange={handleChange}
              required
            />
          ))}
          <div className="text-center active:scale-95">
            <button className="" type="submit">
              Predict
            </button>
          </div>
        </form>

        {result && <h3 className="font-bold text-xl p-4">Result: {result}</h3>}
      </div>
    </div>
  );
}
