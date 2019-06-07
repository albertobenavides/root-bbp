function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
$(document).ready(function(){
    var clearings = ['Top left', 'Top right', 'Bottom left', 'Bottom right'];
    var r = Math.floor(Math.random()*4);
    $('#startingClearing').text(clearings[r]);
    
    r = Math.floor(Math.random()*4);
    $('#startingClearing2').text(clearings[r]);

    var buildings = ['recruiter', 'sawmill', 'workshop'];
    shuffle(buildings);
    $('#startingBuildings').text(buildings[0] + ', ' + buildings[1] + ' and ' + buildings[2] + ' ');

    var leaders = ["Despot", "Charismatic", "Builder", "Commander"];
    r = Math.floor(Math.random()*4);
    $('#startingLeader').text(leaders[r]);

    $('#hardExtra').hide();
    $('#hardExtraEE').hide();

    $('.winterImage').hide();
    $('.tabs').tabs();
    $('.tab').click(function(){
        console.log($(this).attr('id'));   
        if($(this).attr('id', 'hardTab')){
            $('#hardExtra').show();
        } else{
            $('#hardExtra').hide();
        }

        if($(this).attr('id', 'hardTabEE')){
            $('#hardExtraEE').show();
        } else{
            $('#hardExtraEE').hide();
        }
        if($(this).hasClass('forestTab')){
            $('.forestTab').select();
            $('.forestImage').show();
            $('.winterImage').hide();
        }
        else if($(this).hasClass('winterTab')){
            $('.winterImage').show();
            $('.forestImage').hide();
        }
    });

    $('.filled-in').change(function() {
        var t = $(this).val();
        if($(this).is(":checked")) {
            $('#' + t).show();
        } else {
            $('#' + t).hide();
        }
    });
    $("#blitz").hide();
    $("#ironwill").hide();
    $("#hospitals").hide();
    $("#fortified").hide();

    $('.collapsible').collapsible({
        accordion: false
    });
    $('.f1_container').click(function() {
        $(this).toggleClass('active');
    });
    $('.fixed-action-btn').floatingActionButton();
    $('.sidenav').sidenav();
});

function reload(){
    if(confirm("Reload page?")){
        location.href = "./";
    }
}