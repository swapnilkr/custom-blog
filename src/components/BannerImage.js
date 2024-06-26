import { useEffect, useState } from 'react';
import '../styles/BannerImage.css';
import HeaderImgZoom from '../assets/header_zoom.jpg'
import HeaderImgLowRes from '../assets/header.jpg'

const BannerImage = () => {
    const [isLowRes, setIsLowRes] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLowRes(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`banner`}>
            {isLowRes ?
                <img src={HeaderImgLowRes} alt="Banner" />
                :
                <img src={HeaderImgZoom} alt="Banner" />
            }
            <p className='banner-text'>The Truecaller Blog</p>
        </div>
    );
}

export default BannerImage;
