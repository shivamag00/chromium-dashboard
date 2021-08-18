## About WebStatus

[ChromeStatus.com](https://www.chromestatus.com) is a web application that tracks the set of features in the Chrome browser and other popular browsers. It is also the first level of communication between Chromium Developers and the Web Development Community.

## GSoC Project Description
This project aimed at making the following modifications to WebStatus:-
1. Make changes that are steps towards upgrading the app from Python 2 to Python 3.
2. Design and implement a roadmap view for upcoming and past milestones.
3. Improve the project quality by fixing defects and improving test coverage.

## Pull Requests Raised
### Related to migrating from Python 2 to Python 3
* [#1205](https://github.com/GoogleChrome/chromium-dashboard/pull/1205) - Migrated URLFetch to Native Python Requests 
* [#1275](https://github.com/GoogleChrome/chromium-dashboard/pull/1275) - Migrated GAE Users to Google Sign-In
* [#1352](https://github.com/GoogleChrome/chromium-dashboard/pull/1352) - Migrated GAE DB Client Library to GAE NDB Library
* [#1364](https://github.com/GoogleChrome/chromium-dashboard/pull/1364) - Follow-up to GAE NDB Migration
* [#1365](https://github.com/GoogleChrome/chromium-dashboard/pull/1365) - Migrated GAE NDB to Cloud NDB

### Related to roadmap view
* [#1399](https://github.com/GoogleChrome/chromium-dashboard/pull/1399) - Added Features API
* [#1400](https://github.com/GoogleChrome/chromium-dashboard/pull/1400) - Added Channels API
* [#1424](https://github.com/GoogleChrome/chromium-dashboard/pull/1424) - Added Endpoint in Features API to query only a single milestone
* [#1426](https://github.com/GoogleChrome/chromium-dashboard/pull/1426) - Created Skeleton for New Upcoming Page
* [#1432](https://github.com/GoogleChrome/chromium-dashboard/pull/1432) - Added Redux Inspired Web Components to the New Upcoming Page
* [#1451](https://github.com/GoogleChrome/chromium-dashboard/pull/1451) - Added Scroll Behaviour on upcoming page
* [#1455](https://github.com/GoogleChrome/chromium-dashboard/pull/1455) - Added Support for scrolling on narrow view ports
* [#1457](https://github.com/GoogleChrome/chromium-dashboard/pull/1457) - Modified the features API to include the same feature in multiple milestones based on its stage in its lifecycle
* [#1458](https://github.com/GoogleChrome/chromium-dashboard/pull/1458) - Added Infinite Scrolling Support to view fututre milestones
* [#1464](https://github.com/GoogleChrome/chromium-dashboard/pull/1464) - Map Feature to shipping type on the backend instead of on frontend.

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/shivamag00/chromium-dashboard/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
