//360px 未満  viewport固定
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

//aboutセクション .about__autoScroll

const swiper = new Swiper(".p-swiper__about", {
  loop: true, // ループ有効
  speed: 3000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  spaceBetween: 10,
  autoplay: {
    delay: 0, // 途切れなくループ
  },
  slidesPerView: "auto", // 一度に表示する枚数
  loopedSlides: 10,

  breakpoints: {
    //画面幅による表示枚数と余白の指定
    
    900: {
      spaceBetween: 20,
    },
  },

});


// prizesセクション　modal
$(function () {
  $(".js-modal-open").each(function () {
    $(this).on("click", function () {
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).fadeIn();

 // 背景を固定してスクロールさせない
 $('html, body').css('overflow', 'hidden');
 // 背景を固定してスクロールさせない

      return false;
    });
  });

  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();

    // 背景の固定を解除する
  $('html, body').removeAttr('style');
  // 背景の固定を解除する
    return false;
  });
});



//spotsセクション　swiper
const mySwiper = new Swiper(".p-swiper__spots", {
  //名前を変える
  loop: true, //最後→最初に戻るループ再生を有効に

  effect: "slide", //切り替えのmotion (※1)
  centeredSlides: false, //中央寄せ

  navigation: {
    prevEl: ".swiper-button-prev", //戻るボタンのclass
    nextEl: ".swiper-button-next", //進むボタンのclass
  },
  allowTouchMove: true, // スワイプで表示の切り替えを無効に
  slidesPerView: 1.53, // 一度に表示する枚数
  breakpoints: {
    //画面幅による表示枚数と余白の指定
    1: {
      slidesPerView: 1.53,
      spaceBetween: 10,
      centeredSlides: true, //中央寄せ
    },
    375: {
      slidesPerView: 1.53,
      spaceBetween: 16,
      centeredSlides: true, //中央寄せ
    },
    600: {
      slidesPerView: 2.11,
      spaceBetween: 16,
      centeredSlides: true, //中央寄せ
    },
    900: {
      slidesPerView: 2.2173,
      spaceBetween: 32,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3.22,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
});


//アコーディオンをクリックした時の動作
$(".qa-box__heading").on("click", function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).nextAll(".qa-box__body"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass("close"); //クラス名closeを付与
  }
});
//=====================================
//checkbox メールマガジン
//=====================================

$(function () {
  $('[name="mail-magazine"]').on("click", function () {
    if ($(this).prop("checked")) {
      // 一旦全てをクリアして再チェックする
      $('[name="mail-magazine"]').prop("checked", false);
      $(this).prop("checked", true);
    }
  });
});

//=====================================
//フォーム エラー requiredText
//=====================================
$(document).ready(function () {
  // Submitボタンがクリックされたときの処理
  $("#submitButton").click(function () {
    // text,textarea
    $("[id$=requiredText]").each(function () {
      var labelFor = $(this).attr("id");
      if ($(this).val() === "") {
        $(this).addClass("error");
        $("label[for='" + labelFor + "']").addClass("error-label");
      } else {
        // 入力がある場合はエラークラスを削除
        $(this).removeClass("error");
        $("label[for='" + labelFor + "']").removeClass("error-label");
      }
    });

    // セレクトボックス
    var selectBox = document.getElementById("yourSelect");
    // 選択されているオプションのインデックスを取得
    var selectedIndex = selectBox.selectedIndex;

    if (selectedIndex === 0) {
      $("#yourSelect").addClass("error-select");
      var labelFor = $("#yourSelect").attr("id");
      $("label[for='" + labelFor + "']").addClass("error-label");
    } else {
      // 選択がある場合はエラークラスを削除
      $("#yourSelect").removeClass("error-select");
      var labelFor = $("#yourSelect").attr("id");
      $("label[for='" + labelFor + "']").removeClass("error-label");
    }

    // チェックボックスが未チェックの場合
    if (!$("#checkbox").is(":checked")) {
      // チェックボックス周りのスタイルを変更
      $(".form-checkbox__input").addClass("error-checkbox");
    } else {
      // 選択がある場合はエラークラスを削除
      $(".form-checkbox__input").removeClass("error-checkbox");
    }
  });
});

//=====================================
//未入力エラー
//=====================================
$("[id$=requiredText]").change(function () {
  // 選択されているオプションのインデックスを取得
  var requiredText = $(this).val();
  var labelFor = $(this).attr("id");
  if (requiredText === "") {
    $(this).addClass("error");
    $("label[for='" + labelFor + "']").addClass("error-label");
  } else {
    // 入力がある場合はエラークラスを削除
    $(this).removeClass("error");
    $("label[for='" + labelFor + "']").removeClass("error-label");
  }
});

$("#yourSelect").change(function () {
  // 選択されているオプションのインデックスを取得
  var selectedIndex = this.selectedIndex;

  if (selectedIndex === 0) {
    $(this).addClass("error-select");
    var labelFor = $(this).attr("id");
    $("label[for='" + labelFor + "']").addClass("error-label");
  } else {
    // 選択がある場合はエラークラスを削除
    $(this).removeClass("error-select");
    var labelFor = $(this).attr("id");
    $("label[for='" + labelFor + "']").removeClass("error-label");
  }
});

// チェックボックスが変更されたときの処理
$("#checkbox").change(function () {
  // チェックが入った場合はエラークラスを削除
  if ($(this).is(":checked")) {
    $(".form-checkbox__input").removeClass("error-checkbox");
  } else {
    // チェックが外れた場合はエラークラスを追加
    $(".form-checkbox__input").addClass("error-checkbox");
  }
});

//=====================================
//フォーム 送信
//=====================================


const form = jQuery("#js-form");
const inputElements = form.find(".js-form-input");

form.on("submit", function (e) {
  e.preventDefault();

  inputElements.removeClass("is-error");
  const isValid = form[0].checkValidity();
  if (isValid) {
    alert("送信完了");
    form[0].reset();
  }
});

inputElements.on("invalid", function () {
  jQuery(this).addClass("is-error");
});

inputElements.on("input", function () {
  if (this.checkValidity()) {
    jQuery(this).removeClass("is-error");
  }
});



//=====================================
// トップに戻るボタン
//=====================================
jQuery(window).on("scroll", function($) {
   // ウィンドウの幅が900px以上の場合にのみ処理を実行
   if (window.innerWidth >= 900) {
	if (jQuery(this).scrollTop() > 190) {
		jQuery('.js-toTop').addClass('is-show');
	} else {
		jQuery('.js-toTop').removeClass('is-show');
	}
}
});

jQuery('.js-toTop').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});


//=====================================
// ハンバーガーメニュー
//=====================================

$(".js-openbtn1").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".js-openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//=====================================
// ページ内リンクのスムーススクロール
//=====================================

$(function () {
  var headerHight = $("#js-header").height();
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});