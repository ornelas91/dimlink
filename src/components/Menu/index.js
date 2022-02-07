import './menu.css';

import { BsGithub, BsLinkedin} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a target="blanck" className='social' href="https://github.com/ornelas91">
                <BsGithub color='#FFF' size={24} />
            </a>
            <a target="blanck" className='social' href="https://www.linkedin.com/in/anderson-ornelas-a2421a169/">
                <BsLinkedin color='#FFF' size={24} />
            </a>
            <Link className='menu-item' to="/links">
                Meus Links
            </Link>
        </div>
    )
}