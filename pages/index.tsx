import { NextPage } from 'next';
import Image from 'next/image'
import usSwr from 'swr'

// interface Profile{
//   id:number,
//   Name:string,
//   Email:string,
// }

const Home: NextPage = () => {

  const fetcher=(url:string)=>fetch(url).then((res)=>res.json())
  const{data,error}=usSwr("/api/profiles",fetcher);
  console.log(data)
  return (
    <div>
      <h2>Profile</h2>
      {/* <ul>
      {data && data.map((profile: Profile) => (
        <li key={profile.id}>
          <h2>{profile.Name}</h2>
          <p>{profile.Email}</p>
        </li>
      ))}
    </ul> */}
    </div>
  )
}

export default Home  