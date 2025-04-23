import React from 'react'
import './Footer.css'

export default function Footer() {

    return (
        <>
        <div className="footer">
        <ul className='iconlist'>
            <li><img src="https://static.vecteezy.com/system/resources/previews/016/326/810/non_2x/clock-icon-transparent-background-free-png.png"  height="40"  alt="" /></li>
            <li><img src="https://cdn-icons-png.freepik.com/512/3963/3963783.png" alt="" height="40"/></li>
            <li><img src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png" alt=""  height="40"/></li>
            <li><img src="https://www.freeiconspng.com/uploads/church-bell-icon-5.png" alt="" height="50"/><span className="notify">{counts.counter}</span></li>
        </ul>
        </div>
        
        </>
    )
}
