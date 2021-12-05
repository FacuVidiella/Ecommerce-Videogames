import { Link } from 'react-router-dom'
import s from './style.module.css'


export default function ErrorPage() {
    return (
        <div className={s.container}>
            <div className={s.box}>
                <h1>Error!</h1>
                <h1>Page not found!</h1>
                <Link to='/'><button>Return Home</button></Link>
            </div>
        </div>
    )
}