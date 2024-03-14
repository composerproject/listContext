import './input.css';
import {usePostContext} from '../utils/postContext.jsx'

const Input = ({name}) => {

    const [state, dispatch] = usePostContext()

    // console.log('state ' + state.input);

    // const {input: value} = state



    const handleChange = (e) => {
        const {value, name} = e.target
        // console.log("value : " + value + " _ name : " + name);

        dispatch({
            type: 'changeValue',
            payload: {text: value, inputName: name}
        })

    }


    return (
        <div className={'input'}>
            <h2 className={'input__title'}>{name} : </h2>
            <input className={'input__input'} onChange={handleChange} name={name} type={'text'} />
            {/* <button onClick={handleSubmit} role={'button'} className={'input__button'}>Ajouter</button> */}
        </div>
    )
}

export default Input;