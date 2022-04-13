let prototypeOnly = true;


let darkModeState = false;

const buttonToggler = document.querySelector(".themeToggle");

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark-mode" class
function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers, 
// for older browsers define the function using the function keyword.
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click and sets localStorage state
buttonToggler.addEventListener("click", () => {
  darkModeState = !darkModeState;

  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
});

let titleExclusions = [

];


$.ajaxSetup({
    complete: function(event, status) {
  
        if(event.responseJSON!=null){
            //normal json data
        } else {
            let resp = event.responseText;
                    
                    
            if(resp!=null){
                if(resp.indexOf("<?xml")>-1){
                   // is XML from RSS
                            
                } else {

                    let title ="";
                    if(resp.indexOf("<title>")>-1){

                        title = resp.substring(resp.indexOf("<title>")+7, resp.indexOf("</title>"));
                       
                        if(title.toLowerCase() == "log in"){
                            window.location.href = window.location.href;
                        }
                    }
                }
            } 
        }

    }
});


jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {

        if(
            options.url.indexOf("linkpreview")>-1|| 
            options.url.indexOf("instagram")>-1 || 
            options.url.indexOf("assets.pinterest")>-1||
            options.url.indexOf("makeuseof")>-1){
            // leave it
        } else {
            //options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            options.url = 'proxy.php?url=' + options.url;
        }
    }
});


let currentTheme = "light-mode";
const html = document.getElementsByTagName('html')[0];
const toggleTheme = () => {
	if(currentTheme=="light-mode"){
		currentTheme = "dark-mode";
	} else {
		currentTheme = "light-mode";
	}
    html.dataset.theme = currentTheme;
}

var helpers = {
    shortenedText: function(value, length){
        let newText = `<span class="overflowText" style='max-width: ${length}px' title="${value}">${value}</span>`;
        return newText;
    },
    setLocalStorage: function (name, val) {
        var st = window.localStorage;
        st.setItem(name, val);
    },
    getLocalStorage: function (name) {
        var st = window.localStorage;
        return st.getItem(name);
    },
    getRandomNum: function(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    },
    getDateFromDBFormat: function(dateString){
        return FormattedPortalDate(parseDate(dateString))
    },
    getDateFormatForCalendar: function(dateString){
        let date = dateString;
        var locale = "en-US";

        var month = date.getMonth();
        month++;
        let monthDisplay = "" + month;
        if(month<10){
            monthDisplay = "0" + month;
        }
        var d = date.getDate();
        var y = date.getFullYear();

        let dayDisplay="" + d;
        if(d<10){
            dayDisplay = "0" + d;
        }
        var formattedDate;

        if (locale == "en-US") {
            formattedDate = y + "-" + monthDisplay + "-" + dayDisplay;
        } else {
            formattedDate = date;
        }
    

        return formattedDate;
    },


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

let layoutTemplates = [
    {name: "dashboard", page: "dashboard", desc: "Default widgets saving space", code:  ["Quote", "Good", "Happy", "Fun", "Dadjokes", "BibleVOD", "AM","Epic", "BoredPanda", "Colossal", "Godtube","ChloeCorner", "Zoo", "NineGag",  "CSSTricks", "Photo", "PhotoNatgeo",   "PhotoNasa", "News", "Todo", "Instagram", "Facts", "DailyFacts", "GoodNewsHuff", "Buzzfeed", "HealthGazette","ExcellentTown", "BeautifulMess", "DailyGood", "Icr", "Lifehacker" ]},
    {name:"good", page: "good", desc: "", code: ["Quote", "Good", "Happy", "BibleVOD", "CleanMemes", "GoodNewsNetwork",  "SunnySkies", "Positive", "Godtube", "BibleTrivia", "DailyGood",  "TotesAcorbs|col-sm-6","CorbinBlog|col-sm-6", "ChristianHeadlines" ]},
    {name:"learn", page: "learn", desc: "", code: ["MakeUseOf|col-sm-12","Colossal", "Lifehacker|col-sm-6", "DailyFacts",  "WordOfDay", "Icr",    "DevTo", "PhotoNasa",  "HealthGazette|col-sm-4", "ExcellentTown|col-sm-4", "CSSTricks", "AM", "Britannica", "PinterestGreenscape"]},
    {name:"funny", page: "funny", desc: "", code: ["Dadjokes", "NineGag", "Todo|col-sm-4", "BoredPanda|col-sm-12", "BabyGoats|col-sm-6", "TinyHomes|col-sm-6", "Buzzfeed", "Epic", "Madlib|col-sm-4", "PhotoNatgeo", "AutoEvolution"]},
];

const allWidgets = ["Good", "Happy", "Instagram","BibleVOD", "AM","Epic","Todo", "BoredPanda", "Colossal", "Godtube","ChloeCorner", "Zoo", "NineGag",  "CSSTricks", "Photo", "Sheets"];

let layoutHtml = `
    <div class="row">
        `;
layoutTemplates.forEach(function(el){
    if(el.page == pageID){
        let currentlySet = "Default";
        if(helpers.getLocalStorage("dashboard_layout") !=""){
            currentlySet = helpers.getLocalStorage("dashboard_layout");
        }
        let selected = (currentlySet == el.name? "checked='true'": "");
        layoutHtml +=`<div class="col-sm-4">
            <div class='card card-default'>
                <div class="card-header">

                    <label><input type="radio" name="layoutSelector" ${selected} value="${el.name}"> <span>${el.name}</span></label>
                    
                </div>
                <div class="card-body hidden">
                    <pre>${el.code}</pre>
                </div>
                <div class="card-footer">
                <small class="">${el.desc}</small>
                </div>
            </div>
        </div>`;
    }
});
layoutHtml +=`
</div>`;


const theme = $("html").attr("data-theme");
let legendColor = "#000";
if(theme=="dark"){
    legendColor = "#fff";
}
if(pageID=="dashboard"){
    if(theme=="dark"){
        legendColor = "#000";
    }
}

// things we ought to remember about the user choices
let state = {
    rssParams: {
        start: 0,
        length: 2,
    },
    theme: "light",
    layout: "alt",
}


const getValueFromString = function(string, which){
    if(string!=null){
        let returnVal=string;
    
        if(string.indexOf("|")>-1){
            let splits = string.split("|");
            returnVal = splits[which];
        }
        return returnVal;
    } else {
        return "";
    }
    
}

const appFilter = function(current, exclude){
    
    let retVal =  `
        <span class="btn-group appFilter buttonGroupFilter">
            <button class="btn btn-default btn-outline ${(current=='all'?'active': '')}" data-value="all">All</button>`;
    let appData = fetchUserApps();
            
    appData.forEach(function(site){
        let upper = site.toUpperCase();
        let showSite = true;
        if(exclude.length){
            if(exclude.includes(site)){
                showSite = false;
            }
        }
        //bg-${upper}
        if(showSite){
            retVal+=`<button class="btn btn-outline btn-default" data-value="${site}"><span class='caps'>${site}</span></button>`;
        }
    })

    retVal+=`</span>`;
    return retVal;
}


var app = {
    allThemes: "dark light mixed custom",
    currentPage: "good",
    currentShown: "",
    ajaxRequests: [],
    swipers:[],
    screenShotKey: "491f04b63a7131800c7348e200661898",
    getPreviews: function(title){
        
        let node = document.querySelector(".widget_"+title);
        let counter = 1;
        node.querySelectorAll(".swiper-slide").forEach(function(item){

            
            let a = item.querySelector(".rss_heading a");
            let href = a.getAttribute("href");
            let img = item.querySelector(".rss_image");
            let origSrc = img.getAttribute("src");
            
            if(origSrc=="undefined" || origSrc == null || origSrc == ""){
                console.log("get previews", title)
               // ajax a curl call of the link and find meta?
               $.ajax({
                url: href,
                success: function(html){

                    console.log("getting image for", title, html);
                    counter++;
                    let meta = html.substring(html.indexOf('<meta property="og:image'), html.length);
                    meta = meta.substring(0, meta.indexOf("/>")+2);

                    let temp = document.createElement("div");
                    temp.innerHTML = meta;
                    if(temp.querySelector("meta")!=null){
                        let src = temp.querySelector("meta").getAttribute("content");
                        img.setAttribute("src", src);
                    } else {
                        let imgNew = "https://picsum.photos/400/" + (300+counter);
                        img.setAttribute("src", imgNew);
                        let newurl = "https://us7.proxysite.com/includes/process.php?action=update";
                        
                        $.ajax({
                            url: newurl,
                            data: {d: href},
                            type: "POST",
                            success: function(res){
                                
                                let meta = res.substring(res.indexOf('<meta property="og:image'), res.length);
                                meta = meta.substring(0, meta.indexOf("/>")+2);
                                console.log("try again", meta);

                            },
                            error: function(e){}
                        })
                        console.log(href, html);
                        
                    }
                },
                error: function(e){
                    console.log(e);
                }
            })
            } else {
                //all good
            }
        })
    },
    initSwipers: function(){
        document.querySelectorAll(".swiper:not(.loaded)").forEach(function(el){
            let slidesper = el.getAttribute("data-slidesper");
            let slidesPerMD = slidesper-1;
            if(slidesPerMD<1){
                slidesPerMD = 1;
            }
            let slidesPerSM = slidesPerMD-1;
            if(slidesPerSM<1){
                slidesPerSM = 1;
            }
            let jstitle = el.getAttribute("data-title");
            let swiper = new Swiper(el, {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
              
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination.' + jstitle,
                    clickable: true,
                    dynamicBullets: true,
                  },

                
                slidesPerView: 1,
                spaceBetween: 0,
               
                breakpoints: {  
                    400: {
                    slidesPerView: slidesPerSM,
                    spaceBetween: 0
                    },
                    // when window width is >= 480px
                    600: {
                    slidesPerView: slidesPerMD,
                    spaceBetween: 0
                    },
                    // when window width is >= 640px
                    800: {
                    slidesPerView: slidesper,
                    spaceBetween: 0
                    }
                },
                scrollbar: {
                    el: ".swiper-scrollbar." + jstitle,
                },
              
                // Navigation arrows
                navigation: {
                  nextEl: '.swiper-button-next.' + jstitle,
                  prevEl: '.swiper-button-prev.' + jstitle,
                },
              
                
              });

              el.classList.add("loaded");
              app.getPreviews(el.closest(".portlet").getAttribute("data-title"));
        });
        
    },
    dataTemplates: {
        rss: function(options){

            $.ajax({
                url: options.url,
                success: function (xml) {

                    let ret = [];
                    $(xml).find("item").each(function (idx, el) {
                        let temp = {};

                        if($(this).find("title").text().indexOf("Astrology")>-1){

                        } else {
                            $(this).children().each(function(){
                        
                            
                            let image = "";
                                if(this.localName.toLowerCase().indexOf("media:")>-1 || this.localName=="enclosure"){
                                    if(this.getAttribute("url")){
                                        image=this.getAttribute("url");
                                        temp["image"] = image;
                                    }
                                } else {

                                    
                                }
                                if(options.fields == "all"){
                                        
                                    temp[this.localName] = app.removeCdata(app.htmlDecode($(this).html()));
                                    
                                }
                                
                        });

                        
                            el.childNodes.forEach(function (ele, indx) {

                                
                                if (ele.nodeName.toLowerCase().indexOf("content:") > -1) {
                                    
                                    var $temp = $(document.createElement("div"));
                                    $temp.html(ele.innerHTML);
                                    var $img = $temp.find("img");
                                    if($img){
                                        image = $img.attr("src");
                                        temp["image"] = image
                                    }
                                    
                                }
                                if(temp["image"]=="undefined" || temp["image"]==null){
                                    if (ele.nodeName.toLowerCase() == "description") {
                                       
                                        let orig = ele.innerHTML;
                                        orig = orig.replace("/-->", "/>");
                                        orig = orig.replace("]]&gt;", "");
                                        orig = orig.replace("<!--[CDATA[", "")
                                        var $temp = $(document.createElement("div"));
                                        $temp.html(orig);
                                        var $img = $temp.find("img");
                                        if($img.length){
                                            image = $img.attr("src");
                                            temp["image"] = image
                                        }
                                        
                                    }
                                }

                                if(temp["guid"]=="undefined" || temp["guid"]==null){
                                    if (ele.nodeName.toLowerCase() == "link") {
                                       
                                       temp["guid"] = ele.innerHTML;
                                        
                                    }
                                }
                                
                            });
                        
                           if(typeof temp["image"] == "undefined"){
                               temp["image"] = "";
                           }
                        
                            ret.push(temp);
                        }
                    });

                   
                    window[options.title].state.currentData = ret;
                    window[options.title].render();
                    app.initSwipers();
                    let $widget = $(".widget_" + options.title)
                    app.toggleWidgetLoading($widget.find(".card-body"), "hide")
                    
                },
                error: function(){},
            });

        },
        curl: function(options){
            let fetcher = options.fetch;
            $.ajax({
                url: options.url,
                success: function (html) {
                    let $temp = $(document.createElement("div"));
                    $temp.html(html)
                    let content = $temp.find(fetcher).html();
                    window[options.title].state.currentData = content;
                    window[options.title].render();

                },
                error: function(e){

                }
            });
        }
    },
    widgetLayouts: {
        carousel: function(data, options){
            let title = options.title;
            let jstitle = title.toLowerCase();
            let widgetObj = window[title];

            let start = widgetObj.state.start;
            let stop = widgetObj.state.stop;
            // get slides per view
            let slidesper = stop-start;
            let $wrapper = $(document.createElement("div"));
            let $swiper = $(document.createElement("div"));
            $swiper.addClass("swiper").addClass(jstitle);
            $swiper.attr("data-slidesper", slidesper);
            $swiper.attr("data-title", jstitle)

            let $swiperWapper = $(document.createElement("div"));
            $swiperWapper.addClass("swiper-wrapper")
            
            window[title].state.currentData.forEach(function (el, idx) {
                let $swiperSlide = $(document.createElement("div"));

                $swiperSlide.addClass("swiper-slide");
                let img = "";

                var zeroIndex = idx+1;
                //if (zeroIndex >= start && zeroIndex < stop) {
                   var $item = $(document.createElement("div"));

                   let image = "";
                   if(el.image && el.image!=""){
                       image = el.image;
                   } else {
                       //search description
                       let temp = el.description;
                       let count = 0;
                       $(temp).find("img").each(function(){
                           if(count==0){
                            image = $(this).attr("src");
                           }
                           count++;
                       });

                       if(image ==""){
                           // everything failed. just set something random
                           image = "https://picsum.photos/400/" + (idx + 200);

                       }
                   }

                   $item.addClass("swiper-content");
                   var temp = `<span class='rss_image_wrap'>
                        <img class='rss_image' src='${image}' alt='rss item featured' />
                    </span>
                    <span class='rss_heading'>
                        <a href='${el.guid}' target='_blank'>${el.title}</a></span>
                    <span class='rss_content'>${el.description}</span>`;
                   $item.html(temp);
                   $swiperSlide.append($item);
                   $swiperWapper.append($swiperSlide);
                //}
               
           });
           
           $swiper.append($swiperWapper);
           $wrapper.append($swiper);

           $wrapper.append(`<div class="swiper-pagination ${jstitle}"></div>
           <div class="swiper-button-prev ${jstitle}"></div>
           <div class="swiper-button-next ${jstitle}"></div>
           <div class="swiper-scrollbar ${jstitle}"></div>`);

           return $wrapper.html();

        },
        carouselVideo: function(data, options){
            let title = options.title;
            let widgetObj = window[title];

            let start = widgetObj.state.start;
            let stop = widgetObj.state.stop;
            var $rss = $(document.createElement("div"));
            var $ul = $(document.createElement("div"));

            $ul.addClass("rss_list row");
            window[title].state.currentData.forEach(function (el, idx) {
                let img = "";

                var zeroIndex = idx+1;
                if (zeroIndex >= start && zeroIndex < stop) {
                   var $item = $(document.createElement("div"));

                   let image = "";
                   

                   $item.addClass("col item");
                   var temp = `<div class='rss_video_wrap'>
                        ${el.description}
                    </div>
                    <span class='rss_heading'>
                        <a href='${el.guid}' target='_blank'>${el.title}</a></span>
                    `;
                   $item.html(temp);
                   $ul.append($item);
                }
               
           });
           $rss.append($ul);

           return $rss.html();

        },
        photocarousel: function(data, options){

            
            let title = options.title;
            let widgetObj = window[title];

            let start = widgetObj.state.start;
            let stop = widgetObj.state.stop;
            var $rss = $(document.createElement("div"));
            var $ul = $(document.createElement("div"));

            $ul.addClass("rss_list row");
            window[title].state.currentData.forEach(function (el, idx) {
                let img = "";

                var zeroIndex = idx+1;
                if (zeroIndex >= start && zeroIndex < stop) {
                   var $item = $(document.createElement("div"));

                   let image = "";
                   if(el.image){
                       image = el.image;
                   }

                   $item.addClass("col item");
                   $item.css("backgroundImage", "url('" + image + "')")
                   var temp = `<div class='contentInner'>
                        
                   
                   
                    <div class='rss_content'>${el.description}</div>
                    </div>`;
                   $item.html(temp);
                   $ul.append($item);
                }
               
           });
           $rss.append($ul);

           return $rss.html();

        },
        carouselContent: function(data, options){

            let title = options.title;
            let widgetObj = window[title];

            let start = widgetObj.state.start;
            let stop = widgetObj.state.stop;
            var $rss = $(document.createElement("div"));
            var $ul = $(document.createElement("div"));

            $ul.addClass("rss_list row");
            window[title].state.currentData.forEach(function (el, idx) {
                let img = "";

                var zeroIndex = idx+1;
                if (zeroIndex >= start && zeroIndex < stop) {
                   var $item = $(document.createElement("div"));

                   let image = "";
                   if(el.image){
                       image = el.image;
                   }

                   $item.addClass("col item");
                   
                   var temp = `<div class='contentInner'>
                        
                   
                   
                    <div class='rss_content'>${el.description}</div>
                    </div>`;
                   $item.html(temp);
                   $ul.append($item);
                }
               
           });
           $rss.append($ul);

           return $rss.html();

        },
    },
    headerTemplates: {
        carousel: [
            {
                type: "a",
                text: "<i class='fa fa-chevron-left'></i>",
                classNames: "rss_prev rss_btn btn btn-default btn-sm btn-outline-secondary",
                link: "javascript:;"
            },
            {
                type: "a",
                text: "<i class='fa fa-chevron-right'></i>",
                classNames: "rss_next rss_btn btn btn-default btn-outline-secondary btn-sm",
                link: "javascript:;"
            },
        ],
        photocarousel: [
            {
                type: "a",
                text: "<i class='fa fa-chevron-left'></i>",
                classNames: "rss_prev rss_btn btn btn-default btn-sm btn-outline-secondary",
                link: "javascript:;"
            },
            {
                type: "a",
                text: "<i class='fa fa-chevron-right'></i>",
                classNames: "rss_next rss_btn btn btn-default btn-outline-secondary btn-sm",
                link: "javascript:;"
            },
        ],
    },
    removeCdata: function(string){

        string = string.replace("<![CDATA[", "")
        string = string.replace("]]>", "");
        string = string.replaceAll("<p-->","<p>");
        string = string.replaceAll("<h1-->","<h1>");
        
        
        string = string.replace("]]&gt;", "");
        string = string.replaceAll("<!--","");
        string = string.replaceAll("-->", "");
        string = string.replaceAll("[CDATA[","");
        string = string.replaceAll("]]", "");
        
        
        return string;

    },
    htmlDecode: function(input){
        var e = document.createElement('textarea');
        e.innerHTML = input;
        // handle case of empty input
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    },
    speakText: function(text){
		
		// list of languages is probably not loaded, wait for it
		if(window.speechSynthesis.getVoices().length == 0) {
			window.speechSynthesis.addEventListener('voiceschanged', function() {
				textToSpeech();
			});
		}
		else {
			// languages list available, no need to wait
			textToSpeech()
		}

		function textToSpeech() {
			// get all voices that browser offers
			var available_voices = window.speechSynthesis.getVoices();

			// this will hold an english voice
			var english_voice = '';

			// find voice by language locale "en-US"
			// if not then select the first voice

			for(var i=0; i<available_voices.length; i++) {
				if(available_voices[i].lang === 'en-US') {
					english_voice = available_voices[i];
					break;
				}
			}
			if(english_voice === '')
				english_voice = available_voices[0];

			// new SpeechSynthesisUtterance object
			var utter = new SpeechSynthesisUtterance();
			utter.rate = 1;
			utter.pitch = 0.5;
			utter.text = text;
			utter.voice = english_voice;

			// event after text has been spoken
			utter.onend = function() {
				//alert('Speech has finished');
			}

			// speak
			window.speechSynthesis.speak(utter);
		}
	},
    addTempWidget: function(title){
    
        var string = `
            <div class="column toDrag ui-sortable">
            <div class="portlet card widget_${title} ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" data-title="${title}">
            <div class="portlet-header card-header ui-widget-header ui-corner-all" data-id="${title}">
                <button class="ui-icon ui-icon-minusthick portlet-toggle fa fa-times"></button>
                    ${title}
                    </div>
                    <div class="card-body portlet-content"></div>
                </div>
            </div>`;
        return string;
    },
    currentTheme: "mixed",
    toggleWidgetLoading: function(node, action){
        let $icon = $(node).closest(".card").find(".loadingIcon");
        if(action=="show"){
            $icon.removeClass("hid");
        } else {
            $icon.addClass("hid");
        }
        
    },
    createWidgetLoader: function(){
        let loader = `<div class="loadingIcon"><i class="fa fa-spinner fa-spin"></i></div>`;
        return loader;
    },
    currentLanguage: currentLanguage,
    createWidgetContainer: function(node, contents, size){
        let contentString = contents.join(",");
        let identifier = "widget_stacked_" + contents.join("_");
        let colClass= size;
        let str = `<div class='column ${colClass}' data-h='4'>
        <div class='portlet widget_stacked_container ${identifier}' data-contents="${contentString}">`;
        contents.forEach(function(w){
            str += `<div class="placeholder" data-widget="${w}"></div>`;
        });
        str += `</div>
        </div>`;

        $(node).append(str);
        $("." + identifier).find(".placeholder").each(function(){
            app.createWidget($(this), $(this).attr("data-widget"), "col-sm-12")
        });
        $("." + identifier).find(".placeholder").each(function(){
            let wid =  $(this).attr("data-widget");
            let tempCall = window[wid].init;
            let $widgetBody = $(this).find(".card-body")
            tempCall($widgetBody);
        });

        
        if(!animateWidgets){
            window.setTimeout(function(){
                $("." + identifier).addClass("loaded")
            }, 200);
        }

        
    },
    createWidget: function (node, title, sizeOverride) {

        let colClass = "";
        let metaData = window[title].meta;
        if(metaData){
            colClass = metaData.column;
        }
        if(sizeOverride!=""){
            colClass = sizeOverride;
        }

        let header = (window[title].state.header ? true : false);

        let gridWidth = colClass
        if(colClass.indexOf(" ")>-1){
            gridWidth = colClass.substring(0, colClass.indexOf(" "));
        }
        gridWidth = gridWidth.replace("col-", "");
        gridWidth = gridWidth.substring(3, gridWidth.length);
        
        

        let str = "<div class='column " + colClass + "' data-w='" + gridWidth + "' data-h='1'>";
        str += "<div class='portlet card widget_" + title + "' data-title='" + title + "' data-charts=''>";
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
        str += "<div class='portlet-content card-body'></div>";
        str += app.createWidgetLoader();
        /*
        str += `<div class='mobileNext'>
                <button type='button' class='mobileNextBtn btn prevBtn float-left' data-dir="prev"><i class='fa fa-arrow-up'></i></button>
                <button type='button' class='mobileNextBtn btn nextBtn float-right' data-dir="next"><i class='fa fa-arrow-down'></i></button>
            </div>`;
            */
       
        str += "</div>"
         str += "</div>";

        $(node).append(str);
        if(!animateWidgets){
            window.setTimeout(function(){
                $(".widget_" + title).addClass("loaded")
            }, 200);
        }
    },
    bootstrapVersion: null,
    toggleFullScreen:function() {
        var doc = window.document;
        var docEl = doc.documentElement;
      
        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
      
        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
          requestFullScreen.call(docEl);
        }
        else {
          cancelFullScreen.call(doc);
        }
      },
    init: function () {
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
        if(typeof bootstrapVersion!='undefined'){
            app.bootstrapVersion = bootstrapVersion;
        } else {
            app.bootstrapVersion = "4";
        }

        var currentTheme = site.biteCookie("dashboardTheme");
        if(currentTheme!="" || typeof curentTheme !=="undefined"){
            app.currentTheme = currentTheme
        }
        $("#themeName").text(app.currentTheme);

        
       
        window.setTimeout(function () {
            app.initSettings();
            app.initModals();

            pageID = "good";
            if(helpers.getLocalStorage("currentPage")){
                pageID = helpers.getLocalStorage("currentPage")
            }
            console.log("loading", pageID)
            app.initLayout(pageID);

            //
            document.querySelectorAll(".pageToggle").forEach(function(pa){
                if(pa.getAttribute("data-page")==pageID){
                    pa.classList.add("active");
                } else {
                    pa.classList.remove("active");
                }
            })
            
            app.initBinding();
            

            app.togglePageLoader("hide");
            
        }, 100)

    },
    setMiscModalContent:function(size, id, title, content, actions, dataAttributes){
        let $modal = $("#miscModal")
        $modal.attr("data-size", size)
        $modal.attr("data-id", id);
        $modal.find(".modal-header .modal-title").text(title);
        $modal.find(".modal-body").html(content);

        if(dataAttributes!=null && dataAttributes.length>0){
            dataAttributes.forEach(function(att){
                $modal.attr(att.name, att.value);
            })
        }
        

        let $footer = $modal.find(".modal-footer");
        var orig = $footer.html();
        $footer.html("")
        if(actions.length>0){
            actions.forEach(function(el){
                if(el.type=="close"){
                    $footer.append(`<button type="button" class="btn btn-default btn-outline" data-dismiss="modal">${el.text}</button>`)
                } else {
                    //action
                    if(el.type=="action"){
                        if(el.text!="null"){
                            let classNames = "btn-outline";
                            if(el.className){
                                classNames = el.className;
                            }
                            $footer.append(`<button type="button" class="btn ${classNames}" id="${el.id}">${el.text}</button>`)
                        }
                    }
                }
            })
        } else {
            // clear out footer?
            // or set back to orig?
        }
        
        app.toggleMiscModal("show")
    },
    toggleMiscModal: function(action){
        $("#miscModal").modal(action)
    },
    toggleLoadingIcon: function(action){
        if(action=="show"){
            $(".loadinggif").show();
        } else {
            $(".loadinggif").hide();
        }
    },
    countWidgets: function(){
        let counter = 1;
        $(".dynamicWidgets .portlet").each(function(){
            $(this).attr("data-counter", counter);
            let title = $(this).attr("data-title");
            let template ="";
            if(window[title]!=null){
                if(typeof window[title].template!="undefined"){
                    template = window[title].template;
                }
            
                $(this).attr("data-template", template)
            }
            counter++;
            

        })
    },
    checkEmpty: function(){
        
        $(".dynamicWidgets .column").each(function(){
            if($(this).find(".portlet").length){
                // cool
                $(this).removeClass("empty")
            } else {
                $(this).addClass("empty");
            }
        });

        $(".dynamicWidgets .column").each(function(){
            if($(this).find(".portlet").length>1){
                console.log("double");
                let $empty = $(".dynamicWidgets .column.empty");
                
                
                let $node =$(this).find(".portlet:nth-child(" + $(this).find(".portlet").length + ")")
                console.log("nodes", $(this).find(".portlet").length, $node);
                
                $node.detach().appendTo($empty);
                $empty.removeClass("empty");
            }
        });

        //fill empty slots with double stacked
    },
    initBinding: function () {
        $(document).on("click", ".chatHead .close, .chatToggle", function () {
            $(".chatWindow").toggle();
        });

        $(document).on("click", ".sourceBtn", function () {
            $(this).closest(".headerItems").removeClass("menuOpen")
        });


        $(document).on("click", ".toggleSources", function () {
            let $node = $(this).closest(".portlet");
            let title = $node.attr("data-title");
            $node.find(".headerItems").toggleClass("menuOpen");
            let idx = 1;
            $node.find(".headerItems .sourceBtn").each(function(){
                $(this).attr("data-pos", idx);
                $(this).css("top", idx*43 + "px");
                idx++;
            })
        });
        

        $(document).on("click", ".pageToggle", function () {
           let thisId = $(this).attr("data-page");
           $(".pageToggle").removeClass("active");
           $(this).addClass("active");
           app.currentPage = thisId;
           pageID = thisId;
           app.initLayout(thisId);
           $(document).scrollTop(0);
           helpers.setLocalStorage("currentPage", thisId);
           $(".navbar-toggler").trigger("click")
        });
        

        $(document).on("click", ".mobileNext .btn", function () {


            let currentPos = parseInt($(this).closest("footer").attr("data-current"));
            let max = $(".portlet[data-counter]").length;
            if($(this).attr("data-dir")=="prev"){
                currentPos--;
                if(currentPos<1){
                    currentPos = 1;
                }
            } else {
                currentPos++;
                if(currentPos>max){
                    currentPos = max;
                }
            }
            $(this).closest("footer").attr("data-current", currentPos);

            let newTop =  ($(window).height() * currentPos) - $(window).height();
            $(document).scrollTop(newTop);
          

           // instead, get a data-order * window.height()
        });
        

        $(document).on("click", ".rss_btn", function () {
            let title = $(this).closest(".card").attr("data-title")
            let widget = window[title];
            var newVal = widget.state.start;
            var interval = widget.state.max;
            var tot = widget.state.total;



            if ($(this).hasClass("rss_prev")) {
                newVal -= interval;
                if (newVal < 1) {
                    newVal = 1;
                }
            } else {
                newVal += interval;
                if (newVal > tot) {
                    newVal = tot;
                }
            }
            widget.state.start = newVal;
            widget.state.stop = newVal + interval;

            widget.render();
        });

        $(document).on("click", ".addWidgetsBtn", function () {
            $(".dashboardWidgets").toggleClass("shown");
        });

        $(document).on("click", "#dashboardEdit", function () {
            $("body").toggleClass("editing");
            if($("body").hasClass("editing")){
                dragging = true;
                app.initDragging();
                $(".dashboardWidgets .portlet").addClass("loaded")
            } else {
                dragging =false;
            }
        });

        $(document).on("click", "#dashboardSave", function () {
            var currentLayout = helpers.getLocalStorage(pageID + "_layout");
            
            var currentTemplate = "";
            layoutTemplates.forEach(function(el){
                if(el.name==currentLayout && el.page == pageID){
                    currentTemplate = el;
                }
            });
            let currentCode = currentTemplate.code;
            let newCode = [];
            $(".dynamicWidgets .portlet").each(function(){
                let thisTitle = $(this).attr("data-title");
                let thisColClass = $(this).closest(".column").attr("class").replace("column","").replace("ui-sortable", "");
                if($(this).hasClass("widget_stacked_container")){
                    // get the rule for the stacked ones
                    let subArr = [];
                    $(this).find(".portlet").each(function(){
                        let subTitle = $(this).attr("data-title");
                        subArr.push(subTitle);
                    });
                    subArr.push("*" + thisColClass);
                    newCode.push(subArr);
                } else {
                    
                    if($(this).parents(".widget_stacked_container").length) {
                        // skip it
                    } else {
                        newCode.push(thisTitle + "|" + thisColClass);
                    }
                }
                
            });
            //Phase 3 or 4
            $("body").removeClass("editing");
            dragging = false;
        });
        

        $(document).on("click", ".portlet-header .appTitle", function () {
            let $widget = $(this).closest(".card");
            let domain = "";
            // allow for select element or bootstrap dropdown
            if($widget.find(".widgetDomainFilter").length){
                domain = $.trim($widget.find(".widgetDomainFilter .currentDomain").text())
            } else {
                domain = $.trim($widget.find(".domainSelectionDropdown option[value='" + $widget.find(".domainSelectionDropdown").val() + "']").text());
            }

            
            if(domain.indexOf("//")>-1){
                domain = domain.substring(domain.indexOf("//")+2, domain.length);
            }

            PostSiteTransferWithSSO(domain);
            
        });
        
        

        

        $(document).on("click", ".portlet-toggle", function () {
            var icon = $(this);
            icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
            // send it back!
            var $card = $(this).closest(".card");
            var title = $card.attr("data-title");
            
            var $arrow = $(".widgetList .portlet[data-title='" + title + "']");
            if($arrow.length){
                $arrow.show();
            } else {
                var temp = app.addTempWidget(title);
                $(".dashboardWidgets .widgetList").append(temp);

                app.draggableClassInit();
                $card.remove()
                window.setTimeout(function(){
                    $('.column').sortable('refresh')
                }, 400);
            }
           
            $card.remove();

        });

        $(document).on("click", "#dashboardActions", function (e) {
            e.preventDefault();
            $(".dashboardWidgets").toggleClass("shown")
        });

        $(document).on("click", ".widgetDateFilter .filterToggle", function () {
            $(this).closest(".widgetDateFilter").toggleClass("open");
        });

        $(document).on("click", ".widgetDateFilter .currentFilter", function () {
            $(this).closest(".widgetDateFilter").find(".filterToggle").trigger("click");
        });

        $(document).on("click", ".widgetDomainFilter .currentDomain", function () {
            $(this).closest(".widgetDomainFilter").find(".filterToggle").trigger("click")
        });

        $(document).on("click", ".widgetDomainFilter .filterToggle", function () {
            $(this).closest(".widgetDomainFilter").toggleClass("open");
        });

        $(document).on("change", ".domainSelectionDropdown", function () {
            if(!$(this).hasClass("nondefault")){
                let $widget = $(this).closest(".portlet");
                let currVal = $(this).val();
                let $curOpt = $(this).find("option[value='" + currVal + "']");
                let siteKey = $curOpt.attr("data-val");
                var domainText = $curOpt.text();
                var title = $widget.attr("data-title");
                var filter = $widget.find(".widgetDateFilter").attr("data-selected");
                filter = helpers.getLocalStorage(title+"_filter");

                $widget.attr("data-site", domainText);
                $(this).attr("data-selected", siteKey)
                helpers.setLocalStorage(title+"_domain", domainText);

                let application = window[title].app.toLowerCase();
                let toMatch = domainText + "|" + siteKey;
                let isValidDomain = false;
                allSites[application].forEach(function(item){
                    if(item==toMatch){
                        isValidDomain = true;
                    }
                })
                
            
                if(isValidDomain){
                    if(window[title].chartURL){
                        app.toggleWidgetLoading($widget.find(".card-body"),"show")
                        app.getWidgetData(title,window[title].chartURL, filter);
                    } else {
                        // let the widget handle this

                        window[title].getData();
                    }
                } else {
                    let resetDefault = $widget.find(".otherDomainsDropdown li:first-child a").attr("data-val");
                    let resetText = $widget.find(".otherDomainsDropdown li:first-child a").text();
                    helpers.setLocalStorage(title+"_domain", resetText);
                    alert("This is not a valid site. Please try another")
                }
            }
        });

        $(document).on("click", ".widgetDomainFilter .dropdown-menu li a", function (e) {
            e.preventDefault();
            var $widget = $(this).closest(".portlet");
            var siteKey = $(this).attr("data-val");
            var domainText = $(this).text();
            var title = $widget.attr("data-title");
            var filter = $widget.find(".widgetDateFilter").attr("data-selected");
            filter = helpers.getLocalStorage(title+"_filter")
            $widget.find(".widgetDomainFilter .dropdown-menu li").removeClass("active");
            $(this).closest("li").addClass("active");

            $widget.attr("data-site", domainText)
            $widget.find(".currentDomain").text(domainText).attr("data-sitekey", siteKey);
            helpers.setLocalStorage(title+"_domain", domainText);
            $(this).closest(".widgetDomainFilter").toggleClass("open");

            // validate domain
            let application = window[title].app.toLowerCase();
            let toMatch = domainText + "|" + siteKey;
            let isValidDomain = false;
            allSites[application].forEach(function(item){
                if(item==toMatch){
                    isValidDomain = true;
                }
            })
                

            if(isValidDomain){
                if(window[title].chartURL){
                    app.toggleWidgetLoading($widget.find(".card-body"),"show")
                    app.getWidgetData(title,window[title].chartURL, filter);
                } else {
                    // let the widget handle this

                    window[title].getData();
                }
            } else {
                let resetDefault = $widget.find(".otherDomainsDropdown li:first-child a").attr("data-val");
                let resetText = $widget.find(".otherDomainsDropdown li:first-child a").text();
                helpers.setLocalStorage(title+"_domain", resetText);
                alert("This is not a valid site. Please try another")
            }
        });

        $(document).on("click", ".widgetDateFilter .dropdown-menu li a", function (e) {
            e.preventDefault();

            var $dateFilter = $(this).closest(".widgetDateFilter");
            var $currentFilter = $dateFilter.find(".currentFilter");
            var dataFilter = null;
            
            $(".widgetDateFilter .dropdown-menu li").removeClass("active");
            $(this).closest("li").addClass("active");
            let text = $(this).text().toLowerCase();

            let val = $(this).attr("data-value");
            
            if($dateFilter.hasClass("homeWidgets")){
                
                let test = val.toLowerCase();
                if(text.indexOf("year")>-1){
                    dataFilter = "This Year"
                } 
                if(text.indexOf("month")>-1){
                    if(text.indexOf("this")>-1){
                        dataFilter = "This Month"
                    } else {
                        dataFilter = "Last Month";
                    }
                }
                val = dataFilter + "|" + val;
            }
            
            let title = $(this).closest(".portlet").attr("data-title");
            helpers.setLocalStorage(title+"_filter", val);
            
            $currentFilter.text($(this).text());
            $dateFilter.attr("data-selected", $(this).attr("data-value"))

            if(window[title].chartURL){
                app.toggleWidgetLoading($(this).closest(".portlet").find(".card-body"), "show")
                app.getWidgetData(title,window[title].chartURL, val);
                // var ajaxURL = window[title].chartURL;
                
            } else {
 
                window[title].getData();
            }

            $(this).closest(".widgetDateFilter").toggleClass("open");
        });

        $(document).on("click", "#layoutBtn", function (e) {

            e.preventDefault();
            $("#miscModal .modal-body").html(layoutHtml);
            $("#miscModal").modal("show");
            let modalID = "layoutSelector";
            let buttons = [
               {type: "close", text: "Close", className: "btn-default btn-outline"},
               {type: "action", text: "Choose", id: "layoutSelect", className: "btn-success"}
            ];
            app.setMiscModalContent("large", modalID, "Layout Selection", layoutHtml, buttons, null);
        });

        $(document).on("click", ".layoutToggle", function () {
            $(".app").toggleClass("altlayout");
            var layout = ($(".app").hasClass("altlayout") ? "altlayout" : "default");
            helpers.setLocalStorage("dashboardLayout", layout);
        });
        $(document).on("click", ".themeToggle", function (e) {
            e.preventDefault()
            $(this).parent().find("ul").toggle();

        });



        $(document).on("click", ".settingsToggle a", function (e) {
            e.preventDefault()

            $(".appHeader .settings").toggleClass("hidden");
        });
        
    },
    initAjaxPrefix: function(){
        jQuery.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                //options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });
    },
    initSettingsPhoto: function(){
        app.initWidgets()

    },
    initResizing: function(){
        let colHeight = 432;
        // loop each one once we can change height
        $(".dynamicWidgets .column:not(.widget_Quote)").resizable({
            //grid: $(window).width() / 12,
            helper: "resizable-helper",
            ghost: false,
            maxHeight: colHeight + "px",
            minHeight: colHeight + "px",
            resize: function(event, ui){
                let el = ui.element;
     
                let gridVal = app.getClosestGridSnap(event.target, event.clientX, "x");
                event.target.setAttribute("data-w", gridVal);


                let height = app.getClosestGridSnap(event.target, event.clientY, "y");
                //event.target.setAttribute("data-h", height)
            }

        });

    },
    
    initDragging: function () {

        $(".column").sortable({
            connectWith: ".column",
            handle: ".portlet-header",
            scroll: true,
            tolerance: "pointer",
            remove: function (event, ui) {
                //ui.item.clone().appendTo('#sortable2');
                //$(this).sortable('cancel');
            },
            stop: function(event, ui){
                console.log("stop", event);
                app.checkEmpty();
            },
            change:function(event, ui){
                //console.log("change", event.originalEvent, ui.item);
                let portlet = event.originalEvent.target.closest(".portlet");
                let col = portlet.closest(".ui-sortable");
                
            },
            placeholder: "portlet-placeholder ui-corner-all ui-state-highlight",
            receive: function (event, ui) {
                app.dragRecieve(ui.item)
            }
        }).disableSelection();

        app.draggableClassInit();

       
    },
    getPosition:function(el) {
        var xPos = 0;
        var yPos = 0;
       
        while (el) {
          if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;
       
            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
          } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
          }
       
          el = el.offsetParent;
        }
        return {
          x: xPos,
          y: yPos
        };
      },
    
    getClosestGridSnap:function(node, val, axis){
        let pos = app.getPosition(node);
        
        if(axis=="x"){
            let wid = $(window).width();
            let unit = wid/12;
            let cal = val/unit;
            let offset = pos.x;
            let offsetGrid = Math.floor(offset/unit);
            let gridVal = Math.ceil(cal);
            let adjustedGridVal = gridVal - offsetGrid;
            console.log("offset", offset, "grid", offsetGrid, "adjusted", adjustedGridVal )

            
            return adjustedGridVal;
        } else {
            let res = Math.ceil(val/200);
            return res;
        }

    },
    
    animateTimerArr: {},
    animateNumberInterval: [],
    animateNumberLoop: function(node){
        let start = parseInt($(node).attr("data-start"));
        let end = parseInt($(node).attr("data-end"));
        let currentVal = parseInt($(node).text());
        let thisGuid = $(node).attr("data-interval");

        let iteration = app.animateTimerArr[thisGuid];
        iteration++;
        

        let range = start-end;
        if(range<0){
            range *= -1;
        }

        let goingUp = false;
        if(start<end) {
            goingUp = true;
        }

        let incrementVal = 1;
        if(range>500){
            incrementVal = 10;
        }
        if(range>1000){
            incrementVal = 100;
        }

        if(currentVal>end){
            if(goingUp){
                currentVal = end;
                $(node).text(currentVal);
                clearInterval(app.animateNumberInterval[thisGuid]); 
            } else {
                currentVal-=incrementVal;
                $(node).text(currentVal)
            }
           

        } else if(currentVal<end) {
            if(!goingUp){
                currentVal = end;
                $(node).text(currentVal);
                clearInterval(app.animateNumberInterval[thisGuid]); 
            } else {
                currentVal+=incrementVal
                $(node).text(currentVal);
            }
            

        } else {
            // edge case
        }

        if(currentVal==end || currentVal>end && goingUp || currentVal<end && !goingUp){
            clearInterval(app.animateNumberInterval[thisGuid]); 
        }

        
    },
    generateGuid: function(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    animateNumber: function(widget, start){
        $("." + widget).find(".animateNumber").each(function(){
            var $node = $(this);
            let end =  parseInt($(this).attr("data-end"));
            let guid = "";
            if(start!=end){
                guid = app.generateGuid();
                $(this).text(start);
                $(this).attr("data-interval", guid)
                //$(this).attr("data-start",end);
                app.animateNumberInterval[guid] = window.setInterval(function(){
                    app.animateTimerArr[guid] = 0;
                    app.animateNumberLoop($node);
                },12);
            }
        })
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
            if($parent.find(".card-body").length){
                

                    if (typeof window[id] != "undefined") {
                        var tempCall = window[id].init;
                        tempCall($widgetBody);
                    }
            }
            
        }
        app.draggableClassInit();

    },
    togglePageLoader: function(which){
        if(which=="show"){
            $(".mainContent .dynamicWidgets ").addClass("loading")
        } else {
            $(".mainContent .dynamicWidgets ").removeClass("loading")
        }

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
        if (site.biteCookie("dashboardTheme")) {
            defaultTheme = site.biteCookie("dashboardTheme");
            
        } else {
            site.bakeCookie("dashboardTheme", defaultTheme);
        }
        state.theme = defaultTheme;
        var indicator = "Off";
        if (state.theme == "dark") {
            indicator = "On";
        }
        $("#darkModeIndicator").html(defaultTheme)
        $(".app").addClass(defaultTheme);
        $("html").attr("data-theme", defaultTheme)
        $(".app").addClass(defaultLayout);
    },
    initSettingsPage: function(){
        app.initSettingsPhoto();
        $(".addWidgetsBtn").remove();
        $(document).on("click",".saveQuoteSrc", function(){
            var selected = $(".options.quoteSrc input:checked").val();
            site.bakeCookie("quoteSrc", selected);

        })
        $(document).on("click",".saveTheme", function(){
            var selected = $(".options.theme input:checked").val();

            site.bakeCookie("dashboardTheme", selected);
            $(".app").removeClass(app.allThemes);
            $(".app").addClass(selected);
            $("html").attr("data-theme", selected);
            if(selected=="custom"){
                site.bakeCookie("editingTheme", "true");
                window.location.href = "/shared/dashboard/";
            }

        })
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

                if(window[wid].template){
                    let template = window[wid].template;

                    // get any extra custom buttons
                    
                    let headerItemArr = [];

                   
                
                    window[wid].state.header.items.forEach(function(item){
                        headerItemArr.push(item);
                        
                        
                    });
                    app.headerTemplates[template].forEach(function(it){

                        headerItemArr.push(it)
                    });
                    let thisTitle = wid;
                    if(window[wid].title){
                        thisTitle = window[wid].title
                    }
                    let headerHtml = app.initHeaderItems(headerItemArr, thisTitle);

                    $(".widget_" + wid).find(".card-header").html(headerHtml)
                }
                app.toggleWidgetLoading($widgetBody, "show")

                $(".widgetList .portlet[data-title='" + wid+"']").hide();
            }
        });
        if (fails > 0) {
            setTimeout("app.initWidgets", 200)
        }
    },
    currentWidget: 0,
    showWidgetInterval: null,
    showWidget:function(target){
        
    },
    initLayout: function (name) {

        let layoutContents = [];
        let st = window.localStorage;
        let savedLayout = st.getItem(pageID+"_layout");
        let defaultTemplateName = "dashboard";


        
        if(name==null){
            if (savedLayout != "" && savedLayout!=null && typeof savedLayout != "undefined") {
                defaultTemplateName = savedLayout
            }
        } else {
            defaultTemplateName = name;
        }

        
        $("body").attr("data-layout", defaultTemplateName)
        layoutTemplates.forEach(function(lay){
     
            if(lay.name==defaultTemplateName){
                if(lay.page == pageID){
                    layout.contents = lay.code;
                    layoutContents  = lay.code;
                }
            }
        });



        layout.forEach(function (el) {
            let name = el.name;

            var contents = el.contents;

            let $tar = $(".row[data-region='" + name + "']");
            $tar.find("div").remove();

            allWidgets.forEach(function(thisName){
                let temp = app.addTempWidget(thisName);
                $(".dashboardWidgets .widgetList").append(temp);
            });

            layoutContents.forEach(function (wid) {
               
                if(typeof wid !=="object"){
                    let sizeClass = "";
                    let thisName = wid;
                    if(thisName.indexOf("|")>-1){
                        let nameSplits = thisName.split("|");
                        thisName = nameSplits[0];
                        sizeClass = nameSplits[1];
                    }

                    app.createWidget($tar, thisName, sizeClass);

                    // remove from widgetlist
                    let $target = $(".widgetList .portlet[data-title='"+thisName +"']").closest(".column");
                    $target.hide();
                } else {
                    // get a shell stacked container for drag and drop, then make these widgets
                    let colClass = "";
                    let elemsArray = [];
                    wid.forEach(function(wd){
                        if(wd.indexOf("*")>-1){
                            colClass = wd.replace("*","");
                        } else {
                            elemsArray.push(wd)
                        }
                    });
                    // make a flag to make a generic widget holder
                    app.createWidgetContainer($tar, elemsArray, colClass);
                }
            });

            
            
        });



        if(animateWidgets){
            // slowly add loaded class
            app.showWidgetInterval = setInterval(function(){
                app.showWidget()
            }, 200)
        }

        app.countWidgets();
        // developer note: this is where the magic happens
        app.initWidgets();
        if(dragging){
            app.initDragging();
            $("body").addClass("dragBody")
        }
        if(resizing){
            document.querySelector(".dynamicWidgets").classList.add("resizable")
            app.initResizing()

        }
    
    },
    
}