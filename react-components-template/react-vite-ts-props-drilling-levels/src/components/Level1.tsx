import { PropContext } from '../App'
import { LevelPropsInterface } from './LevelProps.interface'
import Level2 from './Level2'

const Level1 = () => {
  return (
    <PropContext.Consumer>
      {(contextValue: LevelPropsInterface) => {
        if(!contextValue) {
          return <h1>No value provided</h1>
        }

        const {value} = contextValue
        return (
          <div>
            <h2>Level 1: {value}</h2>
            <Level2/>
          </div>
        )
      }}
    </PropContext.Consumer>
  )
}

export default Level1