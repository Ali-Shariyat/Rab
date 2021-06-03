function body() {
    $("html,body").css({overflow: "hidden", width: $(window).width()})
}

(window), function (t) {
    t.fn.equalHeights = function () {
        var e = 0, i = t(this);
        return i.each(function () {
            var i = t(this).innerHeight();
            i > e && (e = i)
        }), i.css("height", e)
    }, t("[data-equal]").each(function () {
        var e = t(this), i = e.data("equal");
        e.find(i).equalHeights()
    })
}(jQuery), $(window).scroll(function () {
    var t = $(window).scrollTop();
    t >= $(".headerLargeBottom").offset().top ? $(".headerLargeBottom > div").addClass("FixMenuLarge") : $(".headerLargeBottom > div").removeClass("FixMenuLarge")
}), $(".TendenciesTop").click(function () {
    $(".MenuTendencies").stop().fadeToggle()
}), $(".MenuTendencies,.TendenciesTop").click(function (t) {
    $(".BoxSendNews").stop().fadeOut(), t.stopPropagation()
}), $(window).click(function () {
    $(".MenuTendencies").stop().fadeOut(), $(".BoxSendNews").stop().fadeOut()
}), $(".HeaderSendNews").click(function () {
    $(".BoxSendNews").stop().fadeToggle()
}), $(".BoxSendNews,.HeaderSendNews").click(function (t) {
    $(".MenuTendencies").stop().fadeOut(), t.stopPropagation()
}), window.responsive = function () {

    if ($(".LeftSidebarSingle")[0]) {
        $('.LeftSidebarSingle').theiaStickySidebar({
            'containerSelector': '.row',
            'additionalMarginTop': 60,
            'additionalMarginBottom': 10,
        })
    }
    $(".Downs-header").height($(".Downs-header > div").height()), $(window).width() < 992 ? $(".main-img").after($(".main-text").append()) : $(".main-img").before($(".main-text").append()), $(window).width() >= 992 ? ($(".TranscriptHeightFix").css("height", ""), $(".TranscriptHeightFix").equalHeights()) : $(".TranscriptHeightFix").css("height", ""), $(".WeeklyContentHeightFix ,.tabs-weekly > li").css("height", ""), $(".WeeklyContentHeightFix").equalHeights(), $(window).width() <= 922 ? $(".tabs-weekly > li").equalHeights() : $(".tabs-weekly > li").css("height", "")
}, $(window).on("ready load resize orientationchange", function () {
    responsive()
});

var owl = $(".owl-carousel.Slider");
owl.owlCarousel({items: 1, rtl: !0}), $(".NextHeadLine").click(function () {
    owl.trigger("prev.owl")
}), $(".PrevHeadLine").click(function () {
    owl.trigger("next.owl")
}), owl.on("mousewheel", ".owl-stage", function (t) {
    t.deltaY > 0 ? owl.trigger("next.owl") : owl.trigger("prev.owl"), t.preventDefault()
}), $(".MenuItems li > div i").click(function () {
    var t = $(this);
    t.parent("div").siblings("ul").stop().slideToggle(), t.parents("li").siblings("li").children("ul").slideUp(), t.parents("li").siblings("li").children("div").children("i").removeClass("OpenCloseMenuS"), t.toggleClass("OpenCloseMenuS")
}), $(".BlackPage,.ButtonCloseMenuS i").click(function () {
    $(".MenuItems").css("right", ""), $(".BlackPage,.SearchBox").fadeOut(), $("html,body").css({
        overflow: "",
        width: ""
    })
}), $(".searchLarge").click(function () {
    $(".BlackPage,.SearchBox").fadeIn(), body()
}), $(".IconMenuSmall").click(function () {
    $(".MenuItems").css("right", "0"), $(".BlackPage").fadeIn(), body()
}), $(".IconSearchSmall").click(function () {
    $(".BlackPage,.SearchBox").fadeIn(), body()
}), $(".tabs-weekly > li").click(function () {
    var t = $(this).index();
    $(this).addClass("ActiveTabs").siblings().removeClass("ActiveTabs"), $(this).parent().siblings(".down-tab").children("li").eq(t).addClass("active").siblings().removeClass("active"), $(".WeeklyContentHeightFix ,.tabs-weekly > li").css("height", ""), $(".WeeklyContentHeightFix").equalHeights()
}), $(".down-tab > li > .day-tab > li").click(function () {
    var t = $(this).index();
    $(this).addClass("ActiveTabs").siblings().removeClass("ActiveTabs"), $(this).parent().siblings(".content-tab").children("li").eq(t).addClass("active").siblings().removeClass("active"), $(".WeeklyContentHeightFix ,.tabs-weekly > li").css("height", ""), $(".WeeklyContentHeightFix").equalHeights()
}), $(".cancel").click(function (t) {
    t.preventDefault(), $(".BoxSendNews").fadeOut()
});


function GridCol() {
    $(".ContentArchive ul li").attr("class", "col l3 m3 s12");
    $(".ContentArchive ul li .ImgArchive").attr("class", "ImgArchive col l12 m12 s12");
    $(".ContentArchive ul li .TextArchive").attr("class", "TextArchive col l12 m12 s12");
    $(".ContentArchive ul").css("opacity", "1");
}

function ListCol() {
    $(".ContentArchive ul li").attr("class", "col l6 m12 s12");
    $(".ContentArchive ul li .ImgArchive").attr("class", "ImgArchive col l6 m4 s12");
    $(".ContentArchive ul li .TextArchive").attr("class", "TextArchive col l6 m8 s12");
    $(".ContentArchive ul").css("opacity", "1");
}

function List() {
    $(".ContentArchive ul").css("opacity", "0");
    setTimeout(function () {
        ListCol();
    }, 800)
}

function Grid() {
    $(".ContentArchive ul").css("opacity", "0");
    setTimeout(function () {
        GridCol();
    }, 800);
}

var ListVar = 1;
var GridVar = 1;
$(".Arrangements a .List").click(function () {
    GridVar = 1;
    if ($(".Arrangements a .List").hasClass("Active")) {
        ListCol();
    }
    if (ListVar == 1) {
        List();
        $(this).addClass("Active").parent().siblings().children("i").removeClass("Active");
        ListVar = 2;
    }
});
$(".Arrangements a .Grid").click(function () {
    ListVar = 1;
    if ($(".Arrangements a .Grid").hasClass("Active")) {
        GridCol()
    }
    if (GridVar == 1) {
        Grid();
        $(this).addClass("Active").parent().siblings().children("i").removeClass("Active");
        GridVar = 2;
    }
});

if ($(".Arrangements a .List").hasClass("Active")) {
    location.hash = "#List";
    ListCol();
}
if ($(".Arrangements a .Grid").hasClass("Active")) {
    location.hash = "#Grid";
    GridCol();
}
if (location.hash == "#Grid") {
    console.log("Grid");
    GridCol();
    $(".Arrangements a .Grid").addClass("Active").parent().siblings().children("i").removeClass("Active");
}
if (location.hash == "#List") {
    console.log("List");
    $(".Arrangements a .List").addClass("Active").parent().siblings().children("i").removeClass("Active");
    ListCol()
}

$(".NotFound .row").height($(window).height()-$("footer").height()-$("header").height());
if ($(".NotFound .row").outerHeight()<$(".TextNotFound").height()){
    $(".NotFound .row").css({
        "height":""
    })
}