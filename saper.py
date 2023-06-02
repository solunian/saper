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

    def fade_out_clear(self):
        self.play(*[FadeOut(Group(o)) for o in self.mobjects])
        self.clear()
        

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

    def info_slide(self):
        q = Text("Surface Area of Rotation", font_size=50).to_edge(UP, buff=LARGE_BUFF * 2)
        a = Text("The surface area that a graph makes when rotated!", font_size=40, gradient=(TEAL_B, GREEN_B)).next_to(q, DOWN, buff=SMALL_BUFF * 3)
        pi_creature = opengl.OpenGLImageMobject("imgs/hooray.png").next_to(a, DOWN, buff=SMALL_BUFF / 2)

        self.play(FadeIn(VGroup(q)))
        self.play(Write(VGroup(a)))
        self.add(opengl.OpenGLGroup(pi_creature))

        self.wait()



    def derivation_slide(self):

        # derive formula for surface area of rotation
        # assuming f(x1) approxmately equals f(x2)
        q = Text("Deriving the Formula", font_size=50).to_edge(UP, buff=LARGE_BUFF * 2)
        a = Tex(r"We're finding the surface area of a cylinder multiple times", font_size=40, gradient=(TEAL_B, GREEN_B)).next_to(q, DOWN, buff=SMALL_BUFF * 3)

        # each cylinder has a radius of f(x) and a width that is the distance between (x1, f(x1)) and (x2, f(x2))
        b = Text("Each cylinder has a radius of f(x) and a width that is the distance between (x1, f(x1)) and (x2, f(x2)))", font_size=40, gradient=(TEAL_B, GREEN_B)).next_to(a, DOWN, buff=SMALL_BUFF * 3)
        c = MathTex(r"\text{Cylinder } 1: 2 \pi f(x_1) \cdot (x_2 - x_1)", font_size=40, gradient=(TEAL_B, GREEN_B)).next_to(a, DOWN, buff=SMALL_BUFF * 3)

        # sum all the cylinders together
        d = MathTex(r"\text{Cylinder } 1 + \text{Cylinder } 2 + \text{Cylinder } 3 + \dots + \text{Cylinder } n", font_size=40, gradient=(TEAL_B, GREEN_B)).next_to(c, DOWN, buff=SMALL_BUFF * 3)

        # replace sum with sigma notation
        e = MathTex(r"\sum_{i=1}^{n} 2 \pi f(x_i) \cdot (x_{i+1} - x_i)", font_size=40, gradient=(TEAL_B, GREEN_B)).next_to(c, DOWN, buff=SMALL_BUFF * 3)
        # integral notation
        f = MathTex(r"\int_{a}^{b} 2 \pi f(x) \cdot \sqrt{1 + f'(x)^2} dx", font_size=40, gradient=(TEAL_B, GREEN_B)).next_to(c, DOWN, buff=SMALL_BUFF * 3)


        self.play(FadeIn(VGroup(q)))
        self.play(Write(VGroup(a)))
        self.play(Write(VGroup(b)))
        self.play(Write(VGroup(c)))

        self.play(Write(VGroup(d)))
        # transform sum to sigma notation
        self.next_slide()
        self.play(TransformMatchingTex(d, e))
        self.next_slide()

        # transform sigma notation to integral notation
        self.play(TransformMatchingTex(e, f))
        self.next_slide()






        




    # with circle and length of curve
    def review_slide(self):
        r_value = 1.5
        circle = Circle(radius=r_value, color=RED)
        radius = Line(start=circle.get_center(), end=circle.get_right())
        r_text = Text("r").next_to(radius, direction=DOWN)

        self.play(GrowFromCenter(circle))
        self.play(Write(VGroup(radius, r_text)))

        self.next_slide()

        # TODO: figure out how to set the damn length of this line

        # start = Dot((-r_value * PI, 0, 0))
        # end = Dot((r_value * PI, 0, 0))
        circum = Line(start=(-r_value * PI, 0, 0), end=(r_value * PI, 0, 0)).to_edge(UP, buff=LARGE_BUFF * 2.5).set_color(RED)
        # circum.set_length(-r_value * PI * 2)
        circum_text = Text("circumference", color=RED).next_to(circum, direction=UP, buff=MED_SMALL_BUFF * 1.5)

        new_radius = Line(start=(0, -r_value / 2, 0), end=(0, r_value / 2, 0)).next_to(circum, direction=DL, buff=MED_LARGE_BUFF)
        # new_radius.set_length(r_value)
        new_r_text = MathTex(r"r \cdot 2 \cdot \pi").next_to(new_radius, direction=RIGHT, buff=MED_LARGE_BUFF)

        self.play(Transform(circle, circum), Write(VGroup(circum_text)), Transform(radius, new_radius), FadeOut(r_text), FadeIn(VGroup(new_r_text)))
        
        
        self.wait()

    # Riemann cylinders on a curve
    # Each slice of surface area → A = 2pi * f((Xa + Xb)/2) * change in length
    # Xa ~= Xb because riemann
    # Replace function with f(x) in equation
    # Replace length with definition of two points
    # Final Riemann sum definition 
    # A = ∑i = 1 → n( 2pi * f(x) * sqrt(ds;kasdf) * change in x)

    def sin_3d_slide(self):
        self.set_camera_orientation(0, 0, 0)
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

        
        self.play(*[Create(c) for c in circles])

        self.next_slide()

    # TODO: BRYAN 
    # diagram for riemann approx, Pa Pb
    def riemann_slide(self):
        pass
    
    # deriving formula just latex
    def derive_slide(self):
        pass

    # vertical / horizontal definition
    def def_slide(self):
        pass

    def construct(self):
        self.title_slide()
        
        self.next_slide()
        self.fade_out_clear()

        self.info_slide()
        
        self.next_slide()
        self.fade_out_clear()

        self.derivation_slide()

        self.review_slide()
        
        self.next_slide()
        self.fade_out_clear()

        # self.sin_3d_slide()