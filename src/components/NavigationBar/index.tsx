import { useNavigate } from 'react-router';
import { AppBar, Button, Toolbar } from 'react95';

export const NavigationBar = () =>{
    const navigate = useNavigate();
    const handleNavigate = async (path: string) => {
        await navigate(path);
      };
    return (    
    <AppBar>
      <Toolbar>
          <Button onClick={() => handleNavigate("/")}>Home</Button>
          <Button onClick={() => handleNavigate("/about")}>About</Button>
      </Toolbar>
    </AppBar>
    )

}