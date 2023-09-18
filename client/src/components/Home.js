import { Link } from 'react-router-dom';
export function Home() {
  return (
    <main id="home">
      <div className="home_profile">
        <div>
          <h1>
            MERN Stack Web-developer <span>👋🏼</span>
          </h1>
          <p>
            Hi, I'm Bharani. A passionate Full-stack Web-developer <br />
            based in Coimbatore, TamilNadu. 📍
          </p>
          <div className="home_profileIn">
            <Link
              onClick={() =>
                (window.location.href = 'https://www.linkedin.com/in/bharani-c-859804258/')
              }
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link onClick={() => (window.location.href = 'https://github.com/Bharani-Cj')}>
              <i class="fa-brands fa-github"></i>
            </Link>
          </div>
          <div className="home_stack">
            <p>Tech Stack |</p>
            <div className="home_language">
              <img src="logo/html.png" alt="html" width="30px" />
              <img src="logo/css.png" alt="css" width="22px" />
              <img src="logo/javascript.png" alt="javaScript" width="30px" />
              <img src="logo/react.png" alt="react" width="30px" />
              <img src="logo/sass.png" alt="sass" width="30px" />
              <img src="logo/nodeJS.png" alt="nodeJS" width="30px" />
              <img src="logo/express.png" alt="express" width="30px" />
              <img src="logo/mongoDB.png" alt="mongoDB" width="30px" />
              <img src="logo/Mysql.png" alt="mongoDB" width="30px" />
            </div>
          </div>
        </div>
        <div className="home_image"></div>
      </div>
      <div className="scroller">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
  );
}
