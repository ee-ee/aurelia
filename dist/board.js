System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, url, Board;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://8ch.net/b/0.json";
      Board = _export("Board", (function () {
        function Board(http) {
          _classCallCheck(this, Board);

          this.threads = [];
          this.http = http;
        }

        _prototypeProperties(Board, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.http.get(url).then(function (response) {
                var json = JSON.parse(response.response);
                _this.threads = json.threads;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Board;
      })());
    }
  };
});