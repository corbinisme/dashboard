

var WordOfDay = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "WordOfDay",
    url: 'https://wordsmith.org/awad/rss1.xml',
    state: {
      size: 500,
      mbx: null,
      hits: null,
      start: 1,
      stop: 4,
      max: 3,
      total: 50,
      dom: null,
      header: {
          items: [
           
          ]
      },
      rss: {
        title: "",
        len: 0,
        items: []
      },
      height: 100,
      currentData: []
    },
   
  
    init: function (node) {
        WordOfDay.state.dom = node;
        WordOfDay.renderHeader();
        WordOfDay.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "WordOfDay");
    },

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(WordOfDay.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "WordOfDay"; // localized
        var res = app.initHeaderItems(WordOfDay.state.header.items, title);
        //$target.html(res);
    },

    getData: function () {
        
        $.ajax({
            url: WordOfDay.url,
            success: function(xml){
                let temp = {};


                $node = $(xml).find("item");
                var title = $node.find("title").text();
               
                var date = $node.find("pubDate");
                var def = $node.find("description").text();
                var $wrapper = $(document.createElement("div"));
                $wrapper.addClass("wotd_wrapper feedburnerFeedBlock");
                var $title = $(document.createElement("h1"));
                var $subtitle = $(document.createElement("h4"));
                $subtitle.addClass("feedTitle");
                $subtitle.html("Dictionary.com Word of the Day");
                //var word = title.substring(0, title.indexOf(":"));
                $title.html(title);
                
                var $description = $(document.createElement("p"));
                $description.html(def);

                
                $wrapper.append($subtitle, $title, $description);
                WordOfDay.state.currentData = $wrapper.html();
                WordOfDay.render();
               
            }
        }) 
        
    },

   render: function() {
        var node = $(WordOfDay.state.dom);
    
        let stringy = WordOfDay.state.currentData;

        $(node).html(stringy);
        return stringy;
   }

}
