import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/InserirDoacao.scss';

export default function InserirDoacao( ) {

        let {id} = useParams();

        const [novo, setNovo] = useState({
            id,
            nome:'',
            idade:'',
            valor:''
        })

        let metodo = 'post'
        if(id){
          metodo ='put'
        }

        const handleChange = (e) =>{
            setNovo({...novo, [e.target.name]:e.target.value})
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            fetch(`http://localhost:5000/doador/${id ? id:''}`, {
                method:metodo,
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(novo),
            }).then(()=>{
                window.location= '/listardoacao';
            })
        }

        useEffect(()=>{
            if(id){
              fetch(`http://localhost:5000/doador/${id}`)
              .then((resp)=>{
                return resp.json();
              })
              .then((data)=>{
                setNovo(data)
              })
            }
          }, [id]);

          return(
            <>
            <div className="estrutura_cadastro">
              <h1> Cadastro de Doação </h1>
              <form onSubmit={handleSubmit}>
                <p className='nome'> Nome <input type="text" name="nome" value={novo.nome} placeholder="Digite seu Nome" onChange={handleChange} /> </p>
                <p className='idade'> Idade <input type="text" name="idade" value={novo.idade} placeholder="Digite sua Idade" onChange={handleChange} /> </p>
                <p className='valor'> Valor <input type="text" name="valor" value={novo.valor} placeholder="Digite o valor da Doação" onChange={handleChange} /> </p>
      

                <button type="submit"> Cadastrar </button>

              </form>
            </div>
            </>
            )
    
}
