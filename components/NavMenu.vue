<template>
  <div>
    <header id="header" class="fixed-top">
      <div class="container">
        <div class="logo float-left">
          <NuxtLink to="/">
          <img
              src="~/assets/img/logo-tkg.png"
              class="img-fluid"
          /></NuxtLink>
        </div>
        <nav class="main-nav float-right d-none d-lg-block">
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel-ecommerce-platform">
                Travel E-commerce Platform
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/travel-tech-white-label">
                White Label
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/universal-api">
                Universal APIs
              </NuxtLink>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "NavMenu",
  mounted: function () {
    // Header scroll class
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
      } else {
        $("#header").removeClass("header-scrolled");
      }
    });
    if ($(window).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    }

    // Mobile Navigation
    if ($(".main-nav").length) {
      var $mobile_nav = $(".main-nav").clone().prop({
        class: "mobile-nav d-lg-none",
      });
      $("body").append($mobile_nav);
      $("body").prepend(
        '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>'
      );
      $("body").append('<div class="mobile-nav-overly"></div>');

      $(document).on("click", ".mobile-nav-toggle", function (e) {
        $("body").toggleClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
        $(".mobile-nav-overly").toggle();
      });

      $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass("active");
      });

      $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
            $(".mobile-nav-overly").fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  },
};
</script>

<style scoped>
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  height: 80px;
  transition: all 0.5s;
  z-index: 997;
  transition: all 0.5s;
  padding: 20px 0;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);
}

#header.header-scrolled,
#header.header-pages {
  height: 65px;
  padding: 10px 0;
}

#header .logo h1 {
  font-size: 36px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#header .logo h1 a,
#header .logo h1 a:hover {
  color: #00366f;
  text-decoration: none;
}

#header .logo img {
    padding: 0;
    margin: -4px 0;
    width: 250px;
    display: block;
    overflow: hidden;
    transition: all 0.6s;
}

#header.header-scrolled .logo img {
    width: 180px;
    transition: all 0.6s;
    margin: 7px 0;
}

.main-pages {
  margin-top: 60px;
}
/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/

.main-nav,
.main-nav * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-nav > ul > li {
  position: relative;
  white-space: nowrap;
  float: left;
}

.main-nav a {
  display: block;
  position: relative;
  color: #000;
  padding: 10px 15px;
  transition: 0.3s;
  font-size: 15px;
  /* font-family: "Montserrat", sans-serif; */
  font-weight: 500;
}

.main-nav a:hover,
.main-nav .active > a,
.main-nav li:hover > a {
  color: #007bff;
  text-decoration: none;
}

.main-nav .drop-down ul {
  display: block;
  position: absolute;
  left: 0;
  top: calc(100% + 30px);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: ease all 0.6s;
}

.main-nav .drop-down:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.main-nav .drop-down li {
  min-width: 180px;
  position: relative;
}

.main-nav .drop-down ul a {
  padding: 10px 20px;
  font-size: 14px;
  color: #004289;
}

.main-nav .drop-down ul a:hover,
.main-nav .drop-down ul .active > a,
.main-nav .drop-down ul li:hover > a {
  color: #007bff;
}

.main-nav .drop-down > a:after {
  content: "\f107";
  font-family: FontAwesome;
  padding-left: 10px;
}

.main-nav .drop-down .drop-down ul {
  top: 0;
  left: calc(100% - 30px);
}

.main-nav .drop-down .drop-down:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
}

.main-nav .drop-down .drop-down > a {
  padding-right: 35px;
}

.main-nav .drop-down .drop-down > a:after {
  content: "\f105";
  position: absolute;
  right: 15px;
}
</style>
