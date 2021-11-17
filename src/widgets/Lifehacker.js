
var Lifehacker = {
    meta: {
        column: "col-lg-8 col-md-8"
    },
    title: "Lifehacker",
    template: "carousel",
    url: "https://lifehacker.com/rss",
   
    state: {
      size: 500,
      mbx: null,
      hits: null,
      start: 1,
      stop: 3,
      max: 2,
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
        Lifehacker.state.dom = node;

        Lifehacker.getData()
    },

  
    getData: function () {
        
        $.ajax({
            url: "proxyRSS.php",
            type: "POST",
            data: {url: Lifehacker.url},
            success: function(html){
                
                let $div = $(document.createElement("div"));
                $div.html(html);

                $div.find(".post").each(function(){
 
                    let temp = {
                        title: $(this).find(".post-title").text(),
                        guid: $(this).find(".post-link").attr("href"),
                        description: $(this).find(".post-content").text(),
                        image: $(this).find(".post-content img").attr("src")
                    }
                    Lifehacker.state.currentData.push(temp);
                });
                //var node = $(Lifehacker.state.dom);
                //$(node).html(html);
                //console.log("lifehacker",html);
                Lifehacker.render();
            },
            error: function(e){
                console.log(e)
            }
        })
        
    },

   render: function() {
        var node = $(Lifehacker.state.dom);
    
        let stringy = app.widgetLayouts.carousel(Lifehacker.state.currentData, {
            title: "Lifehacker",
            show: 2, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
   }

}
