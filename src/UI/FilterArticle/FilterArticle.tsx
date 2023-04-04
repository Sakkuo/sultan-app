import React from "react";
import './FilterArticle.css'




const FilterArticle = ({text}: {text: string}) => {


  return (
    <div className="FilterArticle">
      {text}
    </div>
  )
}

export default FilterArticle