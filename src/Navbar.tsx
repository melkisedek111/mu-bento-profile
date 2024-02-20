import { useState } from 'react'
import Logo from "./assets/logo.svg";

type TLinks = {
    id: string;
    title: string;
}

type NavbarProps = {
    scrollIntoView: (title: string) => void
}

const Navbar = ({scrollIntoView}: NavbarProps) => {
    const [selectedLink, setSelectedLink] = useState<string>("Home");

    const links: TLinks[] = [
        {
            id: "heroRef",
            title: "Home"
        },
        {
            id: "serviceRef",
            title: "Service"
        },
        {
            id: "skillsRef",
            title: "Tech Stack",
        },
        {
            id: "experienceRef",
            title: "Experiences"
        },
        {
            id: "projectsRef",
            title: "Projects"
        },
        {
            id: "contactRef",
            title: "Contact"
        },
    ];

    const handleSelectedLink = (title: string) => {
        scrollIntoView(title);
        setSelectedLink(title);
    }

    return (
        <div className="flex items-center justify-center md:justify-center lg:justify-between flex-wrap gap-10 text-white pb-11 pt-16">
            <div className="flex items-center gap-4">
                <h3 className="scroll-m-20  text-5xl font-semibold tracking-tight" data-aos="fade-right">
                    Zeke
                </h3>
                <img src={Logo} alt="Zeke" className="max-w-[50px]" data-aos="fade-down"/>
            </div>

            <div className="flex items-center justify-center md:justify-center lg:justify-between  flex-wrap gap-10">
                {
                    links.map(item => (
                        <h4 
                            key={item.title}
                            className={`scroll-m-20 text-lg tracking-tight cursor-pointer ${selectedLink === item.title ? "text-amber-400" : "text-white hover:text-customAccentHoverCard"}`}
                            onClick={() => handleSelectedLink(item.title)}
                        >
                            {item.title}
                        </h4>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar