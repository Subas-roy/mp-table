jQuery(document).ready(function($) {

    defaultPrices();
    
    $("#getTbl").removeClass("tblScroll");

    $(".metalDropdown, .yrDropdown").change(function(){

        var metalLoad = $('.metalDropdown').val();

        if (metalLoad == 'gold') {

            $('.wait').show();
            $('.nodata').hide();
            var yrLoad = $('.yrDropdown').val();

            var gold_am = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/gold_am.json",
                dataType: "json",
                async: true,
                success: function(result) {}                     
            });
            
            var gold_pm = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/gold_pm.json",
                dataType: "json",
                async: true,
                success: function(result) {}  
            });
            
            $.when( gold_am , gold_pm, yrLoad ).done(function( a1, a2, yrLoad) {
                var x1 = a1[0].reverse();
                var x2 = a2[0].reverse();
                // console.log(x1);
                // console.log(x2);
                var output = ""; 
                
                for( i = 0; i < x1.length; i++ ){
                    var date = x1[i].d;
                    if ( date.slice(0, 4) == yrLoad ) {
                        var nodata = x1[1].v[1];
                        output += 
                            `<tr>
                                <td>`+x1[i].d+`</td>
                                <td>`+x1[i].v[0]+`</td>
                                <td>`+x2[i].v[0]+`</td>
                                <td>`+x1[i].v[1]+`</td>
                                <td>`+x2[i].v[1]+`</td>
                                <td>`+x1[i].v[2]+`</td>
                                <td>`+x2[i].v[2]+`</td>
                            </tr>`;  
                    }   
                }
                if (nodata == null) {
                    $('.nodata').show();
                } else {
                    $('.nodata').hide();
                }
                $('.wait').hide();
                $('.nodata').hide();
                $("#getTbl").addClass("tblScroll");
                $('#metal').html("Gold Prices");
                $('#thead1').html(`<tr>
                    <td scope="col"></th>
                    <th colspan="2">USD $</th>
                    <th colspan="2">GBP £</th>
                    <th colspan="2">EUR €</th>
                    </tr>`);
                $('#thead2').html(`<tr>
                    <th scope="col"></th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                </tr>`);
                $('#tbody').html(output);
            });
            
          }  else if (metalLoad == 'silver') {

            $('.wait').show();
            $('.nodata').hide();
            var yrLoad = $('.yrDropdown').val();
    
            var silver = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/silver.json",
                dataType: "json",
                async: true,
                success: function(result) {}                     
            });
            
            $.when( silver, yrLoad ).done(function( a1, yrLoad) {
                var x1 = a1[0].reverse();
                // console.log(x1);
                var output = ""; 
                for( i = 0; i < x1.length; i++ ){
                    var date = x1[i].d;
                    if ( date.slice(0, 4) == yrLoad ) {
                        var nodata = x1[1].v[1];
                        output += 
                            `<tr>
                                <td>`+x1[i].d+`</td>
                                <td>`+x1[i].v[0]+`</td>
                                <td>`+x1[i].v[1]+`</td>
                                <td>`+x1[i].v[2]+`</td>
                            </tr>`;  
                    }   
                }
                if (nodata == null) {
                    $('.nodata').show();
                } else {
                    $('.nodata').hide();
                }
                $('.wait').hide();
                $('.nodata').hide();
                $("#getTbl").addClass("tblScroll");
                $('#metal').html("Silver Prices");
                $('#thead1').html(`<tr>
                    <td scope="col"></th>
                    <th scope="col">USD $</th>
                    <th scope="col">GBP £</th>
                    <th scope="col">EUR €</th>
                    </tr>`);
                    $('#thead2').html('');
                $('#tbody').html(output);
                
            });
           
          } else if (metalLoad == 'platinum') {

            var yrLoad = $('.yrDropdown').val();

            $('.wait').show();
            $('.nodata').hide();
            var platinum_am = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/platinum_am.json",
                dataType: "json",
                async: true,
                success: function(result) {}                     
            });
            
            var platinum_pm = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/platinum_pm.json",
                dataType: "json",
                async: true,
                success: function(result) {}  
            });
            
            $.when( platinum_am , platinum_pm, yrLoad ).done(function( a1, a2, yrLoad) {
                var x1 = a1[0].reverse();
                var x2 = a2[0].reverse();
                // console.log(x1);
                // console.log(x2);
                var output = ""; 
                for( i = 0; i < x1.length; i++ ){
                    var date = x1[i].d;
                    if ( date.slice(0, 4) == yrLoad ) {
                        var nodata = x1[1].v[1];
                        output += 
                            `<tr>
                                <td>`+x1[i].d+`</td>
                                <td>`+x1[i].v[0]+`</td>
                                <td>`+x2[i].v[0]+`</td>
                                <td>`+x1[i].v[1]+`</td>
                                <td>`+x2[i].v[1]+`</td>
                                <td>`+x1[i].v[2]+`</td>
                                <td>`+x2[i].v[2]+`</td>
                            </tr>`;  
                    }   
                }
                if (nodata == null) {
                    $('.nodata').show();
                } else {
                    $('.nodata').hide();
                }
                $('.wait').hide();
                $("#getTbl").addClass("tblScroll");
                $('#metal').html("Platinum Prices");
                $('#thead1').html(`<tr>
                    <td scope="col"></th>
                    <th colspan="2">USD $</th>
                    <th colspan="2">GBP £</th>
                    <th colspan="2">EUR €</th>
                    </tr>`);
                $('#thead2').html(`<tr>
                    <th scope="col"></th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                </tr>`);
                $('#tbody').html(output);
                
            });

          } else if (metalLoad == 'gofo/libor') {

            var yrLoad = $('.yrDropdown').val();
            
            $('.wait').show();
            $('.nodata').hide();
            var gofo = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/gofo.json",
                dataType: "json",
                async: true,
                success: function(result) {}                     
            });
            
            var libor = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/libor.json",
                dataType: "json",
                async: true,
                success: function(result) {}  
            });
            
            var libor_minus_gofo = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/libor_minus_gofo.json",
                dataType: "json",
                async: true,
                success: function(result) {}  
            });
            
            $.when( gofo, libor, libor_minus_gofo, yrLoad ).done(function( a1, a2, a3, yrLoad) {
                var x1 = a1[0].reverse();
                var x2 = a2[0].reverse();
                var x3 = a3[0].reverse();
                // console.log(x1);
                // console.log(x2);
                var output = ""; 
                
                for( i = 0; i < x1.length; i++ ){
                    var date = x1[i].d;
                    if ( date.slice(0, 4) == yrLoad ) {
                       var nodata = x1[1].v[1];
                       output += 
                            `<tr>
                                <td style="min-width: 100px">`+x1[i].d+`</td>

                                <td>`+x1[i].v[0]+`</td>
                                <td>`+x1[i].v[1]+`</td>
                                <td>`+x1[i].v[2]+`</td>
                                <td>`+x1[i].v[3]+`</td>
                                <td>`+x1[i].v[4]+`</td>

                                <td>`+x2[i].v[0]+`</td>
                                <td>`+x2[i].v[1]+`</td>
                                <td>`+x2[i].v[2]+`</td>
                                <td>`+x2[i].v[3]+`</td>
                                <td>`+x2[i].v[4]+`</td>
                                
                                <td>`+x3[i].v[0]+`</td>
                                <td>`+x3[i].v[1]+`</td>
                                <td>`+x3[i].v[2]+`</td>
                                <td>`+x3[i].v[3]+`</td>
                                <td>`+x3[i].v[4]+`</td>
                            </tr>`; 
                    }  
                }
                if (nodata == null) {
                    $('.nodata').show();
                } else {
                    $('.nodata').hide();
                }
                console.log(nodata); 
                $('.wait').hide();
                $("#getTbl").addClass("tblScroll");
                $('#metal').html("GOFO/LIBOR Prices");
                $('#thead1').html(`<tr>
                    <th colspan="6">GOFO</th>
                    <th colspan="6">LIBOR</th>
                    <th colspan="6">LIBOR-GOFO</th>
                    </tr>`);
                $('#thead2').html(`<tr>
                    <th scope="col"></th>
                    <th style="min-width: 90px" scope="col">1 Months</th>
                    <th style="min-width: 90px" scope="col">2 Months</th>
                    <th style="min-width: 90px" scope="col">3 Months</th>
                    <th style="min-width: 90px" scope="col">6 Months</th>
                    <th scope="col">12 Months</th>

                    <th style="min-width: 90px" scope="col">1 Months</th>
                    <th style="min-width: 90px" scope="col">2 Months</th>
                    <th style="min-width: 90px" scope="col">3 Months</th>
                    <th style="min-width: 90px" scope="col">6 Months</th>
                    <th scope="col">12 Months</th>
                    
                    <th style="min-width: 90px" scope="col">1 Months</th>
                    <th style="min-width: 90px" scope="col">2 Months</th>
                    <th style="min-width: 90px" scope="col">3 Months</th>
                    <th style="min-width: 90px" scope="col">6 Months</th>
                    <th scope="col">12 Months</th>
                </tr>`);
                $('#tbody').html(output);
            });
           
          } else if (metalLoad == 'palladium') {

            var yrLoad = $('.yrDropdown').val();
            
            $('.wait').show();
            $('.nodata').hide();
            var palladium_am = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/palladium_am.json",
                dataType: "json",
                async: true,
                success: function(result) {}                     
            });
            
            var palladium_pm = $.ajax({ 
                url: "https://prices.lbma.org.uk/json/palladium_pm.json",
                dataType: "json",
                async: true,
                success: function(result) {}
            });
            
            $.when( palladium_am , palladium_pm, yrLoad ).done(function( a1, a2, yrLoad) {
                var x1 = a1[0].reverse();
                var x2 = a2[0].reverse();
                // console.log(x1);
                // console.log(x2);
                var output = ""; 
                for( i = 0; i < x1.length; i++ ){
                    var date = x1[i].d;
                    if ( date.slice(0, 4) == yrLoad ) {
                        var nodata = x1[1].v[1];
                        output += 
                            `<tr>
                                <td>`+x1[i].d+`</td>
                                <td>`+x1[i].v[0]+`</td>
                                <td>`+x2[i].v[0]+`</td>
                                <td>`+x1[i].v[1]+`</td>
                                <td>`+x2[i].v[1]+`</td>
                                <td>`+x1[i].v[2]+`</td>
                                <td>`+x2[i].v[2]+`</td>
                            </tr>`;  
                    }   
                }
                if (nodata == null) {
                    $('.nodata').show();
                } else {
                    $('.nodata').hide();
                }
                $('.wait').hide();
                $("#getTbl").addClass("tblScroll");
                $('#metal').html("Palladium Prices");
                $('#thead1').html(`<tr>
                    <td scope="col"></th>
                    <th colspan="2">USD $</th>
                    <th colspan="2">GBP £</th>
                    <th colspan="2">EUR €</th>
                    </tr>`);
                $('#thead2').html(`<tr>
                    <th scope="col"></th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                    <th scope="col">AM</th>
                    <th scope="col">PM</th>
                </tr>`);
                $('#tbody').html(output);
            });
        }
    });

    function defaultPrices() {

        $('.wait').show();
        $('.nodata').hide();
        var yrLoad = new Date().getFullYear();
        var gold_am = $.ajax({ 
            url: "https://prices.lbma.org.uk/json/gold_am.json",
            dataType: "json",
            async: true,
            success: function(result) {}                     
        });
        
        var gold_pm = $.ajax({ 
            url: "https://prices.lbma.org.uk/json/gold_pm.json",
            dataType: "json",
            async: true,
            success: function(result) {}  
        });
        
        $.when( gold_am , gold_pm, yrLoad ).done(function( a1, a2, yrLoad) {
            var x1 = a1[0].reverse();
            var x2 = a2[0].reverse();
            // console.log(x1);
            // console.log(x2);
            var output = ""; 
            
            for( i = 0; i < x1.length; i++ ){
                var date = x1[i].d;
                if ( date.slice(0, 4) == yrLoad ) {
                    var nodata = x1[1].v[1];
                    output += 
                        `<tr>
                            <td>`+x1[i].d+`</td>
                            <td>`+x1[i].v[0]+`</td>
                            <td>`+x2[i].v[0]+`</td>
                            <td>`+x1[i].v[1]+`</td>
                            <td>`+x2[i].v[1]+`</td>
                            <td>`+x1[i].v[2]+`</td>
                            <td>`+x2[i].v[2]+`</td>
                        </tr>`;  
                }   
            }
            if (nodata == null) {
                $('.nodata').show();
            } else {
                $('.nodata').hide();
            }
            console.log(nodata); 
            $('.wait').hide();
            $("#getTbl").addClass("tblScroll");
            $('#metal').html("Gold Prices");
            $('#thead1').html(`<tr>
                <td scope="col"></th>
                <th colspan="2">USD $</th>
                <th colspan="2">GBP £</th>
                <th colspan="2">EUR €</th>
                </tr>`);
            $('#thead2').html(`<tr>
                <th scope="col"></th>
                <th scope="col">AM</th>
                <th scope="col">PM</th>
                <th scope="col">AM</th>
                <th scope="col">PM</th>
                <th scope="col">AM</th>
                <th scope="col">PM</th>
            </tr>`);
            $('#tbody').html(output);
        });
    }
});

// https://prices.lbma.org.uk/json/gold_am.json



            