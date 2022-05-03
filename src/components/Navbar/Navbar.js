import { motion } from "framer-motion";
import React, { useState } from "react";



function Navbar() {
    const [slider, setSlider] = useState(false);
    const burger = document.querySelector('.burger');

    

    const slide = () => {
        setSlider(!slider);
        burger.classList.toggle('toggle');
    }


    return (
        <motion.div className="navbar">
            <motion.div className="burger"
                onClick={slide}>
                <motion.h1 className="line1"/>
                <motion.h1 className="line2"/>
                <motion.h1 className="line3"/>
            </motion.div>
            <motion.h4> The Nav </motion.h4>
            <motion.ul className={slider ? "slider-on" : "slider-off"}>
                <motion.li><motion.a href="#">Home</motion.a></motion.li>
                <motion.li><motion.a href="#">About</motion.a></motion.li>
                <motion.li><motion.a href="#">Work</motion.a></motion.li>
                <motion.li><motion.a href="#">Projects</motion.a></motion.li>
            </motion.ul>
        </motion.div>
    );

}

export default Navbar;