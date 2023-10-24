import React from 'react'
import { Typography, AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import { AppRoute } from '@utils/const'
import style from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<AppBar position='fixed' className={style.root}>
			<Toolbar>
				<Link to={AppRoute.Main} className={style.link}>
					<Typography variant='h6'>PostViewer</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default Header
