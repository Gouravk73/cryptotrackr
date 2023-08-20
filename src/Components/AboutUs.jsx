import React from 'react'
import img from "../Assets/aboutUs.webp"
import{LuPiggyBank} from"react-icons/lu"
import{TfiHeadphoneAlt} from"react-icons/tfi"
import{MdOutlineSyncLock} from"react-icons/md"
const AboutUs = () => {
  return (
    <div id='aboutus'>
        <h1>Everything About Us</h1>
        <div className='aboutusdiv'>
            
            <div>
                <h3>Innovation Brings Life to Our Projects</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <img src={img} alt="" />
        </div>
        <div style={{backgroundColor: "#FDE2F3",color:"#422881",display:"flex",alignContent:"center", flexDirection:"column",textAlign:"center" }}> 
        <h1    >Our Services</h1>
        <div className='ourservices'>
               <div><LuPiggyBank size={70}/> <Services  head={"Safe Transaction"} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply." />
               </div>
               <div><LuPiggyBank size={70} /> <Services  head={"Safe Transaction"} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply." />
               </div> 
               <div><MdOutlineSyncLock size={70}/> <Services  head={"Real Time query about coins "} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply." />
               </div>
               <div><TfiHeadphoneAlt size={70}/> <Services  head={"Phone Support"} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply." />
               </div>
        </div>
        </div>
    </div>
  )
}
const Services=({head,text})=>{
    return(
        <div>
            <h3>{head}</h3>
            <p>{text}</p>
        </div>
        )
}
export default AboutUs