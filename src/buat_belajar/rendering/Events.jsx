export default function ChangeTheme(){
  function handleClick(){
    let divStyle = document.body.style

    if(divStyle.backgroundColor === "red"){
      divStyle.backgroundColor = "white"
    } else{
      divStyle.backgroundColor = "red"
    }
  }

  return(
    <div>
      <p>Change Theme with Handling Events</p>
      <button className='border shadow-s rounded-md p-1 m-2' onClick={handleClick}>Change Theme</button>
    </div>
  )
}