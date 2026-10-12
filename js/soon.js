// Links marked data-soon show "coming soon" in place for a moment when pressed.
document.querySelectorAll('a[data-soon]').forEach(function (a) {
  var label = a.querySelector('span') || a;
  var original = label.textContent;
  var timer = null;
  a.addEventListener('click', function (e) {
    e.preventDefault();
    if (timer) return;
    label.textContent = 'coming soon';
    timer = setTimeout(function () {
      label.textContent = original;
      timer = null;
    }, 1800);
  });
});
