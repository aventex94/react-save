import React from "react";
import {  useSelector } from "react-redux";
import MeetView from "./../Meet/MeetView";
const Home = () => {
  const { meets } = useSelector((state) => state.meet);
  const auth = useSelector((state)=> state.auth);
  return (
    <>
      {meets.map((m, index) => {
        return (
          <div key={index}>
            <MeetView m={m} index={index} auth={auth} />
          </div>
        );
      })}
    </>
  );
};

export default Home;
