!function r(n,t,e){function o(u,f){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require;if(!f&&a)return a(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[u]={exports:{}};n[u][0].call(c.exports,function(r){var t=n[u][1][r];return o(t?t:r)},c,c.exports,r,n,t,e)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<e.length;u++)o(e[u]);return o}({1:[function(r,n,t){t.Entry=function(r,n){this.title=r,this.body=n},t.Entry.prototype.numberOfWords=function(){var r=Entry.split(" ");return r.length}},{}],2:[function(r,n,t){var e=r("./../js/journal.js").Entry;$(document).ready(function(){$("#journal").submit(function(r){r.preventDefault();var n=$("#title").val(),t=$("#body").val(),o=new e(n,t);$("#entry").append("<li>"+o.title+"</li>"),$("#entry").append("<li>"+o.body+"</li>")})})},{"./../js/journal.js":1}]},{},[2]);