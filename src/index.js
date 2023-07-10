import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D"
  },

  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Docker",
    level: "beginner",
    color: "#FF3B00"
  }
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="testpic.jpeg" alt="test" />;
}
function Intro() {
  return (
    <div>
      <h1> Sai Naveen Srikaram </h1>
      <p>
        I am a professional software engineer having 1.2 EOY skilled in flask
        and react
      </p>
    </div>
  );
}
function Skillset() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillname={skill.skill} skilllevel={skill.level} skillcolor={skill.color}/>
      ))}
    </div>
  );
}
function Skill(props) {
  const {skillname,skilllevel,skillcolor}= props;
  const skillStyle = { backgroundColor: skillcolor };
  return (
    <div className="skill" style={skillStyle}>
      <span>{skillname}</span>
      <span>
        {skilllevel==="beginner"&&"🤓"}
        {skilllevel==="intermediate"&&"🧐"}
        {skilllevel==="advanced"&&"😎"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
