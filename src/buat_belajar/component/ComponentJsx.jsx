import '../styling/style.css'

function Card({character}){
  return(
    <div className="card" style={{marginTop: '0', border: 'solid'}}>
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
      <h1 className="header" style={{margin: '0', padding: '0', boxSizing: 'border-box', textAlign: 'center', fontWeight: 'bold'}}>Brutal Legends Characters</h1>
      <Card className="card" character={{
        name: 'Kaguwir',
        role: 'Human',
        team: 'Asgard'
      }} />
      <Card className="card" character={{
        name: 'Noya',
        role: 'Angel of Righteousness',
        team: 'Cahaya'
      }} />
      <Card className="card" character={{
        name: 'Ubi',
        role: 'Sang Penghancur Dunia',
        team: 'Ragnarok'
      }} />
      {/* <p>i made this using JSX. i suck at react styling thx</p> */}
    </>
  )
}