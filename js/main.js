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
    $('.tabsEE').tabs();
    $('.tab').click(function(){
        if ($(this).hasClass('botTab')) {
            switch ($(this).attr('id')) {
                case 'mmTab':
                    $('body').css('background-color', 'orange');
                    break;
                case 'eeTab':
                    $('body').css('background-color', '#2196f3');
                    break;
            
                default:
                    break;
            }
        }

        if ($(this).hasClass('mmDifTab')) {
            if($(this).attr('id') == 'hardTabMM'){
                $('#hardExtraMM').show();
            } else{
                $('#hardExtraMM').hide();
            }
        }
        
        if ($(this).hasClass('eeDifTab')) {
            if($(this).attr('id') == 'hardTabEE'){
                $('#hardExtraEE').show();
            } else{
                $('#hardExtraEE').hide();
            }
        }

        if($(this).hasClass('forestTab')){
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
            $('#no' + t).hide();
        } else {
            $('#' + t).hide();
            $('#no' + t).show();
        }
    });

    $('.orderBird').hide();
    $('.orderMMButton').click(function(){
        $('.orderMM').text($(this).attr('suit'));
        switch ($(this).attr('suit')) {
            case 'fox':
                $('.orderMMBuilding').text('sawmill');
                break;
            case 'bunny':
                $('.orderMMBuilding').text('workshop');
                break;
            case 'mouse':
                $('.orderMMBuilding').text('recruiter');
                break;
            default:
                break;
        }
        $('.noOrderBird').show();
        $('.orderBird').hide();
    });
    $('#orderBirdMM').click(function(){
        $('.orderMM').text('any');
        $('.birdAll').text('all');
        $('.orderBird').show();
        $('.noOrderBird').hide();
    });

    
    $('#vizier1').hide();
    $('#vizier2').hide();
    $('.leaderRule').hide();
    $('#nocharismatic').show();
    $('#randomLeader')
    .click(function(){
        $('#vizier1').show();
        $('#vizier2').show();

        r = Math.floor(Math.random()*4) + 1;
        $('#currentLeader').val(r);
        $('#currentLeader').formSelect();
        $('.leaderRule').hide();
        $('#nocharismatic').show();
        switch (r) {
            case 1:
                $('#despot').show();
                $('#recruit').append($('#vizier1'));
                $('#build').append($('#vizier2'));
                break;
            case 2:
                $('#charismatic').show();
                $('#nocharismatic').hide();
                $('#move').append($('#vizier1'));
                $('#build').append($('#vizier2'));
                break;
            case 3:
                $('#builder').show();
                $('#recruit').append($('#vizier1'));
                $('#move').append($('#vizier2'));
                break;
            case 4:
                $('#commander').show();
                $('#move').append($('#vizier1'));
                $('#battle').append($('#vizier2'));
                break;
                        
            default:
                break;
        }
    });
    $('#currentLeader').change(function(){
        $('#vizier1').show();
        $('#vizier2').show();
        $('.leaderRule').hide();
        $('#nocharismatic').show();
        switch ($('#currentLeader').val()) {
            case '1':
                $('#despot').show();
                $('#recruit').append($('#vizier1'));
                $('#build').append($('#vizier2'));
                break;
            case '2':
                $('#charismatic').show();
                $('#nocharismatic').hide();
                $('#move').append($('#vizier1'));
                $('#build').append($('#vizier2'));
                break;
            case '3':
                $('#builder').show();
                $('#recruit').append($('#vizier1'));
                $('#move').append($('#vizier2'));
                break;
            case '4':
                $('#commander').show();
                $('#move').append($('#vizier1'));
                $('#battle').append($('#vizier2'));
                break;
                        
            default:
                break;
        }
    });

    $('#recruitFox').click(function(){
        $('#recruit').prepend('<span onclick="$(this).remove()"><a class="btn-small red"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#recruitBunny').click(function(){
        $('#recruit').prepend('<span onclick="$(this).remove()"><a class="btn-small yellow"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#recruitMouse').click(function(){
        $('#recruit').prepend('<span onclick="$(this).remove()"><a class="btn-small orange"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#recruitBird').click(function(){
        $('#recruit').prepend('<span onclick="$(this).remove()"><a class="btn-small blue"><i class="material-icons">remove</i></a><br></span>');
    });

    $('#moveFox').click(function(){
        $('#move').prepend('<span onclick="$(this).remove()"><a class="btn-small red"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#moveBunny').click(function(){
        $('#move').prepend('<span onclick="$(this).remove()"><a class="btn-small yellow"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#moveMouse').click(function(){
        $('#move').prepend('<span onclick="$(this).remove()"><a class="btn-small orange"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#moveBird').click(function(){
        $('#move').prepend('<span onclick="$(this).remove()"><a class="btn-small blue"><i class="material-icons">remove</i></a><br></span>');
    });

    $('#battleFox').click(function(){
        $('#battle').prepend('<span onclick="$(this).remove()"><a class="btn-small red"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#battleBunny').click(function(){
        $('#battle').prepend('<span onclick="$(this).remove()"><a class="btn-small yellow"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#battleMouse').click(function(){
        $('#battle').prepend('<span onclick="$(this).remove()"><a class="btn-small orange"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#battleBird').click(function(){
        $('#battle').prepend('<span onclick="$(this).remove()"><a class="btn-small blue"><i class="material-icons">remove</i></a><br></span>');
    });

    $('#buildFox').click(function(){
        $('#build').prepend('<span onclick="$(this).remove()"><a class="btn-small red"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#buildBunny').click(function(){
        $('#build').prepend('<span onclick="$(this).remove()"><a class="btn-small yellow"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#buildMouse').click(function(){
        $('#build').prepend('<span onclick="$(this).remove()"><a class="btn-small orange"><i class="material-icons">remove</i></a><br></span>');
    });
    $('#buildBird').click(function(){
        $('#build').prepend('<span onclick="$(this).remove()"><a class="btn-small blue"><i class="material-icons">remove</i></a><br></span>');
    });

    $("#blitz").hide();
    $("#ironwill").hide();
    $("#hospitals").hide();
    $("#fortified").hide();
    $("#relentless").hide();
    $("#swoop").hide();
    $("#nobility").hide();
    $("#wartax").hide();

    $('.collapsible').collapsible({
        accordion: false
    });
    $('.f1_container').click(function() {
        $(this).toggleClass('active');
    });
    $('.fixed-action-btn').floatingActionButton();
    $('.sidenav').sidenav();
    $('select').formSelect();
    $( ".sortable" ).sortable({
        connectWith: '.sortable',
        cancel: '#vizier1, #vizier2'
    });
});

function reload(){
    if(confirm("Reload page?")){
        location.href = "./";
    }
}