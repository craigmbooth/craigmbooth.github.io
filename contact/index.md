---
layout: page
title: Contact
excerpt:
modified: 2014-08-08T19:44:38.564948-04:00
image:
  feature: contact_header.jpg
---

If you want to send me a quick message, please fill in the form.  There are also links to various social netorks on this page.  Always feel free to reach out to me on any of those platforms.

<div class="row">
  <div class="col-xs-12 col-md-6">
    <h3>Contact Form</h3>
    <table>
      <form accept-charset="UTF-8" action="https://formkeep.com/f/49c7017ff85c" method="POST">
        <input type="hidden" name="utf8" value="✓">
        <tr><td>Name:<br><input type="text" name="name" placeholder="Your Name"></td></tr>
        <tr><td>Email address:<br><input type="email" name="email" placeholder="Your Email"></td></tr>
        <tr><td>Message:<br><textarea name="message" cols="42" rows="9"></textarea></td></tr>
        <tr><td><input type="submit" value="Send Message" style="font-weight:bold"></td></tr>
      </form>
    </table>
    </div>

  <div class="col-xs-12 col-md-6">
    <h3>Find Me Online</h3>
    You can find me online in the following places
    <div class="social-icons">
	  {% if site.owner.twitter %}<a href="http://twitter.com/{{ site.owner.twitter }}" title="{{ site.owner.name}} on Twitter" target="_blank"><i class="fa fa-twitter-square fa-2x"></i></a>{% endif %}
	  {% if site.owner.facebook %}<a href="http://facebook.com/{{ site.owner.facebook }}" title="{{ site.owner.name}} on Facebook" target="_blank"><i class="fa fa-facebook-square fa-2x"></i></a>{% endif %}
	  {% if site.owner.google.plus %}<a href="http://plus.google.com/+{{ site.owner.google.plus }}" title="{{ site.owner.name}} on Google+" target="_blank"><i class="fa fa-google-plus-square fa-2x"></i></a>{% endif %}
	  {% if site.owner.linkedin %}<a href="http://linkedin.com/in/{{ site.owner.linkedin }}" title="{{ site.owner.name}} on LinkedIn" target="_blank"><i class="fa fa-linkedin-square fa-2x"></i></a>{% endif %}
	  {% if site.owner.stackexchange %}<a href="{{ site.owner.stackexchange }}" title="{{ site.owner.name}} on StackExchange" target="_blank"><i class="fa fa-stack-exchange fa-2x"></i></a>{% endif %}
	  {% if site.owner.instagram %}<a href="http://instagram.com/{{ site.owner.instagram }}" title="{{ site.owner.name}} on Instagram" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>{% endif %}
	  {% if site.owner.flickr %}<a href="http://www.flickr.com/photos/{{ site.owner.flickr }}" title="{{ site.owner.name}} on Flickr" target="_blank"><i class="fa fa-flickr fa-2x"></i></a>{% endif %}
	  {% if site.owner.github %}<a href="http://github.com/{{ site.owner.github }}" title="{{ site.owner.name}} on Github" target="_blank"><i class="fa fa-github-square fa-2x"></i></a>{% endif %}
	  {% if site.owner.tumblr %}<a href="http://{{ site.owner.tumblr }}.tumblr.com" title="{{ site.owner.name}} on Tumblr" target="_blank"><i class="fa fa-tumblr-square fa-2x"></i></a>{% endif %}
	  {% if site.owner.pinterest %}<a href="https://www.pinterest.com/{{ site.owner.pinterest }}/" title="{{ site.owner.name}} on Pinterest" target="_blank"><i class="fa fa-pinterest fa-2x"></i></a>{% endif %}
    </div><!-- /.social-icons -->

  </div>
</div>
