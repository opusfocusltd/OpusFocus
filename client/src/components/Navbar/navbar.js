import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavLinks,NavItem,NavBtn,NavBtnLink} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {

    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >=80){
            setscrollNav(true)
        }else{
            setscrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color : '#fff'}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to='/home' onClick={toggleHome}>
                  Opus Focus 
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks
                        activeClass="active" 
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        exact='true'
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offest={-80}
                        >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'
                         smooth={true}
                         offest={-80}
                         duration={500}
                         spy={true}
                         exact='true'
                        >Services</NavLinks>
                    </NavItem> 
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                    <NavBtnLink to='/register'>Sign Up</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
