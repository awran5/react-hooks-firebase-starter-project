import React, { createContext } from 'react'
import app from 'firebase/app'
import 'firebase/firestore'

const FirebaseContext = createContext(null)
export { FirebaseContext }

/**
 * Please note that this is not safe and your credentials will be seen if anyone inspect your page 
 * so you will need to store these somewhere else.
 */
export default ({ children }) => {
  if (!app.apps.length) {
    app.initializeApp({
      apiKey: 'xxxxxxxxxxxxxx',
      authDomain: 'xxxxxxxxxxxxxx',
      databaseURL: 'xxxxxxxxxxxxxx',
      projectId: 'xxxxxxxxxxxxxx',
      storageBucket: 'xxxxxxxxxxxxxx',
      messagingSenderId: 'xxxxxxxxxxxxxx',
      appId: 'xxxxxxxxxxxxxx'
    })
  }

  return <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
}
