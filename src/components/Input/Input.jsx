import './input.css'
import find from './find.svg'

export function Input() {
    return (
        <form className='search-form' >
        <input className='search' type="text" placeholder="Search for anything" />
        <img  className='search-icon' src={find} alt="find" />
        </form>
    )
}