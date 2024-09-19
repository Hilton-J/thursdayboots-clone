import { AiFillFacebook } from "react-icons/ai";
import Button from "./Button"
import { IoLogoInstagram, IoLogoPinterest } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#f8f8f8]">


      <footer className="">
        <div className="mx-auto w-full max-w-screen-xl">

          <div className="flex justify-between flex-wrap flex-col md:flex-row divide-y divide-slate-200 text-[14px] ">

            {/* ======================= SHOP ================================= */}
            <div className="px-5 py-6 ">
              <h2 className="mb-4 text-gray-900 ">
                Shop
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Men&apos;s Boots
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Women&apos;s Boots
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Men&apos;s Sneakers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Women&apos;s Sneakers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Men&apos;s Shoes
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Women&apos;s Shoes
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Men&apos;s Jackets
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Women&apos;s Jackets
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Accessories
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            {/* ======================= ABOUT ================================= */}
            <div className="px-5 py-6">
              <h2 className="mb-4 text-gray-900">
                About
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Featured Press
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Reviews
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Locations
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Ambassadors
                  </a>
                </li>
              </ul>
            </div>

            {/* ======================= SUPPORT ================================= */}
            <div className="px-5 py-6">
              <h2 className="mb-4  text-gray-900">
                Support
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Shoe Care
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Accessibility Statement
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* ======================= SIGN UP ================================= */}
            <div className="px-5 py-6 flex flex-col md:w-full">
              <h2 className="mb-7 font-medium  text-center">
                Sign Up For Early Access & Exclusive Events
              </h2>
              <form className="space-x-3 flex justify-center">
                <input
                  type="email"
                  className="border-2 border-black py-2 text-sm px-4 w-[75%] md:w-[40%]"
                  defaultValue=""
                  required=""
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                />
                <Button text={"JOIN"} style={'font-robo bg-[#2374ab] hover:bg-[#d8d8d8] text-white py-[10px] px-3 text-sm w-[100px] block md:hidden'} />
                <Button text={"JOIN TEAM THURSDAY"} style={'font-robo bg-[#2374ab] hover:bg-[#d8d8d8] text-white py-[10px] px-4 w-[250px] text-sm md:block hidden'} />
              </form>
              <div className='text-2xl text-neutral-600 flex justify-center space-x-5 mt-6'>
                <a className="hover:text-neutral-400"><IoLogoInstagram /></a>
                <a className="hover:text-neutral-400"><AiFillFacebook /></a>
                <a className="hover:text-neutral-400"><RiTwitterXLine /></a>
                <a className="hover:text-neutral-400"><IoLogoPinterest /></a>
                <a className="hover:text-neutral-400"><BsYoutube /></a>
              </div>
              <a className="text-center mt-10 hover:text-[#2374ab] cursor-pointer underline">View In Accessibility Mode</a>
            </div>

            <div className="px-5 py-6 md:hidden">
              <ul className=" text-gray-500 flex justify-center gap-6 text-xs ">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Statement
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </footer>

    </div>
  )
}

export default Footer