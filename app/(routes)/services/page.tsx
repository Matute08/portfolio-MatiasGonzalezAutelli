//import AvatarServices from "@/components/avatar-services";
//import CircleImage from "@/components/circle-image";
import ContactMe from "@/components/contact-me";
import SliderServices from "@/components/slider-services";
// import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            {/* <CircleImage />
            <AvatarServices /> */}
            <div className="text-center mt-50">
                <h1 className="text-4xl leading-tight md:text-4xl md:mb-5">
                    Mis{" "}
                    <span className="font-bold text-[var(--secondary)]">
                        servicios.
                    </span>
                </h1>
            </div>

            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-10 mt-10 md:place-items-center md:gap-x-10">
                {/* Columna 1 */}
                <div className="max-w-[450px]">
                    <p className="m-10 md:m-5 text-xl text-gray-300">
                        Ofrezco servicios de desarrollo web frontend
                        especializados en la creación de sitios web y
                        aplicaciones atractivas y funcionales. Utilizando las
                        últimas tecnologías, como HTML, CSS y JavaScript, diseño
                        interfaces de usuario intuitivas y responsivas que
                        reflejan la identidad de marca de mis clientes y mejoran
                        su presencia en línea.
                    </p>
                 
                </div>

                {/* Columna 2 - SLIDER */}
                <div >
                    <SliderServices />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mx-auto my-10 max-w-5xl">
                <h2 className="text-3xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                    Conta
                    <span className="font-bold text-[var(--secondary)]">
                        ctame.
                    </span>
                </h2>

                <ContactMe></ContactMe>
            </div>
        </>
    );
};

export default ServicesPage;
