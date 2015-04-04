The code powering www.hackuci.com
---------------------------------
![HackUCI Logo](images/2015-temp-logo.jpg)

This document is intended to be a reference for future HackUCI web-masters.

###Directory Structure
- General documents (e.g. waivers, info packets, etc.) SHOULD be placed inside
the `/docs` folder.
- CSS, Javascript, and images SHOULD be placed within `/css`, `/js`, and
`/images` respectively.
- CSS is divided into two main files. `/css/style.css` and `/css/colors.css`.
The `style.css` file contains most of the content while colors mainly focuses on
color themes for blocks of HTML.

###Deployment
- The website is hosted on GitHub Pages. As such, you do not need to set up a
server.
- Just push to the master branch, and the changes will go live.

###Technologies
- Typeform: The website doesn't use this directly. Typeform is an online form
designer. We use some of the paid services, so it will only be active within
the 2 months before the hackathon. The website links people to the application
form when they press the Apply Now button.
- [Formspree](https://formspree.io/): Normally, when you create a Contact Us form,
it requires a PHP server. However, this is neat 3rd party solution that lets
you have a Contact Form on a static website. No registration! No server! No cost!
- MailChimp: The website doesn't use this directly. There is a Typeform plugin
that can read an email field and send it over to MailChimp.
- Bootstrap: I'm not sure how this exactly works, yet.
- [Google Analytics](https://www.google.com/analytics/learn/index.html)

###Known Legacy Files 
- `mailchimp.html` has code that one could copy and paste into `index.html` in
order to embed the mailchimp form into the website. As noted above, however,
we are using Typeform to send emails to MailChimp.
