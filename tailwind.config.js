/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg1P': "url('https://thursdayboots.com/cdn/shop/files/768x1024-Men-Captain-Tobacco-240806_e72b2562-b494-4d61-b728-9d2e2f6ef5e3_768x1024.jpg?v=1723063714')",
        'hero-bg1L2': "url('https://thursdayboots.com/cdn/shop/files/2800x1600-Men-Captain-Arizona-240904_e9d89819-dcd5-4d51-b0b2-8b55d1812b37_1376x800.jpg?v=1725486139')",
        'hero-bg1L': "url('https://thursdayboots.com/cdn/shop/files/2800x1600-Men-Captain-Tobacco-240806_4a068c2f-ac29-4fcb-a9d4-7bde1006400c_2464x1408.jpg?v=1723063712')",


        'hero-bg2L': "url('https://thursdayboots.com/cdn/shop/files/2800x1600-Women-Eden-Black-240820_84143f9e-9dd7-4034-bf7d-cbd77006ba53_1920x1088.jpg?v=1724274205')",
        'hero-bg2L2': "url('https://thursdayboots.com/cdn/shop/files/2800x1600-Women-BucketBag-BlackGold-240918_49655f7c-c75e-497a-9daf-2d12b04e2326_1376x800.jpg?v=1726701415')",
        'hero-bg2P': "url('https://thursdayboots.com/cdn/shop/files/768x1024-Women-Eden-Black-240820_9836c7cf-3371-433f-a047-906005e4e2de_672x896.jpg?v=1724274207')",

        'hero-bg3L': "url('https://thursdayboots.com/cdn/shop/files/2800x1600-Men-Encore-White-240820_2c657bfe-35e3-4830-b42c-5d7130383e28_1920x1088.jpg?v=1724274223')",
        'hero-bg3P': "url('https://thursdayboots.com/cdn/shop/files/768x1024-Men-Encore-White-240820_97ffdd87-5c05-4c9d-97e9-5637ee83c612_672x896.jpg?v=1724274228')",

        'womenBoots': "url('https://thursdayboots.com/cdn/shop/files/1400x1000-Women-Legend-BlackMatte-240827_3dfc2b98-1352-4844-89e6-1b551a9497b9_608x448.jpg?v=1724881316')",

        'menBoots': "url('https://thursdayboots.com/cdn/shop/files/1400x100-Men-Captain-Arizona-240806_509a576e-2a96-4e78-b651-485e866c6721_1400x1000.jpg?v=1723062859')",

        'menShoes': "url('https://thursdayboots.com/cdn/shop/files/1024x1024-Men-Lincoln-RichMahogany-240820_d88d1cd7-4439-4b57-85b2-8f254505506b_224x224.jpg?v=1724274256')",

        'menJacket': "url('https://thursdayboots.com/cdn/shop/files/1024x1024-Men-Keanu-Black-240813_4c05bece-1422-467b-a3f3-620a6a959764_224x224.jpg?v=1723667774')",

        'menSneakers': "url('https://thursdayboots.com/cdn/shop/files/1024x1024-Men-LowTop-White-240827_74a5af94-2687-4f92-aea3-2a39817cdf31_224x224.jpg?v=1724881346')",

        'womenSneakers': "url('https://thursdayboots.com/cdn/shop/files/1024x1024-Womens-Encore-White-081624-1_8124ddb1-6035-4292-9290-e40f242e316f_224x224.jpg?v=1724274278')",

        'womenShoes': "url('https://thursdayboots.com/cdn/shop/files/1024x1024-Women-PennyPlatform-Black-240813_435b3f76-bdeb-4b65-bd17-9c5c5c042a6b_224x224.jpg?v=1723667848')",
      },
      fontFamily: {
        body: ['Montserrat'],
        play: ['Playfair Display'],
        review: ['PT Serif'],
        robo: ['Roboto']
      },
    },
  },
  plugins: [
    'flowbite/plugin'
  ],
}