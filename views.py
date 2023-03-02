from flask import Blueprint

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return "<h1>landing page</h1>"

@views.route("/flag1")
def flag1():
    return "<h1>flag 1</h1>"