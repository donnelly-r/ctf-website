from flask import Blueprint, render_template, redirect, url_for

views = Blueprint(__name__, "views")

@views.route("/index")
def home():
    return render_template("index.html")

@views.route("/flag1")
def flag1():
    return render_template("flag1.html")
    
@views.route("/flag2")
def flag2():
    return render_template("flag2.html")
    
@views.route("/flag3")
def flag3():
    return render_template("flag3.html")    

@views.route("/flag4")
def flag4():
    return render_template("flag4.html")     
    
@views.route("/flag5")
def flag5():
    return render_template("flag5.html")    
    
@views.route("/flag6")
def flag6():
    return render_template("flag6.html")    

@views.route("/flag7")
def flag7():
    return render_template("flag7.html")

@views.route("/challenges/flag7_challenge")
def flag7challenge():
    return render_template("challenges/flag7_challenge.html")

@views.route("/flag8")
def flag8():
    return render_template("flag8.html")

@views.route("/challenges/sitemap")
def sitemap():
    return render_template("challenges/sitemap.html")

@views.route("/challenges/flag8_deprecated")
def flag8deprecated():
    return render_template("challenges/flag8_deprecated.html")

@views.route("/finish")
def finish():
    return render_template("finish.html")
        
@views.route("/template")
def template():
    return render_template("template.html")

@views.route("/")
def reroute():
    return redirect(url_for("views.home"))