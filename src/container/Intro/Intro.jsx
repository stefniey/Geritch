// import React from 'react';
// import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

// import { meal } from '../../constants';
// import './Intro.css';

// const Intro = () => {
//   const [playVideo, setPlayVideo] = React.useState(false);
//   const vidRef = React.useRef();

//   return (
//     <div className="app__video">
//       <video
//         ref={vidRef}
//         src={meal}
//         type="video/mp4"
//         loop
//         controls={false}
//         muted
//       />
//       <div className="app__video-overlay flex__center">
//         <div
//           className="app__video-overlay_circle flex__center"
//           onClick={() => {
//             setPlayVideo(!playVideo);
//             if (playVideo) {
//               vidRef.current.pause();
//             } else {
//               vidRef.current.play();
//             }
//           }}
//         >
//           {playVideo ? (
//             <BsPauseFill color="#fff" fontSize={30} />
//           ) : (
//             <BsFillPlayFill color="#fff" fontSize={30} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Intro;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video" data-aos="fade-in">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center" data-aos="fade-in">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
