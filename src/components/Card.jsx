

const Card = () => {

  const data = [
    {
      id: 1,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/400x300-Men-Captain-Arizona-240806_8f7b511b-5b7b-4502-adb0-93a922e9fb81_192x160.jpg?v=1723063219',
      title: 'Rugged & Resilient',
      desc: 'Thoughtfully Handcrafted To Go The Extra Mile'
    },
    {
      id: 2,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/400x300-Men-CasaMoto-AmberWheat-240227_6d092e0b-0b8b-4080-8320-9bd5c373be1e_192x160.jpg?v=1712181846',
      title: 'New Arrivals',
      desc: 'Explore Our Latest & Greatest Additions'
    },
    {
      id: 3,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/400x300-Men-RacerJacket-BlackMatte-221108_8687a2d7-be4f-4684-9dee-04afac4ab594_192x160.jpg?v=1699486919',
      title: "Men's Jackets",
      desc: 'Thoughtfully Designed For Your Everyday'
    },
  ]

  return (
    <div>
      <div className="flex p-3 gap-2">
        {data.map((item) => (
          <div key={item.id} className="w-45 flex flex-col">
            <img src={item.imageUrl} alt={item.title} className="size-full" />
            <h4>{item.title}</h4>
            <h4>{item.desc}</h4>
          </div>))}
      </div>
    </div>
  )
};

export default Card