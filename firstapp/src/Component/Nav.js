function Nav(props){
    return(
        <nav className = "main-nav">
            <ul>
                <li>Home{props.design}</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </nav>
    );
};

export default Nav;