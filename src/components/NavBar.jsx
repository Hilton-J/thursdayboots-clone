import { CiSearch } from "react-icons/ci"
import { HiMiniBars3 } from "react-icons/hi2"
import { IoChevronDownSharp } from "react-icons/io5"
import { PiHandbagSimple } from "react-icons/pi"
import { useState } from "react"
import Drawer from "./Drawer"
import MenPopover from "./MenPopover"

const NavBar = () => {
  const [openLeft, setOpenLeft] = useState(false);


  const openDrawerLeft = () => setOpenLeft(!openLeft);
  return (
    <div className="md:absolute z-50">
      <div className="flex px-6 bg-orange-600  md:bg-transparent hover:bg-slate-600  text-white  hover:text-black w-full h-16 z-50"> {/**Added h-16 */}
        <nav className="flex-1 flex items-center">

          <a className="block md:hidden" onClick={openDrawerLeft}><HiMiniBars3 /></a>

          <ul className="hidden md:flex gap-4 items-center h-full"> {/**Added h-Full */}

            <li className="h-full"><div className="border-b-2 border-transparent hover:border-b-black h-full flex items-center"><a data-popover-target="popover-default">MEN<IoChevronDownSharp className="inline" /></a></div></li> {/**Added li:h-full  div: flex items-center h-full */}

            <li className="h-full"><div className="border-b-2 border-transparent hover:border-b-black h-full flex items-center"><a>WOMEN<IoChevronDownSharp className="inline" /></a></div></li>
            <li><a>ABOUT</a></li>
          </ul>
        </nav>

        {/* ============================= SVG ========================================= */}
        <div className="flex-1 flex justify-center h-full">
          <a href="/" title="Thursday Boot Company" >
            <svg className='md:h-[6rem] hover:h-full h-full w-full md:w-[15rem] py-2' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2048 787" width="5700" height="418" >
              <path transform="translate(973,86)" d="m0 0 6 1 13 13 7 8 11 11 17 13 17 10 21 10 19 7 21 6 20 3 28 2h40l58-5h36l33 3 24 4 26 7 24 10 20 12 11 8 11 9 9 11 7 11 4 8 5 21 1 9v27l-3 18-5 12-11 12-10 7-12 4-11 1-11-3-9-6-5-6-6-13-2-8v-18l3-10 4-6h4l2 36 4 13 4 6 6 4 7 2 10-1 12-6 8-7 6-9 3-12 1-8v-33l-3-19-4-11-7-13-9-10-13-8-11-5-27-9-16-3-30-3-27-1h-19l-41 2-64 5h-46l-29-3-23-5-21-6-24-10-22-12-22-14-11-9-6-6-5 2-11 10-14 11-17 11-17 9-21 7-20 4-32 4-12 1h-50l-29-3-34-6-34-5-10-1h-34l-28 3-23 5-18 6-17 9-14 11-9 9-9 11-7 10-7 14-6 20-2 11v24l4 16 7 13 8 7 9 4 11 1 10-4 7-6 5-10 4-25 3-8 3-2 5 1 1 2v25l-4 13-8 10-8 6-12 6-4 1h-16l-10-4-8-6-8-9-8-16-3-13-1-9v-21l2-16 5-16 9-17 8-11 11-13 7-7 11-9 14-10 19-10 25-9 31-7 22-3h39l52 5 35 3h37l22-2 23-4 21-6 23-10 21-11 27-18 9-8 7-8z" fill="#fefefe" />
              <path transform="translate(523,425)" d="m0 0h13l11 3 9 5 8 6 7 11 3 10v29l-2 1-8-4-3-8-4-24-5-9-8-7-11-4h-7l-8 3-8 6-6 8-4 10-2 9-1 10v16l3 19 5 15 9 17 8 11 9 10 8 7 20 12 16 7 24 8 20 4 18 2h40l23-3 37-8 32-4 26-2h38l33 4 26 6 21 7 17 8 12 8 14 10 12 11 5 5 4-1 8-6 17-12 19-13 21-10 25-9 24-6 24-4 36-3h29l33 2 48 5 14 1h22l37-2 35-4 24-5 16-6 10-6 10-8 11-13 7-12 5-19 3-19v-8l-4-20-4-12-6-9-7-7-14-7-10-1-7 3-5 4-5 9-2 7-2 22-1 12-4 4-5-5-1-12v-16l2-11 7-13 9-8 9-4 9-1 12 2 10 4 9 7 7 8 7 15 4 15 1 9v11l-2 18-5 21-7 14-9 11-8 9-14 11-13 8-16 7-36 12-21 5-25 4-9 1h-50l-37-3-22-1h-30l-31 2-27 4-19 5-20 8-16 8-16 10-19 14-12 11-8 7-11 11-3 4-4-2-13-13-14-11-11-8-18-11-17-9-25-10-24-8-20-4-22-2h-26l-40 3-43 4h-56l-25-3-25-6-30-10-21-10-12-9-14-12-9-11-7-10-7-14-7-21-3-15-1-11v-19l2-13 5-13 8-11 7-7 10-6z" fill="#FEFEFE" />
              <path transform="translate(908,274)" d="m0 0h21l18 1 9 2 8 7 5 11 3 10v20l-4 10-6 8-4 5 1 6 8 36 4 21 4 11h-12l-8-3-4-6-6-18-6-28-2-13h-11l2 51v13l-2 2-4 1h-14l-2-5v-132l1-9zm21 17-4 1v38l2 5h7l10-5 5-6 1-4v-10l-3-12-2-4-9-3z" fill="#FEFEFE" />
              <path transform="translate(1098,274)" d="m0 0h26l14 3 8 4 6 7 5 13 4 22 1 13v22l-2 23-3 16-5 12-3 5-6 3-17 3-24 1-6-2-1-3v-120l1-21zm17 17-1 2 1 10 1 27 1 73 8-1 7-4 4-9 4-20 2-23v-10l-2-20-5-16-4-6-6-3z" fill="#FEFEFE" />
              <path transform="translate(715,273)" d="m0 0h18l1 1v58l23-1 1-16 1-40 1-1h19l1 1v145l-3 1h-17l-1-1-1-69-24-2v71l-1 1h-15l-2-2-1-21-1-57v-67z" fill="#FEFEFE" />
              <path transform="translate(811,273)" d="m0 0 19 1 1 3v89l1 22 2 10 4 2h13l3-3 1-10v-29l-1-64v-20l2-1h15l3 1 1 8v93l-1 19-2 9-6 9-6 5-8 3h-19l-8-4-8-9-4-9-2-12-1-20v-92z" fill="#FEFEFE" />
              <path transform="translate(1213,274)" d="m0 0h10l4 3 6 25 12 60 10 46 2 7v5l-2 1h-12l-4-1-3-7-7-30-1-2-18 1-8 32-4 6-3 1h-7l-5-2-1-1v-8l7-37 12-60 6-28 2-9zm4 60-2 7-1 18 2 1h9l-1-9-5-16z" fill="#FEFEFE" />
              <path transform="translate(1028,273)" d="m0 0 13 1 10 4 7 5 5 8 3 10v6l-4 1-13-2-5-3v-5l-4-4-2-1h-10l-4 4-2 9 3 9 9 13 11 12 11 14 7 14 3 10v18l-5 10-9 9-9 4-4 1h-16l-8-4-9-10-5-10-1-8 3-3h12l8 7 4 6 4 2h7l4-2 2-5-1-11-5-13-6-10-8-10-13-16-5-8-3-9-1-6v-10l3-10 5-8 7-6 5-2z" fill="#FEFEFE" />
              <path transform="translate(1326,273)" d="m0 0h20l1 1-1 7-11 29-12 33-2 11-1 66-5 2h-9l-7-3-1-4-2-40-3-25-5-19-12-36-6-17v-4l16 1 5 2 8 25 8 23 7-15 8-21 2-13z" fill="#FEFEFE" />
              <path transform="translate(655,273)" d="m0 0h31l1 2 1 15-2 1-18 1v127l-7 2h-11l-2-1-1-5v-124l-16-2-5-3-1-4 2-5 2-2 5-1z" fill="#FEFEFE" />
              <path transform="translate(749,494)" d="m0 0h31l1 14-35-1-46-2-19-1-72-2-2-3v-4z" fill="#FEFEFE" />
              <path transform="translate(1181,494)" d="m0 0h42l117 1 8 1 1 2-2 6-118 1-33 1-17 1-1-5 2-7z" fill="#FEFEFE" />
              <path transform="translate(814,473)" d="m0 0h21l5 3 3 6 2 11v25l-5 5-6 3-4 1h-15l-4-4-2-6-1-11v-26l2-5zm8 8-3 2-1 5 2 5 4 2h8l1-1-1-9-5-4zm0 23-3 2-1 6 2 5 2 1 9-1 4-5v-7l-1-1z" fill="#FEFEFE" />
              <path transform="translate(875,473)" d="m0 0h10l8 4 6 8 2 4v17l-3 10-5 6-5 4-7 2-9-1-6-4-6-12-1-4v-14l4-11 5-5 4-3zm1 10-3 3-2 9v14l4 8 1 1h7l5-3 3-7v-12l-4-9-4-4z" fill="#FEFEFE" />
              <path transform="translate(1108,473)" d="m0 0 8 1 8 5 6 12v12l-2 9-6 9-6 5-4 1h-11l-5-3-5-8-3-10v-14l4-10 7-6zm-2 9-5 5-2 12 1 11 3 7 2 1h7l5-4 2-5 1-11-2-10-4-5z" fill="#FEFEFE" />
              <path transform="translate(930,473)" d="m0 0h11l9 6 5 8 1 3v16l-3 9-6 8-7 4h-12l-6-4-5-7-2-5-1-12 2-11 6-10zm2 9-5 5-2 8v14l4 9 2 1h8l5-5 2-6v-15l-4-8-6-3z" fill="#FEFEFE" />
              <path transform="translate(1057,474)" d="m0 0h7l5 3 4 5 2 6-1 4-5-4-7-3h-6l-5 3-3 8v10l3 7 2 3 6 1 10-5 4-3 2-12h1v9l-1 11-4 6-5 3-11 1-8-3-7-8-2-5-1-13 3-10 4-6 7-6z" fill="#FEFEFE" />
              <path transform="translate(970,473)" d="m0 0h15l21 1v5l-9 4h-3l-1 18-1 17-2 7h-6l-1-2-1-31-2-8-9-6z" fill="#FEFEFE" />
              <path transform="translate(1147,511)" d="m0 0 4 1 1 4v7l-3 3h-10l-1-4 6-9z" fill="#FEFEFE" />
              <path transform="translate(1369,507)" d="m0 0 1 2-2-1z" fill="#FEFEFE" />
            </svg>
          </a>
        </div>

        <div className="flex-1 flex items-center justify-end">
          <ul className="flex gap-4 items-center">
            <li className="hidden md:block"><a>HELP</a></li>
            <li className="hidden md:block"><a>ACCOUNT</a></li>
            <li><a><CiSearch /></a></li>
            <li><a><PiHandbagSimple /></a></li>
          </ul>
        </div>
      </div>
      <MenPopover />
      <Drawer openLeft={openLeft} openDrawerLeft={openDrawerLeft} />
    </div>
  )
}

export default NavBar