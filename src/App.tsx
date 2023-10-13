import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@layouts/index'
import { AppRoute } from '@utils/const'
import { Main, NotFound, Post } from '@pages/index'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Main} element={<MainLayout />}>
				<Route path="" element={<Main />} />
				<Route path={AppRoute.Post} element={<Post />} />
				<Route path={AppRoute.NotFound} element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default App
