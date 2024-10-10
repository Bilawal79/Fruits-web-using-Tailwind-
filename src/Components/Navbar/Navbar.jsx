import React from 'react';
import { MdMenu } from 'react-icons/md'; // ShoppingCart icon hatadiya
import { motion } from "framer-motion";

// NavbarMenu ko yahan define karein
const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Products",
        link: "#"
    },
    {
        id: 3,
        title: "About",
        link: "#"
    },
    {
        id: 4,
        title: "Shop",
        link: "#"
    },
    {
        id: 5,
        title: "Contacts",
        link: "#"
    },
];

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav>
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5, delay: 0.5}}
                    className='container flex justify-between items-center py-4 md:pt-4'>
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <p className='text-primary'>Village Fruit And</p>
                        <p className='text-secondary'>Vegitable Shop</p>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-600'>
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link} className='inline-block py-3 hover:text-primary hover:shadow-[0_3px_-1px_#ef4444] font-semibold'>{menu.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        <MdMenu className='text-4xl' />
                    </div>
                </motion.div>
            </nav>
        </>
    );
};

export default Navbar;
