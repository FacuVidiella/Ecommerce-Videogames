import { Link } from "react-router-dom";
import './CardAdmin.css';

export default function CardAdmin ({props}) {
    return (
        <Link to ={`/spAdmin/admin/${props.email}`}  className='linkAdmin'>
            <div className='containerAdmins'>
                {props.firstName} {props.lastName}
                <br/>
            </div>
        </Link>
    )
}