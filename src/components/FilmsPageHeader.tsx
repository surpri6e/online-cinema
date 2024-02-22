import { FC } from "react";
import '../styles/components/FilmsPageHeader.scss'

interface IFilmsPageHeader {
    title: string;
}

const FilmsPageHeader: FC<IFilmsPageHeader> = ({title}) => {
  return (
    <div className="fph">
        <div className="title">{title}</div>
        <div className="fph_subtitle">PlayOn online cinema offers more than three thousand films for viewing, including new releases and premieres.</div>
    </div>
  )
}

export default FilmsPageHeader