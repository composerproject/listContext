import './App.css'
import PostList from './component/PostList.jsx'
import Input from './component/Input.jsx'
import AddButton from './component/AddButton.jsx'
import ErrorMessage from './component/ErrorMessage.jsx'

function App() {

  return (
    <div className={'main'}>
      <div className={'post__header'}>
        <Input name="title"/>
        <Input name="content"/>
        <ErrorMessage />
        <AddButton />
      </div>
      <div className={'post__list'}>
          <PostList />
      </div>
    </div>
  )
}

export default App