'use client';

import { useEffect, useRef } from 'react';

const AutoPlayVideo: React.FC<{ video: string }> = ({video}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const handleVideoEnded = () => {
      setTimeout(() => {
        videoElement.currentTime = 0;
        videoElement.play();
      }, 3000);
    };

    videoElement.addEventListener('ended', handleVideoEnded);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src={video}
        width={597}
        height={298}
        muted
        style={{ display: 'block', margin: 'auto' }}
        className="transition ease-out hover:scale-110"
      ></video>
    </div>
  );
};

export default AutoPlayVideo;
