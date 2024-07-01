
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Ahmad Raza img"
              className="shadow-dark"
            />
            <h1>Ahmad Raza</h1>
            <p>Web and App Developer</p>
            <div className="social-links">
             
              <a href="https://www.facebook.com/ahmad.razi.1447" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/AhmadRazaNewMan" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/ahmad.razi.1447/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-raza-488563262/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
