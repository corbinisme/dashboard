let API_ChloeCorner = "https://chlloe.com/category/chlloes-corner/feed/";
var ChloeCorner = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "ChloeCorner",
    template: "carousel",
    url: API_ChloeCorner,
    state: {
      size: 500,
      dom: null,
      header: {
          items: [
            
			
          ]
      },
      start: 1,
      stop: 2,
      max: 1,
      currentData:[],
      
      height: 300,
    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(ChloeCorner.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Chloe's Corner"; // localized
        var res = app.initHeaderItems(ChloeCorner.state.header.items, title);
        $target.html(res);
    },
    binding: function(){

    },
    init: function (node) {
        ChloeCorner.state.dom = node;
        ChloeCorner.renderHeader();
        ChloeCorner.binding()
        ChloeCorner.getData()
    },
    getData: function(){

        
        
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: "ChloeCorner"
        });    
            
        

        /*
        $.ajax({
            url: API_ChloeCorner,
            success: function(xml){

            $(xml).find("item").each(function(){
                //console.log($(this))
                let temp = {
                    title: $(this).find("title").text(),
                    guid: $(this).find("guid").text(),
                    description: $(this).find("description").html(),
                    image: "",
                    content: ""
                }
                $(this).children().each(function(){
                   if(this.localName.indexOf("content")>-1){
                       temp.content = $(this).html()
                       let $temp = $(document.createElement("div"));
                       $temp.html($(this).html());
                       temp.image = $temp.find("img").attr("src");
                   }
                    

                });
                ChloeCorner.state.currentData.push(temp)
            })
            
                ChloeCorner.render();

            }
        })
        */

    },
    removeCdata: function(string){
        string = string.replaceAll("<![CDATA[", "").replaceAll("]]>", "");
        string = string.replaceAll("<!--","").replaceAll("-->", "");
        string = string.replaceAll("[CDATA[","").replaceAll("]]>", "")
        return string;

    },
    render: function(){
        var node = $(ChloeCorner.state.dom);

        let stringy = app.widgetLayouts.carousel(ChloeCorner.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;

        /*


        let stringy = `
            <div class="rowSlider"><div class="row">
        `;
        ChloeCorner.state.currentData.forEach(function(item){
            stringy+=`<div class="rowItem col-sm-12" style="background-image:url('${item.image}')">
            <h4>${ChloeCorner.removeCdata(item.title)}</h4>
            <div class="contentInner">
                
                
                <p>
                ${ChloeCorner.removeCdata(item.content)}
                </p>
            </div>
            </div>`

        });

        stringy+=`</div></div>`;
        $node.html(stringy);

        // expand the horiz videos
        $(".widget_ChloeCorner .rowItem video").each(function(){
            let h = $(this).height();
            let w = $(this).width();

            if(w>=h){
                $(this).closest(".rowItem").addClass("wideVideo")
            }
        })

        */
    }
}




