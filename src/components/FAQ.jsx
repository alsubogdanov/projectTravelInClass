import React, { useState } from 'react';
import arrow from '../assets/imgs/arrow-down.svg';

function FAQ() {
  const faqData = [
    {
      question: 'Что такое React?',
      answer: 'React — это библиотека JavaScript для создания пользовательских интерфейсов.',
    },
    {
      question: 'Что такое JSX?',
      answer: 'JSX — это синтаксис, похожий на HTML, который используется в React для описания UI.',
    },
    {
      question: 'Как создать компонент в React?',
      answer: 'Можно создать функциональный или классовый компонент с помощью функций или классов.',
    },
  ];
  //this for one open
  //   const [openIndex, setOpenIndex] = useState(null);
  const [openIndexes, setOpenIndexs] = useState([]); //[0,2,1]

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      //если уже открыт - закрывает. оставляем только те эл, которые не равны текущ инд
      setOpenIndexs(openIndexes.filter((i) => i !== index));
    } else {
      //add to openIndexes
      setOpenIndexs([...openIndexes, index]);
    }
  };
  return (
    <div className='faq'>
      {faqData.map((item, ind) => {
        console.log(item);
        //   const isOpen = openIndex === ind;
        const isOpen = openIndexes.includes(ind);
        return (
          <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <div
              className='faq-quetion  d-flex jcsb aic'
              //если текущий открытый элемент (openIndex) уже равен индексу элемента, по которому кликнули - юзер хочет закрыть этот эл-т
              //елси текущий открытый элемент не равен openIndex значит хочет открыть
              //   onClick={() => setOpenIndex(isOpen ? null : ind)}>
              onClick={() => toggleIndex(ind)}>
              <h3 className='faq-title'>{item.question}</h3>
              <img src={arrow} alt='' className='faq-arrow' />
            </div>
            {isOpen && <div className='faq-answer'>{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
