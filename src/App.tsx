import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from 'src/assets/styles/App.module.scss'
import { Layout } from './components/layouts/Layout'
import { Home } from './components/screens/home/Home'
import Auth from './components/screens/auth/Auth'
import { Payments } from './components/screens/payments/Payments'
import { Payouts } from './components/screens/payouts/Payouts'
import { Chargebacks } from './components/screens/chargebacks/Chargebacks'
import { Operations } from './components/screens/operations/Operations'
import { Terminals } from './components/screens/terminals/Terminals'
import { Clients } from './components/screens/clients/Clients'
import { Analytics } from './components/screens/analytics/Analytics'
import { P2P } from './components/screens/p2p/P2P'
import { Settings } from './components/screens/settings/Settings'

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path='/auth' element={<Auth />} />

				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/payments' element={<Payments />} />
					<Route path='/payouts' element={<Payouts />} />
					<Route path='/chargebacks' element={<Chargebacks />} />
					<Route path='/operations' element={<Operations />} />
					<Route path='/terminals' element={<Terminals />} />
					<Route path='/clients' element={<Clients />} />
					<Route path='/analytics' element={<Analytics />} />
					<Route path='/p2p' element={<P2P />} />
					<Route path='/settings' element={<Settings />} />
				</Route>
				
				<Route path='/restore_password' element={<Home />} />
			</Routes>
		</div>
	)
}
export { App }
