import os
from flask import Flask

app = Flask(__name__)
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# App Configuration
if app.config['ENV'] == "production":
    app.config.from_object('config.config.ProductionConfig')
elif app.config['ENV'] == "testing":
    app.config.from_object('config.config.TestingConfig')
else:   
    app.config.from_object('config.config.DevelopmentConfig')

from text_analyzer import routes
