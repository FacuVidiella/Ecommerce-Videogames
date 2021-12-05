import { getUsers, delUser } from '../../Redux/actions/utilityActions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import StyledButton from '../styles/styled_button/styledButton';

export default function DelUsers () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    
    const data = useSelector(state=>state.rootReducer.users);
    function handleClick (e) {
        e.preventDefault();
        dispatch(delUser(e.target.name));
        window.location.reload();
    }
    return (
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',width:'90%',justifyContent:'space-around'}}>
            {
                data?.length>0 ?
                    data?.map(e=>
                    <div style={{display:'flex',margin:'10px',alignItems:'center',backgroundColor:'rgba(143, 143, 143, 0.33)',color:'black',justifyContent:'space-between',height:'4rem',borderRadius:'10px',padding:'0.5em'}}>
                        <p>
                        {e.firstName}
                        </p>
                        <p>
                        {e.email}
                        </p>
                        <StyledButton style={{height:'2em'}} name={e.email} onClick={e=>handleClick(e)}>X</StyledButton>
                    </div>):''
            }
        </div>
    );
};