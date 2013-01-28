if (!window.console) { window.console = { log: function () { } }; }
$('.copyright').click(function () {
    kitgui.showTab();
});
var app = {
    handleUserState: function () {
        $('.signed-in,.signed-out').css('display', 'none');
        if (hubsoft.isLoggedIn()) {
            $('.signed-in').css('display', 'inline');
        } else {
            $('.signed-out').css('display', 'inline');
        }
    }
};
hubsoft.clientid = 'famoussas';
hubsoft.cart.updateUI(function () {
    $('.cart-indicator').text(hubsoft.cart.itemCount());
});
hubsoft.ready(function () {
    app.handleUserState();
});