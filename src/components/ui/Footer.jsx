import React from "react";

import ImgMail from "../../assets/icons/email.png";
import ImgGithub from "../../assets/icons/github.png";
import ImgWhatsapp from "../../assets/icons/whatsapp.png";

export const Footer = () => {
    return (
        <>
            <footer>
                <h4 className='text-center title-white'>
                    Un experto es una persona que ha cometido todos <br /> los errores que pueden
                    cometerse en un campo muy reducido.
                </h4>
                <div className='d-flex justify-content-center'>
                    {/* <div className=' justify-content-around'> */}
                    <a
                        href='https://wa.me/+525582420984'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-media-icon'
                    >
                        <img src={ImgWhatsapp} alt='avatar' className='h-100 w-100' />
                    </a>
                    <a
                        href='https://github.com/axelme28'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-media-icon'
                    >
                        <img src={ImgGithub} alt='avatar' className='h-100 w-100' />
                    </a>
                    <a
                        href='mailto:axelmendez1234@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-media-icon'
                    >
                        <img src={ImgMail} alt='avatar' className='h-100 w-100' />
                    </a>
                    {/* </div> */}
                </div>
                <p className='text-center title-white'>By Axel Mendez Miranda 2022</p>
            </footer>
        </>
    );
};
