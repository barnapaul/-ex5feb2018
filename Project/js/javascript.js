    $(document).ready(function() {
            $('.single-item').slick({
                nextArrow: '<i class="fa fa-arrow-circle-right fa-3x"></i>',
                prevArrow: '<i class="fa fa-arrow-circle-left fa-3x"></i>',
            });
        });

        $(document).ready(function() {
            $.getJSON('https://baconipsum.com/api/?callback=?', {
                    'type': 'meat-and-filler',
                    'start-with-lorem': '1',
                    'paras': '3'
                },
                function(baconGoodness) {
                    if (baconGoodness && baconGoodness.length > 0) {
                        $("#bacon").html('');
                        for (var i = 0; i < baconGoodness.length; i++)
                            $("#bacon").append('<p>' + baconGoodness[i] + '</p>');
                        $("#bacon").show();
                    }
                });
        });