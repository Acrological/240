
import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

export const AppNav = () => {

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
        </NavSection>
    </Nav>


);

}