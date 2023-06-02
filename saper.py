from manim import *
from manim import opengl

from manim_slides import Slide, ThreeDSlide

OFFSET_TAU = PI * 2 + 0.01


class Saper3D(ThreeDSlide):
    def construct(self):
        self.slide1()
        self.next_slide()
        

class Saper(Slide, ThreeDScene):

    def fade_out_clear(self):
        self.play(*[FadeOut(Group(o)) for o in self.mobjects])
        self.clear()
        

    def title_slide(self):
        ax = Axes(
            x_range=[0, 10, 2.51], y_range=[0, 4, 1.1], x_length=4, y_length=2.5, axis_config={"include_tip": False, }
        )
        labels = ax.get_axis_labels(x_label="x", y_label="y")
        calc_text = Text("ap calc bc!", font_size=15, fill_opacity=0.6).next_to(ax, DOWN).shift([1.6, 0.1, 0])
        graph = ax.plot(lambda x: -0.1*(x - 5)**2 + 3, color=MAROON)


        riemann = ax.get_riemann_rectangles(graph, dx=1.0, input_sample_type="center", color=[color.BLUE_B, color.GREEN_B])

        graph_group = VGroup(ax, labels, riemann, graph, calc_text)

        # self.play(t.animate.set_value(x_space[minimum_index]))

        # TITLE SLIDE
        title = VGroup(
            Text("Surface Area of Rotation", font_size=60.0, t2c={"[:]": color.LIGHT_PINK}),
            Text("by Daniel, Bryan, Jacqueline, and Esther", font_size=36.0, t2c={"[:]": color.WHITE}),
        ).arrange(DOWN).to_edge(DOWN, buff=LARGE_BUFF*1.5)
        
        title_graph = graph_group.next_to(title, direction=UP, buff=MED_LARGE_BUFF)

        self.play(Write(title_graph), FadeIn(title))


    def info_slide(self):
        q = Text("Surface Area of Rotation", font_size=50).to_edge(UP, buff=LARGE_BUFF * 2)
        a = Text("The surface area that a graph makes when rotated!", font_size=40, gradient=(TEAL_B, GREEN_B)).next_to(q, DOWN, buff=SMALL_BUFF * 3)
        pi_creature = opengl.OpenGLImageMobject("imgs/hooray.png").next_to(a, DOWN, buff=SMALL_BUFF / 2)

        self.play(FadeIn(VGroup(q)))
        self.play(Write(VGroup(a)))
        self.add(opengl.OpenGLGroup(pi_creature))

        self.wait()


    def review_slide(self):
        review_text = Text("Review").to_corner(UL, buff=LARGE_BUFF)
        self.play(Write(review_text))

        # with circle and length of curve
        r_value = 1.5
        circle = Circle(radius=r_value, color=RED)
        radius = Line(start=circle.get_center(), end=circle.get_right())
        r_text = Text("r").next_to(radius, direction=DOWN)

        self.play(GrowFromCenter(circle))
        self.play(Write(VGroup(radius, r_text)))

        self.wait(0.1)

        # TODO: figure out how to set the damn length of this line

        # start = Dot((-r_value * PI, 0, 0))
        # end = Dot((r_value * PI, 0, 0))
        circum = Line(start=(-r_value * PI, 0, 0), end=(r_value * PI, 0, 0)).to_edge(UP, buff=LARGE_BUFF * 2.5).set_color(RED)
        # circum.set_length(-r_value * PI * 2)
        circum_text = Text("circumference", font_size=40, color=RED).next_to(circum, direction=UP, buff=MED_SMALL_BUFF * 1.5)

        new_radius = Line(start=(-r_value / 2, 0, 0), end=(r_value / 2, 0, 0)).next_to(circum, direction=DL, buff=0).shift([r_value, -0.5, 0])
        two_line = Line(start=(-r_value / 2, 0, 0), end=(r_value / 2, 0, 0)).next_to(new_radius, direction=RIGHT, buff=0).set_color(BLUE)
        pi_line = Line(start=(0, 0, 0), end=(r_value * PI * 2 - r_value * 2, 0, 0)).next_to(two_line, direction=RIGHT, buff=0).set_color(PURPLE)


        new_r_text = MathTex(r"C = 2 \pi r").next_to(VGroup(new_radius, two_line, pi_line), direction=DOWN, buff=MED_SMALL_BUFF) # .next_to(new_radius, direction=RIGHT, buff=MED_LARGE_BUFF)

        self.play(Transform(circle, circum), Write(VGroup(circum_text)), FadeIn(VGroup(two_line, pi_line)), Transform(radius, new_radius), FadeOut(r_text), FadeIn(VGroup(new_r_text)))

        self.wait()


        arc_ax = Axes(
            x_range=[0, 10, 2.51], y_range=[0, 4, 1.1], x_length=4, y_length=2.5, axis_config={"include_tip": False, }
        ).to_edge(DL, buff=LARGE_BUFF * 1.5).shift((0, -0.5, 0))
        labels = arc_ax.get_axis_labels(x_label="x", y_label="y")

        sinfunc = lambda x : -0.1 * (x - 5) ** 2 + 3
        graph = arc_ax.plot(sinfunc, color=WHITE)
        arc = arc_ax.plot(sinfunc, x_range=[3, 6], color=MAROON)

        a = Dot(arc.get_start(), color=MAROON)
        b = Dot(arc.get_end(), color=MAROON)
        a_text = Text("a", font_size=20, color=ORANGE).next_to(a, direction=UP, buff=0.1)
        b_text = Text("b", font_size=20, color=ORANGE).next_to(b, direction=UP, buff=0.1)

        arc_text = Text("Length of a Curve", font_size=40, color=MAROON)
        formula = MathTex(r"\int_{a}^{b} \sqrt{1 +  f'(x)^ 2}dx").next_to(arc_text, direction=DOWN, buff=MED_LARGE_BUFF)

        arc_group = VGroup(arc_text, formula).to_edge(DR, buff=LARGE_BUFF * 1.5).shift((-1, -0.5, 0))

        self.play(Write(VGroup(arc_ax, labels, graph)))
        self.play(Write(VGroup(arc, a, b, a_text, b_text)))
        self.play(Write(arc_group))

        self.wait()

        
    def sin_3d_slide(self):
        # Riemann cylinders on a curve
        # Each slice of surface area → A = 2pi * f((Xa + Xb)/2) * change in length
        # Xa ~= Xb because riemann
        # Replace function with f(x) in equation
        # Replace length with definition of two points
        # Final Riemann sum definition 
        # A = ∑i = 1 → n( 2pi * f(x) * sqrt(ds;kasdf) * change in x)

        self.set_camera_orientation(0, 0, 0)
        axes = ThreeDAxes(x_length=8, y_length=6, z_length=4)
        labels = axes.get_axis_labels(x_label="x", y_label="y", z_label="z")

        self.add(axes)

        self.set_camera_orientation(phi=0 * DEGREES, theta=-90 * DEGREES, gamma=90 * DEGREES)
        # self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES,)


        func = lambda x: np.sin(x) + 2
        curve = axes.plot(func, color=color.ORANGE, stroke_width=8)
        curve_text = MathTex(r"f(x) = \sin(x) + 2", font_size=25).next_to(curve, direction=UP, buff=MED_SMALL_BUFF).shift((2, 0, 0))


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


        self.play(Write(VGroup(axes, labels, curve, curve_text)))
        
        self.next_slide()
        self.play(FadeOut(VGroup(curve_text)))

        # rotation from flat plane
        self.begin_ambient_camera_rotation(rate=120 * DEGREES, about="theta")
        self.begin_ambient_camera_rotation(rate=75 * DEGREES, about="phi")
        self.begin_ambient_camera_rotation(rate=-90 * DEGREES, about="gamma")

        self.wait()

        # rotation needs to stop apparently
        self.stop_ambient_camera_rotation("theta")
        self.stop_ambient_camera_rotation("phi")
        self.stop_ambient_camera_rotation("gamma")


        for c in circles:
            self.play(Create(c))

        self.next_slide()

        self.play(*[FadeOut(c) for c in circles])

        self.play(Create(surface))


    def derive_slide(self):

        # derive formula for surface area of rotation
        # assuming f(x1) approxmately equals f(x2)
        title = Text("Deriving the Formula", color=GREEN, gradient=(GREEN, TEAL)).to_edge(UP, buff=LARGE_BUFF * 1.2)
        subt = Text("We need to find the summation of the surface areas of cylinders", font_size=30).next_to(title, DOWN, buff=SMALL_BUFF * 3)

        # each cylinder has a radius of f(x) and a width that is the distance between (x1, f(x1)) and (x2, f(x2))
        subt2 = Text("along the curve. Each cylinder has a radius of f(x) and a width", font_size=30).next_to(subt, DOWN, buff=SMALL_BUFF * 3)
        # the distance between (x1, f(x1)) and (x2, f(x2)))
    
        b2 = VGroup(
            Text("that is the distance between ", font_size=30),
            MathTex(r"P_1(x_1, f(x_1))", font_size=30),
            Text("and", font_size=30),
            MathTex(r"P_2(x_2, f(x_2)) \text{.}", font_size=30),
        ).arrange(RIGHT).next_to(subt2, DOWN, buff=SMALL_BUFF * 3)


        arc_ax = Axes(
            x_range=[0, 10, 2.51], y_range=[0, 4, 1.1], x_length=4, y_length=2.5, axis_config={"include_tip": False, }
        ).next_to(b2, direction=DOWN, buff=LARGE_BUFF)
        labels = arc_ax.get_axis_labels(x_label="x", y_label="y")

        sinfunc = lambda x : -0.1 * (x - 5) ** 2 + 3
        graph = arc_ax.plot(sinfunc, color=WHITE)
        arc = arc_ax.plot(sinfunc, x_range=[3, 6], color=MAROON)
        partit = arc_ax.plot(sinfunc, x_range=[3, 4], color=GREEN)

        x1_dot = Dot(partit.get_start(), color=GREEN)
        x2_dot = Dot(partit.get_end(), color=GREEN)
        x1_text = MathTex("P_1", font_size=20, color=GREEN).next_to(x1_dot, direction=UP, buff=0.1)
        x2_text = MathTex("P_2", font_size=20, color=GREEN).next_to(x2_dot, direction=UP, buff=0.1)

        self.play(FadeIn(VGroup(title)))
        self.play(Write(VGroup(subt)))
        self.play(Write(VGroup(subt2)), Write(b2))
        self.play(FadeIn(VGroup(arc_ax, labels, graph, arc, partit, x1_dot, x2_dot, x1_text, x2_text)))


    def riemann_lim_int_slide(self):
        cyl = MathTex(r"\text{Cylinder 1} + \text{Cylinder 2} + \text{Cylinder 3} + \dots + \text{Cylinder n}", font_size=36).to_edge(UP, buff=MED_LARGE_BUFF * 2)

        partarea = MathTex(r"\text{Cylinder 1: } 2 \pi \frac{f(x_1) + f(x_2)}{2} \left| P_1 - P_2 \right|", font_size=36).next_to(cyl, DOWN, buff=MED_SMALL_BUFF * 2)

        br = Line([-5, 0, 0], [5, 0, 0]).next_to(partarea, direction=DOWN, buff=MED_LARGE_BUFF * 0.7)

        # riemann
        riemann = MathTex(r"\sum_{i=1}^{n} 2 \pi f(x_i^*) (x_{i+1} - x_i^*)", font_size=36).next_to(partarea, DOWN, buff=MED_SMALL_BUFF * 3)
        # limit
        lim = MathTex(r"\lim_{n \to \infty}\sum_{i=1}^{n} 2 \pi f(x_i^*) (x_{i+1} - x_i^*)", font_size=36).next_to(riemann, DOWN, buff=MED_SMALL_BUFF * 1.8)
        # integral notation
        integ = MathTex(r"\int_{a}^{b} 2 \pi f(x) \sqrt{1 + f'(x)^2} dx", font_size=36).next_to(lim, DOWN, buff=MED_SMALL_BUFF * 1.8)
        
        r_lab = Text("Riemann Sum", color=RED, font_size=16, should_center=False)
        l_lab = Text("Limit of Riemann Sum", color=YELLOW_B, font_size=16, should_center=False)
        i_lab = Text("Integral", color=GREEN, font_size=16, should_center=False)

        labels = VGroup(r_lab, l_lab, i_lab).arrange(DOWN, buff=MED_LARGE_BUFF * 2.7, center=False).next_to(br.get_start(), DOWN, buff=MED_SMALL_BUFF).shift((0.5, 0, 0))

        self.play(Write(VGroup(cyl)))
        self.next_slide()
        self.play(Write(VGroup(partarea)))
        self.next_slide()

        self.play(Write(VGroup(br, riemann, r_lab)))
        self.next_slide()
        self.play(Write(VGroup(lim, l_lab)))
        self.next_slide()
        self.play(Write(VGroup(integ, i_lab)))
    

    def questions_slide(self):
        self.play(Write(VGroup(
            Text("Questions!", color=TEAL_B),
            Text("¡Preguntas!", color=YELLOW_B),
            Text("问题!", color=RED_B),
            Text("질문!", color=PURPLE_B),
            Text("質問!", color=LIGHT_PINK)
            ).arrange(DOWN)))

    def credits_slide(self):
        title = Text("Credits", font_size=65, color=color.PINK).to_edge(UP, buff=LARGE_BUFF)

        tools = VGroup(
            Text("Tools Used", font_size=50, color=color.TEAL),
            Text("manim by 3b1b", font_size=36),
            Text("manim-slides", font_size=36),
            Tex(r"\LaTeX"),
        ).arrange(DOWN).to_edge(RIGHT, buff=LARGE_BUFF * 2).shift([0, 0.5, 0])

        dev = VGroup(
            Text("Team", font_size=50, color=color.GREEN),
            Text("Developers - Daniel, Bryan", font_size=36),
            Text("Lesson Planners - Esther, Jacqueline", font_size=36)
        ).arrange(DOWN).to_edge(LEFT, buff=LARGE_BUFF).shift([0, 0.5, 0])

        links = VGroup(
            Text("website: https://saper-two.vercel.app/", font_size=24, t2c={"[9:]": color.BLUE}),
            Text("source code: https://github.com/solunian/saper", font_size=24, t2c={"[13:]": color.BLUE}),
        ).arrange(DOWN).to_edge(DOWN, buff=LARGE_BUFF).shift([-1, 0, 0])

        qrcode = opengl.OpenGLImageMobject("imgs/link_qrcode.png", width=2, height=2).next_to(links, RIGHT, buff=MED_SMALL_BUFF * 2)

        self.add(opengl.OpenGLGroup(qrcode))
        self.play(FadeIn(VGroup(title), tools, dev, links))
        

        self.wait()
        

    def construct(self):
        self.title_slide()
        
        self.next_slide()
        self.fade_out_clear()

        self.info_slide()
        
        self.next_slide()
        self.fade_out_clear()

        self.review_slide()
        
        self.next_slide()
        self.fade_out_clear()

        self.sin_3d_slide()

        self.next_slide()
        self.fade_out_clear()
        self.set_camera_orientation(0, 0, 0)

        self.derive_slide()

        self.next_slide()
        self.fade_out_clear()

        self.riemann_lim_int_slide()
        
        self.next_slide()
        self.fade_out_clear()

        self.questions_slide()

        self.next_slide()
        self.fade_out_clear()

        self.credits_slide()
