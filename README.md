# saper! 😁 

![](vids/title_slide.gif)

<center><b>S</b>urface <b>A</b>rea <b>P</b>resentation mak<b>ER</b></center>

<hr/>

## building/running
- use the Makefile
- [docs for manim-slides](https://eertmans.be/manim-slides/index.html)
```bash
manim example.py <name_of_class_in_file>
manim-slides <name_of_class_in_file>
```

## venv stuff
```bash
mkdir venv
python -m venv venv
source ./venv/bin/activate
```

## installing from requirements.txt
```bash
pip install -r requirements.txt
```

## fixed ssl stuff
- after activating venv
```bash
pip install urllib3==1.26.6 
```