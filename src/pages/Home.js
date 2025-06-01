import { Link, Outlet } from "react-router-dom";

function Home(){
    return(
        <>
        <h1>Home</h1>
        <nav>
            <Link to='about'>about</Link>
            <Link to='user/:id'>user</Link>
        </nav>
        <Outlet/>
        </>
    )
}

export default Home;