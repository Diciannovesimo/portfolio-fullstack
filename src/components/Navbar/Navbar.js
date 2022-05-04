import { motion } from "framer-motion";
import React, { useState } from "react";



function Navbar() {
    const [slider, setSlider] = useState(false);
    

    const slide = () => {
        setSlider(!slider);
    }

    return (
        <motion.div className="navbar">
            <motion.div className="burger"
                onClick={slide}>
                <motion.h1 className={slider ? "toggle1" : "line1"}/>
                <motion.h1 className={slider ? "toggle2" : "line2"}/>
                <motion.h1 className={slider ? "toggle3" : "line3"}/>
            </motion.div>
            <motion.ul className={slider ? "slider-off" : "slider-on"}>
                <motion.li><motion.a href="#">Home</motion.a></motion.li>
                <motion.li><motion.a href="#">About</motion.a></motion.li>
                <motion.li><motion.a href="#">Work</motion.a></motion.li>
                <motion.li><motion.a href="#">Projects</motion.a></motion.li>
            </motion.ul>
        </motion.div>
    );

}

export default Navbar;