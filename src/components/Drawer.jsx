import PropTypes from 'prop-types'
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { IoChevronDownSharp } from "react-icons/io5"


const DrawerNavBar = ({ openLeft, openDrawerLeft }) => {
  return (
    <>
      <Drawer
        open={openLeft}
        onClose={openDrawerLeft}
        direction='left'
        className='p-4'
      >
        <ul className="flex flex-col gap-4 items-start mb-auto">
          <li>
            <div className="border-b-2 border-transparent hover:border-b-black"><a >MEN<IoChevronDownSharp className="inline" /></a></div>
          </li>

          <li><div className="border-b-2 border-transparent hover:border-b-black"><a >WOMEN<IoChevronDownSharp className="inline" /></a></div></li>
          <li><div className="border-b-2 border-transparent hover:border-b-black"><a >ABOUT</a></div></li>
          <li><div className="border-b-2 border-transparent hover:border-b-black"><a >HELP</a></div></li>
          <li><div className="border-b-2 border-transparent hover:border-b-black"><a >RETURNS & EXCHANGES</a></div></li>
          <li><div className="border-b-2 border-transparent hover:border-b-black"><a >ACCOUNT</a></div></li>
          <li><div className="border-b-2 border-transparent hover:border-b-black"><a >GIFT CARDS</a></div></li>
        </ul>
      </Drawer>
    </>
  )
};

DrawerNavBar.propTypes = {
  openLeft: PropTypes.bool,
  openDrawerLeft: PropTypes.func
};

export default DrawerNavBar