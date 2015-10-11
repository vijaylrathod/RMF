/********** Start Create HTML 5 ELEMENT ********/
document.createElement("section");
document.createElement("header");
document.createElement("footer");
document.createElement("article");
document.createElement("aside");
document.createElement("nav");
/********** End Create HTML 5 ELEMENT ********/

var regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var regMob = /^\d{10}$/;
var regPAN = /^[A-Z]{5}\d{4}[A-Z]{1}/;

$(document).ready(function () {

    var panno = getUrlVars()["panno"];
    var username = getUrlVars()["username"];
    var mobileno = getUrlVars()["mobileno"];
    var emailid = getUrlVars()["emailid"];

    $('.elsschatusername').val(username);
    $('.elsschatmobileno').val(mobileno);
    $('.elsschatemailid').val(emailid);
    var panverificationreply = getUrlVars()["panverification"];


    if (panno == "") {
        $('.thankYouSection').find('h3').html('<div>Thank you for your interest in Reliance Retirement Fund.<br/><br/>Our representative  will get in touch with you shortly.<br/>' +
                    '<br/>For more information, ' + '<a href="https://www.reliancemutual.com/funds-performance/reliance-retirement-fund/" target="_blank"> Click here</a><br/></div>');
    }
    else {
        if (panverificationreply == "Valid%20Pan") {
            $('.thankYouSection').find('h3').html('<div>Congratulations!! You are KYC compliant and eligible to invest.<br/><br/><a href="https://investeasy.reliancemutual.com/online" target="_blank">Click here</a>, to invest in Reliance Retirement Fund.');
        }
        else {
            $('.thankYouSection').find('h3').html('<div>Thank you for your interest.<br/><br/>Kindly note that your PAN is yet to be KRA KYC compliant.<br/>' +
                    '<br/>To invest you need to be KRA KYC compliant.<br/><br/>Please '
                    + '<a href="https://www.reliancemutual.com/InvestorServices/DownloadForms/KYC-Application-Form-for-Individuals.pdf" target="_blank">click here</a>' +
                    ' for the KRA KYC form and guidelines.<br/><br/> For any help regarding KRA KYC compliance, please initiate a <a style="cursor:pointer;" onclick=openwebchat("'
                    + username + '","' + mobileno + '","' + emailid + '"); >web chat</a> with us.</div>');
        }
    }

    //            $('.elsschatusername').val(username);
    //            $('.elsschatemailid').val(emailid);
    //            $('.elsschatmobileno').val(mobileno);

    $(".elssleadform").css("display", "none");
    $('.thankYouSection').css("display", "block");

    /*$('.chatwithUs-container h2').click(function () {
        $(this).toggleClass('active');
        $(".elssleadform").css("display", "block");
        $('.thankYouSection').css("display", "none");
        if ($(this).hasClass('active')) {
            $('.chatwithus-form').show();
            $('.chatwithUs-container').animate({
                'bottom': 'inherit',
                'top': '0px'
            });
        } else {
            $('.chatwithus-form').hide();
            $('.chatwithUs-container').removeAttr('style');
        }

    });*/

    $('.btnELSSChat').on("click", function () {
        var username = $('.elsschatusername').val();
        var mobileno = $('.elsschatmobileno').val();
        var emailid = $('.elsschatemailid').val();
        var isValid = ValidationforChat(username, mobileno, emailid);
        if (isValid) {
            ChatWithUs(username, mobileno, emailid);
           // window.open("/campaigns/NewCampaign/index.html", "_self")

            window.open("/campaigns/Retirement%20fund%20New/index.html", "_self")
        }

      

       

    });

});


//function ChatWithUs(username, mobileno, emailid) {
//    if (!window.location.origin) {
//        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//    }
//
//    var Url = window.location.origin;
//
//    $.ajax({
//        type: "POST",
//        url: Url + '/_layouts/15/Reliance.MF.ApplicationPages/SchemeSearch.aspx/ChatWithUs',
//        data: JSON.stringify({ Name: username, EmailID: emailid, MobileNo: parseInt(mobileno) }),
//        dataFilter: function (data) { return data; },
//        dataType: 'json',
//        async: false,
//        contentType: 'application/json; charset=utf-8',
//        success: function (data) {
//            $('.elsschatusername').val('');
//            $('.elsschatemailid').val('');
//            $('.elsschatmobileno').val('');
//            $('.chatwithUs-container h2').click();
//            window.open(data.d, '_blank');
//        }
//    });
//}



//function ValidationforChat(username, mobileno, emailid) {
//    var isValid = true;
//    if (username == "") {
//        $('.elsschatusername').siblings('span.error').css('display', 'block');
//        isValid = false;
//    }
//    else {
//        $('.elsschatusername').siblings('span.error').css('display', 'none');
//    }
//
//    if (mobileno == "") {
//        $('.elsschatmobileno').siblings('span.error').text('Please enter your mobile number.');
//        $('.elsschatmobileno').siblings('span.error').css('display', 'block');
//        isValid = false;
//    }
//    else {
//        $('.elsschatmobileno').siblings('span.error').css('display', 'none');
//        if (!regMob.test(mobileno)) {
//            $('.elsschatmobileno').siblings('span.error').text('Please enter valid mobile number.');
//            $('.elsschatmobileno').siblings('span.error').css('display', 'block');
//            isValid = false;
//        }
//    }
//
//    if (emailid == "") {
//        $('.elsschatemailid').siblings('span.error').text('Please enter your email id.');
//        $('.elsschatemailid').siblings('span.error').css('display', 'block');
//        isValid = false;
//    }
//    else {
//        $('.elsschatemailid').siblings('span.error').css('display', 'none');
//        if (!regEmail.test(emailid)) {
//            $('.elsschatemailid').siblings('span.error').text('Please enter valid email id.');
//            $('.elsschatemailid').siblings('span.error').css('display', 'block');
//            isValid = false;
//        }
//    }
//    return isValid;
//}


//        function getUrlVars() {
//            var vars = [], hash;
//            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//            for (var i = 0; i < hashes.length; i++) {
//                hash = hashes[i].split('=');
//                vars.push(hash[0]);
//                vars[hash[0]] = hash[1];
//            }
//            return vars;
//        }
//
//
//        function openwebchat(username, mobileno, emailid) {
//            $('.elsschatusername').val(username);
//            $('.elsschatemailid').val(emailid);
//            $('.elsschatmobileno').val(mobileno);
//            $('.chatwithUs-container h2').toggleClass('active');
//            $(".elssleadform").css("display", "block");
//            $('.thankYouSection').css("display", "none");
//            if ($('.chatwithUs-container h2').hasClass('active')) {
//                $('.chatwithus-form').show();
//                $('.chatwithUs-container').animate({
//                    'bottom': 'inherit',
//                    'top': '0px'
//                });
//            } else {
//                $('.chatwithus-form').hide();
//                $('.chatwithUs-container').removeAttr('style');
//            }
//        }