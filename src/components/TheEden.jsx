import Button from "./Button"

const TheEden = () => {
  return (
    <div className="bg-hero-bg2P md:bg-hero-bg2L bg-no-repeat bg-cover bg-center h-screen flex flex-col ">

      <div className="flex-1 flex text-white justify-end mr-10 ">
        <div className="text-center w-full h-full md:w-[400px] space-y-9 flex flex-col md:justify-center  ">
          <h1 className="font-play text-5xl font-bold mt-6">The Eden</h1>
          <h2>A Sophisticated Slip-On Loafer,<br />Now Availble In 5 Colors</h2>
          <div className=' flex-1 flex md:flex-none md:items-start items-end justify-center pb-32'>
            <Button text={'SHOP NOW'} style={'bg-white hover:bg-[#d8d8d8] text-black py-[14px] px-3 text-sm min-w-[175px]'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheEden