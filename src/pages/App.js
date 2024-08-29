import { useState } from 'react';
import GitLogo from '../assets/logo.png'
import  Input  from '../components/Input';
import  ItemRepo from '../components/ItemRepo';
import Container from './styles'
import  Button  from '../components/Button';
import { api } from '../services/api';

function App() {
  const [valueRepo, setValueRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    //usando desestruturação para pegar dados do Repositorio
    const {data} = await api.get(`repos/${valueRepo}`)

    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id)
      
      if(!isExist){
        //ele adicionar o data em Repo juntamente com oque já possui dentre de Repos
        setRepos(prev => [...prev, data])
        setValueRepo('');
        return 

      }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    const isUpdateRepo = repos.filter(repo => repo.id !== id)
    setRepos(isUpdateRepo)
    
  }
  return (
    <Container>
      <img src={GitLogo} width={72} height={72} alt='GitHub logo' />
      <Input valor={valueRepo} onChange={(e) => setValueRepo(e.target.value)} alt="igor"/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => 
      <ItemRepo 
        key={repo.id}
        handleRemoveRepo={handleRemoveRepo} 
        repo={repo}/>)}
    </Container>
  );
}

export default App;
