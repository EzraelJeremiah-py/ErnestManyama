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
            {
                "name": "Python",
                "details": "Versatile programming language used for backend development, data analysis, automation, and machine learning projects."
            },
            {
                "name": "Flask",
                "details": "Lightweight Python web framework ideal for building REST APIs and small web applications, powering your portfolio backend."
            },
            {
                "name": "React",
                "details": "Modern JavaScript library for building interactive user interfaces, used in your Next.js frontend to display portfolio data."
            },
            {
                "name": "SQL",
                "details": "Structured Query Language for managing and analyzing relational databases, essential for handling data-driven solutions."
            }
        ]
,
        "qualifications":"[
        "Data Science"
        ]
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
            "email": "ernestmanyama93@gmail.com",
            "Phone Number":"0686558704",
            "linkedin": "https://linkedin.com/in/ernestmanyama",
            "github": "https://github.com/ErnestManyama"
        }
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
