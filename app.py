from flask import Flask, jsonify
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def read_obj_file(file_path):
    with open(file_path, 'rb') as file:
        return file.read()

def encode_to_base64(binary_data):
    return base64.b64encode(binary_data)

@app.route('/get_obj_file', methods=['GET'])  # Define the route for this function
def get_obj_file():
    binary_data = read_obj_file("./../test_obj.obj")
    base64_data = encode_to_base64(binary_data)
    return jsonify({'file': base64_data.decode('utf-8')})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)  # Start the Flask app
