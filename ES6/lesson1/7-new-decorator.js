8"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var oInp = document.getElementById('inp');
var oBtn = document.getElementById('btn');

var Search =
/*#__PURE__*/
function () {
  function Search() {
    _classCallCheck(this, Search);

    this.url = 'url-A';
    this.value = '';
  }

  _createClass(Search, [{
    key: "getContent",
    value: function getContent() {
      console.log('向' + this.url + '发送网络请求,' + '得到的数据是' + this.value);
    }
  }]);

  return Search;
}();

var oS = new Search();

oInp.onchange = function () {
  oS.value = this.value;
};

oBtn.onclick = function () {
  oS.getContent();
};
