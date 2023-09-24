// import React from "react";
import HappyPill from "../components/HappyPill"
import Achievements from "../components/Achievements"

const Extra = () => {
  return (
    
    <div className="gap-8 flex-colm sm:flex-row sm:gap-0">
    <div className="w-full sm:w-1/2">
      <Achievements />
    </div>

    <div className="hidden pb-4 md:block">
      <HappyPill />
    </div>
  </div>
  )
}

export default Extra