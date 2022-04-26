import { motion } from "framer-motion";

function Navbar() {

    return (
        <motion.div className="navbar">
            <motion.h4> The Nav </motion.h4>
            <motion.ul>
                <motion.li><motion.a href="#">Home</motion.a></motion.li>
                <motion.li><motion.a href="#">About</motion.a></motion.li>
                <motion.li><motion.a href="#">Work</motion.a></motion.li>
                <motion.li><motion.a href="#">Projects</motion.a></motion.li>
            </motion.ul>
            <motion.div className="burger">
                <motion.h1 />
                <motion.h1 />
                <motion.h1 />
            </motion.div>
        </motion.div>

    );
}

export default Navbar;