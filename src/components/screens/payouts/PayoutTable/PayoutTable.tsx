import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
	id: string
	user: string
	terminal: string
	source: string
	updated: string
	sum: string
	enrolled: string
	commission: string
	status: string
}

const columns: ColumnsType<DataType> = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Пользователь',
		dataIndex: 'user',
		key: 'user',
	},
	{
		title: 'Терминал',
		dataIndex: 'terminal',
		key: 'terminal',
	},
	{
		title: 'Источник',
		dataIndex: 'source',
		key: 'source',
	},
	{
		title: 'Обновлен',
		dataIndex: 'updated',
		key: 'updated',
	},
	{
		title: 'Сумма',
		dataIndex: 'sum',
		key: 'sum',
	},
	{
		title: 'Зачислено',
		dataIndex: 'enrolled',
		key: 'enrolled',
	},
	{
		title: 'Комиссия',
		dataIndex: 'commission',
		key: 'commission',
	},
	{
		title: 'Статус',
		dataIndex: 'status',
		key: 'status',
	},
]

const data: DataType[] = [
	{
		id: '1',
		user: 'user',
		terminal: 'terminal',
		source: 'source',
		updated: 'updated',
		sum: 'sum',
		enrolled: 'enrolled',
		commission: 'commission',
		status: 'Выполнен',
	},
]

const PayoutTable: React.FC = () => {
	return <Table columns={columns} dataSource={data} />
}
export { PayoutTable }
