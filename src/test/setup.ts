import '@testing-library/jest-dom'
import { fetch, Headers, Request, Response } from 'cross-fetch'
import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
import 'vitest-canvas-mock'

export const fetchMocker = createFetchMock(vi)

global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response
