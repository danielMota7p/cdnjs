(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function e(t){return t}function s(t){return t}function c(){r=!0,n=t[a]._c,o=t[a]._d,l=t[a]._e,n.add("toggle check"),h=t[a].glbl}var a="mmenu",i="toggles";t[a].prototype["_init_"+i]=function(a){r||c();var o=this.vars[i+"_added"];this.vars[i+"_added"]=!0,o||(this.opts[i]=e(this.opts[i]),this.conf[i]=s(this.conf[i]));var l=this;this.opts[i],this.conf[i],this.__refactorClass(t("input",a),this.conf.classNames[i].toggle,"toggle"),this.__refactorClass(t("input",a),this.conf.classNames[i].check,"check"),t("input."+n.toggle,a).add("input."+n.check,a).each(function(){var e=t(this),s=e.closest("li"),c=e.hasClass(n.toggle)?"toggle":"check",a=e.attr("id")||l.__getUniqueId();s.children('label[for="'+a+'"]').length||(e.attr("id",a),s.prepend(e),t('<label for="'+a+'" class="'+n[c]+'"></label>').insertBefore(s.children("a").last()))})},t[a].addons.push(i),t[a].defaults[i]={},t[a].configuration.classNames[i]={toggle:"Toggle",check:"Check"};var n,o,l,h,r=!1}(jQuery);
}));