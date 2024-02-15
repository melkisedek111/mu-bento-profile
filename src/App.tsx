import { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Navbar'
import Service from './Service'
import TechStack from './TechStack'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'
import Hero from './Hero'
import Footer from './Footer'

export const randomTransition: { [key in number]: string } = {
    0: "fade-up",
    1: "fade-down",
    2: "fade-right",
    3: "fade-left",
    4: "fade-up-right",
    5: "fade-up-left",
    6: "fade-down-right",
    7: "fade-down-left"
}

function App() {
    const heroRef = useRef<HTMLHeadingElement>(null);
    const serviceRef = useRef<HTMLHeadingElement>(null);
    const skillsRef = useRef<HTMLHeadingElement>(null);
    const experienceRef = useRef<HTMLHeadingElement>(null);
    const projectsRef = useRef<HTMLHeadingElement>(null);
    const contactRef = useRef<HTMLHeadingElement>(null);

    const sections = [
        {
            ref: heroRef,
            id: "heroRef",
            title: "Home",
        },
        {
            ref: serviceRef,
            id: "serviceRef",
            title: "Service",
        },
        {
            ref: skillsRef,
            id: "skillsRef",
            title: "Tech Stack",
        },
        {
            ref: experienceRef,
            id: "experienceRef",
            title: "Experiences",
        },
        {
            ref: projectsRef,
            id: "projectsRef",
            title: "Projects",
        },
        {
            ref: contactRef,
            id: "contactRef",
            title: "Contact",
        },
    ];

    const scrollIntoView = (title: string) => {
        if (title) {
            const selectedRef = sections.find((section) => section.title === title);
            if (selectedRef) {
                if (selectedRef.ref.current) {
                    selectedRef.ref.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            }
        }
    };

    useEffect(() => {
        document.title = "Zeke | Freelance Web Developer"
    }, [])
    return (
        <div className="bg-customBackground px-2 md:px-5 lg:px-8 xl:px-10 h-full py-10 overflow-hidden">
            <Navbar scrollIntoView={scrollIntoView} />
            <div className="flex flex-col gap-7">
                <div ref={heroRef}>
                    <Hero />
                </div>

                <div ref={serviceRef}>
                    <Service />
                </div>

                <div ref={skillsRef}>
                    <TechStack />
                </div>

                <div ref={experienceRef}>
                    <Experience />
                </div>

                <div ref={projectsRef}>
                    <Project />
                </div>

                <div ref={contactRef}>
                    <Contact />
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default App
