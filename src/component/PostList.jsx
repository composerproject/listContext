import './postList.css';
import PostItem from './PostItem.jsx';
import {usePostContext} from '../utils/postContext.jsx'

const PostList = () => {

    const [state] = usePostContext();
    const {posts} = state;

    return (
        <ul className={'list'}>
            {
                posts.length > 0 ?
                    posts.map((post) => {
                        return <PostItem key={post.id} post={post}/>
                    })
                    :
                    <span>Aucune tâche pour le moment.</span>
            }
        </ul>
    )
}

export default PostList;