var buttons = document.querySelectorAll('.mdc-button, .mdc-fab');
for (var i = 0, button; button = buttons[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(button);
}

var nodes = document.querySelectorAll('.mdc-icon-toggle');
for (var i = 0, node; node = nodes[i]; i++) {
    mdc.iconToggle.MDCIconToggle.attachTo(node);
}

var checkboxes = document.querySelectorAll('.mdc-checkbox');
for (var i = 0, checkbox; checkbox = checkboxes[i]; i++) {
    new mdc.checkbox.MDCCheckbox(checkbox);
}

var radios = document.querySelectorAll('.mdc-radio');
for (var i = 0, radio; radio = radios[i]; i++) {
    new mdc.radio.MDCRadio(radio);
}

var interactiveListItems = document.querySelectorAll('.mdc-list-item');
for (var i = 0, li; li = interactiveListItems[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(li);
    // Prevent link clicks from jumping demo to the top of the page
    li.addEventListener('click', function (evt) {
        evt.preventDefault();
    });
}

function showPage(pageid){
    window.history.pushState(null, null, "#"+pageid);
    $(".page").hide();
    $("#" + pageid).show();
}

if (window.location.hash) {
    state = window.location.hash;
} else {
    state = '#home';
}

window.history.pushState(null, null, state);
this.showPage(state.split("#")[1]); // See example render function in summary below

window.onpopstate = function (event) {
    if (event.state) {
        state = event.state;
    }
    this.showPage(state.split("#")[1]); // See example render function in summary below
};


$(document).ready(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        $("#coordenadas").val(position.coords.latitude + "," + position.coords.longitude);
    });
});
