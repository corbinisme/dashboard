



function openLink(url) {
    console.log("url", url)
    
}
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const API_Epic = 'https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?locale=en-US&country=US&allowCountries=US';

var Epic = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "Epic",
    template: "carousel",
    url: API_Epic,
    state: {
      size: 500,
      mbx: null,
      hits: null,
      dom: null,
      start: 1,
      stop: 2,
      max: 1,
      header: {
          items: [
             {
                 type: "a",
                 text: "<i class='fa fa-external-link'></i>",
                 classNames: "btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:window.open('https://epicgames.com')"
             }
			
          ]
      },
      content: null,
      height: 100,
      currentData: []
    },
   
  
    init: function (node) {
        Epic.state.dom = node;
        Epic.renderHeader();
        Epic.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "Epic");
    },
    
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Epic.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Epic"; // localized
        var res = app.initHeaderItems(Epic.state.header.items, title);
        $target.html(res);
    },

    getData: function () {
        $.ajax({
            url: API_Epic,
            dataType: "json",
            success: function (json) {
                
                var $temp = $(document.createElement("div"));
                
                var stringy = "";
                var dat = json.data.Catalog.searchStore.elements;

                stringy = "";
                
                dat.forEach(function(el){
                    let isCurrent = false;

                    if(el.promotions!=null){
                        if(el.promotions.promotionalOffers && el.promotions.promotionalOffers.length){

                            var current = el.promotions.promotionalOffers.length;
                            var sale = "";
                            if(current){
                                sale = "Now"
                                isCurrent = true;
                                stringy += `<div class='item alert alert-success'>`;
                            } else {
                                $temp.addClass("hidden")
                            }
                            let temp = el;
                            temp.image = "";
                            el.keyImages.forEach(function(itemImage){
                                if(itemImage.type =="DieselStoreFrontWide");
                                temp.image = itemImage.url
                            });
                            temp.guid = "https://www.epicgames.com/store/en-US/p/" + el.urlSlug

                            Epic.state.currentData.push(temp);
                            
                        } else {
                            $temp.addClass("hidden")
                            stringy +=`<div class='item hidden'>`;
                            
                        }
                    } else {
                        $temp.addClass("hidden")
                        stringy +=`<div class='item hidden'>`;
                    }
                    
                    let d = new Date(el.effectiveDate);
                    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                    let formatted = `${da}-${mo}-${ye}`;

                    let isActive = el.status;
                    let activeMarker = ""
                    if(isCurrent=="ACTIVE"){
                        activeMarker = "active";
                    }
                    stringy += `<strong>${el.title}</strong><br />
                    <small>(${formatted})</small></div>`;
                })
                $temp.html(stringy);
                //$(node).html($temp.html());
                
                Epic.render();
                //return $temp.html();
            },
            error: function (e) {
                console.log("error", item, $rss, $ul);
                return "error";
            }
        })

    },
    populateList: function (data) {

    },
   render: function() {
    var node = $(Epic.state.dom);
        
    let stringy = app.widgetLayouts.carousel(Epic.state.currentData, {
        title: this.title,
        show: 3, 
        fields: ["title", "description", "link"]
    })

    $(node).html(stringy);
    return stringy;
    /*
          var node = $(Epic.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");
         
          // check if we need to reajax data
          if (Epic.state.content==null) {
              console.log("already have")
          } else {
              console.log("fetch")
          }
           */
          
      
      }

}
