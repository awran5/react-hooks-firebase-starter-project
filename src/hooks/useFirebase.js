import { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../utils/firebase'

// Get data by 'Snapshot'
export const useSnapshots = collection => {
  const firebase = useContext(FirebaseContext)
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(
    () => {
      const newData = []
      setLoading(true)
      const unsubscribe = firebase.firestore().collection(collection).onSnapshot(
        snapshot => {
          snapshot.forEach(doc => {
            newData.push({
              id: doc.id,
              ...doc.data()
            })
          })
          setData(newData)
          setLoading(false)
        },
        err => {
          console.log(err)
        }
      )
      return () => unsubscribe()
    },
    [ firebase, collection ]
  )

  return { loading, data }
}

// Get data by 'Doc' ID
export const useDocById = (collection, id) => {
  const firebase = useContext(FirebaseContext)
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(
    () => {
      setLoading(true)
      const unsubscribe = firebase
        .firestore()
        .collection(collection)
        .doc(id)
        .get()
        .then(doc => {
          setData({ id, ...doc.data() })
          setLoading(false)
        })
        .catch(err => {
          console.log(err)
        })
      return () => unsubscribe
    },
    [ firebase, collection, id ]
  )

  return { loading, data }
}
