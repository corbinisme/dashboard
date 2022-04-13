let API_Britannica = "https://www.britannica.com/on-this-day";
var Britannica = {
    meta: {
        column: "col-lg-8 col-md-12"
    },
    title: "Britannica",
    template: "carousel",
    url: API_Britannica,
    state: {
      size: 500,
      dom: null,
      start: 1,
      stop: 4,
      max: 3,
      header: {
          items: [
            
			
          ]
      },
      currentData:[],
    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Britannica.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Britannica: On this Day"; // localized
        var res = app.initHeaderItems(Britannica.state.header.items, title);
        $target.html(res);
    },
    binding: function(){

    },
    init: function (node) {
        Britannica.state.dom = node;
        Britannica.renderHeader();
        Britannica.binding()
        Britannica.getData()
    },
    getData: function(){

        app.dataTemplates.curl({
            url: this.url, 
            fetch: ".otd-content",
            title: this.title
        });  

        
        
    },
    render: function(){
        let alldata = [];
        var $node = $(Britannica.state.dom);
        
        if(typeof Britannica.state.currentData =="string"){
           
            let stringy = `
                <div class="Britannica_wrapper">${Britannica.state.currentData}
            `;

            
            stringy+=`</div>`;

            let $temp = $(document.createElement("div"));
            $temp.html(stringy);
            let firstLink = ""
            let firstTitle = $temp.find(".featured-event-card .date-label").text();
            let firstCat = "";
            let firstImage = $temp.find(".featured-event-card img").attr("src");
            let firstDescription = $temp.find(".featured-event-card .card-body .description").html();
            let firstData = {
                title: firstTitle,
                description: firstDescription,
                image: firstImage,
                guid: firstLink
            }
            alldata.push(firstData);
            $temp.find(".md-history-event").each(function(){
                let tempData = {
                    title:  $(this).find(".date-label").text(),
                    description: $(this).find(".card-body").html(),
                    image: $(this).find("img").attr("src"),
                    guid: ""
                }
                alldata.push(tempData);

            });


            
        
            Britannica.state.currentData = alldata;
            Britannica.state.total = Britannica.state.currentData.length;
        }
       
        let newstringy = app.widgetLayouts.carousel(Britannica.state.currentData, {
            title: "Britannica",
            show: 3, 
            fields: ["title", "description", "link"]
        });
        $node.html(newstringy);

        
        $node.find("a").each(function(){
            $(this).attr("target", "_blank");
        })
        app.initSwipers();
        return newstringy;
       
    }
}




