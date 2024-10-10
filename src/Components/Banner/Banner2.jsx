
import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/Animation';

const Banner2 = () => {
  return (
   <section className=''>
    <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24'>
       
        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            animate="visible"
            viewport={{once: true}}
             className='text-3xl lg:text-6xl font-bold uppercase'>
                {""}
                ONLINE FRUIT STORE</motion.h1>
            <motion.p
             variants={FadeUp(0.7)}
             initial="hidden"
             animate="visible"
             viewport={{once: true}}>

            Find the freshest fruits in Lahore at our store, where every bite is full of flavor. Enjoy top-quality fruits that are carefully chosen just for you.
            </motion.p>
            <motion.p
             variants={FadeUp(0.9)}
             initial="hidden"
             animate="visible"
             viewport={{once: true}}>
            Fresh, juicy, ripe fruits for healthy, flavorful, and nutritious snacking.
            </motion.p>

            <motion.div
                variants={FadeUp(1.1)}
                initial="hidden"
                animate="visible"
                className='flex justify-center md:justify-start'>
                    <button className='bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition duration-300'>
                        Learn More
                    </button>
            </motion.div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <motion.img
             initial={{ opacity: 0, x: 200, rotate: 75 }}
             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
             transition={{ duration: 1, delay: 0.2}}
             viewport={{once: true }}

            src={BannerPng} alt="" className='w-[350px] md:max-w-[500px] h-full object-cover drop-shadow'/>
        </div>

    </div>
   </section>
  )
}

export default Banner2;
