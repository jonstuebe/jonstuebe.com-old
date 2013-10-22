---
layout: post-light
title: oocss, sass, and the placeholder
categories: []
tags:
- css
- oocss
- sass
status: publish
type: post
published: true
meta:
  _yoast_wpseo_linkdex: '69'
  _edit_last: '1'
  _yoast_wpseo_focuskw: oocss
  _yoast_wpseo_title: oocss, sass, and the placeholder
  _yoast_wpseo_metadesc: Just stumbled upon this gem of an article that shows how
    to use placeholders to keep your CSS dry and still write from an oocss angle...
  _wpas_done_all: '1'
---
<p>Just stumbled upon this gem of an article that shows how to use placeholders to keep your CSS dry and still write from an oocss angle. Normally, when I've used @extend in the past with sass I've always looked down on it because it outputs the css in the markup where as @mixin does not. However, you usually get a lot of duplicate code with @mixin. By using a placeholder it essentially acts like @extend but only outputs the code if it is extended.

{% highlight css %}%extrap {
  padding-left: 5px;
}

.first-column {
  @extend %extrap;
}

ul li:first {
  @extend %extrap;
}{% endhighlight %}

<p>This would compile to </p>

{% highlight css %}.first-column, ul:first {
  padding-left: 5px;
}{% endhighlight %}

<p><a href="http://ianstormtaylor.com/oocss-plus-sass-is-the-best-way-to-css/" title="" target="_blank">Original Article</a></p>
