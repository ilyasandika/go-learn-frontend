import Button from "../Button.jsx";

const Hero = () => {
    return (
        <div className="flex flex-row w-full items-center mt-16">
            <div className="w-1/2 text-left">
                <h1 className="text-4xl font-semibold text-left leading-tight">Bangun Karirmu Sebagai Developer Profesional</h1>
                <p className="text-lg text-left mt-2 mb-6">Bersama Go Academy Wujudkan Mimpi</p>
                <Button text="Belajar Sekarang" className="px-8 py-3 bg-slate-800 text-gray-50 hover:bg-white hover:text-gray-800"/>
            </div>
            <div className="w-1/2">
                <img src="/homepage-hero.png" alt="homepage-hore" className="" />
            </div>
        </div>
    )
}

export default Hero;