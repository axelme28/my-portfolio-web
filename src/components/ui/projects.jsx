import React from "react";

export const Projects = () => {
    return (
        <>
            <section className='mb-5'>
                <h1 className='text-center title'>Proyectos</h1>
                <h1 className='text-center subtitle'>Aqui puedes ver algunos de mis proyectos</h1>
                <div className='p-5 animate__animated animate__bounce'>
                    <ul className='cards'>
                        <li className='cards__item'>
                            <div className='card'>
                                <div className='card__image card__image--fence'></div>
                                <div className='card__content'>
                                    <div className='card__title'>Maleteando por Mexico</div>
                                    <p className='card__text'>
                                        Proyecto de desarrollo de tesis de la Universidad, el cual
                                        consiste en una aplicación web orintada al turismo en
                                        México.El cual cuenta con una pagina web y un CMS para
                                        administrar los datos de la aplicación.
                                    </p>
                                    <a
                                        className='card__btn'
                                        href='https://maleteando-por-mexico.herokuapp.com/maleteando/home'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Ver proyecto
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className='cards__item'>
                            <div className='card'>
                                <div className='card__image card__image--river'></div>
                                <div className='card__content'>
                                    <div className='card__title'>Huerto</div>
                                    <p className='card__text'>
                                        Proyecto de aplicaion web que almacena y gestiona los datos
                                        de las plantas de un huerto. La aplicación cuenta con una
                                        interfaz de usuario y una base de datos relacional para
                                        almacenar los datos de las plantas.
                                    </p>
                                    <a
                                        className='btn btn--block card__btn'
                                        href='https://huertoapp.netlify.app/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Button
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className='cards__item'>
                            <div className='card'>
                                <div className='card__image card__image--record'></div>
                                <div className='card__content'>
                                    <div className='card__title'>Plataforma educativa</div>
                                    <p className='card__text'>
                                        Proyecto de una plataforma educativa tipo Microsoft Teams
                                        con equipos, tareas , alumnos y profesores. La aplicación
                                        cuenta con una interfaz de usuario para la plataforma y
                                        adicionalmete un CMS para dar de alta alumnos, profesores y
                                        equipos.
                                    </p>
                                    <a className='btn btn--block card__btn'>Button</a>
                                </div>
                            </div>
                        </li>
                        <li className='cards__item'>
                            <div className='card'>
                                <div className='card__image card__image--flowers'></div>
                                <div className='card__content'>
                                    <div className='card__title'>Gifs</div>
                                    <p className='card__text'>
                                        Aplicaion web de gifs en la que el usuario puede agregar una
                                        nueva categoría de gifs o buscar el gif que quiera, que
                                        puede buscar gifs que consume una API
                                    </p>
                                    <a
                                        className='btn btn--block card__btn'
                                        href='https://axelme28.github.io/gif-expert-app/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Button
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className='cards__item'>
                            <div className='card'>
                                <div className='card__image card__image--flowers'></div>
                                <div className='card__content'>
                                    <div className='card__title'>Hospital</div>
                                    <p className='card__text'>
                                        Proyecto de aplicacion web que almacena y gestiona los datos
                                        de los pacientes de un hospital asi como historial medico,
                                        medicamentos y enfermedaes y ademas poder agendar citas. La
                                        aplicación cuenta con una interfaz de usuario y una base de
                                        datos relacional para almacenar los datos.
                                    </p>
                                    <a className='btn btn--block card__btn'>Button</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};
