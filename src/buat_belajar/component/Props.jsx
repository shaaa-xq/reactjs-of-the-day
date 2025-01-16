import { getImageUrl } from "./utils";

function Avatar({character, size = 50}){
  return(
    <>
      <section>
        <img 
          className="avatar bg-blue-500 text-white p-4 text-center w-auto m-10 rounded-xl"
          src={getImageUrl(character)}
          alt={character.name}
          width={size} 
          height={size} 
        />
      </section>

    </>
    
  );
}

export default function ProfileCard(){
  return(
    <>
      <div>
        <Avatar character={{
          name: 'Narendra melotot',
          imageId: ' (2)'
        }} />
        <Avatar character={{
          name: 'Kaguwir Melotot',
          imageId: ' (2)'
        }} />
      </div>
    </>
  );
}