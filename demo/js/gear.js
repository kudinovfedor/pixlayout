$(function () {

  $(window).on('load', function () {
    $(".wrap").css("minHeight", $(window).height() + 1);
    var sect = $(".section");
    var i = 0;
    sect.eq(i).fadeIn(600);
    i++;
    setInterval(function () {
      sect.eq(i).fadeIn(400);
      i++;
    }, 400);
  });
  $(".parameters tr:odd").addClass("odd");
  $(".language").on('click', function () {
    var lang = $(this).data("lang");
    var a_lang = "en";
    if (lang === "en") {
      a_lang = "ru";
      $(".model").removeClass("ru");
    } else {
      $(".model").addClass("ru");
    }
    $(this).data("lang", a_lang).text(a_lang);
    $.ajax({
      url: 'js/lang_' + lang + '.json',
      dataType: "json",
      scriptCharset: "utf-8",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      beforeSend: function (xhr) {
        xhr.overrideMimeType("text/plain; charset=UTF-8");
      },
      success: function (data) {
        $.each(data, function (key, val) {
          $("#" + key).html(val);
        });
        $(".parameters tr:odd").addClass("odd");
      }
    });

  });

  $.pixlayout({clip: true, src: "img/logo.png", show: true, center: false, top: 23, left: 10, fixed: true});

});
