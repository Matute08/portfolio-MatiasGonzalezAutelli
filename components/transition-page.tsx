"use client"
import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";


const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitionVariantsPage}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                className="fixed top-0 bottom-0 right-full w-screen z-30 bd-[#2e2257]">
                    
            </motion.div>
        </AnimatePresence>
    );
}

export default TransitionPage;