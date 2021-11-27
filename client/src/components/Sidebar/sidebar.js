import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarMenu,SidebarLink,SidebarRoute,SidebarWrapper} from './SideBarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/> 
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Sign In</SidebarRoute>
                    <SidebarRoute to='/register'>Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
