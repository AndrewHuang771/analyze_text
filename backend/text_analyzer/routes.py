from flask import request, render_template
from text_analyzer import app

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/asdf')
def index_asdf():
    return render_template("index.html")

