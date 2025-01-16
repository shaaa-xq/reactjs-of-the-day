import Counter from "./UseState";
import ProfileCard from "./Props";

export default function Composition(){
  return(
    <>
      <ProfileCard />
      <Counter />
      <p>ini pakai composition</p>
    </>
  )
}