!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).americanExpress=e()}}(function(){return function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[s]={exports:{}};t[s][0].call(p.exports,function(e){var n=t[s][1][e];return o(n?n:e)},p,p.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";function r(e){this._client=e.client}var o=e("../lib/error"),i=e("../lib/deferred");r.prototype.getRewardsBalance=function(e,t){if("function"!=typeof t)throw new o({type:o.types.MERCHANT,message:"getRewardsBalance must include a callback function."});return t=i(t),e.nonce?void this._client.request({method:"get",endpoint:"payment_methods/amex_rewards_balance",data:{_meta:{source:"american-express"},paymentMethodNonce:e.nonce}},function(e,n){e?t(new o({type:o.types.NETWORK,message:"A network error occured when getting the American Express rewards balance.",details:{originalError:e}})):t(null,n)}):void t(new o({type:o.types.MERCHANT,message:"getRewardsBalance must be called with a nonce."}))},r.prototype.getExpressCheckoutProfile=function(e,t){if("function"!=typeof t)throw new o({type:o.types.MERCHANT,message:"getExpressCheckoutProfile must include a callback function."});return t=i(t),e.nonce?void this._client.request({method:"get",endpoint:"payment_methods/amex_express_checkout_cards/"+e.nonce,data:{_meta:{source:"american-express"},paymentMethodNonce:e.nonce}},function(e,n){e?t(new o({type:o.types.NETWORK,message:"A network error occured when getting the American Express Checkout nonce profile.",details:{originalError:e}})):t(null,n)}):void t(new o({type:o.types.MERCHANT,message:"getExpressCheckoutProfile must be called with a nonce."}))},t.exports=r},{"../lib/deferred":3,"../lib/error":5}],2:[function(e,t,n){"use strict";function r(e,t){var n;if("function"!=typeof t)throw new i({type:i.types.MERCHANT,message:"create must include a callback function."});return t=a(t),null==e.client?void t(new i({type:i.types.MERCHANT,message:"A Client is required when instantiating American Express."})):(n=e.client.getConfiguration().analyticsMetadata.sdkVersion,n!==o?void t(new i({type:i.types.MERCHANT,message:"Client (version "+n+") and American Express (version "+o+") components must be from the same SDK version."})):void t(null,new s(e)))}var o="3.0.0-beta.8",i=e("../lib/error"),s=e("./american-express"),a=e("../lib/deferred");t.exports={create:r,VERSION:o}},{"../lib/deferred":3,"../lib/error":5,"./american-express":1}],3:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],4:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],5:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.message)throw new Error("Error message required.");this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=r},{"./enumerate":4}]},{},[2])(2)});
