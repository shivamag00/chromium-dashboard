## About WebStatus

[ChromeStatus.com](https://www.chromestatus.com) is a web application that tracks the set of features in the Chrome browser and other popular browsers. It is also the first level of communication between Chromium Developers and the Web Development Community.

Source code of WebStatus is hosted on GitHub in [this](https://github.com/GoogleChrome/chromium-dashboard) repository.

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
* [#1424](https://github.com/GoogleChrome/chromium-dashboard/pull/1424) - Added Endpoint in Features API to query only a milestone
* [#1426](https://github.com/GoogleChrome/chromium-dashboard/pull/1426) - Created Skeleton for New Upcoming Page
* [#1432](https://github.com/GoogleChrome/chromium-dashboard/pull/1432) - Added Redux Inspired Web Components
* [#1451](https://github.com/GoogleChrome/chromium-dashboard/pull/1451) - Added Scroll Behaviour on upcoming page
* [#1455](https://github.com/GoogleChrome/chromium-dashboard/pull/1455) - Added Support for scrolling on narrow view ports
* [#1457](https://github.com/GoogleChrome/chromium-dashboard/pull/1457) - Modified the features API to use OT & DT fields of feature
* [#1458](https://github.com/GoogleChrome/chromium-dashboard/pull/1458) - Added Infinite Scrolling Support to view fututre milestones
* [#1464](https://github.com/GoogleChrome/chromium-dashboard/pull/1464) - Map Feature to shipping type on the backend.
* [#1462](https://github.com/GoogleChrome/chromium-dashboard/pull/1462) - Added support for highlighting on hovering over a feature
* [#1467](https://github.com/GoogleChrome/chromium-dashboard/pull/1467) - Added Aria-label attributes
* [#1468](https://github.com/GoogleChrome/chromium-dashboard/pull/1468) - Added support for infinite scrolling to previous releases

### Related to fixing bugs and improving usability
* [#1211](https://github.com/GoogleChrome/chromium-dashboard/pull/1211) - Fixed failing tests in Travis CI
* [#1220](https://github.com/GoogleChrome/chromium-dashboard/pull/1220), [#1256](https://github.com/GoogleChrome/chromium-dashboard/pull/1256) - _stack rank_ & _timeline_ links are viewport responsive
* [#1212](https://github.com/GoogleChrome/chromium-dashboard/pull/1212) - Generation of coverage report no longer fails
* [#1248](https://github.com/GoogleChrome/chromium-dashboard/pull/1248) - Fixed bug: "Edit feature complains about multiple emails"
* [#1311](https://github.com/GoogleChrome/chromium-dashboard/pull/1311) [#1399](https://github.com/GoogleChrome/chromium-dashboard/pull/1339) [#1383](https://github.com/GoogleChrome/chromium-dashboard/pull/1383) - Updated Developer Documentation
* [#1325](https://github.com/GoogleChrome/chromium-dashboard/pull/1325) - Replaced Left Hand Navigation with a dropdown menu 
* [#1334](https://github.com/GoogleChrome/chromium-dashboard/pull/1334) - Added the dropdown in narrow viewports
* [#1340](https://github.com/GoogleChrome/chromium-dashboard/pull/1340) - Page title on 'edit feature' page will display the feature name
* [#1346](https://github.com/GoogleChrome/chromium-dashboard/pull/1346) - Made drawer column responsive
* [#1376](https://github.com/GoogleChrome/chromium-dashboard/pull/1376) - Some UI enhancements
* [#1436](https://github.com/GoogleChrome/chromium-dashboard/pull/1436) - Fixed bug: Star would toggle in UI but not at the backend
* [#1244](https://github.com/GoogleChrome/chromium-dashboard/pull/1244) - "additional fields by process phase" widget is keyboard accessible
