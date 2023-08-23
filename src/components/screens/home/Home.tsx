import { Statistics } from 'src/components/shared/statistics/Statistics'
import styles from './Home.module.scss'
import { SiSimpleanalytics } from 'react-icons/si'
import { BiMoney } from 'react-icons/bi'
import { AiOutlineArrowRight } from 'react-icons/ai'


const Home = () => {
	return (
		<div className={styles.home}>
			<Statistics
				title='Платежей за сегодня'
				icon={<SiSimpleanalytics />}
				profit={22333}
			/>
			<Statistics title='Текущий баланс' icon={<BiMoney />} profit={22333} />
			<Statistics
				title='Выплат за сегодня'
				icon={<AiOutlineArrowRight />}
				profit={22333}
			/>
		</div>
	)
}
export { Home }
