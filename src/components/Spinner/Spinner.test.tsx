import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Spinner from './index'

describe('Component: Spinner', () => {
	it('should render correctly', () => {
		render(
			<MemoryRouter>
				<Spinner />
			</MemoryRouter>,
		)
		const element = screen.getByTestId('spinner')
		expect(element).toBeInTheDocument()

		expect(element).toMatchInlineSnapshot(`
			<div
			  class="MuiBox-root css-3hcm5q"
			  data-testid="spinner"
			>
			  <span
			    class="MuiCircularProgress-root MuiCircularProgress-indeterminate MuiCircularProgress-colorPrimary css-18lrjg1-MuiCircularProgress-root"
			    role="progressbar"
			    style="width: 40px; height: 40px;"
			  >
			    <svg
			      class="MuiCircularProgress-svg css-1idz92c-MuiCircularProgress-svg"
			      viewBox="22 22 44 44"
			    >
			      <circle
			        class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate css-176wh8e-MuiCircularProgress-circle"
			        cx="44"
			        cy="44"
			        fill="none"
			        r="20.2"
			        stroke-width="3.6"
			      />
			    </svg>
			  </span>
			</div>
		`)
	})
})
