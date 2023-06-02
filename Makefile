default:
	manim saper.py Saper --renderer=opengl --write_to_movie
	manim-slides Saper

default-ql:
	manim saper.py Saper --renderer=opengl --write_to_movie -ql
	manim-slides Saper

build:
	manim saper.py Saper --renderer=opengl --write_to_movie

run:
	manim-slides Saper --aspect-ratio keep

present:
	manim-slides Saper --fullscreen --aspect-ratio keep --start-paused

html:
	manim-slides convert Saper build/Saper.html --open -ccontrols=true -ctitle="saper!"