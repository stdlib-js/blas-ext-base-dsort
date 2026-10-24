"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=i(function(k,n){
var f=require('@stdlib/blas-ext-base-dsorthp/dist').ndarray;function x(e,r,t,a,y){return f(e,r,t,a,y)}n.exports=x
});var v=i(function(w,o){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=s();function l(e,r,t,a){return m(e,r,t,a,j(e,a))}o.exports=l
});var c=i(function(z,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),_=s();R(d,"ndarray",_);q.exports=d
});var h=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=c(),u,p=E(h(__dirname,"./native.js"));O(p)?u=b:u=p;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
