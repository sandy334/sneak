// import ReactPlayer from "react-player";
// import "./CradSection.css";
// import Tilt from "react-parallax-tilt";
// import { useNavigate } from "react-router-dom";

// export const VideosSection = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="video-container">
//         <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
//           <ReactPlayer
//             onClick={() => {
//               scrollTo(0, 0);
//               navigate("/product-details/26");
//             }}
//             url="https://res.cloudinary.com/drinpsneak/video/upload/v1711018673/txfrbx7a8oiwrpvilbe5.webm"
//             playing
//             playbackRate={1.15}
//             muted
//             loop
//             controls={false}
//             width="100%"
//             margin="4px 0"
//             padding="0px"
//             height="119.9%"
//           />

//           <h3>Aether Ultra Pro</h3>
//           <span className="notch"></span>
//         </Tilt>{" "}
//         <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
//           <ReactPlayer
//             onClick={() => {
//               scrollTo(0, 0);
//               navigate("/product-details/39");
//             }}
//             url="https://res.cloudinary.com/drinpsneak/video/upload/v1711018640/d8uh9cztzffeb9rnslvd.webm"
//             playing
//             playbackRate={1.6}
//             muted
//             loop
//             controls={false}
//             width="100%"
//             margin="4px 0"
//             padding="0px"
//             height="112.65%"
//           />

//           <h3>Vanguard Accelerate</h3>
//           <span className="notch"></span>
//         </Tilt>
//         <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
//           <ReactPlayer
//             onClick={() => navigate("/product-details/50")}
//             url="https://res.cloudinary.com/drinpsneak/video/upload/v1711018632/gopm63t8ibqgfjrh0dcc.webm"
//             playing
//             playbackRate={2.8}
//             muted
//             loop
//             controls={false}
//             width="100%"
//             margin="4px 0"
//             padding="0px"
//             height="119.9%"
//           />

//           <h3>Luminary Synthesis</h3>
//           <span className="notch"></span>
//         </Tilt>
//         <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
//           {" "}
//           <ReactPlayer
//             onClick={() => {
//               scrollTo(0, 0);
//               navigate("/product-details/76");
//             }}
//             url="https://res.cloudinary.com/drinpsneak/video/upload/v1711018607/uqs77569npdwge1peh6c.webm"
//             playing
//             playbackRate={1}
//             muted
//             loop
//             controls={false}
//             width="100%"
//             margin="4px 0"
//             padding="0px"
//             height="119.8%"
//           />
//           <h3>Ascend Quantum</h3>
//           <span className="notch"></span>
//         </Tilt>
//       </div>
//     </>
//   );
// };

import ReactPlayer from "react-player";
import "./CradSection.css";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

const videoData = [
  {
    id: 26,
    title: "Aether Ultra Pro",
    url: "https://res.cloudinary.com/drinpsneak/video/upload/v1711018673/txfrbx7a8oiwrpvilbe5.webm",
    playbackRate: 1.15,
    height: "119.9%",
  },
  {
    id: 39,
    title: "Vanguard Accelerate",
    url: "https://res.cloudinary.com/drinpsneak/video/upload/v1711018607/uqs77569npdwge1peh6c.webm",
    playbackRate: 1.6,
    height: "112.65%",
  },
  {
    id: 50,
    title: "Luminary Synthesis",
    url: "https://res.cloudinary.com/drinpsneak/video/upload/v1711018632/gopm63t8ibqgfjrh0dcc.webm",
    playbackRate: 2.8,
    height: "119.9%",
  },
  {
    id: 76,
    title: "Ascend Quantum",
    url: "https://res.cloudinary.com/drinpsneak/video/upload/v1711018640/d8uh9cztzffeb9rnslvd.webm",
    playbackRate: 1,
    height: "119.8%",
  },
];

export const VideosSection = () => {
  const navigate = useNavigate();

  const handleVideoClick = (id) => {
    scrollTo(0, 0);
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="video-container">
      {videoData.map((video) => (
        <Tilt
          key={video.id}
          transitionSpeed={1000}
          scale={1.07}
          className="video-card"
        >
          <ReactPlayer
            onClick={() => handleVideoClick(video.id)}
            url={video.url}
            playing
            playbackRate={video.playbackRate}
            muted
            loop
            controls={false}
            width="100%"
            margin="4px 0"
            padding="0px"
            height={video.height}
          />
          <h3>{video.title}</h3>
          <span className="notch"></span>
        </Tilt>
      ))}
    </div>
  );
};
