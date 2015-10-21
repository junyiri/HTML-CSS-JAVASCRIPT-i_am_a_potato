var sourceSwap = function() {
  var $this = $(this);
  var newSource = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', newSource);
};

$(function() {
  $('img.pic').hover(sourceSwap, sourceSwap);
});

$('.lief').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('initialText', $this.text());
        $this.text("Kill Aldrich Killian");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialText'));
    }
   
);