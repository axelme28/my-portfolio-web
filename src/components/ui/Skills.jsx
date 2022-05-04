import React from "react";

import ImgFront from "../../assets/web-design.svg";
import ImgBack from "../../assets/computer.svg";

export const Skills = () => {
    return (
        <>
            <section className='sectionSkills'>
                <div className='containerM is-narrow'>
                    <div className='box'>
                        <div className='conatiner'>
                            <div className='row'>
                                <div className='col-md-6 d-flex justify-content-center text-center'>
                                    <div>
                                        <div className='d-flex justify-content-center mb-4'>
                                            <img src={ImgFront} alt='avatar' />
                                        </div>
                                        <h2 className='text-center title'> Front-End</h2>
                                        <p className='text-center subtitle'>
                                            Me gusta codificar cosas desde cero, dando le una
                                            arquitectura de software moderna y limpia.
                                        </p>

                                        <h3 className='subtitle color-primary text-center mt-5'>
                                            Lenguajes de programación
                                        </h3>
                                        <h3 className='subtitle mt-3'>
                                            HTML5, CSS3, Sass, JavaScript
                                        </h3>
                                        <h3 className='subtitle mt-5 color-primary'>
                                            Librerias y Frameworks
                                        </h3>
                                        <h3 className='subtitle mt-3'>
                                            React js, React-router, Axios, Redux, Bootstrap,
                                            Material UI, Reactstrap.
                                        </h3>
                                        <h3 className='subtitle mt-5 color-primary'>Dev Tools</h3>
                                        <h3 className='subtitle mt-3'>
                                            Git, Github ,Gitlab, VS Code
                                        </h3>
                                        <h3 className='subtitle mt-5 color-primary'>Skills</h3>
                                        <h3 className='subtitle mt-3'>
                                            consumo de API REST con Axios y fetch <br /> <br />
                                            Componentes funcionales <br /> <br />
                                            Gogle sing in <br /> <br />
                                            Firebase <br /> <br />
                                            Animaciones en componentes <br /> <br />
                                            Responsive web design <br /> <br />
                                            Atomic design <br /> <br />
                                        </h3>
                                    </div>
                                </div>
                                <div className='col-md-6 d-flex justify-content-center text-center'>
                                    <div>
                                        <div className='d-flex justify-content-center mb-4'>
                                            <img src={ImgBack} alt='avatar' />
                                        </div>
                                        <h2 className='text-center title'> Back-End</h2>
                                        <p className='text-center subtitle'>
                                            Me gustan las bases de datos relacionales, creacion de
                                            modelos y consultas, arquitectura rest y API REST.
                                        </p>
                                        <h3 className='subtitle color-primary text-center mt-5'>
                                            Bases de datos
                                        </h3>
                                        <h3 className='subtitle mt-3'>MySQL, MongoDB</h3>

                                        <h3 className='subtitle color-primary text-center mt-5'>
                                            Lenguajes de programación
                                        </h3>
                                        <h3 className='subtitle mt-3'> Node js </h3>
                                        <h3 className='subtitle color-primary text-center mt-5'>
                                            Librerias y Frameworks
                                        </h3>
                                        <h3 className='subtitle mt-3'>Express, sequelize</h3>
                                        <h3 className='subtitle color-primary text-center mt-5'>
                                            Dev Tools
                                        </h3>
                                        <h3 className='subtitle mt-3'>
                                            MySQL Workbench, Postman, Git, Heroku, Netlify
                                        </h3>
                                        <h3 className='subtitle color-primary text-center mt-5'>
                                            Skills
                                        </h3>
                                        <h3 className='subtitle mt-3'>
                                            Modelos, procedures y views en MySQL <br /> <br />
                                            Arquitectura Rest
                                            <br /> <br />
                                            Consultas sql <br /> <br />
                                            Normalizacion en bases de datos <br /> <br />
                                            Creacion de microservicios <br /> <br />
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
