import { usePostContext } from "../utils/postContext"


function AddButton() {
    const [state, dispatch] = usePostContext()

    const handleSubmit = () => {
        if(state.title.trim() === '') {
            dispatch({type: 'error', payload: "Impossible d'ajouter le post car il n'y a pas de titre"});
            return;
        }

        if(state.content.trim() === '') {
            dispatch({type: 'error', payload: "Impossible d'ajouter le post car il n'y a pas de contenu"});
            return;
        }
        
        dispatch({type: 'addPost'});

    }

  return (
    <>
        <button onClick={handleSubmit} role={'button'} className={'input__button'}>Ajouter</button>
    </>
  )
}

export default AddButton