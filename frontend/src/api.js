import axios from "axios";

export const predictDiabetes = async (features) => {
  const res = await axios.post("https://diabetes-predictor-1-7ue9.onrender.com/predict", {
    features: features,
  });
  return res.data;
};
