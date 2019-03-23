import React, {Component, Fragment} from "react";
import {Layout, Breadcrumb, Icon} from 'antd';
import SiderMenu from "../components/SiderMenu/SiderMenu";

const {
    Header, Content, Footer,
} = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <SiderMenu/>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        ©2019 Created by Liang Yuan
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;
