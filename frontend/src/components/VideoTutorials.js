import React from 'react';

function VideoTutorials() {
  return (
    <section id="tutorials" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Video Tutorials for Document Registration</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VideoTutorials;