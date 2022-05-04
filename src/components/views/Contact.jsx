import React from "react";

export const Contact = () => {
    return (
        <div style={styles.sectionContact}>
            <h1 className='title text-center'>Contacto</h1>

            <div className='my-5'>
                <h3 className='text-center mb-4'>Puedes contactarme en:</h3>
                <p className='text-center'>
                    Me puedes mandar un correo electronico
                    <a href='mailto:axelmendez1234@gmail.com'>
                        <span className='text-primary'>
                            <strong> axelmendez1234@gmail.com</strong>
                        </span>
                    </a>
                </p>

                <p className='text-center'>
                    Mi número de teléfono es:
                    <a href='#'>
                        <span className='text-primary'>
                            <strong> +52 5582420984</strong>
                        </span>
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles = {
    sectionContact: {
        margin: "10rem",
        border: "2px solid #7510f7",
        padding: "3rem",
        boxShadow: "0px 0px 15px #7510f7",
    },
};
