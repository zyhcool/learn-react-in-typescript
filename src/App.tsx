import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import { MyList } from './study/list';
import { Login } from './study/login';
import { AuthRoute, RouterOne } from './study/router';


class App extends React.Component {
  public constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span className="nav-text">
                    <Link to="/loginForm">Login Form</Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="team" />
                  <span className="nav-text">
                    <Link to="/list">MyList</Link>
                  </span>
                </Menu.Item>
                <SubMenu key="3" title={<span><Icon type="shop" /><span>React-Router-Dom</span></span>}>
                  <Menu.Item key="3.1">
                    <span className="nav-text">
                    <Link to="/router/1">Router 1</Link>
                    </span>
                  </Menu.Item>
                  <Menu.Item key="3.2">
                    <span className="nav-text">
                    <Link to="/router/2">Auth Route</Link>
                    </span>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div style={{ padding: 24, background: '#fff', textAlign: 'center', minHeight: "75vh" }}>
                  <Route path="/loginForm" component={Login} />
                  <Route path="/list" component={MyList} />
                  <Route path="/router/1" component={RouterOne} />
                  <Route path="/router/2" component={AuthRoute} />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Learning Something ©2018 Created with <span><Icon type="heart" style={{ color: "red" }} theme="filled" /></span> by Cool
        </Footer>
            </Layout>
          </Layout>
        </div>

      </Router>
    );
  }
}

export default App;
