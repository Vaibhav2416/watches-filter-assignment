import React from "react";
import { useSearchParams } from "react-router-dom";
import {useState, useEffect} from "react"

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParams, setSerchparams]=useSearchParams()

  const [category, setCategory]=useState(searchParams.getAll("category")|| [])

  const handleChange=(e)=>{
      const option=e.target.value
      const newCategory=[...category]
      if(category.includes(option)){
        newCategory.splice(newCategory.indexOf(option),1)
      }else{
        newCategory.push(option)
      }
      setCategory(newCategory)
  }

  useEffect(()=>{
    if(category){
      setSerchparams({category})
    }
  },[category, setSerchparams])
  
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" checked={category.includes("Analog")} onChange={handleChange}/>
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" checked={category.includes("Digital")} onChange={handleChange}/>
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" checked={category.includes("Chronograph")} onChange={handleChange}/>
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
