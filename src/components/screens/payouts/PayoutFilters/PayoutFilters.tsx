import React from 'react'
import { UiInput } from 'src/components/ui/input/UiInput'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import styles from './PayoutFilters.module.scss'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker

const PayoutFilters: React.FC = () => {
	const selectOptions = [
		{ label: 'select 1', value: 'SELECT 1' },
		{ label: 'select 2', value: 'SELECT 2' },
		{ label: 'select 3', value: 'SELECT 3' },
	]

	const handleDateChange = (dates: any, dateStrings: any) => {
		console.log('Выбранные даты:', dates)
		console.log('Выбранные даты (строковое представление):', dateStrings)
	}

	return (
		<div className={styles.root}>
			<div className={styles.title}>Выплаты</div>
			<div className={styles.filters_wrapper}>
				<UiInput placeholder='Поиск' />
				<UiSelect defaultValue={selectOptions[0]} options={selectOptions} />
				<UiSelect defaultValue={selectOptions[1]} options={selectOptions} />
				<RangePicker onChange={handleDateChange} />
			</div>
		</div>
	)
}
export { PayoutFilters }
