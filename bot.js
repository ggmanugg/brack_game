// ==UserScript==
// @name         Brack Game Bot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Wait until you won!
// @author       ggmanugg
// @match        https://game.brack.ch/*
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require https://raw.githubusercontent.com/jquery/jquery-simulate/master/jquery.simulate.js
// ==/UserScript==
(function() {
    'use strict';

    function rnumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setTimeout(function() {
        $("#begriffe span").remove();
        var begriffArray = $("#begriffe").text().split("-");

        $.each(begriffArray, function(index, value) {
            $(".gamebutton[rel='" + value + "']").simulate("click");
        });

        setTimeout(function() {
            $(".neues_spiel_button.button_rot").simulate("click");
        }, rnumber(1000, 3000));

    }, rnumber(5000, 8000));
})();
