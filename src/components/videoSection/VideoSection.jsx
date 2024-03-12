import React from "react";

function VideoSection() {
  return (
    <>
      <div
        id="video-section"
        className="bg-dark d-flex justify-content-around align-items-center align-items-center text-white list-item flex-wrap"
      >
        <li>All</li>
        <li>Storytelling</li>
        <li>Practice</li>
        <li>JavaScript</li>
        <li>Thought</li>
        <li>Viocal language</li>
        <li>Prodacast</li>
        <li>Music</li>
        <li>Lectures</li>
        <li>Live</li>
        <li>Live</li>
        <li>Live</li>
        <li>Live</li>
      </div>

      <div id="card-section">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </>
  );
}

export default VideoSection;
