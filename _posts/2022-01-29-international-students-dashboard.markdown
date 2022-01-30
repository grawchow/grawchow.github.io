---
layout: post
title:  "Dashboard for International Student Organization"
date:   2022-01-29 15:23:37 -0800
categories: dashboard students dash python
---

<link rel="stylesheet" href="/assets/css/posts.css">

[![Totals of students by year and which country they traveled to.](/assets/images/2022-01-29-international-students-dashboard/numbers-by-country.png)](https://isl-dev.herokuapp.com/)
*Image links to dev version of the dashboard loaded with faked data.*

I created a dashboard for an organization which organizes international trips for college students. The dashboard gives a quick look at where the students they serve have been traveling and some additional detail on which programs the students were a part of.

![Breakdown of countries by program and programs by country.](/assets/images/2022-01-29-international-students-dashboard/breakdowns.png)

The first chart lets the user easily compare countries and see trends across the last 9 years of the company's history. The second set of charts defaults to providing a similar view comparing countries and showing historical trends. When a country or program is selected in one of the second set of charts, however, an additional card appears to provide some context for the selected country. The charts are dynamic and provide additional information when hovering over elements.

![Program details for Nicaragua.](/assets/images/2022-01-29-international-students-dashboard/programs-in-nicaragua.png)

This was a great project to learn [Dash](https://dash.plotly.com/), a Python framework for creating data apps using [Plotly](https://plotly.com/graphing-libraries/)'s open source graph libraries and React. I also learned how to deploy an app to [Heroku](https://www.heroku.com/) and use their internal PostgreSQL database to host the data.

The full project is on [GitHub](https://github.com/grawchow/dash-dashboard) along with a link to a version of the app using faked data.

