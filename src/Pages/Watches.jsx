import React from "react";
import Filter from "../Components/Filter";
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react" 
import { getWatches } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";
import {Link, useSearchParams} from "react-router-dom"

const Watches = () => {
  const dispatch=useDispatch()
  const watches=useSelector((store)=>store.AppReducer.watches)
  const [searchParams]=useSearchParams()
  console.log("params",searchParams.getAll("category"))


  useEffect(()=>{
    let getParams={
      params:{category:searchParams.getAll("category")}
    }
    dispatch(getWatches(getParams))
  },[searchParams])
  console.log(watches)
  return (
    <div>
      <Filter />
      <div style={{display:"grid", gridTemplateColumns:"repeat(3 , 1fr)"}}>
        {/* Map through the watch list here using WatchCard Component */}
       {
        watches.map((el)=>{
         return (
          <Link
         to={`/watches/${el.id}`}
         style={{ textDecoration: "none", color: "black" }}
       >
         <WatchCard {...el} />
       </Link>
         )
        })
       }

      </div>
    </div>
  );
};

export default Watches;
