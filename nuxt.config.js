export default {
  target: 'static',
  
  // loading: '~/components/LoadingBar.vue',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'e-Commerce & Reservation platform for Travel Agencies | Travel Key Gateway',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TKG Platform empowers travel agencies and travel agents with the best Travel eCommerce & Reservation Platform, White Label and Universal APIs tailored to the travel industry.' },
      { hid: 'keywords', name: 'keywords', content: 'Best travel e-commerce platform, Travel White Label, Travel Universal APIs, Travel portal development, travel technology solutions, travel agency portal, travel agency software, travel agency, tour operator, travel distributors, white label platform, white label solutions, white label integration , Travel Key Gateway, TKG Platform, travel management platform' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet" , href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700"},
      { rel: "stylesheet" , href: "https://fonts.googleapis.com/css?family=Dosis:400,500,700,800,600,300,200"},
      { rel: "stylesheet" , href: "https://fonts.googleapis.com/css?family=Caveat+Brush&display=swap"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css',
    '@/assets/lib/font-awesome/css/font-awesome.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
  ],
  // purgeCSS: {
  //     whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  // },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
