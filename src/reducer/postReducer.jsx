let id = 1;

export const initialState = {
    input: '',
    title: '',
    content: '',
    posts: [],
    errorMessage: ''
}

const postReducer = (state, action) => {

    switch(action.type) {

        case 'changeValue':
            // console.log('reducer : ' + action.payload.inputName + " _ " + action.payload.text)
            console.log(state);
            return {
                ...state,
                input: action.payload.text,
                [action.payload.inputName]: action.payload.text,
                errorMessage: ''
            }

        case 'addPost':
            return {
                ...state,
                input: '',
                posts: [...state.posts, 
                    {
                        id: id++, 
                        text: state.input,
                        title: state.title,
                        content: state.content
                    }]
            }

        case 'error':
            return {
                ...state,
                errorMessage: action.payload
            }

        case 'removePost':
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            }

        default:
            return state;
    }
}

export default postReducer