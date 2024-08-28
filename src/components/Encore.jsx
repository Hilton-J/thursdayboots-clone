import Button from "./Button"


const Encore = () => {
  return (
    <div className="bg-hero-bg3P md:bg-hero-bg3L bg-no-repeat bg-cover bg-center h-screen flex flex-col">

      <div className="flex-1 flex text-white  ">
        <div className="text-center w-full h-full md:w-[400px] space-y-9 flex flex-col md:justify-center md:ml-10">
          <h1 className="font-play text-3xl md:text-5xl font-bold">Time For An. <br /> Encore.</h1>
          <h2>A Luxe leather Low Top,<br />Now Available In 4+ Colors</h2>
          <div className=' flex-1 flex  space-x-2 md:flex-none md:items-start items-end justify-center pb-32'>
            <Button text={'SHOP MEN'} />
            <Button text={'SHOP WOMEN'} /></div>
        </div>
      </div>
    </div>
  )
}

export default Encore