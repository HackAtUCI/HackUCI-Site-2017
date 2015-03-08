The code powering www.hackuci.com
---------------------------------
![HackUCI Logo](images/2015-temp-logo.jpg)

This document is intended to be a reference for future HackUCI web-masters.

###Directory Structure
- General documents (e.g. waivers, info packets, etc.) SHOULD be placed inside
the `/docs` folder.
- CSS, Javascript, and Images SHOULD be placed within their respective 
`/css`, `/js`, and `/images` folders.
- Copy-paste mailchimp registration code *refer to how to toggle Mailchimp
registration below* can be inserted or removed from our main website by
pasting the `/mailchimp.html` contents into the `/index.html` code where
specified.
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
- MailChimp: The website doesn't use this directly. There is a Typeform plugin
that can read an email field and send it over to MailChimp.
- Bootstrap: I'm not sure how this exactly works, yet.
- [Google Analytics](https://www.google.com/analytics/learn/index.html)

###How to toggle Mailchimp registration, Eventbrite, etc.. 
- Within the main page, `index.html`, i've left commented blocks
where there are instructions to paste in or remove registration,
eventbrite, and sold out ticket flags. 
- For example, if the mailchimp code is online and people are 
registering, but registration has now closed and you want to 
display: sold out! Remove the mailchimp
block (which you found and pasted in from `/mailchimp.html`) and
paste in the new Sold Out! block (found in the comments).
