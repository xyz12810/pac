"use strict";
//Generated by https://github.com/NewFuture/pac
var WhiteListHost = __WHITE_LIST__;
function FindProxyForURL(url, host) {
    if (host.indexOf(".") < 0 // not ip or domain
        || WhiteListHost[host]
        || __IS_HOST__
    ) {//Plain Host Name or in whitelist
        return "DIRECT";
    } else if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)
    &&(__IS_NET__)
    ) {//Intranet IP
        return "DIRECT";
    }
    return "PROXY __proxy__";
};