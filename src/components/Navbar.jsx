import Logo from "./Logo"
import ToggleTheme from "./ThemeToggle"
import FontSelect from "./FontSelect"
const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
            <Logo/>
            <div className="second-container">
<FontSelect/>
<ToggleTheme/>
</div>
            </div>
            

        </nav>
    )
}
export default Navbar