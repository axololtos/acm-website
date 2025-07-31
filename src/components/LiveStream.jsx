import React from "react";
import '../styles/LiveStream.css';

function LiveStream() {
  return (
    <section id="live-stream" className="live-stream-section">
      <div className="live-stream-container">
        <h2>Currently Unavailable</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/jyDNdeqNTb0?si=nWKosrKyVK02aJkS&controls=0&modestbranding=1&showinfo=0&rel=0&autohide=1&fs=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="live-stream-video"
        ></iframe>
      </div>
    </section>
  );
}

export default LiveStream;
