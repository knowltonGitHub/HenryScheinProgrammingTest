$( document ).ready(function() {
    // Handler for .ready() called.
    console.log("tom ready");
    $.ajax({
      url: 'test.html',
      type: 'post',
      data: {
          access_token: 'XXXXXXXXXXXXXXXXXXX'
      },
      headers: {
        "Access-Control-Allow-Headers" : 'x-requested-with'
      },
      dataType: 'json',
      success: function (data) {
          console.info(data);
      }
  });

  });