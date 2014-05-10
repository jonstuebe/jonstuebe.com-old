---
layout: post
title: laravel four & mamp
categories: []
tags:
- composer
- l4
- laravel
- php
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _wpas_done_all: '1'
  _yoast_wpseo_linkdex: '0'
---
For anyone out there building sites using [L4](http://four.laravel.com/) and MAMP on OSX know that when you use composer through command line you aren't using the php that MAMP run's but rather your systems. To update the path to MAMP's php add the following to your bash profile:

{% highlight bash %}export PATH=/Applications/MAMP/Library/bin/:/Applications/MAMP/bin/php5/bin/:/opt/local/bin:/opt/local/sbin:$PATH{% endhighlight %}