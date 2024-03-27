import React, { Component} from 'react';


export default class About extends Component {
    render() {
        return (
            <section className="about" id="about">
                <div className='user'>
                    <p className='user_info'>Namahora Sud, 119 Morondava</p>
                    <p className='user_info'><a href='mailto:patricnosoavina@gmail.com'>patricnosoavina@gmail.com</a></p>
                    <p className='user_info'><a href='tel:+126338131839'>0338131839</a></p>
                    <p className='user_info'>Date de naissance:15 mars 2002</p>
                    <p>lieu de naissance: Soavinandrina</p>

                </div>
              
            </section>
        )
    }
}