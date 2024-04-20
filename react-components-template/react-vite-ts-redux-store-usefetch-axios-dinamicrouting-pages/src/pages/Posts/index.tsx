import { useFetch } from '../../hooks/useFetch'
import { PostInterface } from '../../types/Post.interface'


const Posts = () => {
  const { data: posts, error, isLoading } = useFetch<PostInterface[]>("https://jsonplaceholder.typicode.com/posts", 15)
  

  return (
    <div>
      <h1>Posts page</h1>
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!isLoading && !error && !!posts.length && posts.map((post: PostInterface) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts