let API_Godtube = "https://www.godtube.com/";
var Godtube = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "Godtube",
    template: "carousel",
    url: API_Godtube,
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
        var $tarBody = $(Godtube.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Godtube"; // localized
        var res = app.initHeaderItems(Godtube.state.header.items, title);
        $target.html(res);
    },
    binding: function(){

    },
    init: function (node) {
        Godtube.state.dom = node;
        Godtube.renderHeader();
        Godtube.binding()
        Godtube.getData()
    },
    getData: function(){

        app.dataTemplates.curl({
            url: this.url, 
            fetch: ".leftcolumn .flex-container-mobile",
            title: this.title
        });  

        
        
    },
    render: function(){
        let alldata = [];
        var $node = $(Godtube.state.dom);
        
        if(typeof Godtube.state.currentData =="string"){
           
            let stringy = `
                <div class="Godtube_wrapper">${Godtube.state.currentData}
            `;

            
            stringy+=`</div>`;

            let $temp = $(document.createElement("div"));
            $temp.html(stringy);
            let firstLink = $temp.find(".categoryFeaturedVideo .videoContainer .videoImagePreview").attr("href");
            let firstTitle = $temp.find(".categoryFeaturedVideo .videoContainer .mustSee .hidden-xs").text();
            let firstCat = $temp.find(".categoryFeaturedVideo .videoContainer span").text();
            let firstImage = $temp.find(".categoryFeaturedVideo .videoContainer picture img").attr("src");
            let firstDescription = "";
            let firstData = {
                title: firstCat + "<br />" + firstTitle,
                description: firstDescription,
                image: firstImage,
                guid: firstLink
            }
            alldata.push(firstData);
            $temp.find(".geaturedHome").each(function(){
                let tempData = {
                    title:  $(this).find(".title").text() + "<br />" + $(this).find(".hoverTitle").text(),
                    description: "",
                    image: $(this).find(".imageContainer img").attr("src"),
                    guid: $(this).find(".hoverTitle a").attr("href")
                }
                alldata.push(tempData);

            });


            
        
            Godtube.state.currentData = alldata;
            Godtube.state.total = Godtube.state.currentData.length;
        }
       
        let newstringy = app.widgetLayouts.carousel(Godtube.state.currentData, {
            title: "Godtube",
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




