import {
	AiOutlineHome,
	AiOutlineArrowRight,
	AiOutlineArrowLeft,
	AiOutlineSetting,
} from 'react-icons/ai'
import { BiMoney, BiLogOut } from 'react-icons/bi'
import { BsMenuButtonWide } from 'react-icons/bs'
import { PiUsersThreeBold } from 'react-icons/pi'
import { SiSimpleanalytics } from 'react-icons/si'
import { RiTerminalWindowLine, RiP2PFill } from 'react-icons/ri'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const MenuItems = () => {
	const navItems = [
		{ pathname: '/', icon: <AiOutlineHome />, label: 'Главная' },
		{
			pathname: '/payments',
			icon: <BiMoney />,
			label: 'Поступления/Платежи',
		},
		{
			pathname: '/payouts',
			icon: <AiOutlineArrowRight />,
			label: 'Переводы/Выплаты',
		},
		{
			pathname: '/chargebacks',
			icon: <AiOutlineArrowLeft />,
			label: 'Чарджбеки',
		},
		{
			pathname: '/operations',
			icon: <BsMenuButtonWide />,
			label: 'Операции',
		},
		{
			pathname: '/terminals',
			icon: <RiTerminalWindowLine />,
			label: 'Терминалы',
		},
		{
			pathname: '/clients',
			icon: <PiUsersThreeBold />,
			label: 'Клиенты',
		},
		{
			pathname: '/analytics',
			icon: <SiSimpleanalytics />,
			label: 'Аналитика',
		},
		{ pathname: '/p2p', icon: <RiP2PFill />, label: 'P2P' },
		{
			pathname: '/settings',
			icon: <AiOutlineSetting />,
			label: 'Настройки',
		},
		{ pathname: '/auth', icon: <BiLogOut />, label: 'Выйти' },
	].map(item => ({
		key: item.pathname,
		icon: item.icon,
		label: (
			<Link key={item.pathname} to={item.pathname}>
				{item.label}
			</Link>
		),
	}))

	return (
		<Menu
			theme='dark'
			defaultSelectedKeys={['/']}
			items={navItems}
		/>
	)
}
export { MenuItems }
