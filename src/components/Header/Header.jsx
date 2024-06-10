import './header.css'
import logo from '../../logo.svg'
import { Input } from '../Input'
import { Link } from '../Link'
import { Button } from '../Button'
import cart from '../Button/cart.svg'
import browser from '../Button/browser.svg'

export function Header() {
    return (
<header className="header">
    <img src={logo} alt="logo" />
    <Link>Categories</Link>
    <Input/>
    <Link>Udemy Business</Link>
    <Link>Teach on Udemy</Link>
    <div className='button-header'>
        <Button forCss='uncolor'><img src={cart} alt="cart" /></Button>
        <Button forCss='white'>Log in</Button>
        <Button forCss='black'>Sign Up</Button>
        <Button forCss='uncolor border'><img src={browser} alt="language" /></Button>
    </div>

</header>            
    )
}