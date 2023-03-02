from flask import Blueprint, render_template, redirect, url_for

views = Blueprint(__name__, "views")

@views.route("/index")
def home():
    return render_template("index.html")

@views.route("/flag1")
def flag1():
    return render_template("flag1.html")

@views.route("/")
def reroute():
    return redirect(url_for("views.home"))