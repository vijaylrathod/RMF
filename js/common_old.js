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
    $('.btnELSS').on("click", function () {


        var username = $('.elssusername').val();
        var mobileno = $('.elssmobileno').val();
        var emailid = $('.elssemailid').val();
        var panno = $('.elsspan').val().toUpperCase();
        var isauthorized = $('.chkAuthorize')[0].checked;

        var isValid = ValidationforDataSubmit(username, mobileno, emailid);

        if (isValid) {

            if (panno.toString() != "") {
                isValid = validatePAN(panno);
                if (isValid) {
                    PANVerification(username, mobileno, emailid, panno, isauthorized);
                }
            }
            else {
                if (isValid) {
                    SaveELSSLead(username, mobileno, emailid, panno, isauthorized, "");
                }
            }
        }

    });
});






$(function () {
    $(".autocapcha").on("keydown", function (e) {
        e.preventDefault()
    });

    $(".autocapcha").bind("contextmenu", function (e) {
        e.preventDefault()
    });

    $(".autocapchaForm").on("keydown", function (e) {
        e.preventDefault()
    });

    $(".autocapchaForm").bind("contextmenu", function (e) {
        e.preventDefault()
    });

    DrawCaptchaForm();

    DrawCaptcha();

    $('input[id$="btnrefresh"]').click(function () {
        DrawCaptcha();
    });

    $('input[id$="btnrefreshFormField"]').click(function () {
        DrawCaptchaForm();
    });

    $('.chatwithUs-container h2').click(function () {
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

    });



    $('.btnELSSChat').on("click", function () {
        var username = $('.elsschatusername').val();
        var mobileno = $('.elsschatmobileno').val();
        var emailid = $('.elsschatemailid').val();
        var isValid = ValidationforChat(username, mobileno, emailid);
        if (isValid) {
            ChatWithUs(username, mobileno, emailid);
        }
    });
});

function DrawCaptcha() {
    var e = Math.ceil(Math.random() * 10) + "";
    var t = Math.ceil(Math.random() * 10) + "";
    var n = Math.ceil(Math.random() * 10) + "";
    var r = Math.ceil(Math.random() * 10) + "";
    var i = Math.ceil(Math.random() * 10) + "";
    var s = e + " " + t + " " + " " + n + " " + r + " " + i;
    $("[id$=txtCaptcha]").val(s)
}

function DrawCaptchaForm() {
    var e = Math.ceil(Math.random() * 10) + "";
    var t = Math.ceil(Math.random() * 10) + "";
    var n = Math.ceil(Math.random() * 10) + "";
    var r = Math.ceil(Math.random() * 10) + "";
    var i = Math.ceil(Math.random() * 10) + "";
    var s = e + " " + t + " " + " " + n + " " + r + " " + i;
    $("[id$=txtCaptchaFormField]").val(s)
}

function ValidationforDataSubmit(username, mobileno, emailid) {
    var isValid = true;
    if (username == "") {
        $('.elssusername').siblings('span.error').css('display', 'block');
        isValid = false;
    }
    else {
        $('.elssusername').siblings('span.error').css('display', 'none');
    }

    if (mobileno == "") {
        $('.elssmobileno').siblings('span.error').text('Please enter your mobile number.');
        $('.elssmobileno').siblings('span.error').css('display', 'block');
        isValid = false;
    }
    else {
        $('.elssmobileno').siblings('span.error').css('display', 'none');
        if (!regMob.test(mobileno)) {
            $('.elssmobileno').siblings('span.error').text('Please enter valid mobile number.');
            $('.elssmobileno').siblings('span.error').css('display', 'block');
            isValid = false;
        }
    }

    if (emailid == "") {
        $('.elssemailid').siblings('span.error').text('Please enter your email id.');
        $('.elssemailid').siblings('span.error').css('display', 'block');
        isValid = false;
    }
    else {
        $('.elssemailid').siblings('span.error').css('display', 'none');
        if (!regEmail.test(emailid)) {
            $('.elssemailid').siblings('span.error').text('Please enter valid email id.');
            $('.elssemailid').siblings('span.error').css('display', 'block');
            isValid = false;
        }
    }

    $autocaptcha = $(".autocapcha");
    $usercaptch = $(".usercaptcha");
    var str1 = removeSpaces($autocaptcha.val());
    var str2 = removeSpaces($usercaptch.val());
    if (str1 != str2) {
        $('.captchaError').css('display', 'block');
        isValid = false;
    }
    else {
        $('.captchaError').css('display', 'none');
    }

    return isValid;
}

function ValidationforChat(username, mobileno, emailid) {
    var isValid = true;
    if (username == "") {
        $('.elsschatusername').siblings('span.error').css('display', 'block');
        isValid = false;
    }
    else {
        $('.elsschatusername').siblings('span.error').css('display', 'none');
    }

    if (mobileno == "") {
        $('.elsschatmobileno').siblings('span.error').text('Please enter your mobile number.');
        $('.elsschatmobileno').siblings('span.error').css('display', 'block');
        isValid = false;
    }
    else {
        $('.elsschatmobileno').siblings('span.error').css('display', 'none');
        if (!regMob.test(mobileno)) {
            $('.elsschatmobileno').siblings('span.error').text('Please enter valid mobile number.');
            $('.elsschatmobileno').siblings('span.error').css('display', 'block');
            isValid = false;
        }
    }

    if (emailid == "") {
        $('.elsschatemailid').siblings('span.error').text('Please enter your email id.');
        $('.elsschatemailid').siblings('span.error').css('display', 'block');
        isValid = false;
    }
    else {
        $('.elsschatemailid').siblings('span.error').css('display', 'none');
        if (!regEmail.test(emailid)) {
            $('.elsschatemailid').siblings('span.error').text('Please enter valid email id.');
            $('.elsschatemailid').siblings('span.error').css('display', 'block');
            isValid = false;
        }
    }
    return isValid;
}

function removeSpaces(string) {
    return string.split(' ').join('');
}

function ChatWithUs(username, mobileno, emailid) {
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

    var Url = window.location.origin;

    $.ajax({
        type: "POST",
        url: Url + '/_layouts/15/Reliance.MF.ApplicationPages/SchemeSearch.aspx/ChatWithUs',
        data: JSON.stringify({ Name: username, EmailID: emailid, MobileNo: parseInt(mobileno) }),
        dataFilter: function (data) { return data; },
        dataType: 'json',
        async: false,
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $('.elsschatusername').val('');
            $('.elsschatemailid').val('');
            $('.elsschatmobileno').val('');
            $('.chatwithUs-container h2').click();
            window.open(data.d, '_blank');
        }
    });
}

function PANVerification(username, mobileno, emailid, panno, isauthorized) {
    var isValid = true;
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

    var Url = window.location.origin;

    $.ajax({
        type: "POST",
        url: Url + '/_layouts/15/Reliance.MF.ApplicationPages/SchemeSearch.aspx/ELSSPANVerification',
        data: JSON.stringify({ PANNo: panno }),
        dataFilter: function (data) { return data; },
        dataType: 'json',
        async: false,
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            var panverificationreply = data.d;
            SaveELSSLead(username, mobileno, emailid, panno, isauthorized, panverificationreply);
        }
    });
}



function validatePAN(PANNo) {
    var isValid = true;
    if (!regPAN.test(PANNo)) {
        $('.elsspan').siblings('span.error').text('Please enter valid PAN number.');
        $('.elsspan').siblings('span.error').css('display', 'block');
        isValid = false;
    }
    else {
        $('.elsspan').siblings('span.error').css('display', 'none');
    }
    return isValid;
}

function SaveELSSLead(username, mobileno, emailid, panno, isauthorize, panverificationreply) {
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

    var Url = window.location.origin;
    var campaignname = $('.hdnCampaignName').val();
    $.ajax({
        type: "POST",
        url: Url + '/_vti_bin/RMF.Services/MobileAppService.svc/AddELSSCampaignLead',
        data: JSON.stringify({ CustomerName: username, EmailID: emailid, MobileNo: mobileno, PANNo: panno, IsAuthorized: isauthorize, PANVerificationReply: panverificationreply, CampaignName: campaignname }),
        dataFilter: function (data) { return data; },
        dataType: 'json',
        async: false,
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $('.elssusername').val('');
            $('.elssmobileno').val('');
            $('.elssemailid').val('');
            $('.elsspan').val('');
            $('.usercaptcha').val('');
            $('.chkAuthorize')[0].checked = true;
            DrawCaptchaForm();
            DrawCaptcha();
            $('.elsschatusername').val(username);
            $('.elsschatemailid').val(emailid);
            $('.elsschatmobileno').val(mobileno);


            //window.open("/Campaigns/NewCampaign/thankyou.html?panverification=" + panverificationreply + "&panno=" + panno + "&username="+username+"&mobileno="+mobileno+"&emailid="+emailid+"", "_self")
            //campaigns/Retirement%20fund%20New/thankyou.html
             window.open("/campaigns/Retirement%20fund%20New/thankyou.html?panverification=" + panverificationreply + "&panno=" + panno + "&username="+username+"&mobileno="+mobileno+"&emailid="+emailid+"", "_self")
        }
    });
}

function openwebchat(username, mobileno, emailid) {
    $('.elsschatusername').val(username);
    $('.elsschatemailid').val(emailid);
    $('.elsschatmobileno').val(mobileno);
    $('.chatwithUs-container h2').toggleClass('active');
    $(".elssleadform").css("display", "block");
    $('.thankYouSection').css("display", "none");
    if ($('.chatwithUs-container h2').hasClass('active')) {
        $('.chatwithus-form').show();
        $('.chatwithUs-container').animate({
            'bottom': 'inherit',
            'top': '0px'
        });
    } else {
        $('.chatwithus-form').hide();
        $('.chatwithUs-container').removeAttr('style');
    }
}