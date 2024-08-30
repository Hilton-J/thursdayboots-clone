import Button from "./Button"

const Hero = () => {
  return (
    <div className="bg-hero-bg1P md:bg-hero-bg1L bg-no-repeat bg-cover bg-center h-screen flex flex-col">

      <div className="flex-1 flex text-white  ">
        <div className="text-center w-full h-full md:w-[400px] space-y-9 flex flex-col mt-8 md:justify-center  md:ml-10">
          <h1 className="font-play text-5xl font-bold">Highest Quality. <br /> Honest Prices.</h1>
          <h2>Handcrafted With Integrity</h2>
          <div className=' flex-1 flex  space-x-2 md:flex-none md:items-start items-end justify-center pb-32'>
            <Button text={'SHOP MEN'} style={'bg-white hover:bg-[#d8d8d8] text-black py-[14px] px-3 text-sm min-w-[175px]'} />
            <Button text={'SHOP WOMEN'} style={'bg-white hover:bg-[#d8d8d8] text-black py-[14px] px-3 text-sm min-w-[175px]'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero