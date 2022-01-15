import { createContext, useReducer } from 'react'
import UserReducer from './UserReducer';


const UserContext = createContext()



export const UserProvider = ({ children }) => {
    const setLoading = () => dispatch({ type: 'LOADING' })
    const initialState = {
        name: '',
        email: '',
        password: '',
        occupations: [],
        states: [],
        loading: false,
        submitted: false
      }

    const [state, dispatch] = useReducer(UserReducer, initialState)


    // Fetch options
  const getOptions = async () => {
      setLoading()
      try{
        const response = await fetch('https://frontend-take-home.fetchrewards.com/form')
        const data = await response.json()
        dispatch({type: 'GET_OPTIONS', payload: data})
        if (response.status !== 200) throw Error(data.message);
    } catch(err){
        alert(err)
    }
  }


  const postForm = async (formData) => {
    setLoading()
    try {
        const response = await fetch('https://frontend-take-home.fetchrewards.com/form', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if (response.status !== 200) throw Error(response.message);
        dispatch({type: 'SUBMITTED'})
    } catch(err) {
        alert(err)
    }
  }


    return (
        <UserContext.Provider
        value={{ ...state, getOptions, postForm }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
