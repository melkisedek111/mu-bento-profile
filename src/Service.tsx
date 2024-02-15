import React from 'react'
import { IconType } from 'react-icons';

import { MdOutlineWeb } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";
import { HiOutlineSupport } from "react-icons/hi";
import { CiServer } from "react-icons/ci";
import CustomCard from './CustomCard';

interface ServiceCardProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string;
    icon: IconType;
    description: string;
}

const ServiceCard = ({ title, icon: Icon, description, ...otherProps }: ServiceCardProps) => {
    return (
        <div {...otherProps}>
            <Icon className="text-white text-6xl" />
            <h4 className="text-2xl my-5">{title}</h4>
            <p className="text-sm text-muted-foreground text-justify">
                {description}
            </p>
        </div>
    )
}

type TServiceCard = {
    title: string;
    icon: IconType;
    description: string;
}

const Service = () => {
    const serviceCardData: TServiceCard[] = [
        {
            title: "Web Development",
            description: "With a passion for crafting elegant and functional websites, I specialize in creating tailored solutions that meet your unique business needs. Whether you're a startup looking to establish your online presence or an established business seeking a digital makeover, I'm here to help you succeed on the web.",
            icon: MdOutlineWeb
        },
        {
            title: "Frontend Development",
            description: "I excel in crafting visually appealing and interactive user interfaces that engage and captivate your audience. With a keen eye for design and attention to detail, I bring your concepts to life with creativity and precision.",
            icon: SiMaterialdesign
        },
        {
            title: "Backend Development",
            description: "I excel in crafting visually appealing and interactive user interfaces that engage and captivate your audience. With a keen eye for design and attention to detail, I bring your concepts to life with creativity and precision.",
            icon: CiServer
        },
        {
            title: "Maintenance and Support",
            description: "Your website is an essential part of your business, and I'm here to ensure it stays up and running smoothly, allowing you to focus on what you do best. From regular updates and security patches to troubleshooting and bug fixes, I provide comprehensive maintenance and support solutions to keep your website in top shape.",
            icon: HiOutlineSupport
        },
    ];

    return (
        <section className="flex flex-wrap gap-7 lg:justify-between md:justify-between  text-white">
            {
                serviceCardData.map((item, index) => (
                    <CustomCard className="sm:w-full md:w-[48.2%] xl:w-[23%] 2xl:w-[23.5%]" key={item.title} data-aos={index <= 2 ? "fade-left" : "fade-right"}>
                        <ServiceCard
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    </CustomCard>
                ))
            }
        </section>
    )
}

export default Service