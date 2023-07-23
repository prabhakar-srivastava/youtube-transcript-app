
//disabled error message


export const transScribe = () => {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];

    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    var player: any;
    // var YT: any = new YT.Player
    try {
        //@ts-ignore
        player = new YT.Player('player', {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    } catch (error) {
        console.log('error gettting YT player', error);

    }



    function onPlayerStateChange(event: { data: any; }) {
        var Update;
        var ready;
        //@ts-ignore
        if (event.data == YT.PlayerState.PLAYING) {
            ready = setInterval(function () {
                onReady()
            }, 100)
            Update = setInterval(function () {
                UpdateMarkers()
            }, 300);
        } else {
            clearInterval(ready)
            clearInterval(Update);
        }
    }

    // Sample Markers on Page
    var MarkersInit = function (markers: any[]) {
        var elements = document.querySelectorAll('.youtube-marker');
        // console.log(elements, 'ekesfsd');

        Array.prototype.forEach.call(elements, function (el, i) {
            var time_start = el.dataset.start;
            var time_end = el.dataset.end;
            var id = el.dataset.id;;
            if (id >= 1) {
                id = id - 1;
            } else {
                id = 0;
            }
            let marker = { time_start: null, time_end: null, dom: null };
            marker.time_start = time_start;
            marker.time_end = time_end;
            marker.dom = el;
            if (typeof (markers[id]) === 'undefined') {
                markers[id] = [];
            }
            markers[id].push(marker);
        });
    }


    var markers: any[][] = [];


    const onReady = () => {
        // Init Markers
        MarkersInit(markers);

        var elements = document.querySelectorAll('.youtube-marker');
        Array.prototype.forEach.call(elements, function (el, i) {
            el.onclick = function () {
                // Get Data Attribute
                var pos = el.dataset.start;
                // Seek
                player.seekTo(pos);
            }
        });

    }

    function UpdateMarkers() {
        var current_time = player?.getCurrentTime();
        var j = 0;
        markers[j].forEach(function (marker: { time_start: number; time_end: number; dom: { classList: { add: (arg0: string) => void; remove: (arg0: string) => void; }; }; }, i: any) {

            if (current_time >= marker.time_start && current_time <= marker.time_end) {
                marker.dom.classList.add("youtube-marker-current");
            } else {
                marker.dom.classList.remove("youtube-marker-current");
            }
        });
    }
}