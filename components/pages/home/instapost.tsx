'use client';

import { useEffect } from 'react';

const EmbedSocialHashtag: React.FC = () => {
	useEffect(() => {
		// Check if the script is already loaded
		if (document.getElementById('EmbedSocialHashtagScript')) return;
		const script = document.createElement('script');
		script.id = 'EmbedSocialHashtagScript';
		script.src = 'https://embedsocial.com/cdn/ht.js';
		script.async = true;
		document.head.appendChild(script);

		// Cleanup function (optional)
		return () => {
			// You can remove the script if needed on unmount
			// document.head.removeChild(script);
		};
	}, []);

	return (
		<div className='bg-sidebar-primary-foreground pr-8 pl-4 py-8  overflow-hidden'>
			<div className='embedsocial-hashtag ' data-ref='c1490608c23c7b0d8a7e281d1547980ff699e957' data-lazyload='yes' />
		</div>
	);
};

export default EmbedSocialHashtag;
