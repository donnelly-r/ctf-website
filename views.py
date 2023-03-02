from flask import Blueprint, render_template

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/flag1")
def flag1():
    return render_template("flag1.html")