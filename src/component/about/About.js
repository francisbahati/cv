import { useEffect, useRef } from "react";
import AOS from 'aos';

export default function About() {
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

            const skillBoxes = document.querySelectorAll('.skill-box');
            skillBoxes.forEach(box => {
                const progressBar = box.querySelector('.progress-bar');
                const percentage = progressBar.getAttribute('aria-valuenow');
                progressBar.style.width = '0%';

                // Animate to the target percentage
                setTimeout(() => {
                    progressBar.style.transition = 'width 1.5s ease-in-out';
                    progressBar.style.width = `${percentage}%`;
                }, 200);
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
        <div className="about-page">
            <main className="main">
                <section id="about" className="about section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>About</h2>
                        <p>
                            Innovative and results-driven Full Stack Developer with expertise in building secure, 
                            scalable web applications using modern technologies and cybersecurity best practices.
                        </p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row align-items-center justify-content-between gy-5 mb-5">
                            <div className="col-lg-7" data-aos="fade-right" data-aos-delay="150">
                                <div className="intro-content">
                                    <span className="eyebrow">Welcome</span>
                                    <h2 className="headline">
                                        Hi, I'm Francis - a Full Stack Developer & Cybersecurity Expert building secure digital solutions
                                    </h2>
                                    <p className="lead">
                                        I specialize in developing end-to-end web applications using JHipster, React, Spring Boot, and Python. 
                                        With strong expertise in cybersecurity, I create robust and secure systems that protect data and ensure reliability.
                                    </p>
                                    <p>
                                        My approach combines modern development practices with security-first principles to deliver scalable 
                                        applications that meet business needs while maintaining the highest security standards. From frontend 
                                        interfaces to backend microservices, I ensure comprehensive solution delivery.
                                    </p>

                                    <div className="cta-group">
                                        <a href="/portfolio" className="btn-ghost">
                                            View My Projects <i className="bi bi-arrow-up-right"></i>
                                        </a>
                                        <a href="/contact" className="link-underline">
                                            Start Collaboration <i className="bi bi-download"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="250">
                                <figure className="profile-figure text-center text-lg-end">
                                    <img
                                        src="assets/img/profile/bahati.jpg"
                                        alt="Portrait of Francis"
                                        className="img-fluid profile-photo"
                                    />
                                </figure>
                            </div>
                        </div>

                        <div className="mb-5">
                            <div className="row g-4">
                                <div
                                    className="col-6 col-md-4 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="120"
                                >
                                    <div className="skill-item">
                                        <i className="bi bi-code-slash"></i>
                                        <h3>Full Stack Development</h3>
                                        <p>Building end-to-end applications with JHipster, React, and Spring Boot.</p>
                                    </div>
                                </div>
                                <div
                                    className="col-6 col-md-4 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="180"
                                >
                                    <div className="skill-item">
                                        <i className="bi bi-shield-lock"></i>
                                        <h3>Cybersecurity</h3>
                                        <p>Implementing security measures and vulnerability assessments.</p>
                                    </div>
                                </div>
                                <div
                                    className="col-6 col-md-4 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="240"
                                >
                                    <div className="skill-item">
                                        <i className="bi bi-database"></i>
                                        <h3>Database Management</h3>
                                        <p>Designing and optimizing MySQL databases for performance.</p>
                                    </div>
                                </div>
                                <div
                                    className="col-6 col-md-4 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div className="skill-item">
                                        <i className="bi bi-cloud-arrow-up"></i>
                                        <h3>REST APIs & Microservices</h3>
                                        <p>Developing scalable APIs and microservices architecture.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <div className="row g-4">
                                <div
                                    className="col-md-6 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="120"
                                >
                                    <article className="timeline-item">
                                        <span className="dot"></span>
                                        <time>2022</time>
                                        <h4>Education Start</h4>
                                        <p>Began Bachelor of Cyber Security at Institute of Accountancy Arusha.</p>
                                    </article>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="180"
                                >
                                    <article className="timeline-item">
                                        <span className="dot"></span>
                                        <time>2023</time>
                                        <h4>Full Stack Developer</h4>
                                        <p>Started professional journey at Afriqo E-Learning Tz.</p>
                                    </article>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="240"
                                >
                                    <article className="timeline-item">
                                        <span className="dot"></span>
                                        <time>2024</time>
                                        <h4>Cybersecurity Intern</h4>
                                        <p>IT Assistant role at Tanzania Railways Corporation.</p>
                                    </article>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <article className="timeline-item">
                                        <span className="dot"></span>
                                        <time>2025</time>
                                        <h4>Graduation</h4>
                                        <p>Completing Bachelor's degree and advancing career.</p>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <blockquote
                            className="personal-quote text-center mb-5"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            <p>
                                "Building secure and scalable digital solutions - transforming ideas into robust applications with security at the core."
                            </p>
                        </blockquote>

                        <div className="row g-3 justify-content-center">
                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="zoom-in"
                                data-aos-delay="120"
                            >
                                <div className="fact-pill">
                                    <i className="bi bi-code-square"></i>
                                    <span>Development</span>
                                </div>
                            </div>
                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="zoom-in"
                                data-aos-delay="160"
                            >
                                <div className="fact-pill">
                                    <i className="bi bi-shield-check"></i>
                                    <span>Security</span>
                                </div>
                            </div>
                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <div className="fact-pill">
                                    <i className="bi bi-lightning-charge"></i>
                                    <span>Performance</span>
                                </div>
                            </div>
                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="zoom-in"
                                data-aos-delay="240"
                            >
                                <div className="fact-pill">
                                    <i className="bi bi-puzzle"></i>
                                    <span>Problem Solving</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="skills section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Technical Skills</h2>
                        <p>
                            Expertise across full stack development, cybersecurity, and modern web technologies to build secure and scalable applications.
                        </p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row g-4" ref={skillsRef}>
                            <div
                                className="col-md-6 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="skill-box">
                                    <h3>Full Stack Development</h3>
                                    <p>
                                        JHipster, React, Spring Boot, REST APIs, and microservices architecture.
                                    </p>
                                    <span className="text-end d-block">90%</span>
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
                            </div>

                            <div
                                className="col-md-6 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="skill-box">
                                    <h3>Cybersecurity</h3>
                                    <p>
                                        Vulnerability assessment, penetration testing, and security implementation.
                                    </p>
                                    <span className="text-end d-block">85%</span>
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
                            </div>

                            <div
                                className="col-md-6 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="skill-box">
                                    <h3>Database Management</h3>
                                    <p>MySQL database design, optimization, and data modeling.</p>
                                    <span className="text-end d-block">88%</span>
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
                            </div>

                            <div
                                className="col-md-6 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div className="skill-box">
                                    <h3>Python & Automation</h3>
                                    <p>
                                        Python programming, scripting, and automation solutions.
                                    </p>
                                    <span className="text-end d-block">40%</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow="40"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
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