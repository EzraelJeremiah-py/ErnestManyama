from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow requests from your Next.js frontend

@app.route("/api/portfolio", methods=["GET"])
def portfolio():
    data = {
        "name": "Ernest Manyama",
        "about": "Software developer passionate about data-driven solutions.",
        "skills": [
            {"name": "Python", "details": "Versatile programming language..."},
            {"name": "Flask", "details": "Lightweight Python web framework..."},
            {"name": "React", "details": "Modern JavaScript library..."},
            {"name": "SQL", "details": "Structured Query Language..."}
        ],
        "qualifications": [
            "Data Science"
        ],
        "projects": [
            {
                "title": "E-commerce Analytics",
                "description": "Analyzed customer behavior and sales trends.",
                "link": "https://github.com/ErnestManyama/ecommerce-analytics"
            },
            {
                "title": "IoT Monitoring System",
                "description": "Simulated IoT devices for real-time monitoring.",
                "link": "https://github.com/ErnestManyama/iot-monitoring"
            }
        ],
        "contact": {
            "email": "erenestmanyama93@gmail.com",
            "Phone Number": "0686558704",
            "linkedin": "https://linkedin.com/in/ernestmanyama",
            "github": "https://github.com/ErnestManyama"
        }
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
