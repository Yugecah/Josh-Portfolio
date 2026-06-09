function App() {
  return (
    <div className="bg-yellow-100 min-h-screen text-black">

      {/* Header */}
      <nav className="bg-blue-600 text-white fixed top-0 w-full shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

          <h1 className="text-xl font-bold">
            Gallardo
          </h1>

          <div className="space-x-6">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">

        <div>

          <img
            src="/profile.jpg.jpeg"
            alt="Profile"
            className="w-52 h-52 rounded-full mx-auto border-4 border-blue-600"
          />

          <h1 className="text-5xl font-bold mt-8">
            Gallardo Glen Joshua D.
          </h1>

          <p className="text-xl mt-3">
            BS Computer Science
          </p>

          <p className="mt-2">
            Specialization in Data Science
          </p>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <div className="bg-white p-8 rounded-lg shadow">

          <p>
            I am a 2nd Year Computer Science student with a
            specialization in Data Science. I enjoy learning
            programming, data analytics, and web development. And i can create a website, frontpage
          </p>

        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-5xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-6">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "Python",
            "Java",
            "Data Base"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white p-4 rounded-lg shadow text-center"
            >
              {skill}
            </div>
          ))}

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-5xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-6">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">
              Portfolio Website
            </h3>

            <p>
              Personal website built using React and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">
              Game text based OOP using Python 
            </h3>

            <p>
              Create a Game called LastTower.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">
              METAFLIX
            </h3>

            <p>
              Create a website METAFLIX by using HTML, Java, Css.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <div className="bg-white p-8 rounded-lg shadow">

          <p>Email: glenjoshuagallardo@gmail.com</p>
          <p>Phone: +63 993 603 9075</p>
          <p>GitHub: github.com/Yugecah</p>
          <p>Facebook: https://www.facebook.com/profile.php?id=61585906091819 </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        © 2025 Gallardo Glen Joshua D.
      </footer>

    </div>
  );
}

export default App;