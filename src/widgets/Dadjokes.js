


const API_Dadjokes = 'https://www.dadjokes.org/joke-of-the-day';
var Dadjokes = {
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
                 text: "<i class='fa fa-external-link'></i>",
                 classNames: " btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:;"
             }
			
          ]
      },
      currentData: "",
      
      height: 300,
    },
   
  
    init: function (node) {
        Dadjokes.state.dom = node;
        Dadjokes.renderHeader();
        Dadjokes.binding()
        Dadjokes.getData()
    },
    binding: function(){
        $(document).on("click", ".widget_Dadjokes .btn-reveal-answer", function(){
            $(this).closest(".riddle-cont").find(".answer").toggle()

        })

    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Dadjokes.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Dad Joke of the Day"; // localized
        var res = app.initHeaderItems(Dadjokes.state.header.items, title);
        $target.html(res);
    },

    getData: function () {
        $(Dadjokes.state.dom).html("<i class='fa fa-spinner fa-spin'></i>");
        $.ajax({
            url: API_Dadjokes,
            success: function (html) {


                let htmlCopy = html.replaceAll("")
                let $content = $(html).find(".riddles-cards-cont").find("> .riddle-card");

                Dadjokes.state.currentData = $content.html();
                Dadjokes.render();
            },
            error: function(e){
                console.log("e")

            }
        });

    },
    populateList: function (data) {

    },
   render: function() {

        var $node = $(Dadjokes.state.dom);
        $node.html(Dadjokes.state.currentData)
      
    }

}
