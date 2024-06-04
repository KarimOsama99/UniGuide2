$(document).ready(function () {
            $(".showFIlter").click(function () {
                $("body").toggleClass("showFilter");
              });
            $(".closeFilter , .close-bg").click(function () {
              $("body").removeClass("showFilter menuToggled");
            }),
              $(document).on("click", ".delete-filter", function (e) {
                var t = $(this).parent(".the-filter").attr("theval"),
                  n = $(this).parent(".the-filter").attr("thefiltername");
                (ve = !0),
                  $("input[name*='" + n + "'][value*='" + t + "']")
                    .parent(".theInput")
                    .click();
              });

              $(".info-content2 .remos").hide();
});