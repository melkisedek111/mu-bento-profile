import Logo from "./assets/logo.svg";

const Footer = () => {
    return (
        <section className="flex flex-wrap xl:justify-between gap-7 mt-11">
            <div className="flex items-center gap-10">
                <h3 className="scroll-m-20 text-5xl font-semibold tracking-tight text-white">
                    Zeke
                </h3>
                <img src={Logo} alt="Zeke" className="max-w-[50px]" />
                <p className="text-muted-foreground">© All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer