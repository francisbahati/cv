import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
  const skillsRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Skills animation function
    const animateSkills = () => {
      if (hasAnimatedRef.current) return;
      
      const skillItems = document.querySelectorAll('.resume-item .skill-item');
      skillItems.forEach((item, index) => {
        const progressBar = item.querySelector('.progress-bar');
        const percentage = progressBar.getAttribute('aria-valuenow');
        progressBar.style.width = '0%';
        
        // Animate to the target percentage with staggered delay
        setTimeout(() => {
          progressBar.style.transition = 'width 1.5s ease-in-out';
          progressBar.style.width = `${percentage}%`;
        }, 200 + (index * 150));
      });
      
      hasAnimatedRef.current = true;
    };

    // Intersection Observer for skills animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            animateSkills();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="resume-page">
      <main className="main">
        <section id="resume" className="resume section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>
              Innovative and results-driven Full Stack Developer with 2 years of experience in JHipster, React, and Spring Boot. 
              Cybersecurity expert with proven track record in building secure, scalable web applications and providing comprehensive IT solutions.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              <div className="col-lg-6">
                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Education</h3>

                  <div className="resume-content">
                    <article className="education-item">
                      <h4>Bachelor of Cyber Security (BCSe)</h4>
                      <h5>2022 - 2025</h5>
                      <p className="institution">
                        <em>Institute of Accountancy Arusha (IAA)</em>
                      </p>
                      <p>
                        Comprehensive education in cybersecurity principles, network security, vulnerability assessment, 
                        and digital forensics. Focus on secure software development and information protection.
                      </p>
                    </article>

                    <article className="education-item">
                      <h4>Advanced Certificate of Secondary Education (ACSEE)</h4>
                      <h5>2020 - 2022</h5>
                      <p className="institution">
                        <em>Kibaha Secondary School, Kibaha</em>
                      </p>
                      <p>
                        Advanced level education with focus on sciences and mathematics, providing strong foundation 
                        for technical and computing studies.
                      </p>
                    </article>

                    <article className="education-item">
                      <h4>Certificate of Secondary Education (CSEE)</h4>
                      <h5>2015 - 2019</h5>
                      <p className="institution">
                        <em>Musabe Secondary School, Mwanza</em>
                      </p>
                      <p>
                        Ordinary level education with excellent performance in mathematics and sciences, 
                        establishing academic foundation for higher education.
                      </p>
                    </article>
                  </div>
                </div>

                <div 
                  className="resume-item" 
                  data-aos="fade-up"
                  ref={skillsRef}
                >
                  <h3 className="resume-title">Technical Skills</h3>

                  <div className="resume-content">
                    <div className="skill-item">
                      <div className="skill-header">
                        <h4>Full Stack Development</h4>
                        <span className="skill-percentage">85%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="skill-header">
                        <h4>Cybersecurity</h4>
                        <span className="skill-percentage">65%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="skill-header">
                        <h4>Database Management</h4>
                        <span className="skill-percentage">90%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="88"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="skill-header">
                        <h4>Python & Automation</h4>
                        <span className="skill-percentage">70%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="82"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="resume-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3 className="resume-title">Professional Experience</h3>

                  <div className="resume-content">
                    

                    <article className="experience-item">
                      <h4>Information Technichnology (IT)  & Social Media Officer </h4>
                      <h5>July 2024 - Feb 2025</h5>
                      <p className="company">
                        <em>Lion Track Safari company, Arusha</em>

                      </p>
                      <ul>
                        <li>
                          Developed and maintained the Liontrack Safari website and internal systems, creating functional, user-friendly, and secure digital solutions.
                        </li>
                        <li>
                          Managed the company’s IT systems and provided technical support to ensure smooth daily operations.
                        </li>
                        <li>
                          Responsible for maintaining computers, internet connectivity, and basic network infrastructure.
                        </li>
                        <li>
                          Led social media management by creating and publishing engaging content, responding to customer inquiries, and promoting safari packages across digital platforms.
                        </li>
                        <li>
                          Delivered cybersecurity awareness training to staff members, improving phishing detection and reducing security incidents that may harm the Company.
                        </li>
                        <li>
                          Supported online branding, customer communication, and digital marketing efforts to improve visibility and client engagement.
                        </li>
                      </ul>
                    </article>
                    <article className="experience-item">
                      <h4>Full Stack Developer</h4>
                      <h5>July 2024 - June 2025</h5>
                      <p className="company">
                        <em>Tiketika Tanzania, Dar es Salaam</em>
                      </p>
                      <ul>
                        <li>
                          Contributed to the development of a smart digital ticketing system aimed at improving events ticketing at Dares Salaam.

                        </li>
                        <li>
                          Worked on both the frontend (Flutter) and backend integration to enhance user experience and performance. This was a Ticket scanning app.
                        </li>
                        
                      </ul>
                    </article>
                  </div>
                  
                </div>

                <div className="resume-item" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="resume-title">Languages</h3>
                  <div className="resume-content">
                    <div className="skill-item">
                      <div className="skill-header">
                        <h4>Kiswahili</h4>
                        <span className="skill-percentage">100%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-header">
                        <h4>English</h4>
                        <span className="skill-percentage">90%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>


                    <div className="skill-item">
                      <div className="skill-header">
                        <h4>French</h4>
                        <span className="skill-percentage">30%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}