import json

from flask import request, render_template
from text_analyzer import app
from text_analyzer.analyze import run_analysis

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/analyze', methods=['POST'])
def analyze_text():
    text = json.loads(request.data)
    info = run_analysis(text)
    return info
