chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('googleapis.com', 'lug.ustc.edu.cn');
        url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        url = url.replace('www.google.com', 'lib.sinaapp.com');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://www.google.com/jsapi",
            "*://ajax.googleapis.com/*",
            "*://themes.googleusercontent.com/*"
        ]
    },
    ["blocking"]
);
