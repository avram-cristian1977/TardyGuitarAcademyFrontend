import { useEffect, useRef, useState } from "react";

const Music = () => {
  const albums = [
    {
      number: "01",
      title: "SOS",
      type: "Album solo",
      cover: "/audio/SOS/album-cover.jpg",
      tracks: [
        {
          title: "Underwater Clouds",
          src: "/audio/SOS/1-Underwater-Clouds.mp3",
        },
        {
          title: "Metallic Peace",
          src: "/audio/SOS/2-Metallic-Peace.mp3",
        },
        {
          title: "Spectral Whim",
          src: "/audio/SOS/3-Spectral-Whim.mp3",
        },
        {
          title: "SOS",
          src: "/audio/SOS/4-SOS.mp3",
        },
        {
          title: "Exoplanet Aurora",
          src: "/audio/SOS/5-Exoplanet-Aurora.mp3",
        },
        {
          title: "Caprice 22B",
          src: "/audio/SOS/6-Caprice-22B.mp3",
        },
        {
          title: "Keplerian Witchery Error",
          src: "/audio/SOS/7-Keplerian-Witchery-Error.mp3",
        },
        {
          title: "Day One (Dravi Giu Giu)",
          src: "/audio/SOS/8-Day-One-(Dravi Giu Giu).mp3",
        },
        {
          title: "Eerie March",
          src: "/audio/SOS/9-Eerie-March.mp3",
        },
      ],
    },

    {
      number: "02",
      title: "Elements",
      type: "Al doilea album solo  (WIP)",
      cover: "/audio/Elements/album-cover.jpg",
      tracks: [
        {
          title: "Tungsten Oak",
          src: "/audio/Elements/1-Tungsten-Oak.mp3",
        },
        {
          title: "Astatine Flux (Good Reaction Gone Bad)",
          src: "/audio/Elements/2-Astatine-Flux.mp3",
        },
        {
          title: "Aeriform Silver (WIP)",
          src: "/audio/Elements/3-Aeriform-Silver.mp3",
        },
      ],
    },
  ];

  const allTracks = albums.flatMap((album) =>
    album.tracks.map((track) => ({
      ...track,
      albumTitle: album.title,
      albumCover: album.cover,
    })),
  );

  const audioRef = useRef(null);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentTrack = allTracks[currentTrackIndex];

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = currentTrack.src;
    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      if (currentTrackIndex < allTracks.length - 1) {
        setCurrentTrackIndex((current) => current + 1);
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);

      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);

      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex, allTracks.length]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const selectTrack = (index) => {
    if (index === currentTrackIndex) {
      togglePlay();
      return;
    }

    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex((current) => current - 1);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (currentTrackIndex < allTracks.length - 1) {
      setCurrentTrackIndex((current) => current + 1);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (event) => {
    const value = Number(event.target.value);

    if (!audioRef.current) return;

    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="music"
      className="section dark-section music-section"
      style={{ paddingTop: "50px" }}
    >
      <div className="section-inner">
        {/* HEADER */}

        <div className="music-header">
          <p className="eyebrow">MUZICA MEA</p>

          <h2>Albume & compoziții</h2>

          <p>
            Descoperă o parte din parcursul meu muzical și proiectele mele
            personale.
          </p>
        </div>

        {/* ALBUMS */}

        <div className="albums-container">
          {albums.map((album) => (
            <article className="album-card" key={album.title}>
              <div className="album-cover">
                <img src={album.cover} alt={`${album.title} - album cover`} />
              </div>

              <div className="album-content">
                <div className="album-heading">
                  <span className="album-number">{album.number}</span>

                  <div>
                    <h3>{album.title}</h3>

                    <p>{album.type}</p>
                  </div>
                </div>

                <div className="track-list">
                  {album.tracks.map((track) => {
                    const globalIndex = allTracks.findIndex(
                      (item) => item.src === track.src,
                    );

                    const isCurrent = globalIndex === currentTrackIndex;

                    return (
                      <button
                        className={`track-item ${isCurrent ? "active" : ""}`}
                        key={track.src}
                        onClick={() => selectTrack(globalIndex)}
                      >
                        <span className="track-index">
                          {String(album.tracks.indexOf(track) + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <span className="track-play">
                          {isCurrent && isPlaying ? (
                            <>
                              <span />
                              <span />
                              <span />
                            </>
                          ) : (
                            "▶"
                          )}
                        </span>

                        <span className="track-title">{track.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PLAYER */}

        <div className="music-player">
          <audio ref={audioRef} preload="metadata" />

          <div className="player-top">
            <div className="player-track-info">
              <span className="player-label">ACUM ASCULȚI</span>

              <strong>{currentTrack.title}</strong>

              <span>{currentTrack.albumTitle}</span>
            </div>

            <div className="player-controls">
              <button
                type="button"
                onClick={playPrevious}
                disabled={currentTrackIndex === 0}
                aria-label="Piesa anterioară"
              >
                ‹
              </button>

              <button
                type="button"
                className="player-main-button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pauză" : "Redare"}
              >
                {isPlaying ? "Ⅱ" : "▶"}
              </button>

              <button
                type="button"
                onClick={playNext}
                disabled={currentTrackIndex === allTracks.length - 1}
                aria-label="Piesa următoare"
              >
                ›
              </button>
            </div>
          </div>

          <div className="player-progress">
            <span>{formatTime(currentTime)}</span>

            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
              aria-label="Progres piesă"
            />

            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
