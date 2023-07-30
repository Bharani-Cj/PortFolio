export function ContactMe() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1>Contact Me</h1>
            <p>
              <i className="fas fa-paper-plane"></i> Cj.bharani@gmail.com
            </p>

            <div className="social-icons">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_b.h.a.r.a.n.i_/">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/bharani-c-859804258/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <a className="btn btn2" href="/resume/Bharani.pdf" download>
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn3">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
