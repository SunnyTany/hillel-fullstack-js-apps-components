import { CSSProperties, FC } from 'react'
import { Layout } from 'antd'
import { useBreakpoint } from 'antd/lib/grid/hooks/useBreakpoint'
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 150,
  paddingInline: 48,
  lineHeight: '150px',
  backgroundColor: '#4096ff',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 440,
  lineHeight: '440px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '440px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
};

const LayoutExample: FC = () => {
  const screens = useBreakpoint();

  return (
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout style={{flex: 1, flexDirection: screens.sm ?'row' : 'column-reverse'}}>
          <Sider width="25%" style={siderStyle}>
            Sider
          </Sider>
          <Content style={{...contentStyle, width: '100%'}}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
  )
};

export default LayoutExample