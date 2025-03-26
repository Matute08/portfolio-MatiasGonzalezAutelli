

import { dataPortfolio } from "@/data";

// import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import PortfolioBox from "@/components/portfolio-box";
import ContainerPage from "@/components/container";
// import AvatarPortfolio from "@/components/avatar-portfolio";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            {/* <AvatarPortfolio /> */}
            {/* <CircleImage /> */}
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-3xl leading-tight text-center md:text-4xl md:mb-5 m-10 ">Mis trabajos <span className="font-bold text-[var(--secondary)]"> realizados</span></h1>

                <div className="relative z-10 grid max-w-8xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-40">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;