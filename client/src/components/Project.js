const projectCard = [
  {
    img: 'img/Mbl_auth.avif',
    name: 'User-Authenticated',
    about:
      'User and process authentication are used to ensure that only authorized individuals or processes are allowed to access company IT resources',
    link: 'https://userss-authentication.netlify.app/',
  },
  {
    img: 'img/travel.jpg',
    name: 'TravelApp - API Endpoint',
    about:
      'A travel app is a web application designed to assist travellers with various aspects of their journey. Travel apps come in a wide range of functionalities',
    link: 'https://github.com/Bharani-Cj/Travel-App.git/',
  },
];

export function Project() {
  return (
    <div id="project">
      <div className="container">
        <h1>My Works</h1>
        <p>Each product is a unique peace of development🧩</p>
        <div className="work_list">
          {projectCard.map((el) => (
            <ProjectCard projectCard={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ projectCard }) {
  return (
    <div className="work">
      <img src={projectCard.img} alt={projectCard.name} />
      <div className="layer">
        <h2>{projectCard.name}</h2>
        <p>{projectCard.about}</p>
        <a href={projectCard.link} rel="noreferrer" target="_blank">
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}
