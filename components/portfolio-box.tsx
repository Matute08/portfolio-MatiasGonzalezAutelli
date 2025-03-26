import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        description: string,
        urlGithub: string;
        urlDemo: string;
    };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, description, urlDemo, urlGithub } = data;

    return (
        <div key={id} className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-2xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={300}
                height={300}
                className="w-full md:w-[300px] rounded-2xl h-auto"
            />

            <hr className="my-4 border-t border-gray-300" />
            <p className="text-md text-justify my-4 h-30 overflow-hidden">
                {description}
            </p>
            <hr className="my-4 border-t border-gray-300" />

            <div className="flex gap-5 mt-5 justify-center">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Git Hub
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-[var(--secondary)] hover:bg-[var(--secondary)]/80"
                >
                    Live Demo
                </Link>
            </div>
        </div>
    );
};

export default PortfolioBox;
