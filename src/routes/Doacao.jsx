import { } from 'react'
import '../styles/Doacao.scss'
import { Link } from 'react-router-dom'

function Doacao() {
  return (
    <>
      <aside>
        <div className='doacao'>
          <h1> Faça Sua Doação </h1>
          <p>
          Para contribuir com este projeto que ira ajudar a vida de muitas pessoas, faça uma doação ou Apenas divulgue para que alcance  mais pessoas 
          </p>

          <div className='redes_sociais'>
            <div className='img_doacao'>
              <img src="src/assets/pix.png" alt="pix" className='img'/> 
              <img src="src/assets/insta.png" alt="insta" className='img' /> 
              <img src="src/assets/whatsapp.png" alt="whats" className='img' /> 
              <img src="src/assets/gmail.png" alt="gmail" className='img' /> 
            </div>

            <div className="contatos">
              <p className="contato"> 1194334-7167 </p>
              <p className="contato"> Instagram </p>
              <p className="contato"> 55 1194334-7167 </p>
              <p className="contato"> Aqua.Alert2023@gmail.com </p>
            </div>

            <div className='botao_doacao'>
                <Link to="/inserirdoacao">
                    <button> Cadastrar Doação </button>
                </Link>
            </div>
          </div>

        </div>
      </aside>
      
    </>
  )
}

export default Doacao