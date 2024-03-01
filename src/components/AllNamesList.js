import React from "react";
import AllahNamesListArabic from "./AllahNamesEnglish";
import AllahImage from "../image/allah.png";
import { useNavigate } from "react-router-dom";
const AllNamesList = () => {
  const navigate = useNavigate();
  const handleOpenName = (nameNumber) => {
    navigate(`/allahName/${nameNumber}`);
  };
  return (
    <div className="name-list-section">
      <h2>Allah's 99 Names</h2>
      <div className="allah-name-list-container">
        {AllahNamesListArabic.map((e, i) => {
          if (i == 0) {
            return (
              <div
                key={e.nameNumber}
                className="main-name-structure"
                onClick={() => handleOpenName(e.nameNumber)}
              >
                <img
                  className="name-outline-image"
                  src={AllahImage}
                  alt="Allah"
                />
                <div className="main-name" key={e.nameNumber}>
                  <p className="name">{e.allahNameArabic}</p>
                </div>
              </div>
            );
          }
          return (
            <div
              key={e.nameNumber}
              className="each-name-list-structure"
              onClick={() => handleOpenName(e.nameNumber)}
            >
              <img
                className="name-outline-image"
                src={AllahImage}
                alt="Allah"
              />
              <div className="list-each-name" key={e.nameNumber}>
                <p className="name">{e.allahNameArabic}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllNamesList;
