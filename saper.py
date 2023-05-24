from manim import *
from manim import opengl

# or: from manimlib import *
from manim_slides import Slide, ThreeDSlide
import math

OFFSET_TAU = PI * 2 + 0.01


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


    # Riemann cylinders on a curve
    # Each slice of surface area → A = 2pi * f((Xa + Xb)/2) * change in length
    # Xa ~= Xb because riemann
    # Replace function with f(x) in equation
    # Replace length with definition of two points
    # Final Riemann sum definition 
    # A = ∑i = 1 → n( 2pi * f(x) * sqrt(ds;kasdf) * change in x)

    def slide4(self):
        axes = ThreeDAxes(x_length=8, y_length=6, z_length=4)
        labels = axes.get_axis_labels(x_label="x", y_label="y", z_label="z")
        # circle = Circle(radius=3, color=BLUE)
        # dot = Dot(color=RED)

        self.add(axes)

        self.set_camera_orientation(phi=0 * DEGREES, theta=-90 * DEGREES, gamma=90 * DEGREES)
        # self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES,)


        func = lambda x: np.sin(x) + 2
        curve = axes.plot(func, color=color.ORANGE, stroke_width=8)


        # generate surface for the func plot
        surface = opengl.OpenGLSurface (
            lambda u, v: axes.c2p(u, func(u) * np.cos(v), func(u) * np.sin(v)), u_range=[-3, 3], v_range=[0, OFFSET_TAU], 
            color=RED, opacity=0.5
        )

        # generate the "riemann circle trapezoid thingys"
        circles = []
        start = -3.0
        stop = 3.0
        partitions = 8
        colors = [PURPLE, LIGHT_PINK, MAROON, ORANGE, YELLOW_B, GREEN, TEAL, BLUE]
        dx = (stop - start) / partitions
        for i in np.arange(start, stop, dx):
            linef = lambda x: ((func(i + dx) - func(i)) / dx) * (x - i) + func(i)
            
            circles.append(opengl.OpenGLSurface (
                lambda u, v: axes.c2p(u, linef(u) * np.cos(v), linef(u) * np.sin(v)), u_range=[i, i + dx], v_range=[0, OFFSET_TAU], 
                color=colors[int((i + start) / dx)], opacity=0.8, gloss=0.1, shadow=0.1
            ))



        # 
        self.play(Write(VGroup(axes, labels, curve)))
        
        self.next_slide()

        # rotation from flat plane
        self.begin_ambient_camera_rotation(rate=120 * DEGREES, about="theta")
        self.begin_ambient_camera_rotation(rate=75 * DEGREES, about="phi")
        self.begin_ambient_camera_rotation(rate=-90 * DEGREES, about="gamma")

        self.wait()

        # rotation needs to stop apparently
        self.stop_ambient_camera_rotation("theta")
        self.stop_ambient_camera_rotation("phi")
        self.stop_ambient_camera_rotation("gamma")


        self.play(Create(surface))

        self.next_slide()
        
        self.play(FadeOut(surface))

        for c in circles:
            self.play(Create(c), subcaption_duration=0.001)
        

    def construct(self):
        # self.title_slide()
        
        # self.next_slide()
        # self.clear()

        # self.slide1()
        
        # self.next_slide()
        # self.clear()

        # self.slide2()
        # self.next_slide()
        # self.clear()

        # # 3d anuimation, takes a while to render
        # self.slide3()

        # self.next_slide()
        # self.clear()

        self.slide4()

        self.next_slide()
        self.clear()


