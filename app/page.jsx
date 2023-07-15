'use client'
import { useEffect, useState } from "react";
import Herta from "../components/Herta";
import Foter from "../components/Foter";

const Home = () => {

  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false)
  const [pastKurus, setPastKurus] = useState(0)


  //kuru kuru~
  const handleClick = () => {

    setDisableButton(true)

    setTimeout(() => {
      setDisableButton(false)
    }, 300)
    setCount(prevCount => prevCount + 1);
    localStorage.setItem('kuru', count + 1 + pastKurus)
  };

  //Load herta kuru~ed times
  useEffect(() => {
     setPastKurus(parseInt(localStorage.getItem('kuru')) || 0)
  }, [])

  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        herta kuru~
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> The website for Herta </span>
      </h1>
      <p className='desc text-center'>
        the <span className="inline-block line-through" >annoying</span> cutest genius Honkai: Star Rail character out there
      </p>

      {/* Herta container */}

      <div className="overflow-hidden relative w-full flex items-center justify-center min-h-[300px] ">

        <div className="flex absolute w-full h-full items-center justify-center flex-col">
          <div className="mt-5 text-xl font-extrabold leading-[1.15] text-black sm:text-2xl ">Herta has been kuru~ed for</div>
          <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-2xl font-extrabold" >{count + pastKurus }</div>
          <div className="mt-5 text-xl font-extrabold leading-[1.15] text-black sm:text-2xl">times</div>

        </div>

        <img src="/herta1.gif" className="w-[200px] md:w-auto " style={{ opacity: 0.2 }}
          alt="" />

        {Array.from(Array(count), (e, i) => (
          <Herta key={i} />
        ))}

      </div>

      <button
        disabled={disableButton}
        onClick={handleClick}
        className='px-5 py-1.5 text-[20px] bg-primary-orange rounded-full text-white my-4 border border'
      >
        Kuru Kuru~!
      </button>

      <Foter/>
    </section>
  )
};

export default Home;
