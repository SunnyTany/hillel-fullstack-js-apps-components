import { useEffect, useState } from 'react'
import UncontrolledUser from './UncontrolledUser'
import { UserInterface } from './UserInterface'
import { fetchData } from '../utils/api'

const Users = () => {
  const [users, setUsers] = useState<UserInterfaceArray>([])
  // const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchDataHandleError = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        setUsers(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        // setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDataHandleError()
  }, [])

  return (
    <ul>
      {isLoading && <p>Loading ...</p>}
      {users.map((user: UserInterface) => {
        return <UncontrolledUser key={user.id} user={user} />
      })}
    </ul>
  )
}

export default Users