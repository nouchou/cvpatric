import React, {Component} from 'react';
import Skill from './skill';
import './skills.css';
import Interests from './interests';
export default class Skills extends Component {
    render() {
        return (
            <section className="skill">

            <div className="skills">
                
                <div>
           <h2>Competance</h2>
           <p className='title'> </p> 
           <Skill title="HTML" rating="7" />
            <Skill title="CSS" rating="6" />
            <Skill title="PYTHON" rating="6" />
            <Skill title="JAVASCRIPT" rating="3" />
            <Skill title="PHP" rating="5" />
           </div>
              <div className='skills'>
                <h2>Langues</h2>
            <Skill title="Malagasy" rating="6" />
            <Skill title="Francais" rating="3" />
            <Skill title="Anglais" rating="5" />
              </div>
              <Interests  />

            </div>
            </section>
        );
    }
}
