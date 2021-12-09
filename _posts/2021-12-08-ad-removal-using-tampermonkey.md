---
title:  "ADs removal using Tampermonkey"
date:   2021-12-08 12:00:00 +0100
toc: true
toc_sticky: true
tags: [javascript]
---

Remove websites Ads using JS script in Tampermonkey

## Tampermonkey
[Tampermonkey](https://www.tampermonkey.net/) is a script manager available as a browser extension. Userscripts can be written to alter the content of websites. In this post, a simple ad-removal script is written to make the [Cambridge Dictionary](https://dictionary.cambridge.org/) website more clean and elegant.

## Removing ads using script
Before applying any ad-removal methods, the websites looks like this:  

![before](/assets/images/20211208/before.png)


### Locate the elements

The ad boxes here are elements in the HTML file, if those elements are removed from the file, the ads will be gone. Press <kbd>F12</kbd> or open Web Inspector (on Safari, the developer option needs to be enabled), locate the elements that corresponds to the ad boxes and try delete them to see if they are the right elements.  

> **Tips**: Use select/pick function provided by the browser tools, move the mouse cursor over the element and left click, the HTML window will jump to the corresponding line automatically. Keep finding the parent element until the largest element that contains the ad box but nothing else is found. In most cases, that element is the one to be removed.  

![locate](/assets/images/20211208/locate.png)

After locating the elements, write down the class names and create a new Tampermonkey Userscript to remove those ad boxes using programming method.

### The script

There are numerous ways to remove HTML elements, JQuery is a convenient one. The script is shown below, which is self-explanatory.

```javascript
// ==UserScript==
// @name         Cambridge Dictionary AD remove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://dictionary.cambridge.org/dictionary/english/*
// @match        https://dictionary.cambridge.org/spellcheck/english/*
// @icon         https://www.google.com/s2/favicons?domain=cambridge.org
// @grant        none
// @require http://code.jquery.com/jquery-2.2.3.min.js

// ==/UserScript==

(function() {
    'use strict';
    var $ = window.$;
    $('.hdn.hdb-m.hfl-m').remove();
    $('.tz0.topslot-container').remove();
    $('.hfr-s.lt2s.lmt-10').remove();
    $('.bb.hax').remove();
    $('.am-default.contentslot').remove();
})();
```

A few things to note here: the URL used in `@match` section contains asterisk sign `*`, which means all possible matches, for example, the URL `https://dictionary.cambridge.org/dictionary/english/*` means all URLs starting with `https://dictionary.cambridge.org/dictionary/english/`. To use JQuery in Tampermonkey, one needs to include it in the `@require` field. If the element to be removed has multiple class names, it can be searched by using the concatenation of those names with a dot `.` in front of each name.  
Save the script, refresh the webpage, and the ads are gone.

![after](/assets/images/20211208/after.png)
