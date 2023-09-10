
import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

export const AppNav = () => {

const user = JSON.parse(localStorage.getItem('User'));
return (
    <Nav>
        <NavSection>
            <NavItem>
                <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/workouts" > Workouts</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/exercises">Exercises</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/records">Records</NavLink>
            </NavItem>
            <NavItem>
                Welcome, {user.name}
            </NavItem>
            
        </NavSection>
    </Nav>


);

}