let API_NineGag = "https://9gagrss.com/feed/";
var NineGag = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    state: {
      size: 500,
      dom: null,
      header: {
          items: [
            {
                type: "a",
                text: "<i class='fa fa-chevron-left'></i>",
                classNames: "rss_prev btn btn-default btn-sm btn-outline-secondary",
                link: "javascript:NineGag.slide('prev')"
            },
           {
               type: "a",
               text: "<i class='fa fa-chevron-right'></i>",
               classNames: "rss_next btn btn-default btn-outline-secondary btn-sm",
               link: "javascript:NineGag.slide('next')"
           },
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(NineGag.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "NineGag FEEDS"; // localized
        var res = app.initHeaderItems(NineGag.state.header.items, title);
        $target.html(res);
    },
    binding: function(){

    },
    init: function (node) {
        NineGag.state.dom = node;
        NineGag.renderHeader();
        NineGag.binding()
        NineGag.getData()
    },
    slide: function(dir){
        let wid = $(NineGag.state.dom).closest(".card").width();
        let currentmargL = $(NineGag.state.dom).find(".rowSlider .slider").css("marginLeft");
        currentmargL = parseInt(currentmargL.replace("px",""));
        console.log(currentmargL)
        if(dir=="prev"){
            currentmargL += wid;
        } else {
            currentmargL -= wid;
        }
        $(NineGag.state.dom).find(".rowSlider .slider").css("marginLeft", currentmargL+ "px");
    },
    getData: function(){
        $.ajax({
            url: API_NineGag,
            success: function(xml){
                
            $(xml).find("item").each(function(){
                let temp = {
                    title: $(this).find("title").text(),
                    guid: $(this).find("guid").text(),
                    description: $(this).find("description").html()
                }
                NineGag.state.currentData.push(temp)
            })
            
                NineGag.render();

            }
        })

    },
    removeCdata: function(string){
        string = string.replaceAll("<![CDATA[", "").replaceAll("]]>", "");
        string = string.replaceAll("<!--","").replaceAll("-->", "");
        string = string.replaceAll("[CDATA[","").replaceAll("]]>", "")
        return string;

    },
    render: function(){
        var $node = $(NineGag.state.dom);
        let stringy = `
            <div class="rowSlider" data-transform="0"><div class="slider">
        `;
        NineGag.state.currentData.forEach(function(item){
            stringy+=`<div class="rowItem"><h4>${NineGag.removeCdata(item.title)}</h4>
            
            ${NineGag.removeCdata(item.description)}</div>`

        });

        stringy+=`</div></div>`;
        $node.html(stringy);

        let wid = $(NineGag.state.dom).closest(".card").width();
        let hei = $(NineGag.state.dom).closest(".card").height() -50;
        // expand the horiz videos
        $(".widget_NineGag .rowItem").each(function(){
            $(this).css("min-width", wid + "px");
        });
        
        $(".widget_NineGag .rowItem video").each(function(){
            let h = $(this).height();
            let w = $(this).width();
            //console.log(h, hei);
           
            $(this).height(hei);
            
        })
    }
}




