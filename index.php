<!doctype html>
<html lang="en" theme="dark-mode">
  <head>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <link rel="icon" type="image/x-icon" href="dist/img/goat2.png" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link
        rel="stylesheet"
        href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="dist/css/Dashboard.css?v=17" rel="stylesheet" />

    <link href="dist/css/styles.css" rel="stylesheet" />
    
    
    <title>CorbinRose Dashboard of Happy</title>
  </head>
 
		<div class="app">



        <nav class="navbar navbar-expand-lg navbar-shrink navbar-light fixed-top" id="mainNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
                	<img src="dist/img/goat2.png" />
                	<span>Corbin<em>rose</em></span>
                </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item">
                        	<a class="nav-link pageToggle dashboard" data-page="dashboard" href="javascript:void(0)" >
                                <i class="fa fa-globe"></i> All Feeds
                            </a>
                        </li>
                        
                        <li class="nav-item">
                        	<a class="nav-link pageToggle good active" data-page="good" href="javascript:void(0)" >
                                <i class="fa fa-lightbulb"></i> Good News 
                            </a>
                        </li>
                        <li class="nav-item">
                        	<a class="nav-link pageToggle educational" data-page="learn" href="javascript:void(0)" >
                                <i class="fa fa-book"></i> Educational 
                            </a>
                        </li>
                        <li class="nav-item">
                        	<a class="nav-link pageToggle humor" data-page="funny" href="javascript:void(0)" >
                                <i class="fa fa-smile"></i> Entertainment 
                            </a>
                        </li>
                        <li class="nav-item">
                        	<a class="nav-link themeToggle" href="javascript:void(0)" ><i class="fa fa-moon"></i></a>
                        </li>
                    </ul>
                </div>
</nav>


    <div class="contentWrapper">


    
     
        <aside class="dashboardWidgets contain shown">
    <h3>Add a widget</h3>
    <div class="widgetList">

    </div>
</aside>
        <article>
            <div class="content">
                <div class="dashboardContent">
                    <div class="content-top">
                        <div class="row">
                            
                            
                        </div>

                    </div>
                    <div class="contain dynamicWidgets loading">
                        
                    <div class="row" data-region="row0">


                                        
                    </div>
                    
                      

                    </div>
                </div>
                </div>
          
               
        </article>
        
        </div>
        <footer class="mobile-footer" data-current="1">
        <div class="mobileNext">
                <button type="button" class="mobileNextBtn btn prevBtn float-left" data-dir="prev"><svg class="svg-inline--fa fa-arrow-up fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg><!-- <i class="fa fa-arrow-up"></i> --></button>
                <button type="button" class="mobileNextBtn btn nextBtn float-right" data-dir="next"><svg class="svg-inline--fa fa-arrow-down fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg><!-- <i class="fa fa-arrow-down"></i> --></button>
            </div>
        </footer>

        <div id="output"></div>
    </div>
    

    <!-- Modal -->
    <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer text-left">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-secondary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>


  <!-- Bootstrap core JS-->
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <script src="dist/js/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js" integrity="sha256-xNjb53/rY+WmG+4L6tTl9m6PpqknWZvRt0rO1SRnJzw=" crossorigin="anonymous"></script>
        <!-- Core theme JS-->
       
    <script>
        

var site = {
    bakeCookie: function(n, t) {
        var i = new Date, r, u;
        i.setTime(i.getTime() + 63072e7);
        r = "expires=" + i.toUTCString();
        u = n + "=" + t + ";" + r + ";path=/";
        document.cookie = n + "=" + t + ";path=/;" + r
    },
    biteCookie: function(n) {
        for (var t, u = decodeURIComponent(document.cookie), r = u.split(";"), i = 0; i < r.length; i++) {
            for (t = r[i]; t.charAt(0) == " "; )
                t = t.substring(1);
            if (t.indexOf(n + "=") == 0)
                return t.substring((n + "=").length, t.length)
        }
        return ""
    }
}

var layout = [
    { name: "row0", contents: ["Good", "Happy", "Instagram","BibleVOD", "AM","Epic","Todo", "BoredPanda", "Colossal", "Godtube","ChloeCorner", "Zoo", "NineGag",  "CSSTricks", "Photo", "Sheets" ]}
]

        let pageID = "dashboard";
        let currentLanguage = "en";
        var bootstrapVersion = "3";
        let animateNumbersBool = true;
        let animateWidgets = true;
        let dragging = false;
        let resizing = false;
        const appNames = {
            corbin: "Corbin's Dashboard",
            
        }
       

        let allSites = { "corbin": [],  };

        var UserID =''
        var myApps = ["corbin"];
        
    </script>

    <script src="dist/js/portal.js?v=17"></script>
    
    <script src="dist/js/main.min.js"></script>
    
    <script>
        $(document).ready(function () {
            app.init();
        })
    </script>

    
  </body>
</html>