import React, { useEffect, useState } from "react";
import allahNamesEnglish from "./AllahNamesEnglish";
import allahNamesMalayalam from "./AllahNamesMalayalam";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import SelectLanguage from "./SelectLanguageDropdown";

const EachNameStructure = () => {
  const [allahNamesDesc, setAllahNamesDesc] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberEntered, setNumberEntered] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(10);

  useEffect(() => {
    console.log(allahNamesDesc);
    showAllahNames();
  }, []);
  const showAllahNames = () => {
    setAllahNamesDesc(
      selectedLanguage == 10 ? allahNamesEnglish : allahNamesMalayalam
    );
  };

  useEffect(() => {
    showAllahNames();
  }, [selectedLanguage]);

  useEffect(() => {
    const keyDownHandler = (event) => keyDown(event); // Define a separate handler function
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  });

  const keyDown = (event) => {
    console.log("keydown");
    console.log("currentIndex", currentIndex);
    if (event.key === "ArrowLeft" && Number(currentIndex) > 0) {
      console.log("left arrow");
      setCurrentIndex((prev) => Number(prev) - 1);
    }
    if (event.key === "ArrowRight" && Number(currentIndex) < 99) {
      console.log("right arrow");
      setCurrentIndex((prev) => Number(prev) + 1);
    }
  };
  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  const handleIndex = (action) => {
    if (action === "+" && currentIndex < 99) {
      console.log("+ action");
      setCurrentIndex((prev) => Number(prev) + 1);
    }
    if (action === "-" && currentIndex > 0) {
      setCurrentIndex((prev) => Number(prev) - 1);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter");
      handleEnterPress();
    }
  };
  const handleEnterPress = () => {
    if (numberEntered > 0 && numberEntered < 100)
      setCurrentIndex((prev) => numberEntered);
  };

  const selctedLanguage = (lang) => {
    console.log(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div className="name-section-container">
      {/* {allahNames.map((e, i) => { */}
      <h2>Allah's 99 Names</h2>
      <SelectLanguage selctedLanguage={selctedLanguage} />
      <div className="name-container">
        <div className="gotoName">
          <input
            type="number"
            onChange={(e) => setNumberEntered(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={() => handleEnterPress()} className="go-btn">
            Go
          </button>
        </div>
        {allahNamesDesc[1] && (
          <div className="name-section">
            {currentIndex !== 0 && (
              <div className="number">{currentIndex ? currentIndex : ""}</div>
            )}
            <div className="allah-name-arabic">
              {allahNamesDesc[currentIndex].allahNameArabic}
            </div>
            <div className="allah-name-english">
              {allahNamesDesc[currentIndex].allahNameEnglish}
            </div>
            {allahNamesDesc[currentIndex].meaning && (
              <div className="meaning">
                {allahNamesDesc[currentIndex].meaning}
              </div>
            )}
            <div className="description">
              <ul>
                {allahNamesDesc[currentIndex].description[0] &&
                  allahNamesDesc[currentIndex].description.map((e, i) =>
                    allahNamesDesc[currentIndex].description.length > 1 ? (
                      <li className="margin-bottom">{e}</li>
                    ) : (
                      <li className="margin-bottom no-style-type">{e}</li>
                    )
                  )}
              </ul>
            </div>
          </div>
        )}

        <div
          className="left-arrow"
          style={{ width: "40px" }}
          onClick={() => handleIndex("-")}
        >
          <LeftOutlined />
        </div>
        <div
          className="right-arrow"
          style={{ width: "40px" }}
          onClick={() => handleIndex("+")}
        >
          <RightOutlined />
        </div>
      </div>
      {/* })} */}
    </div>
  );
};

export default EachNameStructure;
