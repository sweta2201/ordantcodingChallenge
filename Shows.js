import React, { useEffect, useState } from "react";
import axios from "axios";
import "./shows.css";

function Shows() {
  const [selectedShow, setSelectedShow] = useState();

  useEffect(() => {
    const show = window.location.pathname;
    const showId = show.split("/")[2];
    console.log(showId);

    axios
      .get(`https://api.tvmaze.com/shows/${showId}`)
      .then((res) => setSelectedShow(res.data))
      .catch((err) => console.log(err));
  }, []);

  
  console.log(selectedShow, "selectedShow");
  return (
    <div className="mainContainer">
      <div>
        <h3 className="mainHeading">Show Detail</h3>
      </div>

      {selectedShow ? (
        <div className="selectedShowContainer">
          {/***** TOP *****/}
          <div className="top">
            <div className="left">
              <div className="imageContainer">
                <img src={`${selectedShow.image.medium}`} />
              </div>
            </div>
            <div className="right">
              <h2>{selectedShow.name}</h2>
              <p>{selectedShow.summary}</p>
            </div>
          </div>

          {/***** BOTTOM *****/}
          <div className="buttom">
            <div className="left">
              <h3 className="heading">Show Info</h3>

              <div className="infoContainer">
                <div className="info">
                  <p className="infoHeading">
                    <strong>Streamed On</strong>
                  </p>
                  <p className="infoDetail">BBC Three</p>
                </div>
                <div className="info">
                  <p className="infoHeading">
                    <strong>Schedule</strong>
                  </p>
                  <p className="infoDetail">Tuesdays</p>
                </div>
                <div className="info">
                  <p className="infoHeading">
                    <strong>Status</strong>
                  </p>
                  <p className="infoDetail">Running</p>
                </div>
                <div className="info">
                  <p className="infoHeading">
                    <strong>Genres</strong>
                  </p>
                  <p className="infoDetail">Drama, Comedy, Music</p>
                </div>
              </div>
            </div>

            <div className="right">
              <h2 className="heading">Starring</h2>

              <div className="starrings">
                <div className="detailContainer">
                  <div className="imageContainer"></div>
                  <div className="personDetail">
                    <p>
                      <strong>Victoria AlCock</strong>
                    </p>
                    <p>Carol</p>
                  </div>
                </div>
                <div className="detailContainer">
                  <div className="imageContainer"></div>
                  <div className="personDetail">
                    <p>
                      <strong>Hugo Chegwin</strong>
                    </p>
                    <p>Beats</p>
                  </div>
                </div>
                <div className="detailContainer">
                  <div className="imageContainer"></div>
                  <div className="personDetail">
                    <p>
                      <strong>Allan Mustafa</strong>
                    </p>
                    <p>Grindah</p>
                  </div>
                </div>
                <div className="detailContainer">
                  <div className="imageContainer"></div>
                  <div className="personDetail">
                    <p>
                      <strong>Allan Mustafa</strong>
                    </p>
                    <p>Grindah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Shows;


