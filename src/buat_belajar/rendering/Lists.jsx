// import { getCoverUrl } from "./utils.jsx"
// import { songs } from "./data.jsx"

const songs = [{
  id: 0,
  name: 'With',
  artist: 'Kim Tae Ri, Nam Joo Hyuk, Bona, Choi Hyun Wook, Lee Joo Myung'
}, {
  id: 1,
  name: 'Loving Machine',
  artist: 'TV Girl'
}, {
  id: 2,
  name: 'Twilight',
  artist: 'Amarynn, Burek'
}]

function ListOfSongs(){
  return(
    <div>
      <h2>List of Songs</h2>
      <ul>{songs.map(song => 
        <li key={song.id}>
          <p style={{border: 'solid', marginBottom: '20px'}}>
            <b>{song.name}</b>
            <p>Artist: {song.artist}</p>
          </p>
        </li>
      )}</ul>
    </div>
  )
}

export default ListOfSongs;