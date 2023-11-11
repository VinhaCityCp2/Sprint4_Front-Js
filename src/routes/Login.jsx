import { useRef } from "react";
import { Link } from 'react-router-dom'
import '../styles/Login.scss';

function Login() {
  const user = useRef();
  const password = useRef();
      
  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');
              
  /* Verifica o usuario e senha e grava na sessão */  
  const handleSubmit = () => {
      
    if (user.current.value === 'admin' && password.current.value === '12345') {

      let token =

      Math.random().toString(16).substring(2) +
      Math.random().toString(16).substring(2);

      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);

    } else {

      alert('Usuário e senha inválidos !!!');

    }

  };


  return (
    <>
    <aside className="login">
      <div>
        {getUser && getSenha ? (
          <div className="link"> 
            <p> Login realizado com sucesso ! </p>
            <Link to="/home">
                <button> Página Inicial </button>
            </Link> 
          </div>                    
        ) : (         

        <form onSubmit={handleSubmit}>
          <h1> Faça o Login </h1>
          <p className="usuario"> USUÁRIO: <input type="text" ref={user} /> </p>  

          <p className="senha"> SENHA: <input type="password" ref={password} /> </p>


          <input className="confirmacao" type="submit" value="Login" />
        </form>       
        )}
          
      </div> 
    </aside>
    </>
  )
}

export default Login