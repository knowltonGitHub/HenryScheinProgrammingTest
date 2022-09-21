$( document ).ready(function() {
    // Handler for .ready() called.
    console.log("tom ready");
    $.ajax({
      url: 'https://clinquant-khapse-98c558.netlify.app/index.html',
      type: 'post',
      data: {
          access_token: 'XXXXXXXXXXXXXXXXXXX'
      },
      headers: {
        "Access-Control-Allow-Origin" : '*'
      },
      dataType: 'json',
      success: function (data) {
          console.info(data);
      }
  });

  });