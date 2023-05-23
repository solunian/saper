from manim import *
from manim import opengl

# or: from manimlib import *
from manim_slides import Slide, ThreeDSlide
import math

class Saper3D(ThreeDSlide):

    def construct(self):
        self.slide1()
        self.next_slide()
        
    pass


class Saper(Slide, ThreeDScene):

    def tinywait(self):
        self.wait(0.1)

    def title_slide(self):
        ax = Axes(
            x_range=[0, 10, 2.5], y_range=[0, 4, 1], x_length=4, y_length=2.5, axis_config={"include_tip": False, }
        )
        labels = ax.get_axis_labels(x_label="x", y_label="y")
        graph = ax.plot(lambda x: -0.1*(x - 5)**2 + 3, color=MAROON)


        riemann = ax.get_riemann_rectangles(graph, dx=1.0, input_sample_type="center", color=[color.BLUE_B, color.GREEN_B])

        graph_group = VGroup(ax, labels, riemann, graph)

        # self.play(t.animate.set_value(x_space[minimum_index]))

        # TITLE SLIDE
        title = VGroup(
            Text("Surface Area of Rotation", font_size=60.0, t2c={"[:]": color.LIGHT_PINK}),
            Text("by Daniel, Bryan, Jacqueline, and Esther", font_size=36.0, t2c={"[:]": color.WHITE}),
        ).arrange(DOWN).to_edge(DOWN, buff=LARGE_BUFF*1.8)
        
        title_graph = graph_group.next_to(title, direction=UP, buff=MED_LARGE_BUFF)

        self.play(Write(title_graph), FadeIn(title))

    def slide3(self):
        axes = ThreeDAxes()
        circle = Circle(radius=3, color=BLUE)
        dot = Dot(color=RED)

        self.add(axes)

        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)


        func = lambda x: np.sin(x) + 2;

        # graph = axes.plot(, x_range=[-3, 3], color=RED)
        surface = opengl.OpenGLSurface (
            lambda u, v: axes.c2p(u, func(u) * np.cos(v), func(u) * np.sin(v)), u_range=[-3, 3], v_range=[0, np.pi * 2], color=RED
        )

        self.play(FadeIn(surface))
        self.begin_ambient_camera_rotation(rate=75 * DEGREES / 4)




    def slide1(self):
        # SLIDE 1
        dot = Dot([-2, -1, 0])
        dot2 = Dot([2, 1, 0])
        line = Line(dot.get_center(), dot2.get_center()).set_color(ORANGE)
        b1 = Brace(line)
        b1text = b1.get_text("Horizontal distance")
        b2 = Brace(line, direction=line.copy().rotate(PI / 2).get_unit_vector())
        b2text = b2.get_tex("x-x_1")
        slide1 = VGroup(line, dot, dot2, b1, b2, b1text, b2text)
        self.play(FadeIn(slide1))

    def slide2(self):
        
        sa_formula = MathTex(r"\int_{a}^{b}2 \pi f(x) \sqrt{1 +  f'(x)^ 2}dx")
        group = VGroup(sa_formula)
        self.play(Write(group))

    def construct(self):
        self.title_slide()
        
        self.next_slide()
        self.clear()
        
        self.slide1()
        
        self.next_slide()
        self.clear()

        self.slide2()
        self.next_slide()
        self.clear()

        # 3d anuimation, takes a while to render
        self.slide3()

        self.next_slide()
        self.clear()
