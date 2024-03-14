import {createContext, useContext, useReducer} from 'react';
import postReducer, {initialState} from '../reducer/postReducer';

const PostContext = createContext();


export const usePostContext = () => {
    return useContext(PostContext);
}

const PostContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(postReducer, initialState)

    const value = [state, dispatch];

    return <PostContext.Provider value={value}>
        {children}
    </PostContext.Provider>
}

export default PostContextProvider