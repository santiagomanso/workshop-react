import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='absolute left-1/2 -translate-x-1/2 flex gap-10 top-2 font-extrabold uppercase tracking-wide text-slate-800'>
      <Link to='/'>home</Link>
      <Link to='/signup'>signup</Link>
    </nav>
  )
}

export default Navbar
