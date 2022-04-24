import { useState } from "react";
import { motion } from "framer-motion";

function Cardanimated() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            layout transition={{ layout: { duration: 0.75, type: "spring" } }}
            onClick={() => setIsOpen(!isOpen)}
            className="card">

            <motion.h2 layout="position">Framer Motion 🤠</motion.h2>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="expand">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci quia corporis obcaecati eum rem ipsum aliquam perspiciatis culpa doloribus.
                        Quam, quos tenetur? Doloribus eligendi sint reiciendis illum error quisquam.
                        Ipsum?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore, pariatur.
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
}

export default Cardanimated;