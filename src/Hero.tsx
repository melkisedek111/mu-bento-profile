import CustomCard from './CustomCard'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import LinksContainer from './LinksContainer'
import Lottie from 'lottie-react'
import LottieWebHosting from "../src/assets/lotties/web-hosting.json"
import Profile from "./assets/profile.jpg";


const Hero = () => {
    return (
        <section className="flex flex-wrap xl:justify-between gap-7">
            <CustomCard data-aos="zoom-out-down" className="flex flex-col gap-5 justify-between sm:w-full xl:w-[68.25%]" >
                <div className="flex flex-col items-center md:items-start gap-5">
                    <Avatar className="w-[10rem] h-[10rem] object-contain">
                        <AvatarImage src={Profile} alt="@zeke" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h2 className="scroll-m-20 text-center md:text-left text-white text-2xl sm:text-3xl lg:text-3xl xl:text-5xl tracking-tight">
                        My name is <span className="font-semibold text-amber-400">Melkisedek Ubalde</span>, I’m a Full-Stack Developer working and living in Philippines
                    </h2>
                    <p className="leading-7 text-justify text-white">
                        I specialize in developing end-to-end solutions for web applications, from crafting engaging user experiences to implementing robust backend functionality. With a keen eye for detail and a passion for problem-solving, I thrive in creating seamless digital experiences that delight users.
                    </p>
                </div>
                <div className="flex items-center gap-7 text-white">
                    <LinksContainer />
                </div>
            </CustomCard>
            <CustomCard data-aos="zoom-out-down" className="sm:full lg:w-full xl:w-[29.25%] lg:flex lg:justify-center">
                <Lottie animationData={LottieWebHosting} loop={true} className=" lg:max-w-[400px] xl:max-w-[600px] object-contain" />
            </CustomCard>
        </section>
    )
}

export default Hero
