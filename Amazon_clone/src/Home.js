import React from 'react';
import './Home.css';
import Product from'./Product.js';

function Home() {
    return (
    <div className='home'>
        <img className='home_image' src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg' alt='banner'/>
        <div className='home__row'>
            <Product id='12321341'
            title='Nintendo Joy-Con (L/R) - Neon Red/Neon Blue' rating= {5}
            price={79.80} image="https://m.media-amazon.com/images/I/61pNxvhhXlL._AC_UL320_.jpg"/> 
            <Product id='49538894'
            title='Portable Monitor 4K Touchscreen, InnoView 15.6 Inch Adobe 100% RGB Ultra HD 3840x2160 USB C HDMI External Second Monitor for Laptop, MacBook, PS5, PS4, Xbox, Switch, Built-in Speaker with Kickstand' rating= {5}
            price={59.99} image="https://images-na.ssl-images-amazon.com/images/I/81RhZT6NNsS.__AC_SX300_SY300_QL70_FMwebp_.jpg"/> 
        </div>

        <div className='home__row'>
            <Product id='23445983'
            title='HORI PlayStation 5 Fighting Stick Alpha - Tournament Grade Fightstick for PS5, PS4, PC - Officially Licensed by Sony' rating= {4}
            price={199.99} image="https://m.media-amazon.com/images/I/61o5XRfnBeL._AC_UY218_.jpg"/> 
            <Product id='3254354345'
            title='Air Jordan 4 Retro - 308497 106' rating= {4}
            price={84.98} image="https://m.media-amazon.com/images/I/61GSRR+vTEL._AC_UY500_.jpg"/>  
            <Product
            title='Apple 32-inch Pro Display XDR with Retina 6K Display - Nano-Texture Glass' rating= {4}
            price={5999.99} image="https://m.media-amazon.com/images/I/71pEQi2sX3L._AC_UY218_.jpg"/> 
            </div>
             
        <div className='home__row'>
        <Product
            title='Canon EOS R5 Full-Frame Mirrorless Camera w/ RF24-105mm F4 L is USM Lens Kit - 8K Video, 45 Megapixel Full-Frame CMOS Sensor, DIGIC X Image Processor, Up to 12 fps Mechanical Shutter (Body + Lens)' rating= {5}
            price={4999.00} image="https://images-na.ssl-images-amazon.com/images/I/81depb5FkhL.__AC_SY300_SX300_QL70_FMwebp_.jpg"/> 
        <Product
            title='Apple iPhone 13 Pro Max, 256GB, Graphite - Verizon (Renewed)' rating= {5}
            price={1109.99} image="https://m.media-amazon.com/images/I/61iVuXR3dhL._AC_UY218_.jpg"/> 
            </div>
        </div>
    );
}

export default Home;