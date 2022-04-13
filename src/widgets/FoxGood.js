let API_FoxGood = "https://www.foxnews.com/category/good-news";
var FoxGood = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "FoxGood",
    template: "carousel",
    url: API_FoxGood,
    state: {
      size: 500,
      dom: null,
      start: 1,
      stop: 5,
      max: 5,
      header: {
          items: [
            
			
          ]
      },
      currentData:[],
    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(FoxGood.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "FoxGood"; // localized
        var res = app.initHeaderItems(FoxGood.state.header.items, title);
        $target.html(res);
    },
    binding: function(){

    },
    init: function (node) {
        FoxGood.state.dom = node;
        FoxGood.renderHeader();
        FoxGood.binding()
        FoxGood.getData()
    },
    getData: function(){

        app.dataTemplates.curl({
            url: this.url, 
            fetch: ".collection-article-list .content",
            title: this.title
        });  

        
        
    },
    render: function(){
        let alldata = [];
        var $node = $(FoxGood.state.dom);
        
        if(typeof FoxGood.state.currentData =="string"){
           
            let stringy = `
                <div class="FoxGood_wrapper">${FoxGood.state.currentData}
            `;

            
            stringy+=`</div>`;

            let $temp = $(document.createElement("div"));
            $temp.html(stringy);
            
            $temp.find("article").each(function(){
                let tempData = {
                    title:  $(this).find(".info .title").text(),
                    description: $(this).find(".info .content p").html(),
                    image: $(this).find(".m img").attr("src"),
                    guid: $(this).find(".m a").attr("href")
                }
                alldata.push(tempData);

            });


            
        
            FoxGood.state.currentData = alldata;
            FoxGood.state.total = FoxGood.state.currentData.length;
        }
       
        let newstringy = app.widgetLayouts.carousel(FoxGood.state.currentData, {
            title: "FoxGood",
            show: 3, 
            fields: ["title", "description", "link"]
        });
        $node.html(newstringy);

        
        $node.find("a").each(function(){
            $(this).attr("target", "_blank");
        })

        return newstringy;
       
    }
}




