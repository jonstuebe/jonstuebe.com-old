---
layout: post
title: lemonstand & font-face
categories: []
tags:
- htaccess
- lemonstand
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _wpas_done_all: '1'
  _yoast_wpseo_linkdex: '0'
---
Just ran into a weird bug with lemonstand where it was giving me a 404 error when using any @font-face fonts. Did a quick lookup and found out that they allow files conditionally in the htaccess file:

Before:

{% highlight apache %}RewriteCond %{REQUEST_URI} !(\.(mov|ico|js|jpg|gif|css|png|swf|txt|xml|xls)$){% endhighlight %}

After:

{% highlight apache %}RewriteCond %{REQUEST_URI} !(\.(mov|ico|js|jpg|gif|css|png|swf|txt|xml|xls|eot|woff|ttf|svg|svgz)$){% endhighlight %}