import React, { useState } from 'react';
import Hero from '../components/Hero';


function Home() {
    const [display, setDisplay] = useState(false);

    return (
        <>
        <Hero display={display} setDisplay={setDisplay} />
        </>
    )
    
}

export default Home;