import React from 'react'
import { UiInput } from 'src/components/ui/input/UiInput'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import styles from './PaymentFilters.module.scss'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker
import axios from 'axios'

const PaymentFilters: React.FC = () => {
	const selectOptions = [
		{ label: 'select 1', value: 'SELECT 1' },
		{ label: 'select 2', value: 'SELECT 2' },
		{ label: 'select 3', value: 'SELECT 3' },
	]

	React.useEffect(() => {
		axios
			.post('https://openapi.network/api/auth', {
				login: 'rock@fortunepay.com',
				password: 'e9f0fbd7a758d253ecd48ccded29234c',
			})
			.then(res => console.log(res.data))
		// fetch('https://openapi.network/api/getPayments')
		// 	.then(res => res.json())
		// 	.then(data => console.log(data))
	}, [])

	const handleDateChange = (dates: any, dateStrings: any) => {
		console.log('Выбранные даты:', dates)
		console.log('Выбранные даты (строковое представление):', dateStrings)
	}

	return (
		<div className={styles.root}>
			<div className={styles.title}>Поступления</div>
			<div className={styles.filters_wrapper}>
				<UiInput placeholder='Поиск' />
				<UiSelect defaultValue={selectOptions[0]} options={selectOptions} />
				<UiSelect defaultValue={selectOptions[1]} options={selectOptions} />
				<RangePicker onChange={handleDateChange} />
			</div>
		</div>
	)
}
export { PaymentFilters }
