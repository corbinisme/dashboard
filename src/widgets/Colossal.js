const API_Colossal = 'https://www.thisiscolossal.com/feed/';
var Colossal = {
    meta: {
        column: "col-lg-6 col-md-12"
    },
    title: "Colossal",
    template: "carousel",
    url: API_Colossal,
    state: {
      size: 500,
      dom: null,
      start: 1,
      stop: 3,
      max: 2,
      header: {
          items: [
             {
                 type: "a",
                 text: "Site",
                 classNames: " btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:window.open('https://www.thisiscolossal.com');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        Colossal.state.dom = node;
        Colossal.renderHeader();
        Colossal.binding()
        Colossal.getData()
    },
    binding: function(){
        

    },
    removeCdata: function(string){

    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Colossal.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Colossal Creative"; // localized
        var res = app.initHeaderItems(Colossal.state.header.items, title);
        $target.html(res);
    },

    getData: function () {

        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });   

        /*
        $(Colossal.state.dom).html("<i class='fa fa-spinner fa-spin'></i>");
        $.ajax({
            url: API_Colossal,
            success: function (xml) {


                $(xml).find("item").each(function(){
                    let itemObj = {}
                    itemObj["title"] = $(this).find("title").text();
                    itemObj["linkhref"] = $(this).find("link").html();
                    itemObj["description"] = $(this).find("description").text();

                    $(this).children().each(function(){
                       
                        let cont = $(this).html();
                        if(cont.indexOf(".jpg")>-1){
                            let $temp  =$(document.createElement("div"))
                            $temp.html(cont);
                            let imgSrc = $temp.find("img").attr("src");
                            itemObj["image"] = imgSrc;
                        }
                        if(this.localName=="guid"){
                            
                            itemObj["linkhref"] = $(this).text()
                        }
                    })
                    Colossal.state.currentData.push(itemObj);
                });

                Colossal.render()
            },
            error: function(e){
                console.log("e")

            }
        });
        */

    },
   
   render: function() {

        var node = $(Colossal.state.dom);


        
        let stringy = app.widgetLayouts.carousel(Colossal.state.currentData, {
            title: this.title,
            show: 2, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
        /*

        let stringy = `<ul>`
        Colossal.state.currentData.forEach(function(el){
            stringy += `<li style="background-image:url('${el.image}')"><div class="contentColossal"><a href="${el.linkhref}" target="_blank"><strong>${el.title}</strong></a>${el.description}</div></li>`
        });
        $node.html(stringy)
        */
      
    }

}
