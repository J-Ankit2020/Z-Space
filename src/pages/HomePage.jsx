import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <div className='w-full flex items-center flex-col md:flex-row md:justify-between md:w-10/12 md:mt-20'>
            <div className='flex flex-col items-center md:w-1/2 md:justify-center'>
                <p className='font-secondary text-[28px] text-lightBlue leading-[4.75] uppercase font-light'>So you want to travel to</p>
                <p className='text-8xl uppercase md:text-9xl'>Space</p>
                <p className='text-center mt-4 text-lightBlue font-normal text-lg p-3 md:w-3/4'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <Link to="/destination/0">
                <motion.div className="circle bg-cream  rounded-full w-[150px] h-[150px] md:w-[260px] md:h-[260px] flex items-center justify-center cursor-pointer" whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <p className=' text-primary text-3xl tracking-wider font-normal uppercase'>
                        Explore
                    </p>
                </motion.div>
            </Link>
        </div>
    )
}

export default HomePage