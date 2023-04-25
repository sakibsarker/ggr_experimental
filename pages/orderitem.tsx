import { NextPage } from 'next';
import usSwr from 'swr'

// interface Profile{
//   id:number,
//   Name:string,
//   Email:string,
// }

const orderitem: NextPage = () => {

  const fetcher=(url:string)=>fetch(url).then((res)=>res.json())
  const{data,error}=usSwr("/api/orderitems",fetcher);
  console.log(data)
  return (
    <div>
        <h2>
            orderitem
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

export default orderitem