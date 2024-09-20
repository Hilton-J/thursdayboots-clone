

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
    {
      id: 4,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/400x300-Men-Belts_400x300.jpg?v=1613639603',
      title: "Leather Belts",
      desc: 'The Perfect Finishing Touch.'
    },
    {
      id: 5,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/400x300-ShoeCare_224x160.jpg?v=1614296603',
      title: "So Fresh & So Clean",
      desc: 'Premium Shoe Care for Your Favorite Pair of Boots'
    },
  ]

  return (
    <div className="w-full">
      <div className="flex p-3 gap-8">
        {data.map((item) => (
          <div key={item.id} className="w-44 flex flex-col gap-1">
            <img src={item.imageUrl} alt={item.title} className="size-full object-fill" />
            <h6 className="text-gray-900 mt-3">{item.title}</h6>
            <p>{item.desc}</p>
          </div>))}
      </div>
    </div>
  )
};

export default Card