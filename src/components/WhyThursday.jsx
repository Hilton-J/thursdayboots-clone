import Button from "./Button"


const WhyThursday = () => {
  return (
    <div className="bg-[#243a3e] text-white text-center mt-3">
      <div className="p-10">
        <h1 className="font-play text-4xl font-bold mb-8">Why &apos;Thursday&apos;?</h1>
        <div className=" max-w-[640px] m-auto text-lg leading-10">
          <p>On Thursday we work hard, but it&apos;s also the unofficial start of the weekend, and we design our products with that versatility in mind. Your life isn&apos;t one-dimensional. Your footwear shouldn&apos;t be either.</p>

        </div>
        <div className="mt-[18px] space-x-4">
          <Button style={'bg-white hover:bg-[#d8d8d8] text-black py-[14px] px-3 text-sm min-w-[175px]'} text={'SHOP MEN'} />
          <Button text={'SHOP WOMEN'} style={'bg-white hover:bg-[#d8d8d8] text-black py-[14px] px-3 text-sm min-w-[175px]'} />
        </div>
      </div>

    </div>

  )
}

export default WhyThursday