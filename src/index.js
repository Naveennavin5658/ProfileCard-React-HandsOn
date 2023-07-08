import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
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
      <Skill name="HTML+CSS" emoji="💪" color="pink" />
      <Skill name="Python [Flask]" emoji="💪" color="skyblue" />
      <Skill name="Javascript [React]" emoji="💪" color="yellow" />
      <Skill name="DataStrctures & Algo" emoji="💪" color="grey" />
    </div>
  );
}
function Skill(props) {
  const skillStyle = { backgroundColor: props.color };
  return (
    <div className="skill" style={skillStyle}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
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
