import { useState } from 'react'
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks'

export default function Home(){
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink(){
    try{
      const response = await api.post('/shorten',{
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink', response.data)

      setLink('');

    } catch {
      alert("Algo deu Errado !")
      setLink('');
    }
  }

    return(
      <div className="container-home">

        <div className="logo">
          <img className='logo-img' src="/logo.png" alt="logo"></img>
          <h1>Diminuir Link</h1>
          <span>Cole o seu link aqui 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#FFF" />
            <input
              placeholder='Cole Seu Link'
              value={link}
              onChange={ (e) => setLink(e.target.value)}
            />
          </div>

          <button onClick={handleShortLink}>Gerar Link</button>
        </div>

        <Menu/>

        { showModal && (
          <LinkItem
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )}
        
      </div>
    )
  }