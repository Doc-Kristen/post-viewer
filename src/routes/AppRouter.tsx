import React from 'react'
import { AppRoute } from '@helpers/const'
import { MainLayout } from '@layouts/index'
import { Main, NotFound, Post } from '@pages/index'
import { Route, Routes } from 'react-router-dom'

const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Main} element={<MainLayout />}>
				<Route path='' element={<Main />} />
				<Route path={AppRoute.Post} element={<Post />} />
				<Route path={AppRoute.NotFound} element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
