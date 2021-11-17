


const API_CSSTricks = 'https://css-tricks.com/feed/';
var CSSTricks = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "CSSTricks",
    template: "carousel",
    url: API_CSSTricks,
    state: {
      size: 500,
      dom: null,
      start: 1,
      stop: 4,
      max: 3,
      header: {
          items: [
             {
                 type: "a",
                 text: "<i class='fa fa-link'></i>",
                 classNames: "rss_prev btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:;"
             }
			
          ]
      },

    },
   
  
    init: function (node) {
        CSSTricks.state.dom = node;
        CSSTricks.renderHeader();
        CSSTricks.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "CSSTricks");
    },
    rssFetch: function (dir) {
        
        CSSTricks.render();

    },
    audio: function(){
      var aud = $(".widget_CSSTricks .card-header a").attr("data-audio");
      window.open(aud)
    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(CSSTricks.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "CSS Tricks"; // localized
        var res = app.initHeaderItems(CSSTricks.state.header.items, title);
        $target.html(res);
    },

    getData: function () {
      app.dataTemplates.rss({
        url: this.url, 
        fields: "all",
        title: this.title
      });    
        

    },
    populateList: function (data) {

    },
   render: function() {

      var node = $(CSSTricks.state.dom);

      let stringy = app.widgetLayouts.carousel(CSSTricks.state.currentData, {
          title: this.title,
          show: 4, 
          fields: ["title", "description", "link"]
      })

      $(node).html(stringy);
      var t = window.setInterval(function(){
        
          if($(CSSTricks.state.dom).find(".item").length){
            clearInterval(t);
            app.getPreviews(CSSTricks.title);
            
            $(CSSTricks.state.dom).find(".item").each(function(idx,item){
              
              let img = item.querySelector(".rss_image");
              let origSrc = img.getAttribute("src");
              let a = item.querySelector(".rss_heading a");
              let href = a.getAttribute("href");

              
              if(origSrc=="undefined" || origSrc == null || origSrc == ""){
                $.ajax({
                  url: href,
                  success: function(html){
  
                     
                      let meta = html.substring(html.indexOf('<meta property="og:image'), html.length);
                      meta = meta.substring(0, meta.indexOf("/>")+2);
                    
                      let temp = document.createElement("div");
                      temp.innerHTML = meta;
                      let src = temp.querySelector("meta").getAttribute("content");
                      img.setAttribute("src", src);
                  },
                  error: function(e){
                      console.log(e);
                  }
              })
              }
            });
          } else {
            ///
          }
      },200)
      
      return stringy;

    }

}
