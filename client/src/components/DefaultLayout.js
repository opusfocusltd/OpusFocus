import { Layout, Menu } from 'antd';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusSquareOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  UserOutlined,
  PlusOutlined,
  CheckOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const { Header, Sider, Content } = Layout;


class DefaultLayout extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
        collapsed: false,
      };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout=()=>{
      localStorage.removeItem('user')
      window.location.reload()
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const w = window.innerWidth;
    return (
      <Layout>
        <Sider trigger={null} breakpoint='sm' collapsedWidth='70'
         style={{position: 'sticky' , overflow : 'auto' , height:'100vh' , top:0}}
        >
          <div className="logo">
              {w<578 ? (<h1>OF</h1>) : (<h1>Opus Focus</h1>)}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to='/'><p style={{display: w<478 ? 'none':'inline',marginTop:'15px'}}>Home</p></Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Link to='/profile'><p style={{display: w<478 ? 'none':'inline',marginTop:'15px'}}>Profile</p></Link>
            </Menu.Item>
            <Menu.Item key="/appliedjobs" icon={<PlusSquareOutlined />}>
            <Link to='/appliedjobs'><p style={{display: w<478 ? 'none':'inline',marginTop:'15px'}}>Applied Jobs</p></Link>
            </Menu.Item>

            <Menu.Item key="/postjob" icon={<PlusOutlined />}>
            <Link to='/postjob'><p style={{display: w<478 ? 'none':'inline',marginTop:'15px'}}>Post Job</p></Link>
            </Menu.Item>

            <Menu.Item key="/posted" icon={<CheckOutlined />}>
            <Link to='/posted' ><p style={{display: w<478 ? 'none':'inline',marginTop:'15px'}}>Posted</p></Link>
            </Menu.Item>

            <Menu.Item key="/logout" icon={<LogoutOutlined />} onClick={this.logout}>
            <Link style={{display: w<478 ? 'none':'inline'}} >
              Logout
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 , position: 'sticky' , overflow : 'auto' , top:0 , zIndex:9999}}>
           
           <div className="flex justify-content-between">

             <div>
             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
             </div>

             <div>
                <Filter/>
             </div>

             <div style={{display : w<578 || this.state.collapsed ? 'none' : 'inline'}}>
                  <h5 className="mr-2"><FontAwesomeIcon icon={faUserCircle} /><b className="gg">{user.username}</b></h5>
             </div>

           </div>
           


          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflowX:'hidden'
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout