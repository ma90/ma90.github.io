(function(){
  window.Settings = {
    app_version: "12.0.0",
    adjustToken: "8vx2lm47qefq",
    layer_app_id: "layer:///apps/production/464302de-ef8c-11e5-b670-8407e8084abc",
    host: 'https://getsafe.de/',
    userName: '',
    userNumber: '',
    user: {},
    gcmSandbox: false,
    adjustProduction: true,
    updatesChannel: 'staging',
  }

  var trackJsUserId = function() {
    var userData = JSON.parse(localStorage['ls.account']);
    if(userData) {
      return userData.analytics_slug;
    } else {
      return 'not-registered';
    }
  };

  window._trackJs = {
    token: '9a02d0d8df6c48888e91d508ed3115e7',
    userId: trackJsUserId(),
    onError: function (payload, error) {
      var i, ignoredErrors = [
        "$timeout is not defined",
        "403 Forbidden: GET https://getsafe.de/guessed_addresses.json",
        "404 Not Found: POST https://getsafe.de/users/login_phonenumber.json",
        "401 Unauthorized: GET https://getsafe.de/user_index.json",
        "401 Unauthorized: GET https://getsafe.de/users/status.json",
        "404 Not Found: POST https://getsafe.de/users/check_code.json",
        "409 Conflict: PUT https://getsafe.de/insurers",
        "[$rootScope:infdig]"
      ];
      for (i = 0; i < ignoredErrors.length; i++) {
        if (payload.message.indexOf(ignoredErrors[i]) > -1) {
          return false;
        }
      }

      return true;
    }
  };
})();
