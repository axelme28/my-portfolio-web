import React from "react";

export const ProyectCard = ({ item }) => {
    const { title, text, img, link, tags } = item;
    return (
        // card with the data of the project and a carrusel with the images of the project
        <div class='card' style={{ width: "18rem" }}>
            <div id='carouselExampleControls' class='carousel slide' data-bs-ride='carousel'>
                <div class='carousel-inner'>
                    {img.map((img, index) => {
                        return (
                            <div class='carousel-item'>
                                <img class='d-block w-100' src={img.src} alt={img.alt} />
                            </div>
                        );
                    })}

                    <button
                        class='carousel-control-prev'
                        type='button'
                        data-bs-target='#carouselExampleControls'
                        data-bs-slide='prev'
                    >
                        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span class='visually-hidden'>Previous</span>
                    </button>
                    <button
                        class='carousel-control-next'
                        type='button'
                        data-bs-target='#carouselExampleControls'
                        data-bs-slide='next'
                    >
                        <span class='carousel-control-next-icon' aria-hidden='true'></span>
                        <span class='visually-hidden'>Next</span>
                    </button>
                </div>
                <div class='card-body'>
                    <h5 class='card-title'>Card title</h5>
                    <p class='card-text'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <a href='#' class='btn btn-primary'>
                        Go somewhere
                    </a>
                </div>
            </div>
            <div class='card-body'>
                <h5 class='card-title'>{title}</h5>
                <p class='card-text'>{text}</p>
                <a href={link} class='btn btn-primary'>
                    Go somewhere
                </a>

                <div class='card-footer text-muted'>
                    <div class='d-flex justify-content-center'>{tags}</div>
                </div>
            </div>
        </div>
    );
};
