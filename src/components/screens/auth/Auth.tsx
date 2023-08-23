import { useEffect } from 'react'
import { Form, Input } from 'antd'
import styles from './Auth.module.scss'
import { UiButton } from '../../ui/button/UiButton'
import { Link, useNavigate } from 'react-router-dom'
import { useActions } from 'src/hooks/useActions'
import { useSelectors } from 'src/hooks/useSelectors'

const Auth = () => {
	const { loggedIn } = useActions()
	const { isAuth } = useSelectors()
	const navigate = useNavigate()

	const onFinish = (values: any) => {
		console.log('Success:', values)
		loggedIn(true)
		navigate('/', { replace: true })
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token !== null) {
			loggedIn(true)
		}
	}, [])

	useEffect(() => {
		if (isAuth) {
			navigate('/', { replace: true })
		}
	}, [isAuth])

	return (
		<div className={styles.root}>
			<h1>LOGO</h1>
			<Form
				name='basic'
				layout='vertical'
				style={{ maxWidth: 800 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Введите номер телефона или E-mail'
					name='phone'
					rules={[{ required: true, message: 'Заполните поле' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Пароль'
					name='password'
					rules={[{ required: true, message: 'Заполните поле' }]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item>
					<UiButton type='primary' htmlType='submit'>
						Войти
					</UiButton>
				</Form.Item>
			</Form>
			<Link to={'/restore_password'}>Забыли пароль?</Link>
		</div>
	)
}
export default Auth
