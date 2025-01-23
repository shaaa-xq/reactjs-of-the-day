// passing props to a component

function AnimalList({render}){
  const animals = ["Cat", "Butterfly", "Dog"]
  return <div>{render(animals)}</div>
}

export default function RenderingAnimals(){
  return(
    <AnimalList 
      render={(animals) => (
        <ul>
          {animals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      )}
    />
  )
}