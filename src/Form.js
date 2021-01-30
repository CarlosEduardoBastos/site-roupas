import React from 'react'

const Form = () => {
    const [form, setForm] = React.useState({
        nome: '',
        senha: '',
      });
      function handleClick(event){
        event.preventDefault()
        fetch('http://dogsipa.test/json/jwt-auth/v1/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        }).then(res => console.log(res))
      }
      function handleChange({target}){
        const {id, value} = target;
        setForm({...form, [id]: value})
      }
    return (
        <form onSubmit={handleClick}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" value={form.nome} onChange={handleChange}/>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" value={form.senha} onChange={handleChange}/>
            <button>Enviar</button>
        </form>
    )
}

export default Form
