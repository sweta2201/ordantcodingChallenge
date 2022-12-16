import React from "react";
import { Link } from "react-router-dom";
import "./schedule.css";

function Schedule(props) {
  console.log(props.scheduleData, "scheedule in schedule comp");
  let data = props.scheduleData;
  return (
    <div className="scheduleContainer">
      <h3>Shows</h3>
      <div className="scheduleShowsContainer">
        {data.map((scheduleShow, key) => {
          return (
            <Link
              to={`/show/${scheduleShow.show.id}`}
              key={key}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="scheduleCard">
                {/* <p className="textContainer">{scheduleShow.show.id}</p> */}
                <div className="imageContainer">
                  {scheduleShow.show.image ? (
                    <img src={`${scheduleShow.show.image.medium}`} />
                  ) : (
                    ""
                  )}
                  {/* <img
                    src={`https://colibriwp.com/blog/wp-content/uploads/2019/07/2488756.jpg`}
                  /> */}
                </div>
                <div className="textContainer">
                  <p>{scheduleShow.show.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Schedule;
