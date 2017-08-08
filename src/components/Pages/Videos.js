import React from 'react';
import videoLoc from '../../assets/videos/whales_web.mov';

const Videos = () => {
	return (
		<video className="video" autoPlay controls>
		  <source src={videoLoc} />
		  Your browser does not support HTML5 video.
		</video>
	)
}

export default Videos;