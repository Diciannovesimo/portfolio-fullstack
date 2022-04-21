import {motion} from "framer-motion";
import {useState} from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div transition={{layout: {duration: 1, type: "spring"}}} Layout onClick={() => setIsOpen(!isOpen)} className="card" style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
        <motion.h2 Layout="position">Framer Motion 🤠</motion.h2>
        {isOpen &&(
          <motion.div>
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
    </div>
  );
}

export default App;
