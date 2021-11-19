

const API_Madlib = 'https://corbinrose.com/games/madlib/madlib.php?script=dino';
var Madlib = {
    meta: {
        column: "col-lg-4 col-md-6"
    },
    state: {
      size: 500,
      dom: null,
      header: {
          items: [
            
          ]
      },
      currentData: "",
      height: 100,
    },
   
  
    init: function (node) {
        Madlib.state.dom = node;
        Madlib.renderHeader();
        Madlib.getData()
    },

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Madlib.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Corbo Madlib"; // localized
        var res = app.initHeaderItems(Madlib.state.header.items, title);
        $target.html(res);
    },

    getData: function () {

        $.ajax({
            url: API_Madlib,
            success: function (html) {
                var $rss = $(document.createElement("div"));
                $rss.html($(html).find(".actualContent").html());
  
                
                Madlib.state.currentData = $rss.html();
                Madlib.render();
            },
            error: function (e) {

            }
        })
    },

   render: function() {
          

     var node = $(Madlib.state.dom);
     let stringy = Madlib.state.currentData;
    $(node).html(stringy);

    let origAction = $(node).find("form").attr("action");
    let newAction = "https://corbinrose.com/games/madlib/" + origAction;
    $(node).find("form").attr("action", newAction);
    $(node).find("form").attr("target", "_blank")
    $(node).find("form").on("submit", function(e){
        //e.preventDefault();
        
        let action = newAction;
        console.log("ajax data", newAction);
    })
    }

}
