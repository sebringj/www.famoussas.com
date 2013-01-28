hubsoft.ready(function () {
    if (hubsoft.isLoggedIn()) {
        location = '/account';
    }
});
$('form.sign-in,form.sign-up').on('focus keypress', 'input', function () {
    $(this).closest('form').find('.button-group .error').hide();
});
$('form.sign-in').submit(function (ev) {
    var $form = $(this),
        email = $.trim($form.find('[data-name="email"]').val()),
        password = $.trim($form.find('[data-name="password"]').val());
    ev.preventDefault();
    if (email === '' || password === '') { return; }
    if (hubsoft.blockSubmit) { return; }
    hubsoft.blockSubmit = true;
    hubsoft.login({ email: email, password : password }, function (json) {
        hubsoft.blockSubmit = false;
        $form.find('.button-group .error').hide();
        if (json.success) {
            location = '/account';
            return;
        }
        $form.find('.button-group .error').show();
    });
});
$('form.sign-up').submit(function (ev) {
    var $form = $(this);
    ev.preventDefault();
    alert('under development');
    return;
    /*
        billtocity: '',
        billtocountrycode: '',
        billtopostalcode: '',
        billtostatecode: '',
        billtostreet1: '',
        billtostreet2: '',
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        phone: '',
        receivenewsletter: '',
        receivepromoemails: '',
        rewardlevelcode: '',
        salescontextcode: '',
        salesrepcode: '',
        shiptotypecode: '',
        shiptocity: '',
        shiptocountrycode: '',
        shiptopostalcode: '',
        shiptostatecode: '',
        shiptostreet1: '',
        shiptostreet2: '',
        usertypecode: ''
    */
    hubsoft.createAccount(hubsoft.getFormJSON($form), function (json) {
        if (json.success) {
            hubsoft.login({ email: email, password: password }, function (json) {
                location = '/account';
            });
        }
    });
});