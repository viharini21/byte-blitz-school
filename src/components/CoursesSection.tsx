import { CourseCard } from "./CourseCard";
import htmlCourse from "@/assets/html-course.png";
import cssCourse from "@/assets/css-course.png";
import jsCourse from "@/assets/js-course.png";
import pythonCourse from "@/assets/python-course.png";

export const CoursesSection = () => {
  const courses = [
    {
      title: "HTML Fundamentals",
      description: "Learn the building blocks of the web. Master HTML tags, elements, and structure to create your first web pages.",
      image: htmlCourse,
      level: "Beginner" as const,
      duration: "2 weeks",
      students: 15420,
      progress: 45,
      xp: 500,
      achievements: 8,
    },
    {
      title: "CSS Styling Magic",
      description: "Transform your HTML into beautiful, responsive designs. Learn selectors, flexbox, grid, and animations.",
      image: cssCourse,
      level: "Beginner" as const,
      duration: "3 weeks",
      students: 12350,
      progress: 0,
      xp: 750,
      achievements: 12,
    },
    {
      title: "JavaScript Adventures",
      description: "Bring your websites to life with interactive JavaScript. Master variables, functions, and DOM manipulation.",
      image: jsCourse,
      level: "Intermediate" as const,
      duration: "4 weeks",
      students: 9870,
      progress: 0,
      xp: 1000,
      achievements: 15,
      isLocked: true,
    },
    {
      title: "Python Quest",
      description: "Embark on a journey through Python programming. Learn syntax, data structures, and build real projects.",
      image: pythonCourse,
      level: "Beginner" as const,
      duration: "5 weeks",
      students: 8640,
      progress: 0,
      xp: 1200,
      achievements: 18,
      isLocked: true,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-orbitron text-foreground">Choose Your Path</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-pixel text-primary mb-6">
            Epic Coding Quests
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-orbitron">
            Embark on carefully crafted learning journeys designed to transform you from a coding novice to a digital hero.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 font-orbitron">
            Ready to begin your coding adventure?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-orbitron font-bold hover:bg-primary/90 transition-colors">
              View All Courses
            </button>
            <button className="px-8 py-3 border border-border bg-card text-foreground rounded-lg font-orbitron hover:bg-accent/10 transition-colors">
              Take Skill Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};