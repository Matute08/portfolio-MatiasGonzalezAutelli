import Link from "next/link";
import MotionTransition from "./transition-component";

const Header = () => {
  return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block w-full">
      <div className="container justify-content-between max-w-6xl mx-auto md:flex">
        <Link href="/">
            MatiasGonzalezAutelli
        </Link>
      </div>
    </MotionTransition>
  );
};

export default Header;
