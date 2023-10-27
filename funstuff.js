$(document).ready(function(){
    $("#chair").hover(
        function() {
            $(this).after("<span class='chair-text'>a bit about me</span>");
        },
        function() {
            $(this).next("span.chair-text").remove();
        }
    );
});
$(document).ready(function(){
    $("#phone").hover(
        function() {
            $(this).after("<span class='phone-text'>get in touch</span>");
        },
        function() {
            $(this).next("span.phone-text").remove();
        }
    );
});
$(document).ready(function(){
    $("#art").hover(
        function() {
            $(this).after("<span class='art-text'>check out some things i've made!</span>");
        },
        function() {
            $(this).next("span.art-text").remove();
        }
    );
});
$(document).ready(function(){
    $("#record").hover(
        function() {
            $(this).after("<span class='record-text'>what i'm listening to/reading/watching now</span>");
        },
        function() {
            $(this).next("span.record-text").remove();
        }
    );
});
$(document).ready(function(){
    $("#table").hover(
        function() {
            $(this).after("<span class='record-text'>see my resume</span>");
        },
        function() {
            $(this).next("span.record-text").remove();
        }
    );
});