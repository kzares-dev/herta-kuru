'use client';
import React, { useEffect, useState } from 'react';


function Herta() {

    const [showHerta, setShowHerta] = useState(true);
    const [hertaType, setHertaType] = useState(null);

    useEffect(() => {
        const number = Math.floor(Math.random() * 3) + 1;
        setHertaType(number)
        const audio = new Audio(`/audio/ja/kuru${number}.mp3`);
        audio.play();
    }, [])
    setTimeout(() => setShowHerta(false), 3000)

    if (showHerta) return (
        <div className='absolute right-0 animate-slide w-[200px] md:w-auto  '  style={{ animationDuration: '2s', animationIterationCount: 1 }} >
            <img src={`/herta${hertaType}.gif`}
                alt="" />
        </div>
    )
}

export default Herta