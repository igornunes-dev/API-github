import React from 'react';
import { ItemContainer } from './styles';

 const ItemRepo = ({repo, handleRemoveRepo}) =>{

  const handleRemove = () => {
    //Chama a função que ta sendo passada como parametros com o repo.id
    handleRemoveRepo(repo.id)
  }

  return (
      <ItemContainer>
          <h3>{repo.name}</h3>
          <p>{repo.full_name}</p>
          <a href={repo.html_url} target='_blank' rel="noreferrer">Ver repositório</a> <br />
          <button className="remover" onClick={handleRemove}>Remover</button>
          <hr></hr>
      </ItemContainer>
   
  )
}

export default ItemRepo;