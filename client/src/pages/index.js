import React, {useState} from 'react'
import Footer from '../components/Footer/footer';
import HeroSection from '../components/HeroSection/hero';
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/info';
import Navbar from '../components/Navbar/navbar';
import Services from '../components/Services/services';
import Sidebar from '../components/Sidebar/sidebar';


const Cover = () => {
    const [isOpen,setisOpen] = useState(false)

    const toggle = () =>{
        setisOpen(!isOpen)
    }

    return (
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        <Footer />
        </>
    )
}

export default Cover 
