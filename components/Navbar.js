import { slide as Menu } from 'react-burger-menu'
import styles from '../styles/Navbar.module.scss';



export default function Navbar() {
    const showSettings = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Menu noTransition left>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
        </div>
    )
}
