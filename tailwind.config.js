/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg1P': "url('https://thursdayboots.com/cdn/shop/files/768x1024-Men-Captain-Tobacco-240806_e72b2562-b494-4d61-b728-9d2e2f6ef5e3_768x1024.jpg?v=1723063714')",
        'hero-bg1L': "url('https://thursdayboots.com/cdn/shop/files/2800x1600-Men-Captain-Tobacco-240806_4a068c2f-ac29-4fcb-a9d4-7bde1006400c_2464x1408.jpg?v=1723063712')",

        'hero-bg2L': "url('https://thursdayboots.com/cdn/shop/files/2800x1600-Women-Eden-Black-240820_84143f9e-9dd7-4034-bf7d-cbd77006ba53_1920x1088.jpg?v=1724274205')",

        'hero-bg3L': "url('https://thursdayboots.com/cdn/shop/files/2800x1600-Men-Encore-White-240820_2c657bfe-35e3-4830-b42c-5d7130383e28_1920x1088.jpg?v=1724274223')",
      }
    },
  },
  plugins: [],
}