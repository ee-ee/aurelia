System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, Thread;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Thread = _export("Thread", (function () {
        function Thread(http) {
          _classCallCheck(this, Thread);

          this.posts = [];
          this.http = http;
        }

        _prototypeProperties(Thread, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params) {
              var _this = this;
              var url = "http://8ch.net/b/res/" + params.id + ".json";
              return this.http.get(url).then(function (response) {
                var json = JSON.parse(response.response);
                _this.posts = json.posts;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Thread;
      })());
    }
  };
});