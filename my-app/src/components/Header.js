import React from 'react';
import { Layout, Input, Button, Menu, Dropdown, Avatar } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Link,  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Header } = Layout;

const AppHeader = () => {
  // Get authentication state from Redux
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <Layout>
      <Header style={{ height: '80px', padding: '0', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', padding: '0 40px' }}>
          <a href="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={`http://localhost:8888/images/logo.jpg`}
                alt="logo BÁO GEAR"
                style={{ width: 100, height: 100 }}
              />
              <span style={{ fontSize: '32px', fontWeight: 'bold', marginLeft: '10px', color: '#254753' }}>
                BÁO GEAR
              </span>
            </div>
          </a>
          <Input
            placeholder="Tìm kiếm sản phẩm..."
            prefix={<SearchOutlined />}
            style={{ width: '300px', marginRight: '20px' }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}>Tổng đài hỗ trợ/ Hotline: 0949 068 911</span>
            {isAuthenticated ? (
              <>
                <Button type="link">Xin chào, {user?.fullname || 'User'}!</Button>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="1">
                        <Link to="/account">Tài khoản của tôi</Link>
                      </Menu.Item>
                      <Menu.Item key="2" onClick={() => {
                        localStorage.removeItem('token'); 
                        window.location.href = '/';
                      }}>
                        Đăng xuất
                      </Menu.Item>

                    </Menu>
                  }
                  trigger={['click']}
                >
                  <Avatar icon={<UserOutlined />} />
                </Dropdown>
              </>
            ) : (
              <Link to="/login">
                <Button type="link">Đăng nhập</Button>
              </Link>
            )}
          </div>
        </div>

        <Menu
          mode="horizontal"
          theme="dark"
          style={{
            lineHeight: '64px',
            backgroundColor: '#254753',
            padding: '0',
            justifyContent: 'center',
          }}
        >
          <Menu.Item key="keyboard">
            <a href="/keyboard" style={{ padding: '0 16px' }}>Bàn phím</a>
          </Menu.Item>
          <Menu.Item key="keycap">
            <a href="/keycap" style={{ padding: '0 16px' }}>Keycap</a>
          </Menu.Item>
          <Menu.Item key="switch">
            <a href="/switch" style={{ padding: '0 16px' }}>Switch & Phụ kiện</a>
          </Menu.Item>
          <Menu.Item key="monitor">
            <a href="/monitor" style={{ padding: '0 16px' }}>Màn hình PC</a>
          </Menu.Item>
          <Menu.Item key="groupbuy">
            <a href="/groupbuy" style={{ padding: '0 16px' }}>Groupbuy / IC</a>
          </Menu.Item>
          <Menu.Item key="resources">
            <a href="/resources" style={{ padding: '0 16px' }}>File & Resources</a>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default AppHeader;
