---
layout: post
title: ie8 trim support
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _wpas_done_all: '1'
  _yoast_wpseo_linkdex: '0'
---
Not sure how I didn't know this, but I stumbled upon the fact today that the trim function is not supported in ie8. Here's a quick fix for it:

{% highlight js %}if(typeof String.prototype.trim !== 'function') {
   String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, '');
   }
}{% endhighlight %}