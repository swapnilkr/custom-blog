import { useEffect, useState } from 'react';
import '../styles/BannerImage.css';
import HeaderImgZoom from '../assets/header_zoom.jpg'
import HeaderImgLowRes from '../assets/header.jpg'

const BannerImage = ({ view, imgSrc = '', altImg = '' }) => {
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
            {
                view === 'list' ?
                    <>
                        {isLowRes ?
                            <img src={HeaderImgLowRes} alt="Banner" />
                            :
                            <img src={HeaderImgZoom} alt="Banner" />
                        }
                        <p className='banner-text'>The Truecaller Blog</p>
                    </>
                    :
                    <>
                        <img src={imgSrc} alt={altImg} />
                    </>
            }

        </div>
    );
}

export default BannerImage;
