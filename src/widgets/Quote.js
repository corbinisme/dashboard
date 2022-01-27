var Quote = {
    meta: {
        column: "quote-box col-sm-12"
    },
    state: {
        source: "https://www.brainyquote.com/link/quotebr.rss",
        quote: [],
        dom: ".content-top .quote"
    },
    getData: function (filters) {
        //get ajax call
        $.ajax({
            url: Quote.state.source,
            success: function (xml) {

                var quoteArr = [];
                $(xml).find("item").each(function () {
                    
                    var title = $(this).find("title").text();
                    var cont = $(this).find("description").text();
                    temp = {
                        title: title,
                        content: cont
                    }
                    quoteArr.push(temp);
                });
                Quote.state.quote = quoteArr;
                Quote.render()
            },
            error: function () {

            }
        })
    },
    shellBuilder: function(){
        return "<div class='quote'></div>";
    },
    init: function (node) {
        console.log("quote here")
        Quote.state.dom = node;
        Quote.bindings();
        Quote.getData();
    },
    bindings: function () {

    },

    render: function () {

        var htmlTemplate = '<div>' + Quote.state.quote[0].content + ' - ' + Quote.state.quote[0].title + '</div>';
          
        $(Quote.state.dom).html(htmlTemplate)
        return htmlTemplate;

    }

}
