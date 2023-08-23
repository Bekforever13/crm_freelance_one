import { PaymentsTable } from './PaymentsTable/PaymentsTable'
import { PaymentFilters } from './PaymentFilters/PaymentFilters'

const Payments: React.FC = () => {
	return (
		<div>
			<PaymentFilters />
			<PaymentsTable />
		</div>
	)
}
export { Payments }
