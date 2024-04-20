import { UserInterface } from "./UserInterface"

const UncontrolledUser = ({user}: {user: UserInterface}) => {
  return (
    <li>
      {user.name}
    </li>
  )
}

export default UncontrolledUser