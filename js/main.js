

$(document).ready(function () {
    var obj = JSON.parse(localStorage.getItem('Checkout'));
    console.log(obj);


    if (obj == null) {
        var storage = '{"Checkout":[]}';
        var obj = JSON.parse(storage);
        console.log(obj);

        localStorage.setItem('Checkout', JSON.stringify(obj));
        console.log("called");
    }

    allStorage();
    // ANTOINETTE WESTPHAL COMAD
    $("#awcb1-button").on('click', function () {

        var title = $("#awcb1-title").text();

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb2-button").on('click', function () {
        var title = $("#awcb2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb3-button").on('click', function () {
        var title = $("#awcb3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb4-button").on('click', function () {
        var title = $("#awcb4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb5-button").on('click', function () {
        var title = $("#awcb5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb6-button").on('click', function () {
        var title = $("#awcb6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb7-button").on('click', function () {
        var title = $("#awcb7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb8-button").on('click', function () {
        var title = $("#awcb8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb9-button").on('click', function () {
        var title = $("#awcb9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb1-button-rent").on('click', function () {

        var title = $("#awcb1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb2-button-rent").on('click', function () {
        var title = $("#awcb2-title").text();
        console.log(obj);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb3-button-rent").on('click', function () {
        var title = $("#awcb3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb4-button-rent").on('click', function () {
        var title = $("#awcb4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb5-button-rent").on('click', function () {
        var title = $("#awcb5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb6-button-rent").on('click', function () {
        var title = $("#awcb6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb7-button-rent").on('click', function () {
        var title = $("#awcb7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb8-button-rent").on('click', function () {
        var title = $("#awcb8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#awcb9-button-rent").on('click', function () {
        var title = $("#awcb9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    // ARTS AND SCIENCES
    $("#as1-button").on('click', function () {
        var title = $("#as1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as2-button").on('click', function () {
        var title = $("#as2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as3-button").on('click', function () {
        var title = $("#as3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as4-button").on('click', function () {
        var title = $("#as4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as5-button").on('click', function () {
        var title = $("#as5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as6-button").on('click', function () {
        var title = $("#as6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as7-button").on('click', function () {
        var title = $("#as7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as8-button").on('click', function () {
        var title = $("#as8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as9-button").on('click', function () {
        var title = $("#as9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as1-button-rent").on('click', function () {
        var title = $("#as1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as2-button-rent").on('click', function () {
        var title = $("#as2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as3-button-rent").on('click', function () {
        var title = $("#as3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as4-button-rent").on('click', function () {
        var title = $("#as4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as5-button-rent").on('click', function () {
        var title = $("#as5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as6-button-rent").on('click', function () {
        var title = $("#as6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as7-button-rent").on('click', function () {
        var title = $("#as7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as8-button-rent").on('click', function () {
        var title = $("#as8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#as9-button-rent").on('click', function () {
        var title = $("#as9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    // BENNETT S. LEBOW COLL. OF BUS.

    $("#bs1-button").on('click', function () {
        var title = $("#bs1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs2-button").on('click', function () {
        var title = $("#bs2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs3-button").on('click', function () {
        var title = $("#bs3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs4-button").on('click', function () {
        var title = $("#bs4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs5-button").on('click', function () {
        var title = $("#bs5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs6-button").on('click', function () {
        var title = $("#bs6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs7-button").on('click', function () {
        var title = $("#bs7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs8-button").on('click', function () {
        var title = $("#bs8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs9-button").on('click', function () {
        var title = $("#bs9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs1-button-rent").on('click', function () {
        var title = $("#bs1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs2-button-rent").on('click', function () {
        var title = $("#bs2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs3-button-rent").on('click', function () {
        var title = $("#bs3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs4-button-rent").on('click', function () {
        var title = $("#bs4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs5-button-rent").on('click', function () {
        var title = $("#bs5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs6-button-rent").on('click', function () {
        var title = $("#bs6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs7-button-rent").on('click', function () {
        var title = $("#bs7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs8-button-rent").on('click', function () {
        var title = $("#bs8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#bs9-button-rent").on('click', function () {
        var title = $("#bs9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    // CENTER FOR CIVIC ENGAGEMENT

    $("#cfc1-button").on('click', function () {
        var title = $("#cfc1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc2-button").on('click', function () {
        var title = $("#cfc2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc3-button").on('click', function () {
        var title = $("#cfc3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc4-button").on('click', function () {
        var title = $("#cfc4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc5-button").on('click', function () {
        var title = $("#cfc5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc6-button").on('click', function () {
        var title = $("#cfc6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc7-button").on('click', function () {
        var title = $("#cfc7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc8-button").on('click', function () {
        var title = $("#cfc8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc9-button").on('click', function () {
        var title = $("#cfc9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc1-button-rent").on('click', function () {
        var title = $("#cfc1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc2-button-rent").on('click', function () {
        var title = $("#cfc2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc3-button-rent").on('click', function () {
        var title = $("#cfc3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc4-button-rent").on('click', function () {
        var title = $("#cfc4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc5-button-rent").on('click', function () {
        var title = $("#cfc5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc6-button-rent").on('click', function () {
        var title = $("#cfc6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc7-button-rent").on('click', function () {
        var title = $("#cfc7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc8-button-rent").on('click', function () {
        var title = $("#cfc8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cfc9-button-rent").on('click', function () {
        var title = $("#cfc9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    // Close Sch of Entrepreneurship

    $("#cse1-button").on('click', function () {
        var title = $("#cse1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse2-button").on('click', function () {
        var title = $("#cse2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse3-button").on('click', function () {
        var title = $("#cse3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse4-button").on('click', function () {
        var title = $("#cse4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse5-button").on('click', function () {
        var title = $("#cse5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse6-button").on('click', function () {
        var title = $("#cse6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse7-button").on('click', function () {
        var title = $("#cse7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse8-button").on('click', function () {
        var title = $("#cse8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse9-button").on('click', function () {
        var title = $("#cse9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse1-button-rent").on('click', function () {
        var title = $("#cse1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse2-button-rent").on('click', function () {
        var title = $("#cse2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse3-button-rent").on('click', function () {
        var title = $("#cse3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse4-button-rent").on('click', function () {
        var title = $("#cse4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse5-button-rent").on('click', function () {
        var title = $("#cse5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse6-button-rent").on('click', function () {
        var title = $("#cse6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse7-button-rent").on('click', function () {
        var title = $("#cse7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse8-button-rent").on('click', function () {
        var title = $("#cse8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#cse9-button-rent").on('click', function () {
        var title = $("#cse9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    // Col of Computing & Informatics
    $("#coc1-button").on('click', function () {
        var title = $("#coc1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc2-button").on('click', function () {
        var title = $("#coc2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc3-button").on('click', function () {
        var title = $("#coc3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc4-button").on('click', function () {
        var title = $("#coc4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc5-button").on('click', function () {
        var title = $("#coc5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc6-button").on('click', function () {
        var title = $("#coc6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc7-button").on('click', function () {
        var title = $("#coc7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc8-button").on('click', function () {
        var title = $("#coc8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc9-button").on('click', function () {
        var title = $("#coc9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc1-button-rent").on('click', function () {
        var title = $("#coc1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc2-button-rent").on('click', function () {
        var title = $("#coc2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc3-button-rent").on('click', function () {
        var title = $("#coc3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc4-button-rent").on('click', function () {
        var title = $("#coc4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc5-button-rent").on('click', function () {
        var title = $("#coc5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc6-button-rent").on('click', function () {
        var title = $("#coc6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc7-button-rent").on('click', function () {
        var title = $("#coc7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc8-button-rent").on('click', function () {
        var title = $("#coc8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coc9-button-rent").on('click', function () {
        var title = $("#coc9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    // College of Engineering
    $("#coe1-button").on('click', function () {
        var title = $("#coe1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe2-button").on('click', function () {
        var title = $("#coe2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe3-button").on('click', function () {
        var title = $("#coe3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe4-button").on('click', function () {
        var title = $("#coe4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe5-button").on('click', function () {
        var title = $("#coe5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe6-button").on('click', function () {
        var title = $("#coe6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe7-button").on('click', function () {
        var title = $("#coe7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe8-button").on('click', function () {
        var title = $("#coe8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe9-button").on('click', function () {
        var title = $("#coe9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe1-button-rent").on('click', function () {
        var title = $("#coe1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe2-button-rent").on('click', function () {
        var title = $("#coe2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe3-button-rent").on('click', function () {
        var title = $("#coe3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe4-button-rent").on('click', function () {
        var title = $("#coe4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe5-button-rent").on('click', function () {
        var title = $("#coe5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe6-button-rent").on('click', function () {
        var title = $("#coe6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe7-button-rent").on('click', function () {
        var title = $("#coe7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe8-button-rent").on('click', function () {
        var title = $("#coe8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#coe9-button-rent").on('click', function () {
        var title = $("#coe9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    // Dornsife Sch of Public Health
    $("#dsp1-button").on('click', function () {
        var title = $("#dsp1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp2-button").on('click', function () {
        var title = $("#dsp2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp3-button").on('click', function () {
        var title = $("#dsp3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp4-button").on('click', function () {
        var title = $("#dsp4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp5-button").on('click', function () {
        var title = $("#dsp5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp6-button").on('click', function () {
        var title = $("#dsp6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp7-button").on('click', function () {
        var title = $("#dsp7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp8-button").on('click', function () {
        var title = $("#dsp8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp9-button").on('click', function () {
        var title = $("#dsp9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp1-button-rent").on('click', function () {
        var title = $("#dsp1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp2-button-rent").on('click', function () {
        var title = $("#dsp2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp3-button-rent").on('click', function () {
        var title = $("#dsp3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp4-button-rent").on('click', function () {
        var title = $("#dsp4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp5-button-rent").on('click', function () {
        var title = $("#dsp5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp6-button-rent").on('click', function () {
        var title = $("#dsp6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp7-button-rent").on('click', function () {
        var title = $("#dsp7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp8-button-rent").on('click', function () {
        var title = $("#dsp8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#dsp9-button-rent").on('click', function () {
        var title = $("#dsp9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    // Goodwin Coll of Prof Studies
    $("#gcp1-button").on('click', function () {
        var title = $("#gcp1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp2-button").on('click', function () {
        var title = $("#gcp2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp3-button").on('click', function () {
        var title = $("#gcp3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp4-button").on('click', function () {
        var title = $("#gcp4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp5-button").on('click', function () {
        var title = $("#gcp5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp6-button").on('click', function () {
        var title = $("#gcp6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp7-button").on('click', function () {
        var title = $("#gcp7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp8-button").on('click', function () {
        var title = $("#gcp8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp9-button").on('click', function () {
        var title = $("#gcp9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp1-button-rent").on('click', function () {
        var title = $("#gcp1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp2-button-rent").on('click', function () {
        var title = $("#gcp2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp3-button-rent").on('click', function () {
        var title = $("#gcp3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp4-button-rent").on('click', function () {
        var title = $("#gcp4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp5-button-rent").on('click', function () {
        var title = $("#gcp5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp6-button-rent").on('click', function () {
        var title = $("#gcp6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp7-button-rent").on('click', function () {
        var title = $("#gcp7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp8-button-rent").on('click', function () {
        var title = $("#gcp8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#gcp9-button-rent").on('click', function () {
        var title = $("#gcp9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    // Miscellaneous


    $("#m1-button").on('click', function () {
        var title = $("#m1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m2-button").on('click', function () {
        var title = $("#m2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m3-button").on('click', function () {
        var title = $("#m3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m4-button").on('click', function () {
        var title = $("#m4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m5-button").on('click', function () {
        var title = $("#m5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m6-button").on('click', function () {
        var title = $("#m6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m7-button").on('click', function () {
        var title = $("#m7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m8-button").on('click', function () {
        var title = $("#m8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#m9-button").on('click', function () {
        var title = $("#m9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#m1-button-rent").on('click', function () {
        var title = $("#m1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m2-button-rent").on('click', function () {
        var title = $("#m2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m3-button-rent").on('click', function () {
        var title = $("#m3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m4-button-rent").on('click', function () {
        var title = $("#m4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m5-button-rent").on('click', function () {
        var title = $("#m5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m6-button-rent").on('click', function () {
        var title = $("#m6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m7-button-rent").on('click', function () {
        var title = $("#m7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    $("#m8-button-rent").on('click', function () {
        var title = $("#m8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#m9-button-rent").on('click', function () {
        var title = $("#m9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    // Nursing & Health Professions

    $("#nhp1-button").on('click', function () {
        var title = $("#nhp1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp2-button").on('click', function () {
        var title = $("#nhp2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp3-button").on('click', function () {
        var title = $("#nhp3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp4-button").on('click', function () {
        var title = $("#nhp4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp5-button").on('click', function () {
        var title = $("#nhp5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp6-button").on('click', function () {
        var title = $("#nhp6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp7-button").on('click', function () {
        var title = $("#nhp7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp8-button").on('click', function () {
        var title = $("#nhp8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp9-button").on('click', function () {
        var title = $("#nhp9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp1-button-rent").on('click', function () {
        var title = $("#nhp1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp2-button-rent").on('click', function () {
        var title = $("#nhp2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp3-button-rent").on('click', function () {
        var title = $("#nhp3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp4-button-rent").on('click', function () {
        var title = $("#nhp4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp5-button-rent").on('click', function () {
        var title = $("#nhp5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp6-button-rent").on('click', function () {
        var title = $("#nhp6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp7-button-rent").on('click', function () {
        var title = $("#nhp7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp8-button-rent").on('click', function () {
        var title = $("#nhp8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#nhp9-button-rent").on('click', function () {
        var title = $("#nhp9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });

    // Pennoni Honors College
    $("#phc1-button").on('click', function () {
        var title = $("#phc1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc2-button").on('click', function () {
        var title = $("#phc2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc3-button").on('click', function () {
        var title = $("#phc3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc4-button").on('click', function () {
        var title = $("#phc4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc5-button").on('click', function () {
        var title = $("#phc5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc6-button").on('click', function () {
        var title = $("#phc6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc7-button").on('click', function () {
        var title = $("#phc7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc8-button").on('click', function () {
        var title = $("#phc8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc9-button").on('click', function () {
        var title = $("#phc9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc1-button-rent").on('click', function () {
        var title = $("#phc1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc2-button-rent").on('click', function () {
        var title = $("#phc2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc3-button-rent").on('click', function () {
        var title = $("#phc3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc4-button-rent").on('click', function () {
        var title = $("#phc4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc5-button-rent").on('click', function () {
        var title = $("#phc5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc6-button-rent").on('click', function () {
        var title = $("#phc6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc7-button-rent").on('click', function () {
        var title = $("#phc7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc8-button-rent").on('click', function () {
        var title = $("#phc8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#phc9-button-rent").on('click', function () {
        var title = $("#phc9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    // Sch.of Biomed Engr,Sci & Hlth
    $("#sob1-button").on('click', function () {
        var title = $("#sob1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob2-button").on('click', function () {
        var title = $("#sob2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob3-button").on('click', function () {
        var title = $("#sob3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob4-button").on('click', function () {
        var title = $("#sob4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob5-button").on('click', function () {
        var title = $("#sob5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob6-button").on('click', function () {
        var title = $("#sob6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob7-button").on('click', function () {
        var title = $("#sob7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob8-button").on('click', function () {
        var title = $("#sob8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob9-button").on('click', function () {
        var title = $("#sob9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob1-button-rent").on('click', function () {
        var title = $("#sob1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob2-button-rent").on('click', function () {
        var title = $("#sob2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob3-button-rent").on('click', function () {
        var title = $("#sob3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob4-button-rent").on('click', function () {
        var title = $("#sob4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob5-button-rent").on('click', function () {
        var title = $("#sob5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob6-button-rent").on('click', function () {
        var title = $("#sob6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob7-button-rent").on('click', function () {
        var title = $("#sob7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob8-button-rent").on('click', function () {
        var title = $("#sob8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#sob9-button-rent").on('click', function () {
        var title = $("#sob9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    // School of Education
    $("#soe1-button").on('click', function () {
        var title = $("#soe1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe2-button").on('click', function () {
        var title = $("#soe2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe3-button").on('click', function () {
        var title = $("#soe3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe4-button").on('click', function () {
        var title = $("#soe4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe5-button").on('click', function () {
        var title = $("#soe5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe6-button").on('click', function () {
        var title = $("#soe6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe7-button").on('click', function () {
        var title = $("#soe7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe8-button").on('click', function () {
        var title = $("#soe8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe9-button").on('click', function () {
        var title = $("#soe9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "40" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe1-button-rent").on('click', function () {
        var title = $("#soe1-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe2-button-rent").on('click', function () {
        var title = $("#soe2-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe3-button-rent").on('click', function () {
        var title = $("#soe3-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe4-button-rent").on('click', function () {
        var title = $("#soe4-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe5-button-rent").on('click', function () {
        var title = $("#soe5-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe6-button-rent").on('click', function () {
        var title = $("#soe6-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe7-button-rent").on('click', function () {
        var title = $("#soe7-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe8-button-rent").on('click', function () {
        var title = $("#soe8-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
    $("#soe9-button-rent").on('click', function () {
        var title = $("#soe9-title").text();
        console.log(title);

        obj['Checkout'].push({ "type": "buy", "Name": title, "Price": "20" });
        localStorage.setItem('Checkout', JSON.stringify(obj));
        $("#message").fadeIn("slow");
        $("#message a.close-notify").click(function () {
            $("#message").fadeOut("slow");
            return false;
        });
        setTimeout(function () {
            $("#message").fadeOut("slow");
        }, 3000);
    });
});


function allStorage() {

    var myobj = JSON.parse(localStorage.getItem('Checkout'));
    console.log(myobj);
    var values = [],
        keys = Object.keys(myobj.Checkout);
    i = myobj.Checkout.length;


    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    console.log(myobj);
    var total = 0;
    for (var i = 0; i < myobj.Checkout.length; i++) {
        var checkout2 = myobj.Checkout[i];
        var checkoutPrice2 = parseInt(checkout2.Price);
        total = total +checkoutPrice2 ;

    }

    console.log(total);
    
            $("#cart-subtotal").empty();
            $("#cart-subtotal").append(total);
    for (var i = 0; i < myobj.Checkout.length; i++) {
        var checkout = myobj.Checkout[i];

        var checkoutType = checkout.type;
        var checkoutName = checkout.Name;
        var checkoutPrice = parseInt(checkout.Price);


        // var totalPrice = 
        $("#cart-items").append('<div class="product">' +

            '<div class="product-details">' +
            '<div class="product-title">' + checkoutName + '</div>' +

            '</div>' +

            '<div class="product-price">' + checkoutPrice + '</div>' +
            ' <div class="product-quantity">' +
            '<input type="number" value="1" min="1">' +
            ' </div>' +
            '<div class="product-removal">' +
            '<button class="remove-product" id=' + keys[i] + '>' +
            ' Remove' +
            ' </button>' +
            '</div>' + '<div class="product-line-price">' + checkoutPrice + '</div>' +
            '</div>'
        );

    }





}