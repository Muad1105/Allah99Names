import React, { useEffect, useState } from "react";
import allahNamesEnglish from "./AllahNamesEnglish";
import allahNamesMalayalam from "./AllahNamesMalayalam";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import SelectLanguage from "./SelectLanguageDropdown";
import { useParams } from "react-router-dom";
import nameBorder from "../image/nameBorder.jpg";
import { useSelector } from "react-redux";

const EachNameStructure = () => {
  const [allahNamesDesc, setAllahNamesDesc] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberEntered, setNumberEntered] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(10);

  const selectedNameIndex = useSelector((state) => state.nameIndex.nameIndex);

  useEffect(() => {
    setCurrentIndex(selectedNameIndex);
  }, [selectedNameIndex]);

  useEffect(() => {
    //To fetch and display names on first load
    showAllahNames();
  }, []);

  const showAllahNames = () => {
    setAllahNamesDesc(
      selectedLanguage == 10 ? allahNamesEnglish : allahNamesMalayalam
    );
  };

  useEffect(() => {
    //To fetch and display names when language changes
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

  const handleIndex = (action) => {
    if (action === "+" && currentIndex < 99) {
      console.log("+ action");
      setCurrentIndex((prev) => Number(prev) + 1);
    }
    if (action === "-" && currentIndex > 0) {
      setCurrentIndex((prev) => Number(prev) - 1);
    }
  };

  const handleGoPress = () => {
    console.log("numberEntered", numberEntered);
    if (numberEntered > 0 && numberEntered < 100) {
      setCurrentIndex((prev) => numberEntered);

      setNumberEntered("");
    }
  };

  const selctedLanguage = (lang) => {
    console.log(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div>
      <img
        src={nameBorder}
        alt=""
        style={{ width: "100vw", position: "absolute", height: "100%" }}
        className=""
      />
      <div className="name-section-container">
        <h2 className="section-header-name" style={{ zIndex: "2" }}>
          {selectedLanguage == 10
            ? "Allah's 99 Names"
            : "അല്ലാഹുവിൻ്റെ 99 നാമങ്ങൾ"}
        </h2>
        <SelectLanguage selctedLanguage={selctedLanguage} />
        <div className="name-container">
          <div className="gotoName">
            <input
              value={numberEntered}
              type="number"
              onChange={(e) => setNumberEntered(e.target.value)}
            />
            <button onClick={() => handleGoPress()} className="go-btn">
              Go
            </button>
          </div>

          {allahNamesDesc[1] && (
            <div className="name-section">
              <div className="arabic-translation-name-holder">
                <div className="number">
                  {currentIndex != 0 && currentIndex}
                </div>

                <div className="allah-name-arabic">
                  {allahNamesDesc[currentIndex].allahNameArabic}
                </div>
                <div className="allah-name-translation">
                  {allahNamesDesc[currentIndex].allahNameEnglish}
                </div>
              </div>
              {allahNamesDesc[currentIndex].meaning && (
                <div className="meaning">
                  {allahNamesDesc[currentIndex].meaning}
                </div>
              )}
              <div className="description">
                <div style={{ listStyleType: "none" }}>
                  {allahNamesDesc[currentIndex].description[0] &&
                    allahNamesDesc[currentIndex].description.map((e, i) =>
                      allahNamesDesc[currentIndex].description.length > 1 ? (
                        <p key={i} className="margin-bottom">
                          {e}
                        </p>
                      ) : (
                        <p key={i} className="margin-bottom no-style-type">
                          {e}
                        </p>
                      )
                    )}
                </div>
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
      </div>
    </div>
  );
};

export default EachNameStructure;
