import { PayoutFilters } from "./PayoutFilters/PayoutFilters"
import { PayoutTable } from "./PayoutTable/PayoutTable"

const Payouts: React.FC = () => {
	return <div>
		<PayoutFilters />
		<PayoutTable />
	</div>
}
export { Payouts }
