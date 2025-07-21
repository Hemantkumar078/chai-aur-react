import Chai from './Chai'
//using curly braces to inject variables
function App() {
  const username='chai or code';
  return (
    <>
    <h1>chai aur react {username} </h1>
    <Chai/>
    </>
  )
}

export default App
