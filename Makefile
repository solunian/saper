default:
	manim saper.py Saper --renderer=opengl --write_to_movie
	manim-slides Saper

build:
	manim saper.py Saper --renderer=opengl --write_to_movie

run:
	manim-slides Saper

html:
	manim-slides convert Saper build/Saper.html --open