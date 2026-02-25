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
    <div className="card">
      <h2>Diabetes Prediction</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Predict</button>
      </form>

      {result && <h3>Result: {result}</h3>}
    </div>
  );
}
