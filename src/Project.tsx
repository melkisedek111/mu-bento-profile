import CustomCard from './CustomCard'
import { Badge } from './components/ui/badge'
import { technologies } from './Experience'
import { IoIosArrowRoundForward } from "react-icons/io";

import DevFinder from "./assets/images/dev-finder.png";
import AgendaAppImage from "./assets/images/agenda.png";
import AmazonImage from "./assets/images/amazonclone.png";
import CrownAppImage from "./assets/images/crown.png";
import EcommerceImage from "./assets/images/ecommerce.png";
import PokedexImage from "./assets/images/pokedex.png";
import SlackImage from "./assets/images/slack.png";
import TicTacToeImage from "./assets/images/tictactoe.png";


import LottieProjectManagement from "../src/assets/lotties/projectManagement.json"
import LottieQualityProduct from "../src/assets/lotties/qualityProduct.lottie.json"
import LottieSocialMedia from "../src/assets/lotties/socialmedia.lottie.json"
import LottieSuccess from "../src/assets/lotties/success.lottie.json"
import LottieWorkspace from "../src/assets/lotties/workspace.lottie.json"
import LottieChat from "../src/assets/lotties/chat.json"
import Lottie from 'lottie-react';
import { randomTransition } from './App';


type TProjects = {
    name?: string;
    link?: string;
    stacks: {
        name: string;
        icon: string;
    }[],
    image?: string;
    isLottie?: boolean;
    lottie?: any;
}

const Project = () => {
    const lotties = [
        LottieProjectManagement,
        LottieQualityProduct,
        LottieSocialMedia,
        LottieSuccess,
        LottieWorkspace,
        LottieChat
    ];

    const projects: TProjects[] = [
        {
            name: "Dev Finder",
            link: "https://main--serene-sorbet-728105.netlify.app/",
            stacks: [
                technologies.nextjs,
                technologies.googleAuth,
                technologies.getStream,
                technologies.react,
                technologies.typescript,
                technologies.javascript,
                technologies.shadcn,
            ],
            image: DevFinder
        },
        {
            name: "TicTacToe",
            link: "https://tic-tac-toe-client-x40f.onrender.com/",
            stacks: [
                technologies.react,
                technologies.mongodb,
                technologies.javascript,
                technologies.nodeJs,
                technologies.html,
                technologies.css,
            ],
            image: TicTacToeImage
        },
        {
            name: "Pokedex",
            link: "https://pokedex-challenge-v1.netlify.app/",
            stacks: [
                technologies.react,
                technologies.javascript,
                technologies.html,
                technologies.css,
            ],
            image: PokedexImage
        },
        {
            name: "Crown E-Commerce",
            link: "https://crown-db-8d196.web.app/",
            stacks: [
                technologies.react,
                technologies.javascript,
                technologies.html,
                technologies.css,
                technologies.redux,
                technologies.mongodb,
            ],
            image: CrownAppImage
        },
        {
            name: "Agenda Editor App",
            link: "https://main--serene-sorbet-728105.netlify.app/",
            stacks: [
                technologies.react,
                technologies.mongodb,
                technologies.typescript,
                technologies.javascript,
                technologies.nodeJs,
                technologies.shadcn,
                technologies.html,
                technologies.css,
                technologies.vite
            ],
            image: AgendaAppImage
        },
        {
            name: "Amazon Clone",
            link: "https://clone-88c7e.firebaseapp.com/",
            stacks: [
                technologies.react,
                technologies.javascript,
                technologies.html,
                technologies.css,
                technologies.mongodb,
            ],
            image: AmazonImage
        },
        {
            name: "Loft Commerce",
            link: "https://lofti-commerce.netlify.app/",
            stacks: [
                technologies.react,
                technologies.javascript,
                technologies.html,
                technologies.css,
                technologies.redux,
                technologies.mui
            ],
            image: EcommerceImage
        },
        {
            name: "Slack Clone",
            link: "https://lofti-commerce.netlify.app/",
            stacks: [
                technologies.react,
                technologies.javascript,
                technologies.html,
                technologies.css,
                technologies.redux,
            ],
            image: SlackImage
        },
        {
            isLottie: true,
            lottie: lotties[Math.floor(Math.random() * 6)],
            stacks: []
        }
    ]

    // function fillUpRows(items: TProjects[], columns: number) {
    //     const totalItems = items.length;
    //     const itemsInLastRow = totalItems % columns === 0 ? columns : totalItems % columns;
    //     const itemsNeededToFillRow = columns - itemsInLastRow;

    //     if (itemsNeededToFillRow !== 0) {
    //         for (let i = 0; i < itemsNeededToFillRow; i++) {
    //             items.push({
    //                 isLottie: true,
    //                 lottie: lotties[Math.floor(Math.random() * 6)],
    //                 stacks: []
    //             }); // Add placeholder items to fill up the last row
    //         }
    //     }

    //     return items.sort(() => Math.random() - 0.5);;
    // }

    // const columns = 4;

    // const adjustedItemsA: TProjects[] = fillUpRows(projects, columns);
    // adjustedItemsA.length;
    const adjustedItems: TProjects[] = projects;

    return (
        <section className="flex flex-wrap gap-7 lg:justify-between xl:justify-normal">
            {
                adjustedItems.map((item, index) => (
                    <CustomCard  key={index} className="sm:w-full md:w-full lg:w-[48.49%] xl:w-[31.8%] 2xl:w-[32.3%] hover-inside-image flex flex-col gap-5" data-aos={randomTransition[Math.floor(Math.random() * 8)]}>
                        {
                            item.isLottie ? (
                                <Lottie animationData={item.lottie} loop={true} className="max-w-[75%] m-auto" />
                            ) : (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-xl text-white font-semibold">{item.name}</h4>
                                        <a href={item.link} target="_blank" className="text-white text-muted-foreground text-3xl rounded-full  flex items-center justify-center border-white border-2 transform transition-transform duration-500 hover:rotate-[-50deg] cursor-pointer">
                                            <IoIosArrowRoundForward />
                                        </a>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {
                                            item.stacks.map(stack => (
                                                <Badge key={stack.name} className="bg-customAccentHoverCard flex gap-2 items-center">{stack.name} <img src={stack.icon} className="w-5 object-contain" /></Badge>
                                            ))
                                        }
                                    </div>
                                    <div className="relative overflow-hidden rounded-md">
                                        <img src={item.image} alt={item.name} className="project-image h-full w-full object-cover transition-transform duration-300 transform hover:scale-110" />
                                    </div>
                                </>
                            )
                        }
                    </CustomCard>
                ))
            }
        </section>
    )
}

export default Project