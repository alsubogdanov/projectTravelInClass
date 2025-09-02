import React, { useState } from 'react'
import Hero from './Hero';
import closeBtn from '../assets/imgs/close.png'
import leftBtn from '../assets/imgs/left.png'
import rightBtn from '../assets/imgs/right.png'

function Gallery() {
	const [selectedCategory, setSelectedCategory] = useState("All")
	const [currentIndex, setCurrentIndex] = useState(null)

	const heroContent = {
		bgImg: "/img/about-banner.jpg",
		title: "Gallery",
		text: "Home / Gallery",
	};
	const images = [
	{ id: 1, src: "/img/posts02.jpg", category: "Природа" },
	{ id: 2, src: "/img/posts01.jpg", category: "Животные" },
	{ id: 3, src: "/img/posts03.jpg", category: "Природа" },
	{ id: 4, src: "/img/posts04.jpg", category: "Город" },
	{ id: 5, src: "/img/posts05.jpg", category: "Город" },
	{ id: 6, src: "/img/posts06.jpg", category: "Животные" },
	];
	const categories = ["All", ...new Set(images.map(img=>img.category))]
	console.log(categories);
	 
  const filteredImages = selectedCategory==='All' ? images : images.filter(img=>img.category===selectedCategory)
  console.log(filteredImages)

  const openModal = (index)=>setCurrentIndex(index)
  const closeModal = ()=>setCurrentIndex(null)
  const showPrev = (e)=>{
	e.stopPropagation()
	setCurrentIndex(prev=>(prev===0?filteredImages.length-1:prev-1 ))
  }
  const showNext = (e)=>{

	e.stopPropagation()
	setCurrentIndex(prev=>(prev===filteredImages.length-1 ? 0:prev+1))
  }
  return (
	 <div>
		<Hero content={heroContent}/>
		<section className="gallery">
			<div className="container">
				<div className="gallery__wrap">
					<div className="gallery__tabs d-flex g1 mb3">
						{categories.map(cat=>(
							<button
								key={cat}
								onClick={()=>setSelectedCategory(cat)}
								className={`cat_btn ${selectedCategory===cat ? 'active' : ''}`}
							
							>{cat}</button>
						))}
					</div>
					<div className="gallery__imgs d-flex g1 f-wrap">
						{filteredImages.map((img, ind)=>(
							<img
								key={`gal-${ind}`}
								src={img.src}
								alt={img.category}
								onClick={()=>openModal(ind)}
							/>
						))}

					</div>
				</div>

			</div>
			{currentIndex !==null && (
				<div className="modal" id="myModal" onClick={closeModal}>
				  <div className="modal-content">
						<button className="close-btn" id="closeModalBtn" onClick={closeModal}><img src={closeBtn} alt="" /></button>
						<img src={filteredImages[currentIndex].src} alt="show img" />
						<button className='btn_prev'><img src={leftBtn} alt="" onClick={showPrev}/></button>
						<button className='btn_next'><img src={rightBtn} alt="" onClick={showNext}/></button>
				  </div>
			 </div>
			)}
		</section>
		
	 </div>
  )
}

export default Gallery
