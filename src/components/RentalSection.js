import React from 'react';
import rentalImg from '../assets/rental.png'

const RentalSection = () => {
    return (
        <section className="rental-section">
            <div className="rental-image">
                <img src={rentalImg} alt="Прокат велосипедов" />
            </div>
            <div className="rental-content">
                <h1>Прокат велосипедов</h1>
                <p>
                    У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды.
                    Как раз мы находимся в прекрасном парке!
                </p>
            </div>
        </section>
    );
};

export default RentalSection;
