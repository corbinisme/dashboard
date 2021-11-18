
var Todo = {
  meta: {
    column: "col-sm-4"
  },
  state: {
      content: null,
      dom: null,
      header: {
          items: [
             /*{
                 type: "a",
                 text: "<i class='fa fa-link'></i>",
                 classNames: "rss_prev btn btn-default btn-sm btn-outline-secondary",
                 link: "#"
             },
             */
            
          ]
      },
  },
  getData: function (filters) {
      //get ajax call
      
       Todo.render();
      
      
  },
  renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Todo.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Random"; // localized
        var res = app.initHeaderItems(Todo.state.header.items, title);
        $target.html(res);
    },

  init: function (node) {
      Todo.state.dom = node;
      Todo.renderHeader();
      Todo.bindings();
      Todo.getData();
  },
  bindings: function () {
     $(document).on("click", ".random", function(){
     	Todo.Randomlink();
     })
  },
  Randomlink: function(){
    Url = new Array;
    Url[0] = "http://alien-ufo-research.com/reptilians/";
    Url[1] = "https://www.flightradar24.com/";
    Url[2] = "http://nooooooooooooooo.com/";
    Url[3] = "http://secrettechnology.com/";
    Url[4] = "http://www.patience-is-a-virtue.org/";
    Url[5] = "https://isitchristmas.com/";
    Url[6] = "http://omfgdogs.com/";
    Url[7] = "http://zombo.com/";
    Url[8] = "http://www.rainymood.com/";
    Url[9] = "http://www.fallingfalling.com/";
    Url[10] = "http://corgiorgy.com/";
    Url[11] = "http://www.pointerpointer.com/";
    Url[12] = "http://eelslap.com/";
    Url[13] = "http://zoomquilt.org/";
    Url[14] = "http://beesbeesbees.com/";
    Url[15] = "http://www.thepictureofeverything.com/";
    Url[16] = "http://doughnutkitten.com/";
    Url[17] = "https://www.futureme.org/";
    Url[18] = "http://www.newyearexercise.com/";
    Url[19] = "https://web.archive.org/web/20180201230730/http://www.dragomirsdiary.com/2011/08/hello-diary.html";
    Url[20] = "http://5secondfilms.com/";
    Url[21] = "http://alpha61.com/primenumbershittingbear/";
    Url[22] = "http://www.myhousematesdiary.com/";
    Url[23] = "http://www.cachemonet.com/";
    Url[24] = "http://clickingbad.nullism.com/";
    Url[25] = "http://www.gizoogle.net/";
    Url[26] = "https://ncase.me/trust/";
    Url[27] = "http://www.clicktoremove.com/";
    Url[28] = "http://vectorpark.com/head/";
    Url[29] = "https://www.purristan.com/";
    Url[30] = "https://www.airfrais.eu/us/index.html";
    Url[31] = "http://www.nobodyhere.com/justme/me.here";
    Url[32] = "http://www.superbad.com/";
    Url[33] = "http://therevolvinginternet.com/";
    Url[34] = "http://get.your-d.tk/";
    Url[35] = "http://www.miserablebastard.com/";
    Url[36] = "http://www.freechocolate.com/";
    Url[37] = "https://morelessgame.com/";
    Url[38] = "http://sheepfilms.co.uk/category/shortfilms/";
    Url[39] = "http://strangehorizons.com/non-fiction/articles/installing-linux-on-a-dead-badger-users-notes/";
    Url[40] = "http://perfectlytimedphotos.com/popular/perfectly-timed-photo";
    Url[41] = "http://jpriest.com/gamez/pinguxtreme.swf";
    Url[42] = "http://www.bradthegame.com/";
    Url[43] = "http://theworstthingsforsale.com/";
    Url[44] = "https://s3.mirror.co.uk/click-the-colour-and-not-the-word/index.html";
    Url[45] = "http://theoatmeal.com/comics/dog_paradox";
    Url[46] = "http://www.catbirdseat.org/catbirdseat/bingo.html";
    Url[47] = "http://unomoralez.com/";
    Url[48] = "http://www.fincher.org/Misc/Pennies/BigTower.shtml";
    Url[49] = "http://www.cleverbot.com/";
    Url[50] = "http://www.hat.net/abs/noclick/index.html";
    Url[51] = "http://www.staggeringbeauty.com/";
    Url[52] = "http://burymewithmymoney.com/";
    Url[53] = "http://just-shower-thoughts.tumblr.com/";
    Url[54] = "http://www.trypap.com/";
    Url[55] = "http://www.republiquedesmangues.fr/";
    Url[56] = "http://www.koalastothemax.com/";
    Url[57] = "http://www.carrotmuseum.co.uk/carrotcolours.html";
    Url[58] = "http://grandpanoclothes.com/";
    Url[59] = "http://www.everydayim.com/";
    Url[60] = "http://hasthelargehadroncolliderdestroyedtheworldyet.com/";
    Url[61] = "http://ninjaflex.com/";
    Url[62] = "http://chrismckenzie.com/";
    Url[63] = "http://corndogoncorndog.com/";
    Url[64] = "http://gameaboutsquares.com/";
    Url[65] = "https://ncase.me/trust/";
    Url[66] = "http://salmonofcapistrano.com/";
    Url[67] = "http://www.wutdafuk.com/";
    Url[68] = "http://www.ouaismaisbon.ch/";
    Url[69] = "http://unicodesnowmanforyou.com/";
    Url[70] = "http://www.psyhigh.com/";
    Url[71] = "http://www.internetisshit.org/";
    Url[72] = "http://www.fmylife.com/";
    Url[73] = "http://www.realultimatepower.net/index4.htm";
    Url[74] = "http://rulesoftheinternet.com/index.php?title=Main_Page";
    Url[75] = "http://www.markdalderup.com/daylight-of-darkness/the-start-of-the-world/";
    Url[76] = "http://presidentialpickuplines.tumblr.com/";
    Url[77] = "http://sarina-brewer.com/";
    Url[78] = "http://chickswithstevebuscemeyes.tumblr.com/";
    Url[79] = "http://thingsididlastnight.com/";
    Url[80] = "http://www.heptune.com/farts.html";
    Url[81] = "http://inventorspot.com/articles/body_bread_13546";
    Url[82] = "http://memebase.cheezburger.com/pictureisunrelated";
    Url[83] = "http://alien-ufo-research.com/news/2013/proof-of-time-travelers.php";
    Url[84] = "http://pixelsfighting.com/";
    Url[85] = "http://hardcoreprawnlawn.com/";
    Url[86] = "http://www.slightlyinteresting.com/lavalamp/lava.asp";
    Url[87] = "http://thefo.nz/";
    Url[88] = "http://faceofdisapproval.com/";
    Url[89] = "http://semanticresponsiveillustration.com/";
    Url[90] = "http://dogs.are.the.most.moe/";
    Url[91] = "https://web.archive.org/web/20190512120348/https://oct82.com/";
    Url[92] = "http://www.drawastickman.com";
    Url[93] = "https://trek.nasa.gov/mars/index.html";
    Url[94] = "http://ihumans.tumblr.com/";
    Url[95] = "http://whos.agood.dog/lesser.dog/";
    Url[96] = "http://chatwithhodor.com/";
    Url[97] = "https://web.archive.org/web/20170514160422/http://manbabies.com/";
    Url[98] = "http://www.rinkworks.com/bookaminute/classics.shtml";
    Url[99] = "http://www.ijustwantyourmoney.com/";
    Url[100] = "http://www.onemilliongiraffes.com/";
    Url[101] = "http://www.lkozma.net/wpv/index.html";
    Url[102] = "http://www.fieggen.com/shoelace/index.htm";
    Url[103] = "http://playing.hypernom.com/monkeys";
    Url[104] = "http://www.sam-i-am.com/play/5k/expletives/index.html";
    Url[105] = "http://beaarthurmountainspizza.tumblr.com/";
    Url[106] = "http://www.stopabductions.com/";
    Url[107] = "https://swatblog.rtgp.xyz/";
    Url[108] = "http://kimjongillookingatthings.tumblr.com/";
    Url[109] = "http://garfieldminusgarfield.net/";
    Url[110] = "http://dogeweather.com/";
    Url[110] = "http://www.hen2hen.com/";
    Url[112] = "https://web.archive.org/web/20160725231633/http://celebritiesaskids.net/";
    Url[113] = "http://codepen.io/ge1doot/full/WbWQOP/";
    Url[114] = "http://icanhas.cheezburger.com/";
    Url[115] = "http://www.engrish.com/";
    Url[116] = "http://www.astrohamster.com/";
    Url[117] = "http://stuffonmycat.com/";
    Url[118] = "http://www.bbc.com/future/bespoke/story/20150306-journey-to-the-centre-of-earth/index.html";
    Url[119] = "http://www.cowsgomoo.co.uk/";
    Url[120] = "http://www.woot.co.uk/";
    Url[121] = "https://bouncingdvdlogo.com/";
    Url[122] = "http://orteil.dashnet.org/cookieclicker/";
    Url[123] = "http://themostseconds.com/";
    Url[124] = "http://www.midwaymeetup.com/";
    Url[125] = "https://www.youtube.com/watch?v=9C_HReR_McQ&feature=emb_logo";
    Url[126] = "http://www.handspeak.com/word/";
    Url[127] = "http://topdocumentaryfilms.com/";
    Url[128] = "http://www.madsci.org/cgi-bin/lynn/jardin/SCG";
    Url[129] = "http://trumpdonald.org/";
    Url[130] = "https://drawception.com";
    Url[131] = "http://badkidsjokes.tumblr.com/";
    Url[132] = "http://internet-map.net/";
    Url[133] = "https://youtu.be/9C_HReR_McQ";
    Url[134] = "http://hyperboleandahalf.blogspot.co.uk/";
    Url[135] = "http://slither.io/";
    Url[136] = "http://www.youareinaforest.com/";
    Url[137] = "http://remoji.com/";
    Url[138] = "http://shiiiit.com/";
    Url[139] = "http://www.howmanypeopleareinspacerightnow.com/";
    Url[140] = "http://hmpg.net/";
    Url[141] = "http://conceptlab.com/simulator/morning/clock800.html";
    Url[142] = "https://www.kamogo.com/9";
    Url[143] = "http://www.therestartpage.com/";
    Url[144] = "http://www.stinkymeat.net/";
    Url[145] = "http://www.eviloverlord.com/lists/overlord.html";
    Url[146] = "http://www.windows93.net/";
    Url[147] = "http://thefuckingtime.com/";
    Url[148] = "http://make-everything-ok.com/";
    Url[150] = "http://what-if.xkcd.com/8/";
    Url[151] = "http://www.danielyeow.com/2011/drawing-molecules/";
    Url[152] = "http://inventorspot.com/articles/ten_bizarre_japanese_soft_drinks_5225";
    Url[153] = "http://www.wikihow.com/Recycle-Your-Socks";
    Url[154] = "https://www.dctech.com/physics/notes/0005.php";
    Url[155] = "http://www.pintprice.com/";
    Url[156] = "http://www.barefooters.org/";
    Url[157] = "http://www.weirdconverter.com/";
    Url[158] = "http://www.theflatearthsociety.org/cms/";
    Url[159] = "http://scienceblogs.com/goodmath/2006/10/12/who-needs-a-calculator-multipl/";
    Url[160] = "http://www.coincalc.com/";
    Url[161] = "http://festivusweb.com/";
    Url[162] = "http://www.appropedia.org/Solar_Charged_Lawnmower";
    Url[163] = "http://www.genderanalyzer.com/";
    Url[164] = "http://www.muppetlabs.com/~breadbox/txt/al.html";
    Url[165] = "http://fliptitle.com/";
    Url[166] = "http://www.worldbeardchampionships.com/photos/";
    Url[167] = "http://www.fishcam.com/";
    Url[168] = "http://www.ehow.com/how_4594591_suck-egg-bottle.html";
    Url[169] = "https://www.youtube.com/watch?v=jU9USxJ9vPs";
    Url[170] = "http://www.venganza.org/";
    Url[171] = "http://www.humanforsale.com/";
    Url[172] = "http://www.willitblend.com/";
    Url[173] = "http://www.icbe.org/";
    Url[174] = "http://www.museumofconceptualart.com/accomplished/index.html";
    Url[175] = "https://scatter.wordpress.com/2010/05/30/the-shortest-possible-game-of-monopoly-21-seconds/";
    Url[176] = "http://www.thesmokinggun.com/time-waster";
    Url[177] = "https://www.youtube.com/askaninja";
    Url[178] = "http://www.godecookery.com/mythical/mythical.htm";
    Url[179] = "http://www.sandalandsoxer.co.uk/home.htm";
    Url[180] = "http://www.lileks.com/oldads/index.html";
    Url[181] = "http://australianmuseum.net.au/death-the-last-taboo";
    Url[182] = "http://www.shadyurl.com/";
    Url[183] = "http://memebase.cheezburger.com/thisisphotobomb";
    Url[184] = "https://www.gutenberg.org/";
    Url[185] = "http://ipetcompanion.com";
    Url[186] = "http://findtheinvisiblecow.com/";
    Url[187] = "https://web.archive.org/web/20190618062455/http://www.iloveyoulikeafatladylovesapples.com/";
    Url[188] = "http://www.thepointless.com/reddot";
    Url[189] = "http://www.rrrather.com/";
    Url[190] = "http://virtualpiano.net/";
    Url[191] = "http://drunkenme.com/movie-drinking-games/";
    Url[192] = "http://findagrave.com/";
    Url[193] = "https://onetinyhand.com/";
    Url[194] = "http://zoomquilt.org/";
    Url[195] = "http://cachemonet.com/";
    Url[196] = "http://www.plspetdoge.com/";
    Url[197] = "http://salmonofcapistrano.com/";
    Url[198] = "http://www.firstmenonthemoon.com/";
    Url[199] = "http://codepen.io/akm2/full/rHIsa";
    Url[200] = "https://www.housecreep.com/";
    Url[201] = "http://you.regettingold.com/";
    Url[202] = "http://hotdogcat.com/";
    Url[203] = "http://instantrimshot.com/";
    Url[203] = "http://www.anothersadtrombone.com/";
    Url[204] = "https://web.archive.org/web/20180211011023/http://cutecatnames.com/";
    Url[205] = "http://www.instantwhoop.com";
    Url[206] = "http://drunkenme.com/movie-drinking-games/";

    Chooselink = Math.round(Math.random() * (Url.length+1));
    window.open(Url[Chooselink],'_blank');
},
  
  render: function(){
    
    var htmlTemplate = `
    <div class="card-body-nopad">
    <a href="#" class="btn btn-primary random">RANDOM SITE</a><hr />
    `;
    var older = `
    <div class="row">
    <div class="col">
    <a href="https://weirdorconfusing.com/">https://weirdorconfusing.com/</a><br />
    <a href="https://www.random-ize.com/random-website/">https://www.random-ize.com/random-website/</a><br />
    <a href="https://theuselessweb.com/">https://theuselessweb.com/</a><br />
    <a href="https://morelessgame.com/">https://morelessgame.com/</a><br />
							<br>
							<a href="https://www.reddit.com/r/DIY/">Reddit DIY</a>
							<br>
							<a href="https://www.engadget.com/">Engadget</a>
							<br>
							<a href="https://www.makeuseof.com/">Makeuseof</a>
							<br>
							<a href="https://lifehacker.com/">Lifehacker</a>
							<br>
							<a href="https://corbinrose.com/news/news.php">Corbinrose.com Feeds (engrish, zoo, jokes)</a>
							<br>
							<a href="https://thingstobehappyabout.com/">Things to be happy about</a>
							<br />
							<a href="https://www.sunnyskyz.com/rss_tebow.php">https://www.sunnyskyz.com/</a><br />
							<a href="https://www.today.com/news/good-news">Good News Today</a><br />
							<a href="https://www.goodnewsnetwork.org/">https://www.goodnewsnetwork.org/</a><br />
							<a href="https://bbcmews.co.uk/news/technology">BBC Mews</a><br />
							<a href="http://paralleltext.io/">http://paralleltext.io/ - language side by side</a><br />

						</div><div class="col"><table class="table"><tr><th>Name</th><th>URL</th></tr>`;

                        /*
                        sources.forEach(function(el){

                            htmlTemplate += "<tr><td>" + el.name+"</td><td><a href='"  +el.url + "'>" + el.url + "</a></td></tr>";

                        });
                        */

                     htmlTemplate += "</div></div>";   

    $(Todo.state.dom).html(htmlTemplate)
    return htmlTemplate;
 
  }

}



