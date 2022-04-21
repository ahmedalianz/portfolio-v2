import "./experience.scss";

export default function Experience() {
  const education = [
    {
      name: "National Telecommunication Institute (NTI)",
      time: "Nov 2021 - Dec 2021",
    },
    {
      name: "Shoubra Faculty of Engineering Banha University",
      time: "Sep 2012 - June 2016",
    },
  ];
  const experiences = [
    {
      title: "Front End Developer",
      company: "Websquids LLC",
      time: "Dec 2021 - Present",
    },
  ];
  return (
    <div className="experience-container">
      <div className="section">
        <h2 className="title">
          <span>Experience</span>
        </h2>
        <div className="experiences-box">
          {experiences.map(({ title, company, time }, i) => (
            <div className="experience" key={i}>
              <div className="title">{title}</div>
              <div className="time">{company}</div>
              <div className="time">{time}</div>
              <ul className="desc">
                <li>
                  <img src="assets/dot.png" alt="" /> Created new features and
                  functionalities used in the company's websites.
                </li>
                <li>
                  <img src="assets/dot.png" alt="" /> Collaborated with team
                  members to design, build and improve our sites and
                  applications.
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2 className="title">
          <span>Education</span>
        </h2>
        <div className="education-box">
          {education.map(({ name, time }, i) => (
            <div className="education" key={i}>
              <div className="title">{name}</div>
              <div className="time">{time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
