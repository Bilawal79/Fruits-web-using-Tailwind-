
import BannerPng from "../../assets/footer-bg.jpg";
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/Animation';

const bgstyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}

const Banner3 = () => {
  return (
    <section>
      <div
        style={bgstyle} 
        className='container grid grid-cols-1 md:grid-cols-2 gap-6 py-14 rounded-3xl'>
        
        <div className='flex items-center justify-start'>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={BannerPng} alt="BannerPng" className='w-full md:w-[300px] lg:w-[400px] object-cover' />
        </div>

        <div className='flex flex-col justify-center'>
          <div className='text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className='text-3xl lg:text-6xl font-bold uppercase'>
              Get Fresh Fruit Today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}>
              Find the freshest fruits in Lahore at our store, where every bite is full of flavor. Enjoy top-quality fruits that are carefully chosen just for you.
            </motion.p>
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className='flex justify-start'>
              <button className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300'>
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner3;
