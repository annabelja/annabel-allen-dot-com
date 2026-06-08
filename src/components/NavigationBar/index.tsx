import {Link} from 'react-router';

export const NavigationBar = () =>{
    return (    
                <div>
                    <div>
                        <Link to="/">Annabel Allen</Link>
                    </div>
                    <div>
                        <Link to="/about">About Me</Link>
                </div>
                </div>
    )

}