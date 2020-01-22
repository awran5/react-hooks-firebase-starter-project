import React from 'react'
import ReactDOM from 'react-dom'
import FirebaseProvider from './utils/firebase'
import './index.css'
import App from './App'

ReactDOM.render(
	<FirebaseProvider>
		<App />
	</FirebaseProvider>,
	document.getElementById('root')
)
