# saper! 😁 

![](vids/title_slide.gif)

**S**urface **A**rea **P**resentation mak**ER**

<hr/>

## building/running
- use the Makefile
- [docs for manim-slides](https://eertmans.be/manim-slides/index.html) and [manim-slides repo](https://github.com/jeertmans/manim-slides)
```bash
manim example.py <name_of_class_in_file>
manim-slides <name_of_class_in_file>
```

## creating web build
- convert to html with `make html`
- in build, clean it with `make` for vercel
- figure it out

## python venv setup
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