

export default function RelaxationLists({ relaxations }) {
  return (
    <div className="grid grid-cols-4 gap-5 px-10">
      {relaxations &&
        relaxations.map((relaxation) => (
          <>
            <div className="relaxation-card">
              <h2>Relaxation Corner</h2>
              <p>{ relaxation.message }</p>

              <div className="video-container">
                <iframe
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${relaxation.videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>

              <p className="creator-name">
                Video by{" "}
                <a
                  href="https://www.youtube.com/user/suggested_creator"
                  target="_blank"
                >
                  { relaxation.suggestedUser }
                </a>
              </p>
            </div>
          </>
        ))}
    </div>
  );
}
