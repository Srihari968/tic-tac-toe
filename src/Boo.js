import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Boo  ()  {
    const data = useLocation();
    const navigate = useNavigate();

    function back()
    {
        navigate('/Ttt');
    }
    return(
        <div>
            <h1>second Page</h1>
            <p>Winner is {data.state.w}</p>
            <button onClick={back}>One More game</button>

        </div>
    )
}

export default Boo;