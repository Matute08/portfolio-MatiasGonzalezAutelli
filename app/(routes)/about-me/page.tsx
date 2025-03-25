import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import TechnicalSkillsFront from "@/components/technical-skills-front";
import TechnicalSkillsBack from "@/components/technical-skills-back"
import TechnicalSkillsProductivity from "@/components/technical-skills-productivity"
import SoftSkills from "@/components/soft-skills";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />

            <ContainerPage>
                <Avatar></Avatar>
                <h1 className="text-3xl mb-10 leading-tight text-center md:text-5xl md:mt-10 flex justify-center items-center h-full">
                    Mi{" "}
                    <span className="ml-2 font-bold text-[var(--secondary)]">
                        línea de aprendizaje
                    </span>
                </h1>

                {/* <CounterServices></CounterServices> */}
                <TimeLine></TimeLine>

                <h2 className="text-3xl mb-10 leading-tight text-center md:text-5xl md:mt-10 flex justify-center items-center h-full">
                    Habilidades{" "}
                    <span className="ml-2 font-bold text-[var(--secondary)]">
                        tecnicas
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center p-10">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Front End</h3>
                        <TechnicalSkillsFront></TechnicalSkillsFront>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Back End</h3>
                        <TechnicalSkillsBack></TechnicalSkillsBack>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Productividad
                        </h3>
                        <TechnicalSkillsProductivity></TechnicalSkillsProductivity>
                    </div>
                </div>



                <h2 className="text-3xl mb-5 leading-tight text-center md:text-5xl md:mt-10 flex justify-center items-center h-full">
                    Habilidades{" "}
                    <span className="ml-2 font-bold text-[var(--secondary)]">
                        blandas
                    </span>
                </h2>

                <div className="text-center pb-10 pt-1">
                    <div>
                        <SoftSkills></SoftSkills>
                    </div>
                    
                </div>
            </ContainerPage>
        </>
    );
};

export default PageAboutMe;
