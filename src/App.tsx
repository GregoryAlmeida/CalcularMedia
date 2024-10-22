import { FormEvent, useState } from 'react'
import Input from './Component/Input/Input'
import './App.css'

interface IConteudo {
  id: number;
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

    if (topico.trim() === '' || valor.trim() === '') return
    setTopico('')
    setValor('')
    setConteudo([...conteudo, {
      id: conteudo.length,
      topico: topico,
      valor: Number(valor),
    }])

    setResultado(resultado + Number(valor))
  }

 

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h1>Calcular Media</h1>
        <p>Insira 2 ou mais valores!</p>
        <Input 
          label='Topico'
          type='text' 
          value={topico} 
          onChange={({currentTarget}) => setTopico(currentTarget.value)}
        />
        <Input 
          label='Valor'
          type='number'
          value={valor}
          onChange={({currentTarget}) => setValor(currentTarget.value)}
        />
        <button>Adicionar</button>
      </section>
      <section className='section-topico'>
        <div className='span-topico'>
        {conteudo.map(({id, topico, valor}) => (
          <span key={id}>
          <h1>{topico}</h1>
          <p>Valor: {valor}</p>
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
