## About WebStatus

[ChromeStatus.com](https://www.chromestatus.com) is a web application that tracks the set of features in the Chrome browser and other popular browsers. It is also the first level of communication between Chromium Developers and the Web Development Community.

Source code of WebStatus is hosted on GitHub in the following repository:-
- [GoogleChrome/chromium-dashboard](https://github.com/GoogleChrome/chromium-dashboard)

## GSoC Project Description
This project aimed at making the following modifications to WebStatus:-
1. Make changes that are steps towards upgrading the app from Python 2 to Python 3.
2. Design and implement a roadmap view for upcoming and past milestones.
3. Improve the project quality by fixing defects and improving test coverage.

## Pull Requests Raised
### Related to migrating from Python 2 to Python 3
The Python 3 runtime of App Engine doesn't include bundled services like GAE Users API. Instead, Google Cloud provides standalone products that are equivalent to most of the bundled services in the Python 2 runtime. If no such standalone product is available, the developers are expected to use third-party products or other workarounds. As a part of this project, the following services were migrated:-
  1. URLFetch to Native Python Requests
  1. GAE Users to Google Sign-In
  1. GAE DB Client Library to GAE NDB Library to Cloud NDB Library

The following pull requests were raised:-
* [#1205](https://github.com/GoogleChrome/chromium-dashboard/pull/1205) - Migrated URLFetch to Native Python Requests 
* [#1275](https://github.com/GoogleChrome/chromium-dashboard/pull/1275) - Migrated GAE Users to Google Sign-In
* [#1352](https://github.com/GoogleChrome/chromium-dashboard/pull/1352) - Migrated GAE DB Client Library to GAE NDB Library
* [#1364](https://github.com/GoogleChrome/chromium-dashboard/pull/1364) - Follow-up to GAE NDB Migration
* [#1365](https://github.com/GoogleChrome/chromium-dashboard/pull/1365) - Migrated GAE NDB to Cloud NDB

### Related to roadmap view
WebStatus has a releases page which contains information about the new features that will be added in the next three versions of Chrome. One of the requirements was to upgrade this page so that it could contain information about all versions of Chrome. The other requirements were to make the page API-driven and responsive to viewport size. Therefore, a new page, called 'upcoming', was created. The following was done:-
  1. To make the page API-driven, two new APIs were created viz, Features API and Channels API.
  2. Support was added for infinite side-scrolling to the upcoming and past Chrome Versions.
  3. For each chrome version, features were displayed after grouping them according to the stage in their lifecycle.
  4. Two new web components were designed which were inspired by Redux.
  5. Support was added for feature fighlighting on hovering over the feature.
  6. The web page was designed to be responsive to viewport size.

The following PRs were raised:-
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
As mentioned, the project also involved fixing bugs and improve usability. The following is the complete list of UI enhancements and bug fixes that were done as a part of this project:-

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

## Project Status
By the end of GSoC 2021, all the above-mentioned PRs were merged into the main branch and all the goals of the project were met. 

## Learnings
While working on this project, I got to learn the following:-

* Some good software developmement practices with hands-on experience of following software quality and style guidelines. 
* Some secure web practices (XSSI Prefix, nonce attribute etc.)
* Writing Design Docs
* Writing unit tests
* Performing code reviews
* Use of technologies like 
   * Web Components using LitElement
   * Google Cloud Datastore
   * Google Sign-In
   * Django Templates and Flask

## See Also
* [Design Doc for Roadmap View](https://docs.google.com/document/d/1qnMsBYzhqVnja_TpZVL8-ENj2pG0tKIRZ_PRnoPxGHk/edit?usp=sharing)
* [GSoC 2021 End of Program Presentation](https://docs.google.com/presentation/d/1Jx7tUVszkXTSIGp9XPEjLv9nCI2IWH6k0Gg1HLXhPEE/edit?usp=sharing)

