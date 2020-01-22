import React from 'react'
import { useSnapshots } from './hooks/useFirebase'
import HelloWorld from './components/HelloWorld'

function App() {
	const { loading, data } = useSnapshots('collection name')

	return (
		<div className="App">
			<HelloWorld />
			{loading ? <h1>Loading...</h1> : data.map(() => <div>{''}</div>)}
		</div>
	)
}

export default App
