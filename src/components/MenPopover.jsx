import Card from "./Card"


const MenPopover = () => {
  return (
    <div className="border-2 border-blue-600 w-full grid grid-cols-2 bg-white z-50 p-5 text-[0.8rem] h-80">
      <div className="grid grid-cols-6">

        <div className=" col-span-2 row-span-2">
          <ul className="space-y-2">
            <li>Boots</li>
            <li>All Styles</li>
            <li>Lace-Up</li>
            <li>Chelsea</li>
            <li>Chukka</li>
            <li>Western</li>
            <li>Rugged & Resilient</li>
            <li>Bold Leathers</li>
            <li>New Arrivals</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div className="col-span-2">
          <ul className="space-y-2">
            <li>Sneakers</li>
            <li>All Styles</li>
            <li>Low Top</li>
            <li>High Top</li>
          </ul>
        </div>

        <div className="col-start-3 col-span-2">
          <ul className="space-y-2">
            <li>Shoes</li>
            <li>All Styles</li>
            <li>Dress Shoes</li>
            <li>Casual Shoes</li>
            <li>Loafers & Boat Shoes</li>
          </ul>
        </div>

        <div className="col-start-5 row-start-1 col-span-2">
          <ul className="space-y-2">
            <li>Jackets</li>
            <li>All Styles</li>
          </ul>
          <ul className="space-y-2">
            <li>Shirts & Apparel</li>
            <li>All Styles</li>
          </ul>
          <ul className="space-y-2">
            <li>Bags</li>
            <li>All Styles</li>
          </ul>
        </div>

        <div className="">
          <ul className="space-y-2">
            <li>Accessaries</li>
            <li>Shoe Care & Laces</li>
            <li>Socks</li>
            <li>Belts & Wallets</li>
          </ul>
        </div>
      </div>
      <Card />
    </div>
  )
}

export default MenPopover
