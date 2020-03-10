window.onload = function(params) {
  new WOW().init()

  const progress = document.querySelector('.progress')

  $(window).scroll(function(e) {
    if ($(this).scrollTop() != 0) $('#toTop').fadeIn()
    else $('#toTop').fadeOut()
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let per = (windowScroll / windowHeight) * 100
    console.log(windowScroll, windowHeight, per)
    progress.style.width = per + '%'
  })

  $('#toTop').click(function() {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      800,
    )
  })
}
