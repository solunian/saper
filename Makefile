default:
	manim saper.py Saper
	manim-slides Saper

build:
	manim saper.py Saper

run:
	manim-slides Saper

run_html:
	manim-slides convert Saper build/Saper.html --open