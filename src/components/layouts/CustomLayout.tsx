import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'
import styles from './Layout.module.scss'

import { MenuItems } from './MenuItems/MenuItems'

const { Content, Sider } = Layout

const CustomLayout: React.FC = () => {
	return (
		<Layout hasSider>
			<Sider
				width={230}
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
				}}
			>
				<div className={styles.logo}>LOGO</div>
				<MenuItems />
			</Sider>
			<Layout className='site-layout' style={{ marginLeft: 230 }}>
				<Header />
				<Content
					style={{
						margin: '24px 16px 0',
						overflow: 'initial',
						minHeight: '100vh',
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	)
}

export { CustomLayout }
