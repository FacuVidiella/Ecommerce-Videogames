import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminWithEmail, removeAdmin } from '../../Redux/actions/utilityActions';
import { useParams } from "react-router-dom";
import './DetailAdmin.css';

export default function DetailAdmin () {
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(getAdminWithEmail(params.userEmail));
    }, [])
    const data = useSelector(state=>state.adminReducer.admin);
    const history = data.histories?.map(e=>(
        {
            id: e.id,
            description: e.description,
            product: e.productId || e.categoryId || e.opinionId,
            request: e.request
        }
    ))

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(removeAdmin(e.target.name, 'DEL_ADMIN_REQUEST'))
        window.location.replace('/spAdmin')
    }

    return (
        <div className='containerAdmin'>
            {data.firstName} {data.lastName}
            <br/>
            Email: {data.email}
            {history?.map(e=>
                <div className='containerData'>
                    <div className='gridAdmin'>
                        ID: {e.id}
                    </div>
                    <div className='gridAdmin'>
                        Request: {e.request}
                    </div>
                    <div className='gridAdmin'>
                        Product: {e.product}
                    </div>
                    <div className='gridAdmin'>
                        Description: {e.description}
                    </div>
                </div>
            )}
            <div className='historyEmpty'>
                {history?.length>=0?<div>History empty</div>:''}
            </div>
            <div className='containerPush'>
                <button className='btnAdminPush' name={data.email} onClick={e=>handleClick(e)}>PUSH ADMIN</button>
            </div>
        </div>
    )
}; 