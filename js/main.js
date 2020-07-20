$(window).load(function(){

  mainMenu()

  visualEffect()

  mouseEffect()

  goTop()

  sideMenu()

  aboutEffect()

  productSlide()

  instaMore()

  footerMenu()


  //수정할것들
  // product 빠르게 넘길때 원 안사라짐
})

function mainMenu(){
  var $mainMenu=$("#mainmenu_list").children().children("a")
  var $bg=$("<div class='sub_bg'></div>")
  var $bgBody=$("<div class='body_bg'></div>")

  var marginArray=[42,24,35,42,42]
  var num

  $mainMenu.on("mouseenter focus",showSub)
  $("#mainmenu").on("mouseleave",hideSub)

  function showSub(){
    num=$mainMenu.index($(this))

    $(".submenu_list").hide()
    $(".submenu_list").css({"margin-left":-50,"opacity":0})
    $("#mainmenu_list").children().children("a").css({"font-weight":"initial"})

    $bg.prependTo($("#header_wrap"))
    $bgBody.appendTo("body")
    $(this).next().show()
    $(this).css({"font-weight":"bold"})
    $(this).next().animate({"margin-left":marginArray[num],"opacity":1},800,"easeOutCubic")
  }

  function hideSub(){
    $bg.remove()
    $bgBody.remove()
    $(".submenu_list").hide()
    $("#mainmenu_list").children().children("a").css({"font-weight":"initial"})
  }
}

function goTop(){
  $("#side_nav").find("li").eq(3).on("click",function(){
    $("body,html").stop()
    $("body,html").animate({"scroll-top":0},700,"easeOutCubic")
  })
  $("h1").on("click",function(){
    $("body,html").stop()
    $("body,html").animate({"scroll-top":0},700,"easeOutCubic")
  })
}

function sideMenu(){
  var $sideMenu=$("#side_nav")
  var top=300

  $sideMenu.css({"top":$(window).innerHeight()})

  $(window).on("scroll",windowScroll)

  function windowScroll(){
    var scrollHeight=$(document).scrollTop()

    if(scrollHeight>$(window).innerHeight()){
      $sideMenu.stop()
      $sideMenu.animate({"top":scrollHeight+top},600,"easeOutCubic")
    }

  }
}

function visualEffect(){
  reset()
  $(window).on("resize",reset)

  function reset(){
    $("#visual_wrap").css({"height":$(window).innerHeight()})
  }
}

function mouseEffect(){
  setInterval(function(){
    $("#mouse").children().animate({"top":30,"opacity":0.3},900,"easeInSine",function(){
      $(this).css({"top":12,"opacity":1})
    })
  },1000)
  $("#mouse").on("click",function(){
    $("body,html").stop()
    $("body,html").animate({"scroll-top":$(window).innerHeight()},700,"easeOutCubic")
  })
}

function aboutEffect(){
  var scrollHeight

  $(window).on("scroll",windowScroll)

  function windowScroll(){
    scrollHeight=$(document).scrollTop()

    if(scrollHeight>$("#about01_wrap").offset().top-$(window).innerHeight()/2){
      $("#about01").children().eq(1).stop()
      $("#about01").children().eq(1).animate({"top":150,"opacity":1},600,"easeOutSine")
      $("#about01").children().eq(2).stop()
      $("#about01").children().eq(2).animate({"top":410,"opacity":1},600,"easeOutSine")
    }
    if(scrollHeight>$("#about02_wrap").offset().top-$(window).innerHeight()/3){
      $("#about02").children().eq(1).stop()
      $("#about02").children().eq(1).animate({"top":440,"opacity":1},600,"easeOutSine")
      $("#about02").children().eq(2).stop()
      $("#about02").children().eq(2).animate({"top":670,"opacity":1},600,"easeOutSine")
    }
    if(scrollHeight>$("#product_wrap").offset().top-$(window).innerHeight()/2){
      $("#product_wrap").animate({"top":0,"opacity":1},600,"easeOutSine")
    }
    
  }

}

function productSlide(){

  $("#product>p").on("mouseover",function(){
    $(this).stop()
    $(this).animate({"opacity":1},300,"easeOutCubic")
  })
  $("#product>p").on("mouseout",function(){
    $(this).stop()
    $(this).animate({"opacity":0.5},300,"easeOutCubic")
  })

  $("#product_next").on("click",clickNext)
  $("#product_prev").on("click",clickPrev)

  var $list=$("#product_list")
  var $li=$list.children()
  var imgWidth=$li.outerWidth()
  var imgNum=$li.size()
  var currentX

  for(var i=0; i<imgNum; i++){
    $("#product_list").children().eq(i).children().eq(1).css({"background":"url('/innisfree/images/product"+(i+1)+".png')no-repeat"})
  }

  $list.css({"width":imgWidth*imgNum})
  $li.last().prependTo($list)
  $list.css({"left":-imgWidth})

  effect(2)

  function effect(num){
    $list.children().eq(num).css({"opacity":1})
    $list.children().eq(num).children(".product_name").css({"color":"black"})
    $list.children().eq(num).children(".product_bg:not(:animated)").addClass("bg_scale")
    $list.children().eq(num).children(".product_text:not(:animated)").animate({"opacity":1,"top":540},600,"easeOutCubic")
  }

  function clickNext(){
    init()

    currentX=$list.position().left
    $("#product_list:not(:animated)").animate({"left":currentX-imgWidth},600,"easeOutCubic",function(){
      $(this).children().first().appendTo($list)
      $list.css({"left":-imgWidth})
    })

    effect(3)
  }

  function clickPrev(){
    init()

    currentX=$list.position().left
    $("#product_list:not(:animated)").animate({"left":currentX+imgWidth},600,"easeOutCubic",function(){
      $(this).children().last().prependTo($list)
      $list.css({"left":-imgWidth})
    })

    effect(1)
  }

  function init(){
    $li.css({"opacity":0.5})
    $(".product_name").css({"color":"#8d6528"})
    $(".product_bg").removeClass("bg_scale")
    $(".product_text").css({"opacity":0,"top":570})
  }

  
}


function instaMore(){
  var $more

  $("#insta_list").find("p").on("mouseenter",showMore)
  $("#insta_list").find("p").on("mouseleave",hideMore)

  function showMore(){
    $more=$("<div class='insta_selected'><i class='fab fa-instagram'></i></div>")
    $more.appendTo($(this))
  }
  function hideMore(){
    $more.remove()
  }

  //insta mediascreen

  $("#insta_list").children().css({"height":$("#insta_list").children().innerWidth()})
}


function footerMenu(){
  var mainMenuArray=["주문 조회","CONTACT US","TERMS & CONDITIONS"," GUIDE","PRIVACY","POLICY"]
  var $mainMenuList=$("#footer_nav")
  var $menuLi

    for(var i=0; i<mainMenuArray.length; i++){
      $menuLi=$("<li><a href='#'>"+mainMenuArray[i]+"</a></li>")
      $menuLi.appendTo($mainMenuList)
    }
}