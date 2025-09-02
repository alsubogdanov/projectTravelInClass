import React, { useState } from 'react'


function VideoGallery() {
		const videos = [
		{
		  id: 1,
		  thumbnail: "/img/posts01.jpg",
		  url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		  title: "Видео 1",
		},
		{
		  id: 2,
		  thumbnail: "/img/posts02.jpg",
		  url: "https://www.youtube.com/embed/ScMzIvxBSi4",
		  title: "Видео 2",
		},
		{
		  id: 3,
		  thumbnail: "/img/posts03.jpg",
		  url: "https://www.youtube.com/embed/l482T0yNkeo",
		  title: "Видео 3",
		},
		{
			id: 4,
			thumbnail: "/img/posts04.jpg",
			url: "https://www.youtube.com/embed/LXb3EKWsInQ",
			title: "Видео 4",
		 },
		 {
			id: 5,
			thumbnail: "/img/posts05.jpg",
			url: "https://www.youtube.com/embed/tgbNymZ7vqY",
			title: "Видео 5",
		 },
		 
	 ];
	const [selected, setSelected] = useState(videos[0])
	const [isPlaing, setIsPlaying] = useState(false)
  
  return (
	 <section className='video_frame pt10 pb10' style={{backgroundImage: 'url("/img/footer-bg.jpg")'}}>
		<h2 className='section_title accent t-center mb5'>Watch my recent travel Video</h2>
		<div className="container">
			<div className="video-gal__full mb2">
				{ !isPlaing ? (
					//previev img with icon
					<div 
						className="video-full"
						style={{backgroundImage: `url(${selected.thumbnail})`}}
						onClick={()=>setIsPlaying(true)}
					>
						<div className="icon-play d-flex jcc aic h100">
							<svg
								width="70"
								height="70"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="white"
									d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m188.3-108.9c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
								/>
							</svg>
						</div>

					</div>
				):(
					<iframe
						src={`${selected.url}?autoplay=1`}
						title={selected.title}
						allow='autoplay'
						allowFullScreen
					
					/>
				)

				}
			</div>
			<div className="video-gal__cards d-flex g2">
				{videos&&videos.map(item=>(
					<div 
						key={videos.id}
						className={`video-card ${selected.id===item.id ? 'active': ''}`}
						onClick={()=>{
							setSelected(item)
							setIsPlaying(false)
						}}
					>
						<img src={item.thumbnail} alt={item.title} />

					</div>
				))}
			</div>
		</div>

	 </section>
  )
}

export default VideoGallery