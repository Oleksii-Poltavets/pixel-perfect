$(document).ready(function () {

  $('.carousel-inner').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 225,
    moveSlides: 1,
    slideMargin: 50,
    pager: false
  });

  $('.carousel-reviews__inner').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    slideWidth: 424,
    moveSlides: 1,
    slideMargin: 60,
    pager: false
  });

  //scroll to top


  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });

  //modal

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation').fadeOut('slow');
  });

});

//window with questions

jQuery('.questions .questions__question').click(function () {
  jQuery('.questions .questions__question').removeClass('questions__question_active');
  jQuery(this).addClass('questions__question_active');
});

jQuery('.questions .questions__question_1').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Увы, из-за повального нашествия "гуру инфобизнеса" многие понятия и термины в реальном мире часто путают с вымыслом.</p><p class="questions__unswer"><b>Управление Маркетингом - это построение бизнес-процессов</b>, Promotion(продвижение) - часть маркетинга, а реклама - часть продвижения.</p><p class="questions__unswer">Мы вместе с собственниками/инвесторами <b>выстраиваем бизнес-процессы</b> - конечно же, <b>включая вопросы</b> позиционирования, продвижения - и рекламы.</p><p class="questions__unswer"><b>Если по-порядку - то это:</b> маркетинг-аудит, согласование концепции развития,утверждение стратегии, бюджетирование и активные действия.Однако, все может отличаться - в зависимости от особенностей и задач Вашего бизнеса.</p>');
});
jQuery('.questions .questions__question_2').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Здесь будет ваш ответ...2</p>');
});
jQuery('.questions .questions__question_3').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Здесь будет ваш ответ...3</p>');
});
jQuery('.questions .questions__question_4').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Здесь будет ваш ответ...4</p>');
});
jQuery('.questions .questions__question_5').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Здесь будет ваш ответ...5</p>');
});
jQuery('.questions .questions__question_6').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Здесь будет ваш ответ...6</p>');
});
jQuery('.questions .questions__question_7').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Здесь будет ваш ответ...7</p>');
});
jQuery('.questions .questions__question_8').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Здесь будет ваш ответ...8</p>');
});
jQuery('.questions .questions__question_9').click(function () {
  jQuery('.questions .questions__right .questions__unswers').html('<p class="questions__unswer">Здесь будет ваш ответ...9</p>');
});