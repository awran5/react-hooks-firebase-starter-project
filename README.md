This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Firebase Starter Project with hooks

This is a starter React-Firebase project using React [useContext[](https://reactjs.org/docs/hooks-reference.html#usecontext ) Hook that will build a React Context Provider/Consumer and initialize Firebase at the very top of your code and make it available anywhere in your project.

### Start - clone this repository

```java
git clone https://github.com/awran5/react-hooks-firebase-starter-project.git
```

### Install using Yarn

```java
yarn
```

### Install using npm

```java
npm install
```

### useSnapshots Usage example:

```js
import React from 'react'
import { useSnapshots } from './hooks/useFirebase'

function App() {
  const { loading, data } = useSnapshots('collection name')

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map(({ id, title }) => <div key={id}>{title}</div>)
      )}
    </div>
  )
}

export default App

```

### Get a single DOC by its ID using useDocs example:

```js
import React from 'react'
import { useDocs } from './hooks/useFirebase'

function App() {
  const { loading, data } = useDocs('collection name', doc id)

  return (
    <div className="App">
      ...
      ...
    </div>
  )
}

export default App
```