import Card from "./Card"


const MenPopover = () => {
  return (
    <div className="hidden w-full bg-white z-50 p-5 text-[0.8rem] h-[26rem] text-gray-400">
      <div className="flex h-full mx-8 ">
        <div className="flex py-3">

          {/* ================================= Boots ============================= */}
          <div className="w-48">
            <ul className="space-y-3">
              <li><h2 className="text-black font-semibold"><a href="" target="_blank" className="hover:text-gray-800">Boots</a></h2></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">All Styles</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Lace-Up</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Chelsea</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Chukka</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Western</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Rugged & Resilient</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Bold Leathers</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">New Arrivals</a></li>
            </ul>
            <h2 className="text-black font-semibold mt-8"><a href="" target="_blank">Gift Cards</a></h2>
          </div>

          {/* ================================= Sneakers ============================= */}
          <div className="w-48">
            <ul className="space-y-3">
              <li><h2 className="text-black font-semibold"><a href="" target="_blank">Sneakers</a></h2></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">All Styles</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Low Top</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">High Top</a></li>
            </ul>
            <ul className="space-y-3 mt-7">
              <li><h2 className="text-black font-semibold"><a href="" target="_blank">Shoes</a></h2></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">All Styles</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Dress Shoes</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Casual Shoes</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Loafers & Boat Shoes</a></li>
            </ul>
          </div>

          {/* ================================= Jackets ============================= */}
          <div className="w-48">
            <ul className="space-y-3">
              <li><h2 className="text-black font-semibold"><a href="" target="_blank">Jackets</a></h2></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">All Styles</a></li>
            </ul>
            <ul className="space-y-3 mt-7">
              <li><h2 className="text-black font-semibold"><a href="" target="_blank">Shirts & Apparel</a></h2></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">All Styles</a></li>
            </ul>
            <ul className="space-y-3 mt-7">
              <li><h2 className="text-black font-semibold"><a href="" target="_blank">Bags</a></h2></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">All Styles</a></li>
            </ul>
            <ul className="space-y-3 mt-7">
              <li><h2 className="text-black font-semibold"><a href="" target="_blank">Accessories</a></h2></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Shoe Care & Laces</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Socks</a></li>
              <li><a href="" target="_blank" className="hover:text-gray-300">Belts & Wallets</a></li>
            </ul>
          </div>
        </div>
        <Card />
      </div>
    </div>
  )
}

export default MenPopover
