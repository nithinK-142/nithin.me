// import React from "react";
import HappyPill from "../components/HappyPill"
import Achievements from "../components/Achievements"

const Extra = () => {
  return (
    
    <div className="gap-8 flex">
    <div className="w-full md:w-1/2">
      <Achievements />
    </div>

    <div className="hidden md:block">
      <HappyPill />
    </div>
  </div>
  )
}

export default Extra