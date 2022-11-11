import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import tooth from './tooth.jpg'

const Header = () => {
  const { user, logOut, githubLogin } = useContext(AuthContext);

  const handleGithubSignIn =() =>{
    githubLogin()
    .then(res => {
      const user=res.user;
      console.log(user)
    })
    .catch(error => console.error(error))
  }

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const navItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>

      {user?.uid ? (
        <>
          <li className="font-semibold">
            <Link to="/addservices">Add Services</Link>
          </li>
          <li className="font-semibold">
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogout}>Log out</button>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/login">Log in</Link>
          </li>
          <li className="font-semibold">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleGithubSignIn} className="btn btn-outline me-0">Github SignIn</button>
          </li>
        </>
      )}
    </>
  );

  return (

    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <a href="" className="btn btn-ghost normal-case text-xl">Dental Care</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  {
                user?.displayName || user?.photoURL ?
              <> <p className="mx-6 font-serif">{user.displayName}</p>
                
              <img style={{width:"40px"}} src={user.photoURL} className='rounded-full' alt="" /></> 
                
                //   <Image style={{height: '40px'}} roundedCircle
                // src={user.photoURL}></Image>
              
               
              
                :
                <img style={{width:"60px"}} src={tooth} alt="" />
              }
    
  </div>
</div>
    
  );
};

export default Header;
