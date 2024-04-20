import { ComponentPropsInterface } from '../../interface/ComponentPropsInterface'

const SearchGroup = ({children}: ComponentPropsInterface) => {
  return (
    <div className="search-group">
      {children}
    </div>
  )
}

export default SearchGroup;