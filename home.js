// $(function() {
//     $('#sidebarCollapse').on('click', function() {
//         $('#sidebar, #content').toggleClass('hover');
//     });
// });
$(document).ready(function() {
    $("#sidebarCollapse").click(function() {
        $('#sidebar').toggleClass('sidebar');
        $(' #content').toggleClass('content ');
        // $(' #carousel').toggleClass('carousel-inner1 ');
        // $(' #one').toggleClass('carousel-indicators1 ');
        // $(' #two').toggleClass('carousel-control-prev1  ');
        // $(' #hello').toggleClass('Media1  ');
        // // $(' #Media2').toggleClass('Media1  ');
        // $(' #Media3').toggleClass('Media11');
        // $(' #Media5 ').toggleClass('Media13');
        // $(' #Media6').toggleClass('Media12');

    });
});