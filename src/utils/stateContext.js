// Export the 2 things we want to provide. First one creates context. 2nd one is a custom hook that basically does useContext and stateContext. 

// The useContext hook returns whatever value is provided by that context provider.
import {createContext, useContext} from 'react'

export const StateContext = createContext({})

// useGlobalState is the name given to the useContext hook
export const useGlobalState = () => useContext(StateContext)

// We're returning what we get on useContext on stateContext.

// Now we use the Reducer to manage the state.

// We can now incorporate our Context Provider into the portal index too
