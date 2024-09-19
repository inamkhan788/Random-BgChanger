
const App = () => {
  const clickHandler=(e)=>{
const body = document.querySelector("body")
body.style.background= getRandomColor()
  };

  function getRandomColor(){
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i <6 ; i++) {
      color +=letters[Math.floor(Math.random() * 16)]      
    }
    return color;
  }
  return (
    <>
      <div className="container">
      <h1>Random Background Changer</h1>
      <button className='btn' onClick={clickHandler}>Click Me</button>
      </div>
    </>
  )
}

export default App
