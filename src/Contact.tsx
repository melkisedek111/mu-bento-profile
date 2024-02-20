import CustomCard from './CustomCard'
import { AiOutlineAntDesign } from 'react-icons/ai'
import LinksContainer from './LinksContainer'
import Lottie from 'lottie-react'

import LottieSend from "../src/assets/lotties/send.lottie.json"
import LottieSEO from "../src/assets/lotties/seo.lottie.json"
import LottieExperience from "../src/assets/lotties/experience.lottie.json"

const Contact = () => {
    return (
        <section className="flex flex-wrap gap-7 lg:justify-between">
            <CustomCard className="flex flex-col gap-12 sm:w-full lg:w-[48.49%] xl:w-[55%] 2xl:w-[58.9%]" data-aos="fade-right">
                <AiOutlineAntDesign className="text-6xl text-white" />
                <div className="flex flex-col gap-10">
                    <div>
                        <h4 className="text-3xl text-white ">Have a project in mind?</h4>
                        <p className="text-lg text-muted-foreground">Let's discuss your project</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-7">
                        <h4 className="text-xl bg-amber-400 rounded-xl p-2">melkisedek222@gmail.com</h4>
                        <div className="flex flex-wrap items-center gap-7">
                            <LinksContainer />
                        </div>
                    </div>
                </div>
            </CustomCard>
            <CustomCard className="flex sm:w-full justify-between items-center gap-12  lg:w-[48.49%] xl:w-[45%] 2xl:w-[39.5%]" data-aos="fade-left">
                <Lottie animationData={LottieSend} loop={true} className="xl:max-w-[300px]" />
                <Lottie animationData={LottieSEO} loop={true} className="lg:hidden xl:block xl:max-w-[300px]" />
                <Lottie animationData={LottieExperience} loop={true} className="lg:hidden xl:block xl:max-w-[300px]" />
            </CustomCard>
        </section>
    )
}

export default Contact