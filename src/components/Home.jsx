import React from 'react';
import LazyHero from 'react-lazy-hero';

const Home = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            <LazyHero imageSrc="https://unsplash.it/2000/1000">
                <h1>Generic Startup Hype Headline</h1>
            </LazyHero>
        </div>
    );
};

export default Home;