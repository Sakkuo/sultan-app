import React from 'react'
import './SearchArea.css'

interface ISearchAreaProps {
  width: number
  text: string
  icon: string
  value?: string
  onChange?: (e: any) => void
}


const SearchArea: React.FC<ISearchAreaProps> = ({width, text, icon, value, onChange}) => {
  return (
    <div className='SearchArea SearchArea__adaptive SearchArea__top' style={{width: width}}>
      <input className='Search__input' placeholder={text} value={value} onChange={onChange}/>
      <div className="SearchArea__button">
        <i className={icon + ' SearchArea__button--img'}></i>
      </div>
    </div>

  )
}




export default SearchArea