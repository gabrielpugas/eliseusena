function Home() {
  return (
    <div>
      <h1>Eliseu Sena</h1>
      
      <button onClick={ConfirmarPresença}>Confirmar presença</button>
    </div>
  )
}

function ConfirmarPresença() {
  return alert('Presença confirmada! Aqui é aroeira!')
}

export default Home
