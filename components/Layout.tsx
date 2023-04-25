import React, { ReactNode,useState } from 'react'
import {FaBox,FaBars,FaUserAlt,FaRegChartBar,FaCommentAlt,FaShoppingBag,FaThList} from 'react-icons/fa'
import { AiOutlineQrcode,AiTwotoneSetting } from "react-icons/ai";
import Link from 'next/link'
import { useRouter } from 'next/router';
interface GlobalLayoutProps{
    children:ReactNode
}
const Layout = ({children}:GlobalLayoutProps) => {
    const router=useRouter()
    const[isOpen,setIsopen]=useState(false)
    const toggle=()=>setIsopen(!isOpen)
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaRegChartBar/>
        },
        {
            path:"/order",
            name:"Orders",
            icon:<FaBox/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/orderitem",
            name:"Product List",
            icon:<FaThList/>
        } ,
        {
            path:"/qrcode",
            name:"QR Code",
            icon:<AiOutlineQrcode/>
        },
        {
            path:"/table",
            name:"Table",
            icon:<FaShoppingBag/>
        },
        {
            path:"/customer",
            name:"Customer",
            icon:<FaUserAlt/>
        },
        {
            path:"/setting",
            name:"Settings",
            icon:<AiTwotoneSetting/>
            
        }
    ]
  return (
    <div className="container">
    <div  style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                <FaBars style={{color:'#4040ec'}} onClick={toggle}/>
            </div>
        </div>
        {
                    menuItem.map((item,index)=>(
                        <Link href={item.path} key={index} className={`${router.pathname===item.path?"active":''} link`}>
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">
                                {item.name}
                            </div>
                        </Link>
                    ))
                }
    </div>
    <main>{children}</main>
</div>
  )
}

export default Layout