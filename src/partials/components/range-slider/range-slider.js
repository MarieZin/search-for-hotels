function updateInputs (data) {
  $('.range-slider__values').html(`${data.from}₽ - ${data.to}₽`)
}

$(".range-slider__slider").ionRangeSlider({
  type: "double",
  hide_min_max: true,
  hide_from_to: true,
  onStart: updateInputs,
  onChange: updateInputs,
});
