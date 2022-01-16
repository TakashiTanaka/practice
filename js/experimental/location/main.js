// http://127.0.0.1:8080/?queryにアクセスした時

// url
let url = location.href;

// http://127.0.0.1:8080/?query
console.log(url);

// host
let host = location.hostname;

// 127.0.0.1
console.log(host);

// path
let path = location.pathname;

// /
console.log(path);

// query
let query = location.search;

// ?query
console.log(query);

// protocol
let protocol = location.protocol;

// http:
console.log(protocol);
