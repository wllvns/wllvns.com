import React from 'react';
import { videos } from '../../constants';

const Videos = () => {

	return (
		<div>
			{videos.map((video) => (
				<video className="media" controls autoBuffer>
				  <source src={video.url} />
				  Your browser does not support HTML5 video.
				</video>
				)
			)}
		</div>
	)
}

export default Videos;