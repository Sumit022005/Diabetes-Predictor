import axios from "axios";

export const predictDiabetes = async (features) => {
  const res = await axios.post("http://127.0.0.1:5000/predict", {
    features: features,
  });
  return res.data;
};
