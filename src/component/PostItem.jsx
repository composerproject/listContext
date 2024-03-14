import DeleteButton from './DeleteButton';
import './postItem.css';



const PostItem = ({post}) => {

    return (
        <li className={'list__item'}>
            <span className={'list__item__text'}>{post.title}</span>
            <span className={'list__item__text'}>{post.content}</span>
            <DeleteButton id={post.id}/>
        </li>
    )
}

export default PostItem;