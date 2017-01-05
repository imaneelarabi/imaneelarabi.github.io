$(function () {
    $("#btnShow").click(function () {
        $("#dialog").dialog({
            modal: true,
            title: "Google Maps",
            width: 600,
            hright: 450,
            buttons: {
                Close: function () {
                    $(this).dialog('close');
                }
            },
            open: function () {
                var mapOptions = {
                    center: new google.maps.LatLng(30.9189400, -6.8934100),
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                var map = new google.maps.Map($("#dvMap")[0], mapOptions);
            }
        });
    });
});


$(function () {
    $("#btnShow2").click(function () {
        $("#dialog2").dialog({
            modal: true,
            title: "Google Maps",
            width: 600,
            hright: 450,
            buttons: {
                Close: function () {
                    $(this).dialog('close');
                }
            },
            open: function () {
                var mapOptions = {
                    center: new google.maps.LatLng(35.4652200, -6.0341500),
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                var map = new google.maps.Map($("#dvMap2")[0], mapOptions);
            }
        });
    });
});
