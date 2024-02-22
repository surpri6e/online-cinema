import { FC } from 'react'
import './HelpWindow.scss'

interface IHelpWindow {
    title: string;
}

const HelpWindow: FC<IHelpWindow> = ({title}) => {
  return (
    <div className="hw">
        {title}
    </div>
  )
}

export default HelpWindow