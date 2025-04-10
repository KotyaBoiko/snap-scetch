import { Link } from 'react-router'
import { COMMON_ROUTES_NAMES } from '../../router/commonRoutesNames'

const menu = [
  { name: 'Home', path: COMMON_ROUTES_NAMES.Home },
  { name: 'Training', path: COMMON_ROUTES_NAMES.Training },
  { name: 'Gallery', path: COMMON_ROUTES_NAMES.Gallery },
  { name: 'About', path: COMMON_ROUTES_NAMES.About },
]

const Header = () => {
  return (
    <nav className='flex justify-end gap-2 items-center p-4 py-6 text-lg bg-gray-800 text-white'>
      {menu.map(item => {
        return (
          <Link key={item.name} to={item.path} className='hover:text-gray-400 transition-colors'>
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Header