---
layout: post
title: Compass, Codekit & Other Gems
categories: []
tags:
- codekit
- compass
- css
- mac
- sass
status: publish
type: post
published: true
meta:
  _wpas_done_all: '1'
  tumblr_jonstuebe_permalink: http://jonstuebe.tumblr.com/post/37430999038/compass-codekit-other-gems
  tumblr_jonstuebe_id: '37430999038'
  _yoast_wpseo_linkdex: '0'
---
Today I was working on a project with CodeKit and Compass and trying to use an external gem that automatically [creates rgba equivalent png’s on the fly](https://github.com/aaronrussell/compass-rgbapng). However, I kept getting an error back from the CodeKit compiler. <!--more-->I finally realized all one has to do is simply make sure you have your own copy of sass and compass installed on your system and then go into the CodeKit settings and select for both Compass and Sass to use an external compiler.