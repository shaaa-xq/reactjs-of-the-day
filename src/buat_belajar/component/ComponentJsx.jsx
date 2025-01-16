import '../styling/style.css'

function Card({character}){
  return(
    <div style={{marginTop: '0', border: 'solid'}}>
      <h4 style={{fontWeight: 'bold'}}>{character.name}</h4>
      <ul className="border-solid" >
        <li>Role: {character.role}</li>
        <li>Team: {character.team}</li>
      </ul>
    </div>
  );
}

export default function Profile(){
  return(
    <>
      <h1 className="header" style={{margin: '0', padding: '0', boxSizing: 'border-box'}}>Brutal Legends Characters</h1>
      <Card  character={{
        name: 'Kaguwir',
        role: 'Human',
        team: 'Asgard'
      }} />
      <Card character={{
        name: 'Noya',
        role: 'Angel of Righteousness',
        team: 'Cahaya'
      }} />
      <Card character={{
        name: 'Ubi',
        role: 'Sang Penghancur Dunia',
        team: 'Ragnarok'
      }} />
    </>
  )
}