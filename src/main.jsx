import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
	createBrowserRouter,
	createRoutesFromChildren,
	matchRoutes,
	useLocation,
	useNavigationType
} from 'react-router-dom'
import * as Sentry from '@sentry/react'

Sentry.init({
	dsn: 'https://f24a3e67266ca9e40c1982535dfdb17f@o492058.ingest.us.sentry.io/4507667464192000',
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
			useLocation,
			useNavigationType,
			createRoutesFromChildren,
			matchRoutes
		}),
		Sentry.feedbackIntegration({
			colorScheme: 'system'
		}),
		Sentry.replayIntegration()
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
