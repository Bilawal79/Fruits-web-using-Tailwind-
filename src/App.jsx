import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Menus from './Components/Menus/Menus';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner/Banner2';
import Banner3 from './Components/Banner/Banner3';



const App = () => {
  return (
     
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Menus />
        
        <Banner />
        <Banner2 />
        <Banner3 />
        
      </main>
    
  )
}

export default App;
