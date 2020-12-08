// $(function () {

//     $("#p1").click( function() {
//             $("#p5").fadeTo(1000, 0.7);
//     });
// });

$(function () {

    $("button").click( function() {
            $("div").animate({left: "600px",
        opacity: 0.5,
        width: "+=150px",
        }, 3000, function() {
$('div').hide()
            }            );
    });
});
