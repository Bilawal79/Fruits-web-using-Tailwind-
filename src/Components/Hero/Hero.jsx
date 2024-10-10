
import { IoBagHandleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import fruitPlate from '../../assets/fruit-plate.png';
import leaf from '../../assets/leaf.png';

const FadeLeft = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: 100,  
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const FadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <section>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>

        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
          <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeLeft(0.2)}
              initial="hidden"
              animate="visible"
              className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'
            >
              Purity Is 
              <br />
              Our <span className='text-secondary'> Quality</span>
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.4)}
              initial="hidden"
              animate="visible"
              className='text-2xl tracking-wide'
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            <motion.p
              variants={FadeLeft(0.6)}
              initial="hidden"
              animate="visible"
              className='text-gray-400'
            >
              Healthy And Yummy Food For Fresh Morning Breakfast. Eat Daily For Good Health And Mind order now and get 20% off on your first order
            </motion.p>
            <motion.div
              variants={FadeUp(0.8)}
              initial="hidden"
              animate="visible"
              className='flex justify-center md:justify-start'
            >
              <button className='bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-700'>
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          variants={FadeLeft(1.0)}
          initial="hidden"
          animate="visible"
          className='flex justify-center items-center'
        >
          <img src={fruitPlate} alt="Fruit Plate" className='w-[350px] md:w-[550px] drop-shadow' />
        </motion.div>
        
        <motion.div
          variants={FadeLeft(1.2)}
          initial="hidden"
          animate="visible"
          className='absolute top-14 md:top-0 right-1/2 transform translate-x-1/2 blur-sm opacity-80 rotate-[40deg]'
        >
          <img src={leaf} alt="Leaf" className="w-full md:max-w-[300px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
