import { usePostContext } from "../utils/postContext"



function ErrorMessage() {
    const [state] = usePostContext();
    const {errorMessage} = state;
  return (
    // <div>ErrorMessage</div>
    <>
            {
                errorMessage !== '' && <p style={{color: 'red'}}>{errorMessage}</p>
            }
    </>
  )
}

export default ErrorMessage