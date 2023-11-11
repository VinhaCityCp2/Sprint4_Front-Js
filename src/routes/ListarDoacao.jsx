import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaEdit, FaTrash} from 'react-icons/fa'
import '../styles/ListarDoacao.scss';

export default function ListarDoacao(){

    const [doador, setDoador]= useState([]);

    useEffect(()=>{
    fetch('http://localhost:5000/doador/')
    .then((resp)=> {
        return resp.json()
    }) 
    .then((resp)=> {
        setDoador(resp)
    })
    .catch((error)=>{
        console.log(error)
    })
},[])

const handleDelete = (id)=>{
    fetch(`http://localhost:5000/doador/${id}`,{
        method:'delete'
    })
    .then(()=>{
        window.location='/listardoacao'
    })
    .catch((error)=>{
        console.log(error)
    })
}

const handleChange = (e)=>{
    setNovo({...novo, [e.target.name]:e.target.value})
}

    return(
        <>
        <div className="estrutura_lista">
            <h1> Lista de Doação </h1>

            <table>
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> Idade </th>
                        <th> Valor </th>
                        <th> Excluir </th>
                    </tr>
                </thead> 
                <tbody>
                    {doador.map((doa) => (
                        <tr key={doa.id}>
                            <td> {doa.nome} </td>
                            <td> {doa.idade} </td>
                            <td> {doa.valor} </td>
                            <td>
                                {' '}
                            <button onClick={handleDelete.bind(this, doa.id)}>
                                <FaTrash/>
                            </button>

                                
                            </td>
                        </tr>

                       
                    ))}
                </tbody>      
            </table>
            
        </div>

        </>
    )
 }
