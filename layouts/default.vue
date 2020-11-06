<template>
  <div>
    <NavMenu />
    <Nuxt />
    <div style="height: 70px;"></div>
    <Footer />
    <a id="button-to-top">
      <div class="fix-size-icon-top">
        <i class="fa fa-chevron-up"></i>
      </div>
    </a>
  </div>
</template>

<script>
import $ from "jquery";

export default {
    mounted() {
    var btn = $("#button-to-top");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });
    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "3000");
    });
  },
}
</script>

<style>

#button-to-top {
  display: inline-block;
  background-color: #007bff;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  border-radius: 50%;
}

#button-to-top:hover {
  cursor: pointer;
  background-color: #333;
}
#button-to-top:active {
  background-color: #555;
}
#button-to-top.show {
  opacity: 1;
  visibility: visible;
}
.fix-size-icon-top {
line-height: 35px;
    font-size: 20px;
    color: #fff;
}

</style>
