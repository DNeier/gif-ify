chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === 'clicked_browser_action') {
      var images = jQuery('img');

      for(var i = 0, numberOfImages = images.length; i < numberOfImages; i++) {
        var $image = jQuery(images[i]);

        switchImageSource($image);
      }
    }
  }
);

var switchImageSource= function($image) {
  var altText = $image.attr('alt');

  jQuery.ajax({
    url: 'https://api.giphy.com/v1/gifs/random',
    data: {
      api_key: 'dc6zaTOxFJmzC',
      tag: altText
    },
    success: function(response){
      var gifUrl = response.data.fixed_height_downsampled_url.replace('http://', 'https://');

      $image.attr('src', gifUrl);
    }
  });
};
