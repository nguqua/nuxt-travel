<template>
  <div>
    <section class="travel-tech">
      <div class="cover" style="background-image: url(https://www.tweetworldtravel.com.au/images/api-1.png);"></div>
      <div class="container py-3">
        <div class="row align-items-center flex-column-reverse flex-md-row" style="margin-top: 25px; margin-bottom: 25px;">
          <div class="col-md-5">
            <img src="https://www.tweetworldtravel.com.au/images/api-2.png" alt="White Label" class="img-fluid" />
          </div>
          <div class="col-md-7" style="text-align: justify;">
            <h5 class="font-weight-b600">OVERVIEW</h5>
            <p>
              Ultimately developed to strictly suit travel industry’s requirements, our Universal API platform offers API solutions to travel operators throughout the world with enhanced technology driven by smooth front end customer
              experiences. Facilitated by our effective tour/cruise booking engine with latest searching technology, customer will significantly save valuable time in searching and making bookings instantly.
            </p>
            <p>
              We provide API options for Asian tours, worldwide river cruises, or a combination of both with a vast variety of media feeds such as images, videos of ships, cabin, and decks which helps the customer perform buying decision
              more effectively. In addition, our bookable API solution allows the users to check live availability and pricing in real-time, with the ability to select multiple products in one shopping cart. The seamless connection between
              our system and your sales dashboard makes travel sales simple and straightfoward.
            </p>
            <p>
              As a universal solution, our API platform also comprises inbuilt Agent Booking Engine and Cruise Search module which facilitate the product enquiry not only from end customer but for the travel operator agents in a blink.
            </p>
          </div>
        </div>
      </div>
    </section>
    <WwDeliver />
    <section class="pt-3 pb-3">
      <div class="container">
        <div class="row align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-5">
            <img src="https://www.tweetworldtravel.com.au/images/customer-support.png" alt="white label services" class="img-fluid" style="width: 90%; height: auto;" />
          </div>
          <div class="col-md-7" style="text-align: justify;">
            <h5 class="font-weight-b600">Why Tweet World Travel</h5>
            <li>
              A Universal API solution offering multiple customization options to suit your business requirement.
            </li>
            <li>
              Automated online feeding pipelines for latest product information of cruises and tours
            </li>
            <li>
              Various tools, widgets and banners available for your website integration.
            </li>
            <li>Centralised API key and login credential management.</li>
            <li>
              Our platform’s enhanced technology is driven by smooth front end customer experiences, and facilitated by our effective tour/cruise booking engine with latest search technology
            </li>
            <li>
              Our platform's back-end features a powerful but simple dashboard, with massive of exclusive media and contents and documentations connecting directly CRM, and supportive management consoles to your business at every
              touchpoint.
            </li>
            <li>
              24/7, hands-on support for reservation and technical enquiries, as our in-house support team ensures all partners can leverage the program to its full potential.
            </li>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-3 pb-3" style="background: #eff1f3;">
      <div class="container">
        <div class="row align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-7" style="text-align: justify;">
            <h5 class="font-weight-b600">
              Benefits of Using Our Universal APIs
            </h5>
            <li>
              You will be connected to a wide range of live feeding for travel products, especially for tours and cruises.
            </li>
            <li>
              Direct access to a comprehensive bundle of solutions enabling end-to-end processes of travel businesses (from product planning to operational and accounting activities).
            </li>
            <li>
              Direct access to instant online booking for tour and cruise products
            </li>
            <li>
              Through one simple programming interface you can intergate other product’s API into our platform
            </li>
            <li>
              Gain a significant online presence, boost customer’s satisfaction, keep track of your business at every touchpoint
            </li>
            <li>
              Increase independent sales through online platform with live availability
            </li>
            <li>
              Direct access to built-in Search Engine Optimisation meta with unique contents and features.
            </li>
            <li>
              Enjoy 24/7, hands-on support for reservation and technical enquiries, as our in-house support team ensures all partners can leverage the program to its full potential
            </li>
          </div>
          <div class="col-md-5">
            <img src="https://www.tweetworldtravel.com.au/images/api-4.png" alt="White Label - how it works" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section class="pt-3 pb-3">
      <div class="container">
        <div class="row align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-5">
            <img src="https://www.tweetworldtravel.com.au/images/api-5.png" alt="white label features" class="img-fluid" />
          </div>
          <div class="col-md-7" style="text-align: justify;">
            <h5 class="font-weight-b600">Our Universal APIs Feature</h5>
            <li>
              Available in latest technology which is easily parsed and integrated to any platforms either XML or JSON format supported
            </li>
            <li>
              High secured with simple authentication and authorisation credential management.
            </li>
            <li>
              User-friendly interface and broad inventory of tour and cruise product to suit most travel packaging and itinerary building.
            </li>
            <li>
              Highly customised and scalable to suit business’ needs with minimal development efforts.
            </li>
            <li>
              Highly compatible with most eCommerce and White Label solutions where simple content data structure needed.
            </li>
            <li>
              Highly customised travel portal specialised for travel businesses who want to connect with multiple inventory vendors including tours and cruises.
            </li>
            <li>
              Provide to travel businesses and their clients highly accurate and flexible data as they can choose the API of choice for the integrations which suit them best.
            </li>
          </div>
        </div>
      </div>
    </section>
    <section>
        <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <ul>
      <li v-for="mountain of mountains" :key="mountain.id">{{ mountain.title }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
    </section>
  </div>
</template>


<script>

export default {
  data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    },
  transition: 'slide-bottom',
  head: {
    title:
      "Universal APIs for Travel Agency & Tour Operator | Travel Key Gateway",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Our Universal APIs platform offers comprehensive and customisable API solutions to travel agency and travel operator, powered by the latest searching technology",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Universal API, travel key gateway, TKG Platform, tour API, cruise API, travel API, ",
      },
    ],
  },
};
</script>

<style>
</style>