import React from 'react'
import aboutme from '../Assets/me.jpg'
import '../styles/about.css'

const About = () => {
  return (
    <div>
      <section className="about-section">
        <div id="about" className='grid about'>
          {/* <div className='col-12 md:col-6 lg:col-6 about-right'>
            <img src={aboutme} alt="Amoako Amankwah" />
          </div> */}
          <div className="col-12 md:col-6 lg:col-6 about-right flex items-center justify-content-center">
            <img src={aboutme} alt="Amoako Amankwah" style={{ maxWidth: '70%', maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <div className='col-12 md:col-6 lg:col-6 about-left'>
            <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg max-w-3xl text-center mb-4 text-gray-700">
              Hi! I am a passionate and results-driven web developer with a strong foundation in building responsive,
              dynamic, and user-friendly web applications.
              I specialize in <span className="font-semibold text-blue-600">React.js</span>,
              <span className="font-semibold text-yellow-500">JavaScript</span>,
              and state management using <span className="font-semibold text-purple-600">Redux</span>.
            </p>
            <p className="text-lg max-w-3xl text-center mb-4 text-gray-700">
              My backend proficiency includes <span className="font-semibold text-orange-600">
                Java</span> and <span className="font-semibold text-green-600">Spring Boot</span>,
              enabling me to build full-stack applications with RESTful APIs and efficient architecture.
            </p>
            <p className="text-lg max-w-3xl text-center text-gray-700">
              I also have experience designing sleek and intuitive interfaces using <span className="font-semibold text-pink-500">Figma</span>,
              bringing ideas to life with clean UI/UX design principles.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
export default About;