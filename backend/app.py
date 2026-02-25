from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model
model, scaler = pickle.load(open("model/diabetes_model.pkl", "rb"))

@app.route("/")
def home():
    return "Diabetes Prediction API Running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json["features"]

    data = scaler.transform([data])
    prediction = model.predict(data)[0]

    return jsonify({
        "prediction": int(prediction),
        "result": "Diabetes" if prediction == 1 else "No Diabetes"
    })

if __name__ == "__main__":
    app.run(debug=True)