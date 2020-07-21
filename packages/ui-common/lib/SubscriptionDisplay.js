"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SubscriptionDisplay;

var _react = _interopRequireDefault(require("react"));

require("./common.css");

var _reactRedux = require("react-redux");

var _accountService = require("@openbanking/ui-data/lib/services/account-service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Unhandled routes view
function SubscriptionDisplay(data) {
  if (!data) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "infoContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "txtCenter"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Subscription \xA0", /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    id: "chkbox"
  })), /*#__PURE__*/_react["default"].createElement("p", null, "By Subscribing to this service you will get 25% of your salary as credit from the Bank"), /*#__PURE__*/_react["default"].createElement("p", null, "which will be debited from your next month salary."), /*#__PURE__*/_react["default"].createElement("p", null, " If you are unable to pay the amount a nominal interest would be charged."), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn-success",
    onClick: function onClick() {
      return (0, _accountService.Subscription)();
    }
  }, "Submit")));
}