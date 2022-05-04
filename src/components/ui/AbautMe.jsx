import React from "react";

export const AboutMe = () => {
    return (
        <div>
            <section
                style={styles.sectionAbaut}
                className='d-flex justify-content-center align-items-center px-5 '
            >
                <div className='w-75'>
                    <h2 className='text-center title text-light'>
                        Hola mi nombre es Axel. mucho gusto
                    </h2>
                    <p className='text-center text-light subtitle'>
                        Soy desarrollador full stack, apasionado por la tecnología y la
                        programación. Desarrollador de Front-End innovador con 1 año y medio de
                        experiencia en la creación de sitios web responsivos y desarrollo de
                        aplicaciones web, Asi como tambien en la creacion de bases de datos
                        relacionales y generacion de Api Rest. Me considero una persona autodicata,
                        con una gran capacidad de adaptación y una gran capacidad de trabajo en
                        equipo.
                    </p>
                </div>
            </section>
        </div>
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
