import React from "react";

import Avatar from "../../assets/avataaars.svg";
import Imgdev from "../../assets/hero.svg";

export const Header = () => {
    return (
        <>
            <section className='text-center d-block' style={styles.sectionHeader}>
                <h1 className='title'>Desarrador web Full Stack</h1>
                {/* <h2 className='subtitle mb-5'></h2> */}
                <div className='d-flex justify-content-center'>
                    <div className='typing-demo justify-content-center'>
                        I code beutiful things and I love what I do.
                    </div>
                </div>
                <img src={Avatar} alt='avatar' className='w-25' />
            </section>
            <section className='d-flex justify-content-center mb-0'>
                <img src={Imgdev} alt='avatar' className='w-50' />
            </section>
        </>
    );
};

const styles = {
    sectionHeader: {
        marginTop: "10rem",
        marginBottom: "8rem",
    },
    sectionAbaut: {
        backgroundColor: "#7510f7",
        paddingTop: "140px",
        paddingBottom: "290px",
    },
    ImgSkills: {
        width: "60px",
        height: "60px",
    },
};
