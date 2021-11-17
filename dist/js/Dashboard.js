/* //////////////////////////// */
/* this file is mainly prototyping
/* until we know how the data can be sent to this page
/*
/* //////////////////////////// */

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        //options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        options.url = 'proxy.php?url=' + options.url;
    }
});


var sources = [
        {name:"",url:"https://time.com/tag/photo-of-the-day/"},
        {name:"",url:"https://potd.pdnonline.com/"},

        {name:"engrish",url:"http://www.engrish.com/feed/"},
        {name:"",url:"https://www.theguardian.com/news/series/ten-best-photographs-of-the-day"},
        {name:"",url:"https://www.smithsonianmag.com/photocontest/photo-of-the-day/"},
        {name:"",url:"http://blog.cincinnatizoo.org/feed/"},
        {name:"SDzoo", url:"https://zoonooz.sandiegozoo.org/category/news/feed/"},
        {name:"",url:"https://www.brainyquote.com/link/quotebr.rss"},
        {name:"background",url:"https://apod.nasa.gov/apod/astropix.html"},
        {name:"",url:"https://www.morningbrew.com/daily/${daily}?email=corbinisnotyou@gmail.com"},
        {name:"CNN-5-things",url:"https%3A%2F%2Fus11.campaign-archive.com%2Fhome%2F%3Fu%3D47c9040f6ff957a59bd88396e%26id%3D6da287d761"},
        {name:"icr",url:"https://www.icr.org/articles/type/6"},
        {name:"icrnews", url: "https://www.icr.org/articles/search/?f_typeID=9"},
        {name:"NPRWorld",url:"https://www.npr.org/sections/world/"},
        {name:"wordoftheday", url: "https://wordsmith.org/awad/rss1.xml"},
        {url:"https://www.theverseoftheday.info/rss/Bible-trivia"},
        {url:"https://www.theverseoftheday.info/rss/the-verse-of-the-day"},
        {name: "boredpanda", url: "https://www.boredpanda.com/funny/feed/"},
        {url:"makeuseof", url:"https://feeds.feedburner.com/Makeuseof?format=xml&_=1585006736883"},
        {name:"corona",url:"https://www.cnn.com/world/live-news/coronavirus-pandemic--20-intl/index.html"},
        {url: "https://player.dailyaudiobible.com/dab/03242020"},
        {name:"MakeUSEOFnews", url: "https://www.makeuseof.com/category/news/feed"},
        {name:"MakeUSEOFproductivity", url: "https://www.makeuseof.com/feed/category/productivity/"},
        {name: "VerseOfDay", url: "https://www.biblegateway.com/votd/get/?format=atom"}
    ];

    /*
    https://www.buzzfeed.com/index.xml
https://www.buzzfeed.com/nifty.xml
https://www.buzzfeed.com/cute.xml

https://excellenttown.com/feed/
https://myhealthgazette.com/feed/
https://www.icr.org/aaf


https://abeautifulmess.com/feed/
https://happynews.com/feed/
https://www.dailygood.org/cat/everydayheroes/

https://www.huffpost.com/entry/15-uplifting-sites-focuse_b_1297094
https://www.huffpost.com/impact/topic/good-news
*/

var helpers = {
    bakeCookie: function (name, val) {
        var exdays = 7300;
        // 20 years
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        var cookieVal = name + "=" + val + ";" + expires + ";path=/";

        document.cookie = name + "=" + val + ";path=/;" + expires;
    },
    biteCookie: function (Key) {
        var decodedCookies = decodeURIComponent(document.cookie);
        var cookies = decodedCookies.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(Key + "=") == 0) {
                return c.substring((Key + "=").length, c.length);
            }
        }
        return "";
    },
    setLocalStorage: function (name, val) {
        var st = window.localStorage;
        st.setItem(name, val);
    },
    sanitizeRSSfield: function(string){
        string = string.replaceAll("<![CDATA[", "").replaceAll("]]>", "");
        string = string.replaceAll("<!--","").replaceAll("-->", "");
        string = string.replaceAll("[CDATA[","").replaceAll("]]>", "")
        return string;

    },
}

// the actual layout - needs to store this is a cooke/local storage
var layout = [
	{ name: "row0", contents: ["Good"] },
	{ name: "row1", contents: ["Happy", "Instagram", "Dadjokes"] },
	{ name: "row2", contents: [,"BibleVOD", "AM","Epic","Todo", "BoredPanda", "Colossal", "Godtube","ChloeCorner", "Zoo", "NineGag",  "CSSTricks", "Photo", "Sheets", ] }
];
var altWidgets = [
    { name: '.content-top', contents: ["Quote"] },
];

// things we ought to remember about the user choices
var state = {
    rssParams: {
        start: 0,
        length: 2,
    },
    theme: "light",
    layout: "alt",
}

var headerFilter = "<div class='btn-group widgetDateFilter'><span class='currentFilter'>Weekly</span><button class='filterToggle'><i class='fa fa-chevron-down'></i></button></div>"

var app = {
    createWidget: function (node, title) {

        var metaData = window[title].meta;
        var colClass = metaData.column;
        var header = (window[title].state.header ? true : false);

        var str = "<div class='column " + colClass + "'>";
        str += "<div class='portlet card widget_" + title + "' data-title='" + title + "'>";
        if (header) {
            str += "<div class='portlet-header card-header'>";
            str += "<div class='row'>";
            str += "<div class='col title'>" + title + "</div>";
            str += "<div class='col text-right actions'>";

                str += "<i class='fa fa-spinner fa-spin'></i>";
  
            str += "</div>";
            str += "</div>";
            str += "</div>";
        }
        str += "<div class='portlet-content card-body'><i class='fa fa-spinner fa-spin'</i></div>";
        str += "</div>"
        str += "</div>";

        $(node).append(str);
    },
    widgetTemplates: {
        rss: function(){},
        curl: function(){}
    },
    init: function () {

        window.setTimeout(function () {
            app.initSettings();
            app.initModals();
            app.initLayout();
            
            app.initBinding();
            window.setTimeout(function () {
                app.initDragging();
            }, 2000)
        }, 100)

    },
    initBinding: function () {
        $(document).on("click", ".chatHead .close, .chatToggle", function () {
            $(".chatWindow").toggle();
        });

        $(document).on("click", ".addWidgetsBtn", function () {
            $(".dashboardWidgets").toggleClass("shown");
        });

        $(document).on("click", ".portlet-toggle", function () {
            var icon = $(this);
            icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
            // send it back!
            var $card = $(this).closest(".card");
            var title = $card.attr("data-title");
            ;
            var temp = app.addTempWidget(title);
            $(".dashboardWidgets .widgetList").append(temp);
            app.draggableClassInit();
            // $('.column').sortable('destroy');
            // app.initDragging();
            app.dragRecieve($card)
            $card.remove()
            $(".column").trigger("sortupdate");
        });

        $(document).on("click", ".layoutToggle", function () {
            $(".app").toggleClass("altlayout");
            var layout = ($(".app").hasClass("altlayout") ? "altlayout" : "default");
            helpers.setLocalStorage("dashboardLayout", layout);
        });
        $(document).on("click", ".themeToggle", function () {
            $(".app").removeClass("dark light");
            console.log("theme", state.theme)
            var newTheme = (state.theme == "dark" ? "light" : "dark");
            state.theme = newTheme;
            $(".app").addClass(newTheme);
            var indicator = "Off";
            if (newTheme == "dark") {
                indicator = "On";
            }
            $("#darkModeIndicator").html(indicator)
            helpers.bakeCookie("dashboardTheme", newTheme);
        });

        $(document).on("click", ".bottomItem", function () {
            console.log("profile")
        });
        

        $(document).on("click", ".settingsToggle a", function () {
            console.log("settings")
            $(".appHeader .settings").toggleClass("hidden");
        });
        
    },
    initDragging: function () {
        $(".column").sortable({
            connectWith: ".column",
            handle: ".portlet-header",
            placeholder: "portlet-placeholder ui-corner-all ui-state-highlight",
            receive: function (event, ui) {
                app.dragRecieve(ui.item)
            }
        }).disableSelection();

        app.draggableClassInit();

       
    },
    draggableClassInit: function(){
        $(".portlet").each(function(){
            $(this).addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
	            .find(".portlet-header")
	            .addClass("ui-widget-header ui-corner-all");
            if($(this).find(".portlet-toggle").length){

            } else {
                $(this).find(".portlet-header").prepend("<button class='ui-icon ui-icon-minusthick portlet-toggle fa fa-times'></button>");
            }
        });    
    },
    dragRecieve: function(node){
        var $node = $(node);
        var $parent = $node.closest(".card");
        var id = $parent.data("title");
        var $widgetBody = $parent.find(".card-body");
        if ($parent.closest(".contain").hasClass("dashboardWidgets")) {
            // we should get rid of the contents!
            $widgetBody.empty();
            $parent.find(".portlet-header").find(".headerItems").empty();

        } else { 
            if ($parent.find(".card-body").children().size() < 1) {

                if (typeof window[id] != "undefined") {
                    var tempCall = window[id].init;
                    tempCall($widgetBody);
                }
            }
        }
        app.draggableClassInit();

    },
    addTempWidget: function(title){
        var string = `
            <div class="column toDrag ui-sortable">
            <div class="portlet card widget_Alerts ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" data-title="${title}">
                <div class="portlet-header card-header ui-widget-header ui-corner-all" data-id="${title}">
                    <button class="ui-icon ui-icon-minusthick portlet-toggle fa fa-times"></button>
                    ${title}
                </div>
                <div class="card-body portlet-content"></div>
            </div>
        </div>`;
        return string;
    },
    initHeaderItems: function (obj, title) {
        var str = "";
        
            str += '<div class="row"><div class="col"><span class="title">' + title + '</div>';
            str += '<div class="col headerItems text-right"><div class="btn-group">';
            obj.forEach(function (headerItem) {
                if (typeof headerItem == "string") {
                    str += headerItem
                } else {
                    var typey = headerItem.type;
                    var classy = headerItem.classNames;
                    var text = headerItem.text;
                    var linkVal = headerItem.link;
                    var targetVal = headerItem.target;

                    var $type = $(document.createElement(typey));
                    $type.addClass(classy);
                    $type.html(text);
                    if (typeof linkVal != 'undefined') {
                        $type.attr("href", linkVal);
                        if (typeof targetVal != 'undefined') {
                            $type.attr("target", targetVal);
                        }
                    }
                    var wrap = document.createElement("div");
                    $(wrap).append($type);
                    str += wrap.innerHTML;
                }
            });
            str += '</div></div></div>';
        
        return str;
    },
    initModals: function () {
        $('.modal').on('show.bs.modal', function (e) {
            $('.modal .modal-dialog').attr('class', 'modal-dialog  flipInX    animated');
        })
        /*
		$('.modal').on('shown.bs.modal', function (e) {
		     $('.modal .modal-dialog').attr('class', 'modal-dialog');
		})
		*/
        $('.modal').on('hide.bs.modal', function (e) {
            $('.modal .modal-dialog').attr('class', 'modal-dialog  flipOutX    animated');
        })

    },
    initSettings: function () {
        var defaultTheme = state.theme;
        var defaultLayout = state.layout;
        var st = window.localStorage;
        if (st.getItem("dashboardLayout")) {
            defaultLayout = st.getItem("dashboardLayout");
        } else {
            helpers.setLocalStorage("dashboardLayout", defaultLayout);
        }
        if (helpers.biteCookie("dashboardTheme")) {
            defaultTheme = helpers.biteCookie("dashboardTheme");
            
        } else {
            helpers.bakeCookie("dashboardTheme", defaultTheme);
        }
        state.theme = defaultTheme;
        var indicator = "Off";
        if (state.theme == "dark") {
            indicator = "On";
        }
        $("#darkModeIndicator").html(indicator)
        $(".app").addClass(defaultTheme);
        $(".app").addClass(defaultLayout);
    },
    initWidgets: function () {
        var fails = 0;
        $(".dynamicWidgets .portlet.card").each(function () {
            var wid = $(this).attr("data-title");
            var $node = $(this);
            var $widgetBody = $(this).find(".card-body");

            if (typeof window[wid] !="undefined") {
                var tempCall = window[wid].init;
                tempCall($widgetBody);
            }
        });
        if (fails > 0) {
            setTimeout("app.initWidgets", 200)
        }
    },
    initLayout: function (name) {
        layout.forEach(function (el) {
            var name = el.name;
            var contents = el.contents;

            var $tar = $(".row[data-region='" + name + "']");
            $tar.find("div").remove()
            contents.forEach(function (wid) {
                app.createWidget($tar, wid)
            });
        });
        app.initWidgets();
        // altWidgets
        altWidgets.forEach(function (item) {
            var name = item.name;
            var contents = item.contents;

            contents.forEach(function (wid) {
                var call = window[wid]; 
                $(name).append(window[wid].shellBuilder());
                var selector = window[wid].state.dom;
                var $node = $(selector);
                window[wid].init($node);
            });
            

        });
    },
    
}

app.init();