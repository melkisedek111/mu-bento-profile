import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./components/ui/popover"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./components/ui/tooltip"

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type TLinks = {
    name: string;
    link: string;
    icon: JSX.Element;
}

const LinksContainer = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText('melkisedek@gmail.com')
            .then(() => {
                console.log("Copied Email")
            })
            .catch((err) => {
                console.error('Error copying text:', err);
                alert('Error copying text: ' + err);
            });
    };

    const links: TLinks[] = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/hakdoggoo",
            icon: <FaFacebook className="text-4xl text-white" />
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/melx-ubalde/",
            icon: <FaLinkedin className="text-4xl text-white" />
        },
        {
            name: "Github",
            link: "https://github.com/melkisedek111",
            icon: <FaGithub className="text-4xl text-white" />
        },
        {
            name: "Email",
            link: "melkisedek@gmail.com",
            icon: <MdEmail className="text-4xl text-white" />
        },
    ]

    return links.map(item => {
        return item.name === "Email" ?
            <Popover key={item.name}>
                <PopoverTrigger asChild>
                    <p className="cursor-pointer" onClick={handleCopy}>{item.icon}</p>
                </PopoverTrigger>
                <PopoverContent className="w-30">
                    Copied!
                </PopoverContent>
            </Popover>
            : <TooltipProvider key={item.name}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a target="_blank" href={item.link}>{item.icon}</a>
                    </TooltipTrigger>
                    <TooltipContent>
                        {item.name}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
    })

}

export default LinksContainer