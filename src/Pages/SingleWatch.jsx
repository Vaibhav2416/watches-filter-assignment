import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWatches } from "../Redux/AppReducer/action";

const SingleWatch = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const watches = useSelector((state) => state.AppReducer.watches);
  const [currentWatch, setCurrentWatch] = useState({});

  useEffect(() => {
    if (watches.length === 0) {
      dispatch(getWatches());
    }
  }, [watches.length, dispatch]);

  useEffect(() => {
    if (id) {
      const currentWatch = watches.find((watch) => watch.id === Number(id));
      currentWatch && setCurrentWatch(currentWatch);
    }
  }, [id, watches]);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{currentWatch?.name}</h2>
      <div>
        <img src={`${currentWatch.image}`} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentWatch?.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
