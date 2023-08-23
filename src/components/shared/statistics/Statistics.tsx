import React from 'react'
import styles from './Statistics.module.scss'
import { BsArrowRightShort } from 'react-icons/bs'

type PropType = {
	profit: number
	title: string
	icon: JSX.Element
}

const Statistics: React.FC<PropType> = ({ profit, title, icon }) => {
	return (
		<div className={styles.profit_today}>
			<div className={styles.profit}>
				<span>{icon}</span>
				<div>
					<h2>{profit}</h2>
					<h4>{title}</h4>
				</div>
			</div>
			<button className={styles.check}>
				Подробнее
				<BsArrowRightShort />
			</button>
		</div>
	)
}

export { Statistics }
