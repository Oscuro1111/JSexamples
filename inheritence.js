var __extends =
  (this && this.__extends) ||
  function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var org;
(function (org) {
  var jsweet;
  (function (jsweet) {
    /**
     * This is a very simple example that just shows an alert.
     * @class
     */
    var Base = (function () {
      function Base() {}
      /*private*/ Base.prototype.work = function () {
        var a = 0;
        return a;
      };
      Base.prototype.doWork = function () {
        return this.work();
      };
      return Base;
    })();
    jsweet.Base = Base;
    Base["__class"] = "org.jsweet.Base";
    var HelloWorld = (function (_super) {
      __extends(HelloWorld, _super);
      function HelloWorld() {
        return (_super !== null && _super.apply(this, arguments)) || this;
      }
      HelloWorld.main = function (args) {
        alert("Hi there!");
      };
      return HelloWorld;
    })(org.jsweet.Base);
    jsweet.HelloWorld = HelloWorld;
    HelloWorld["__class"] = "org.jsweet.HelloWorld";
  })((jsweet = org.jsweet || (org.jsweet = {})));
})(org || (org = {}));
org.jsweet.HelloWorld.main(null);
