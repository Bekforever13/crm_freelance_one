import { Navigate } from 'react-router-dom'
import { useSelectors } from 'src/hooks/useSelectors'
import { CustomLayout } from './CustomLayout'

const Layout: React.FC = () => {
	const { isAuth } = useSelectors()

	return isAuth ? <CustomLayout /> : <Navigate to='/auth' />
}
export { Layout }
