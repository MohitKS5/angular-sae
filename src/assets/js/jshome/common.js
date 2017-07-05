document.write('\
        <div id="fb-root"></div>\
        <script>(function(d, s, id) {\
          var js, fjs = d.getElementsByTagName(s)[0];\
          if (d.getElementById(id)) return;\
          js = d.createElement(s); js.id = id;\
          js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=1389826367976724";\
          fjs.parentNode.insertBefore(js, fjs);\
        }(document, "script", "facebook-jssdk"));</script>\
\
        <div class="panel-fixed sponsors" ng-controller="sponsorDetails">\
            <div class="hover-text">\
                <ul>\
                    <li>s</li>\
                    <li>r</li>\
                    <li>o</li>\
                    <li>s</li>\
                    <li>n</li>\
                    <li>o</li>\
                    <li>p</li>\
                    <li>s</li>\
                </ul>\
            </div>\
            <div class="sponsors-list">\
                <div class="row">\
                    <a ng-repeat="i in arr.sponsor_list" ng-href="{{i.website}}" target="_blank" class="col-md-2 col-xs-2">\
                        <img ng-src="img/sponsors/{{i.image_src}}" style="">\
                    </a>\
                </div>\
            </div>\
        </div>\
        <div class="panel-fixed facebook">\
            <div class="hover-text">\
                <ul>\
                    <li>k</li>\
                    <li>o</li>\
                    <li>o</li>\
                    <li>b</li>\
                    <li>e</li>\
                    <li>c</li>\
                    <li>a</li>\
                    <li>f</li>\
                </ul>\
            </div>\
            <div style="width:290px;">\
                <div class="fb-page" data-href="https://www.facebook.com/SAE.IITK" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/SAE.IITK"><a href="https://www.facebook.com/SAE.IITK">SAE IIT Kanpur</a></blockquote></div></div>          \
            </div>\
        </div>\
');        