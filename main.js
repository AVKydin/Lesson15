// // $(selector).action();

// // $(document).ready(function () { })
// // або
// // $(function(){})

// $(document).ready(function () {
//   //комбінації селекторів
//   // $('*') - select all elements
//   // $(this) - select current HTML element
//   // $('tag') - select all tag elements
//   // $('.class') - select all class elements
//   // $('#id') - select all id element
//   // $('ul li:first-child') - select first li in ul
//   // $('[href]') - select all elements with an href attributes
//   // $('[target="_blank"]') - select all elements with an target attributes value equal to '_blank'
//   // $('p[title="some"]') - select all elements with an title attributes value equal to 'some'
//   // jQuery Event Methods
//   /* MouseEvent
//             - click
//             - dbclick
//             - mouseover
//             - mouseout
//             - mousemove
//             - mouseleave
//             - mousedown
//             - mouseup
//         */
//   /* KeyboardEvent
//             - keydown
//             - keyup
//             - keypress
//         */
//   /* FormEvent
//             - focus
//             - blur
//             - change
//             - input
//             - submit
//         */
//   /* Document/Window
//             - scroll
//             - resize
//             - load
//             - unload
//         */
//   // $('#get').click(function () {
//   //     console.log('Click works');
//   // })
//   //  html(), text(), val()
//   // $('#get').click(function () {
//   //     console.log("html: ", $("#box").html());
//   //     console.log("text: ", $("#box").text());
//   //     console.log("value: ", $("#login").val());
//   // })
    
//     // $('#get').click(function () {
//     //     // $("#box").html('<h1>New Box</h1>');
//     //     // $("#box").text("<h1>New Box</h1>");
//     //     $("#login").val('some value');
//     // })

//     // $('#get').click(function () {
//     //     // console.log("attr: ", $("#link").attr("href"));
//     //    $("#link").attr("href", "https://www.google.com");
//     //    $("#link").attr("target", "_blank");
//     //    $("#link").text("google");
//     // })

//     // $("#get").click(function () {
//     // //   // console.log("attr: ", $("#link").attr("href"));
//     // //     $("#link").attr({
//     // //       href: "https://www.google.com",
//     // //       target: "_blank",
//     // //     });
//     // //     $("#link").text("google");
//     //         $("#link").prop("href", "https://www.google.com");
//     //         $("#link").prop("target", "_blank");
//     // });

//     // $('#rem').click(function () {
//     //     $('#link').removeAttr('href');
//     // })

//     // $("#get").click(function () {
//     //     console.log($(this));
//     //  })

//     // $("#get").click(() => {
//     //   console.log($(this));
//     // });

//     // empty(), remove();

//     // $('#get').click(() => {
//     //     $('#box').empty()
//     // })

//     // $("#get").click(() => {
//     // //   $("#box").remove();
//     // //   $("p").remove(".text");
//     //   $("p.text").remove();
//     // });

//     // $("#get").click(() => {
//     //   // $("li").css("color", "red");
//     //   // $("li").css({
//     //   //     color: "red",
//     //   //     textAlign: 'center'
//     //   // });
//     //   // $("li:first-child").css("color", "red");
//     //   // $("li:odd").css("color", "red");
//     //   // $("li:even").css("color", "blue");
//     // //    $("li:gt(2)").css("color", "red");
//     // //    $("li:lt(2)").css("color", "blue");
//     // //    $("li:eq(2)").css("color", "yellow");
//     // //    $("li").eq(2).css("color", "yellow");
//     //     // $("li:contains('item 5')").css("color", "red");
//     //     // $("li:has('b')").css("color", "red");
//     // })

//     // $('.add').click(() => {
//     //   //  $(".block").addClass("red");
//     //   //  $(".block").addClass("red shadow");
//     //   //    $(".block").show('');
//     //     //  $(".block").fadeIn();
//     //     //  $(".block").fadeIn(1000);
//     //     // $(".block").fadeIn(1000, function () {
//     //     //      $(this).addClass('shadow');
//     //     //  });
//     //     // $(".block").slideDown();
//     //     $(".block")
//     //       .fadeIn()
//     //       .animate(
//     //         {
//     //           width: "150px",
//     //           height: "200px",
//     //           backgroundColor: "red",
//     //         },
//     //         500
//     //       )
//     //       .animate(
//     //         {
//     //           width: "100px",
//     //           height: "150px",
//     //         },
//     //         500,
//     //         "easeOutElastic"
//     //       );
//     // })
    
//     // $(".remove").click(() => {
//     //   //   $(".block").removeClass("red");
//     //   // $(".block").removeClass("red shadow");
//     // //   $(".block").hide('');
//     //     //  $(".block").fadeOut();
//     //     //  $(".block").fadeOut(1000);
//     //     // $(".block").slideUp();
//     //      $(".block")
//     //        .animate(
//     //          {
//     //            width: "150px",
//     //            height: "200px",
//     //          },
//     //          500
//     //        )
//     //        .animate(
//     //          {
//     //            width: "100px",
//     //            height: "150px",
//     //          },
//     //          500
//     //        )
//     //        .fadeOut();
//     // });

//     // $(".toggle").click(() => {
//     //   // $(".block").toggleClass("red");
//     //   // $(".block").removeClass("red shadow");
//     // //   $(".block").toggle();
//     //     //  $(".block").fadeToggle();
//     //     //  $(".block").fadeToggle(1000);
//     //     // $(".block").slideToggle();
//     //     $(".block").slideToggle(1000);
        
//     // });


// })
$(document).ready(function () {
 
    $("#task1").click(() => {
        
        $(".task1").css({
            display: "block",
        });

        $(document).ready(function () {
            setTimeout(() => {
                $("h1").text("2");
            }, 300);
        });

        $(document).ready(function () {
            $(".color-box").fadeIn().animate(
                {
                    height: "385px",
                },
                60000
            );
        });

        $(document).ready(function () {
            setTimeout(() => {
                $("h1").text("1");
            }, 60000);
        });

        $(document).ready(function () {
            $(".color-box").fadeIn().animate(
                {
                    height: "0px",
                },
                60000
            );

            $(document).ready(function () {
                setTimeout(() => {
                    $("h1").text("0");
                }, 120000);
            });
        });
    })


    $("#task2").click(() => {

        let a = $('span[id="s1"]').text();
        let b = $('b[class="s2"]').text();
        let c = $("#second i").text();
        let d = $("q[title]").text();
        let e = $("a[target='_blank']").text();
        let f = $('span[class="extra"]:eq(1)').text();

        alert(a + b + c + d + e + f);
    })
})
