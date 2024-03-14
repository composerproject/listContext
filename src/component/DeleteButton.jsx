import {usePostContext} from '../utils/postContext.jsx'

function DeleteButton({id}) {

    const [_, dispatch] = usePostContext()

    const handleDelete = () => {
        dispatch({
            type: 'removePost',
            payload: id
        })
    }
  return (
    // <div>DeleteButton</div>
    <>
        <button onClick={handleDelete} className={'list__item__button'}>X</button>
    </>
  )
}

export default DeleteButton