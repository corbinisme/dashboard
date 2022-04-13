let API_ChristianHeadlines = "https://www.christianheadlines.com/topics/positive-headlines/";
var ChristianHeadlines = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "ChristianHeadlines",
    template: "carousel",
    url: API_ChristianHeadlines,
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
        var $tarBody = $(ChristianHeadlines.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "ChristianHeadlines"; // localized
        var res = app.initHeaderItems(ChristianHeadlines.state.header.items, title);
        $target.html(res);
    },
    binding: function(){

    },
    init: function (node) {
        ChristianHeadlines.state.dom = node;
        ChristianHeadlines.renderHeader();
        ChristianHeadlines.binding()
        ChristianHeadlines.getData()
    },
    getData: function(){

        app.dataTemplates.curl({
            url: this.url, 
            fetch: ".contentWrapper>.row>.col-md-8",
            title: this.title
        });  

        
        
    },
    render: function(){
        let alldata = [];
        var $node = $(ChristianHeadlines.state.dom);
        
        if(typeof ChristianHeadlines.state.currentData =="string"){
           
            let stringy = `
                <div class="ChristianHeadlines_wrapper">${ChristianHeadlines.state.currentData}
            `;

            
            stringy+=`</div>`;

            let $temp = $(document.createElement("div"));
            $temp.html(stringy);
            
            $temp.find(".article-mini").each(function(){
                let desc = $(this).find(".article-content p").text();
                let img = $(this).find("picture img").attr("data-src")
                
                let tempData = {
                    title:  $(this).find("h2 a").text(),
                    description: "",
                    image: img,
                    guid: $(this).find("h2 a").attr("href")
                }
                alldata.push(tempData);

            });


            
        
            ChristianHeadlines.state.currentData = alldata;
            ChristianHeadlines.state.total = ChristianHeadlines.state.currentData.length;
        }
       
        let newstringy = app.widgetLayouts.carousel(ChristianHeadlines.state.currentData, {
            title: "ChristianHeadlines",
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




