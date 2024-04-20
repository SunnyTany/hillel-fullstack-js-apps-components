import { useFetch } from '../../hooks/useFetch'
import { UserInterface } from '../../types/User.interface'


const Users = () => {
  const { data: users, error, isLoading } = useFetch<UserInterface[]>("https://jsonplaceholder.typicode.com/users")
  
  return (
    <div>
      <h1>Users page</h1>
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!!users.length && users.map((user: UserInterface) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users