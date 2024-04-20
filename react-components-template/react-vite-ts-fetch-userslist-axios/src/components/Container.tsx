import { ComponentPropsInterface } from './ComponentPropsInterface'

const Container = ({children}: ComponentPropsInterface) => {
  return (
    <>
      {children}
    </>
  )
}

export default Container