import { FormEvent, useState } from 'react'
import Input from './Component/Input/Input'
import './App.css'

interface IConteudo {
  id: `${string}-${string}-${string}-${string}-${string}`;
  topico: string;
  valor: number;
}

function App() {
  const [topico, setTopico] = useState('')
  const [valor, setValor] = useState('')
  const [conteudo, setConteudo] = useState<IConteudo[]>([])
  const [resultado, setResultado] = useState(0)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (valor.trim() === '') return
    setTopico('')
    setValor('')
    setConteudo([...conteudo, {
      id: crypto.randomUUID(),
      topico: topico,
      valor: Number(valor),
    }])

    setResultado(resultado + Number(valor))
  }

 const handleDelete = (id: string,valor: number) => {
  conteudo.splice(conteudo.findIndex(item => item.id === id), 1)
  setConteudo([...conteudo])
  setResultado(resultado - valor)
 }

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h1>Calcular Media</h1>
        <p>Insira 2 ou mais valores!</p>
        <Input 
          label='Topico'
          type='text' 
          placeholder='Ex: Notas...'
          value={topico} 
          onChange={({currentTarget}) => setTopico(currentTarget.value)}
        />
        <Input 
          label='Valor'
          type='number'
          placeholder='Ex: 8...'
          value={valor}
          onChange={({currentTarget}) => setValor(currentTarget.value)}
        />
        <button>Inserir</button>
      </section>
      <section className='section-topico'>
        <div className='span-topico'>
        {conteudo.map(({id, topico, valor}) => (
          <span key={valor}>
          <h1>{topico}</h1>
          <p>Valor: {valor}</p>
          <button className='deletar' onClick={() => handleDelete(id, valor)} >X</button>
        </span>))}
      </div>
      <div className='span-media'>
      {conteudo.length > 1 && 
        <span>
          <h1>Media</h1>
          <p style={{color: resultado / conteudo.length < 4 ? 'red' : 'green'}}>{resultado / conteudo.length}</p>
        </span>}
      </div>

      </section>
    </form>
  )
}

export default App
