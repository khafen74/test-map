//API Key
//AIzaSyBfWGjF4Ykl6ZBUjuTULiGHSd0vKVZzLWA

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('#map').length > 0)
        {
            if (document.querySelector('html').lang)
                lang = document.querySelector('html').lang;
            else
                lang = 'en';
            
            var js_file = document.createElement('script');
            js_file.type = 'text/javascript';
            js_file.src =  'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&language=' + lang;
            document.getElementsByTagName('head')[0].appendChild(js_file);
            
            var js_file = document.createElement('script');
            js_file.type = 'text/javascript';
            js_file.src =  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBfWGjF4Ykl6ZBUjuTULiGHSd0vKVZzLWA&callback=initMap';
            document.getElementsByTagName('head')[0].appendChild(js_file);
        }
});

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044}
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    })
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    })
}