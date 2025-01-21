import { getCoverUrl } from "./utils.js"
import { songs } from "./data.js"

export default function ListRendering(){
  const listSongs = songs.map(song => {
    <li key={songs.id}>
      <img 
        src={getCoverUrl(song)} 
        alt={song.name} />
      <p>
        <b>{song.name}</b>
        Artist: {song.artist}
      </p>
    </li>
  })
  return(
    <ul>{listSongs}</ul>
  )
}