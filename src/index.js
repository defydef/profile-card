import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="avatar.jpeg" alt="avatar profile" />
    </div>
  );
}

function Intro() {
  return (
    <main>
      <h1>Defy Defdef</h1>
      <p>
        I have always been passionate about building user-friendly and
        interactive web apps. In college, I was a member of the web development
        club and worked on several projects, including a student portal and a
        campus news website. I'm also a self-taught designer and has a keen eye
        for typography and color.
      </p>
    </main>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <li>
        <Skill name="HTML + CSS" bgColor="lightblue" emoji="&#128170;" />
      </li>
      <li>
        <Skill name="Javascript" bgColor="yellow" emoji="&#127829;" />
      </li>
      <li>
        <Skill name="Web Design" bgColor="red" emoji="&#127828;" />
      </li>
      <li>
        <Skill name="Git and Github" bgColor="pink" emoji="&#127871;" />
      </li>
      <li>
        <Skill name="React" bgColor="orange" emoji="&#127841;" />
      </li>
    </ul>
  );
}

function Skill(props) {
  return (
    <p className="skill" style={{ backgroundColor: props.bgColor }}>
      {props.name}
      <span> {props.emoji}</span>
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
