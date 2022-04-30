import { motion } from "framer-motion";
import React, { useState } from "react";



function Navbar() {
    const [slider, setSlider] = useState(false);

    const slide = () => {
        setSlider(!slider);
      }
    
    return (
        <motion.div className="navbar">
            <motion.h4> The Nav </motion.h4>
            <motion.ul className={slider ? "slider-on" : "slider-off"}>
                <motion.li><motion.a href="#">Home</motion.a></motion.li>
                <motion.li><motion.a href="#">About</motion.a></motion.li>
                <motion.li><motion.a href="#">Work</motion.a></motion.li>
                <motion.li><motion.a href="#">Projects</motion.a></motion.li>
            </motion.ul>
            <motion.div className="burger"
            onClick={slide}>
                <motion.h1 />
                <motion.h1 />
                <motion.h1 />
            </motion.div>
        </motion.div>

    );

}

export default Navbar;