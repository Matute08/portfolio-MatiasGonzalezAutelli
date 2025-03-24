import Link from "next/link";
import MotionTransition from "./transition-component";

const Header = () => {
  return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block w-full">
      <div className="container justify-content-between max-w-6xl mx-auto md:flex">
        <Link href="/">
            <h1 >
              hola
            </h1>
            Matias Gonzalez Autelli
        </Link>
      </div>
    </MotionTransition>
  );
};
git 
export default Header;
