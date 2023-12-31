import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {

  const authStatus = useSelector((state)=> state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Sign-Up',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ]

  return (
    <header className="relative w-full py-3 pt-5 shadow">
      <Container>
        <div className='flex justify-around'>
        <div className='flex'>
          <Link to='/'>
            <Logo width='70px'/>
          </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {/* Displaying Logout Button  */}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
        </div>
      </Container>
    </header>
  );
}

export default Header