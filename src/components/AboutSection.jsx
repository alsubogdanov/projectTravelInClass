import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AboutSection(props) {
  const [data, setData] = useState(null);

  const API = process.env.REACT_APP_API;
  useEffect(() => {
    fetchAbout();
  }, []);
  console.log(props);
  const icons = [
    {
      link: 'https://facebook.com',
      svg: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 5.003 3.657 9.128 8.438 9.878v-6.988H8.078v-2.89h2.36V9.845c0-2.332 1.393-3.62 3.523-3.62 1.021 0 2.09.183 2.09.183v2.29h-1.178c-1.162 0-1.524.721-1.524 1.46v1.753h2.59l-.414 2.89h-2.176v6.988C18.343 21.128 22 17.003 22 12z' />
        </svg>
      ),
    },
    {
      link: 'https://twitter.com',
      svg: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.8a4.28 4.28 0 001.33 5.7 4.25 4.25 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.57 8.57 0 012 19.54 12.07 12.07 0 008.29 21c7.54 0 11.67-6.25 11.67-11.67 0-.18-.01-.35-.02-.53A8.36 8.36 0 0024 5.5a8.36 8.36 0 01-2.54.7z' />
        </svg>
      ),
    },
    {
      link: 'https://instagram.com',
      svg: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z' />
        </svg>
      ),
    },
    {
      link: 'https://linkedin.com',
      svg: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M4.98 3.5C4.98 4.604 4.1 5.5 3 5.5S1.02 4.604 1.02 3.5C1.02 2.396 1.9 1.5 3 1.5s1.98.896 1.98 2zM1 8h4v13H1V8zm7 0h3.8v1.791h.054c.529-1 1.82-2.056 3.746-2.056C19.08 7.735 21 9.581 21 13.093V21h-4v-7.073c0-1.69-.033-3.863-2.353-3.863-2.357 0-2.717 1.844-2.717 3.746V21H8V8z' />
        </svg>
      ),
    },
    {
      link: 'https://youtube.com',
      svg: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M23.5 6.2s-.2-1.7-.9-2.4c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5h-.1s-4.9 0-8.5.3c-.5.1-1.3.1-2.1 1-.7.7-.9 2.4-.9 2.4S0 8.3 0 10.3v1.4c0 2 .2 4.1.2 4.1s.2 1.7.9 2.4c.8.9 1.9.9 2.4 1 1.8.2 7.5.3 7.5.3s4.9 0 8.5-.3c.5-.1 1.3-.1 2.1-1 .7-.7.9-2.4.9-2.4s.2-2.1.2-4.1v-1.4c0-2-.2-4.1-.2-4.1zM9.6 14.6V8.8l6.2 2.9-6.2 2.9z' />
        </svg>
      ),
    },
  ];
  async function fetchAbout() {
    try {
      const res = await axios.get(`${API}/api/sitecontent/about/`);
      console.log(res.data);

      setData(res.data);
    } catch (err) {
      console.error('Ошибка при загрузке секции:', err);
    }
  }
  return (
    <section className='about mb14 mt12'>
      <div className='container'>
        <div className='about__wrap d-flex jce'>
          {data?.image && <img src={data.image} alt='' />}
          <div className='about__details'>
            <p className='about_header'>Who am i</p>
            {data?.title && <h2 className='section_title'>{data.title}</h2>}
            {data?.content && (
              <div className='section_text' dangerouslySetInnerHTML={{ __html: data.content }} />
            )}
            {props?.btn && (
              <Link to='/about' className='main_btn'>
                Read full story
              </Link>
            )}
            {props?.icons && (
              <ul className='d-flex g2'>
                {icons &&
                  icons.map((item, ind) => (
                    <li key={`social-${ind}`}>
                      <a href={item.link} className='d-flex aic'>
                        {item.svg}
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
