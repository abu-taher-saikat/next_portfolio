import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss';



export default function Navbar() {
    // const showSettings = (e) => {
    //     e.preventDefault();
    // }
    return (
        <div>
            <Menu noTransition left>
              <Link href='/'> <a id="home" className="menu-item" >Home</a></Link>
              <Link href='/about'> <a id="about" className="menu-item" >Home</a></Link>
              <Link href='/contact'> <a id="contact" className="menu-item" >Home</a></Link>
                {/* <a onClick={showSettings} className="menu-item--small" href="">Settings</a> */}
            </Menu>
        </div>
    )
}
