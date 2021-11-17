

var BibleTrivia = {
    meta: {
        column: "col-lg-4 col-md-12"
    },
    title: "BibleTrivia",
    url: 'https://www.theverseoftheday.info/en/daily-devotion',
    state: {
      dom: null,
      header: {
          items: [
           
          ]
      },
      
      currentData: []
    },
   
  
    init: function (node) {
        BibleTrivia.state.dom = node;
        BibleTrivia.renderHeader();
        BibleTrivia.getData()
    },

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(BibleTrivia.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "BibleTrivia"; // localized
        var res = app.initHeaderItems(BibleTrivia.state.header.items, title);
        //$target.html(res);
    },

    getData: function () {
        $.ajax({
            url: BibleTrivia.url,
            success: function(html){

                let temp  = document.createElement("div");
                temp.innerHTML = html;
                let content = temp.querySelector("main.container .col-md-8");
                content.querySelector(".blog-post-title").remove();
                content.querySelector("h3").remove();
                content.querySelectorAll("hr").forEach(function(hr){
                    hr.remove();
                });

                BibleTrivia.state.currentData = content;
                BibleTrivia.render();

            },

        })
         
        
    },

   render: function() {
        var node = $(BibleTrivia.state.dom);
        $(node).css("overflow", "auto")
        let stringy = BibleTrivia.state.currentData;
        $(node).html(stringy);
        return stringy;
   }

}
