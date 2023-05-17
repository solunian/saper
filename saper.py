from manim import *
# or: from manimlib import *
from manim_slides import Slide

class Saper(Slide):
    def construct(self):
        title = VGroup(
            Text("Surface Area of Rotation", t2c={"[:]": BLUE}),
            # Text("to slides presentation", t2c={"to": BLUE}),
            Text("by Daniel, Bryan, Jacqueline, and Esther", t2c={"[:]": ORANGE}),
        ).arrange(DOWN)

        self.play(FadeIn(title))
        self.next_slide()