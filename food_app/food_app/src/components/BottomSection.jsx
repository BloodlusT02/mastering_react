import React from "react";
import SearchResult from "./SearchResult";

const BottomSection = ({ foodData }) => {
  return (
    <>
      <div className="min-h-[calc(100vh-208px)] bg-bgImage flex justify-center">
        <div className="pt-14 w-full max-w-[1060px] flex flex-wrap gap-x-5 gap-y-4 justify-center">
          <SearchResult foodData={foodData} />
        </div>
      </div>
    </>
  );
};

export default BottomSection;
