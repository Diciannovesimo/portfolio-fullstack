import { motion } from "framer-motion";

function Navbar() {

    return (
        <motion.div className="navbar">
            <motion.h4 style={{fontFamily: 'Poppins', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '20px', color: 'rgb(226, 266, 266)'}}> The Nav </motion.h4>
            <motion.ul style={{display: 'flex' , justifyContent: 'space-around', width: '35%', background: 'red'}}>
                <motion.li><motion.a href="#">Home</motion.a></motion.li>
                <motion.li><motion.a href="#">About</motion.a></motion.li>
                <motion.li><motion.a href="#">Work</motion.a></motion.li>
                <motion.li><motion.a href="#">Projects</motion.a></motion.li>
            </motion.ul>
        </motion.div>

    );
}

export default Navbar;