import { FC } from 'react'

interface IHeaderInput {
  setText: React.Dispatch<React.SetStateAction<string>>
}

const HeaderInput: FC<IHeaderInput> = ({setText}) => {
  return (
    <input type="text" className='header_input' placeholder='Movie/series name or actor/director name' onChange={(e) => setText(e.target.value)}/>
  )
}

export default HeaderInput