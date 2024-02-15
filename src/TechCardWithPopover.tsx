import { useState } from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./components/ui/popover"
import CustomCard from './CustomCard';
import { randomTransition } from './App';

export type TCustomCardWithPopoverProps = {
    name: string;
    title: string;
    experience: number;
    miniProjects: number;
    professionalExperience: number;
    icon: string;
}




const TechCardWithPopover = (props: TCustomCardWithPopoverProps) => {
    const [openPopover, setOpenPopover] = useState(false);

    const handleOpenPopover = () => {
        setOpenPopover(true);
    }

    const handleClosePopover = () => {
        setOpenPopover(false);
    }

    return (
        <Popover open={openPopover}>
            <PopoverTrigger asChild>
                <div data-aos={randomTransition[Math.floor(Math.random() * 8)]} onMouseEnter={handleOpenPopover} onMouseLeave={handleClosePopover}>
                    <CustomCard key={props.title} className="bg-customAccentCard text-white w-48 flex flex-col gap-4 items-center justify-center hover:-translate-y-1 hover:bg-customAccentHoverCard ease-in transition">
                        <img src={props.icon} alt={props.name} className="h-20 object-contain" />
                        <p className="text-xl font-semibold">{props.title}</p>
                    </CustomCard>
                </div>
            </PopoverTrigger>
            <PopoverContent className="min-w-[400px] bg-customCard">
                <div className="flex items-center justify-between text-white">
                    <div>
                        <p className="text-sm">Name: <span className="font-semibold">{props.name}</span> </p>
                        <p className="text-sm">Experience: <span className="font-semibold">{props.experience} year(s)</span> </p>
                        <p className="text-sm">Personal Project: <span className="font-semibold">{props.miniProjects} project(s)</span> </p>
                        <p className="text-sm">Professional Experience: <span className="font-semibold">{props.professionalExperience} years(s)</span> </p>
                    </div>
                    <img src={props.icon} alt={props.name} className="w-[60px] object-contain" />
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default TechCardWithPopover;