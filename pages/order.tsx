import { NextPage } from 'next';
import usSwr from 'swr'

// interface Profile{
//   id:number,
//   Name:string,
//   Email:string,
// }

const order: NextPage = () => {

  const fetcher=(url:string)=>fetch(url).then((res)=>res.json())
  const{data,error}=usSwr("/api/orders",fetcher);
  console.log(data)
  return (
    <div>
        <h2>
           Order
        </h2>
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

export default order