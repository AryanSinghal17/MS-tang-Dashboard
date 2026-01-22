import "./About.css";
import { useEffect, useState } from "react";
import ImageBackground from "./ImageBackground";

const About = () => {
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <ImageBackground heroCount={heroCount} />
      <div className="about-content-card">
        <header className="about-header">
          <h1>About Me</h1>
          <p>I am Aryan Singhal, a Computer Science student at Lovely Professional University with a strong passion for software development and complex problem-solving.</p>
        </header>

        <section className="about-section">
          <h2>Technical Expertise</h2>
          <p>
            My technical expertise includes proficiency in **C++, C, and JavaScript**, along with front-end development using **HTML, CSS, and React.js**. I have a solid foundation in Data Structures, Algorithms, and Object-Oriented Programming (OOP), complemented by experience with both MySQL and MongoDB databases. I am adept at using tools like Git, GitHub, and VS Code for version control and development.
          </p>
        </section>

        <section className="about-section">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>Movie-adda</h3>
            <p>
              An IMDb-inspired platform built with HTML, CSS, and JavaScript, where I focused on designing reusable UI components and implementing a clean, scalable front-end architecture.
            </p>
          </div>
          <div className="project-card">
            <h3>MS-tang</h3>
            <p>
              A Mustang-inspired car showcase platform developed in React.js, emphasizing reusable components and a scalable front-end architecture for optimal performance and maintainability
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Achievements & Certifications</h2>
          <ul className="achievements-list">
            <li><strong>LeetCode:</strong> Solved over 400 problems with a continuous streak of more than 300 days.</li>
            <li><strong>HackerRank:</strong> Secured a **3-Star rating in C++** and a **2-Star rating in SQL**.</li>
            <li><strong>Certifications:</strong>
              <ul>
                <li>Problem Solving (Intermediate) from HackerRank</li>
                <li>C++ and Data Structures from Coding Ninjas</li>
                <li>Fundamentals of DBMS from Great Learning</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;