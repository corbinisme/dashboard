const toggleSourceSunny = (val) => {
    console.log(val);
    let $group = $(SunnySkies.state.dom).closest(".portlet").find(".card-header").find(".btn-group");
    $group.find(".sourceBtn").removeClass("active");
    $group.find(".btn_" + val).addClass("active");
    SunnySkies.url = "https://www.sunnyskyz.com/" + val;
    SunnySkies.getData();
}
var SunnySkies = {
    meta: {
        column: "col-lg-6 col-md-12"
    },
    title: "SunnySkies",
    template: "carousel",
    url: "https://www.sunnyskyz.com/good-news",
   
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
                {
                    type: "a",
                    text: "<i class='fa fa-cog'></i>",
                    classNames: "btn toggleSources btn-default btn-sm btn-outline-secondary",
                    link: "javascript:;"
                },
              {
                  type: "a",
                  text: "Good News",
                  classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary active btn_good-news",
                  link: "javascript:toggleSourceSunny('good-news');"
              },
              {
                  type: "a",
                  text: "Fun/Amazing",
                  classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary  btn_articles",
                  link: "javascript:toggleSourceSunny('articles');"
              },
              {
                  type: "a",
                  text: "Videos",
                  classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary btn_happy-videos",
                  link: "javascript:toggleSourceSunny('happy-videos');"
              },
              
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
        SunnySkies.state.dom = node;

        SunnySkies.getData()
    },

  
    getData: function () {
        
        
        $.ajax({
            url: SunnySkies.url,
            success: function(html){
                
                SunnySkies.state.currentData = [];
                let tempdiv = document.createElement("div");
                tempdiv.innerHTML = html;
                let list = null;
                if(tempdiv.querySelectorAll("#leftcol .newslist")!=null){
                    list = tempdiv.querySelectorAll("#leftcol .newslist");
                } else {
                    list = tempdiv.querySelectorAll("#leftcol > a");
                }
                list.forEach(function(news){
                    let temp = [];
                    temp["title"] = news.querySelector(".titlenews").innerHTML;
                    temp["guid"] = news.getAttribute("href");
                    temp["description"] = news.querySelector(".intronews").innerHTML;
                    temp["image"] = news.querySelector("img").getAttribute("src");
                    SunnySkies.state.currentData.push(temp);
                });
                


                
                SunnySkies.render();
                app.initSwipers();
            }
        })
        
         
        
    },

   render: function() {
        var node = $(SunnySkies.state.dom);
    
        let stringy = app.widgetLayouts.carousel(SunnySkies.state.currentData, {
            title: "SunnySkies",
            show: 2, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        $(node).find(".rss_heading a").each(function(){
            $(this).attr("target", "_blank")
            let orig = $(this).attr("href");

            $(this).attr("href", "https://www.sunnyskyz.com/" + orig)
        })
        return stringy;

   }

}
