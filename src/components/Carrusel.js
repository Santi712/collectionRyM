import React, {useState} from 'react'
import './Carrusel.css'
import { Link } from 'react-router-dom'


function Carrusel() {
    const [currentButton, setCurrentButton] = useState();

    const selectCurrentButton = (currentIndex) => {
        setCurrentButton(currentIndex);
    };
    const Buttons = () => {
        let arrayButtons = [];
        for (let i = 1; i < 6; i++) {
            arrayButtons.push(
                <input
                    key={i}
                    type='button'
                    position={i}
                    className={`${i === currentButton ? "navinput": "activeButton"}`}
                    
                    onClick = {function onClick() {
                        return selectCurrentButton(i);
                    }}
                />
            );
        }
        return arrayButtons;
    };

  return (
    <div>
        <div className='main-section'>
            <div className='carousel_content'>
                <div className='cards_content'>
                    <main id="carousel">
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card1'></div>
                            <div className='footer_card'></div>
                        </div>
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card2'></div>
                            <div className='footer_card'></div>
                        </div>
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card3'></div>
                            <div className='footer_card'></div>
                        </div>
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card4'></div>
                            <div className='footer_card'></div>
                        </div>
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card5'></div>
                            <div className='footer_card'></div>
                        </div>
                    </main>
                    <div className='buttons_groups'>
                       <Buttons /> 
                    </div>
                    <div className='options'>
                        <h1 className='frase'>Pincha y descubre un MULTIVERSO de aventuras</h1>
                        <div className='pildora'>
                            <button className='option1'><Link to='/login'>Login</Link></button>
                            <button className='option2'><Link to='/formulario'>Registro</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Carrusel;
