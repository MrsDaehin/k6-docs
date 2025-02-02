---
title: "BrowserContext"
excerpt: "Browser module: BrowserContext Class"
---

`BrowserContext`s provide a way to operate multiple independent sessions, with separate pages, cache, and cookies. A default `BrowserContext` is created when a browser is launched.

The [browser module API](/javascript-api/k6-experimental/browser#browser-module-api) is used to create a new `BrowserContext`.

If a [page](/javascript-api/k6-experimental/browser/page/) opens another page, e.g. with a `window.open` call, the popup will belong to the parent page's `BrowserContext`.


| Method                                                                                                                                                      | Description                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [BrowserContext.addCookies()](/javascript-api/k6-experimental/browser/browsercontext/addcookies/)                                                           | Adds [cookies](/javascript-api/k6-experimental/browser/browsercontext/cookie) into the `BrowserContext`.                                                                               |
| [BrowserContext.clearCookies()](/javascript-api/k6-experimental/browser/browsercontext/clearcookies/)                                                       | Clear the `BrowserContext`'s [cookies](/javascript-api/k6-experimental/browser/browsercontext/cookie).                |
| [BrowserContext.clearPermissions()](/javascript-api/k6-experimental/browser/browsercontext/clearpermissions) <BWIPT id="443"/>                              | Clears all permission overrides for the `BrowserContext`.                                                             |
| [BrowserContext.cookies()](/javascript-api/k6-experimental/browser/browsercontext/cookies)                                                                  | Returns a list of [cookies](/javascript-api/k6-experimental/browser/browsercontext/cookie) from the `BrowserContext`. |
| [BrowserContext.close()](/javascript-api/k6-experimental/browser/browsercontext/close)                                                                      | Close the `BrowserContext` and all its [page](/javascript-api/k6-experimental/browser/page/)s.                        |
| [BrowserContext.grantPermissions(permissions[, options])](/javascript-api/k6-experimental/browser/browsercontext/grantpermissions)                          | Grants specified permissions to the `BrowserContext`.                                                                 |
| [BrowserContext.newPage()](/javascript-api/k6-experimental/browser/browsercontext/newpage)                                                                  | Uses the `BrowserContext` to create a new [Page](/javascript-api/k6-experimental/browser/page/) and returns it.       |
| [BrowserContext.pages()](/javascript-api/k6-experimental/browser/browsercontext/pages) <BWIPT id="444"/>                                                    | Returns a list of [page](/javascript-api/k6-experimental/browser/page/)s that belongs to the `BrowserContext`.        |
| [BrowserContext.setDefaultNavigationTimeout(timeout)](/javascript-api/k6-experimental/browser/browsercontext/setdefaultnavigationtimeout)                   | Sets the default navigation timeout in milliseconds.                                                                  |
| [BrowserContext.setDefaultTimeout(timeout)](/javascript-api/k6-experimental/browser/browsercontext/setdefaulttimeout)                                       | Sets the default maximum timeout for all methods accepting a timeout option in milliseconds.                          |
| [BrowserContext.setGeolocation(geolocation)](/javascript-api/k6-experimental/browser/browsercontext/setgeolocation) <BWIPT id="435"/>                       | Sets the `BrowserContext`'s geolocation.                                                                              |
| [BrowserContext.setOffline(offline)](/javascript-api/k6-experimental/browser/browsercontext/setoffline)                                                     | Toggles the `BrowserContext`'s connectivity on/off.                                                                   |
| [BrowserContext.waitForEvent(event[, optionsOrPredicate])](/javascript-api/k6-experimental/browser/browsercontext/waitforevent) <BWIPT id="447"/>           | Waits for the event to fire and passes its value into the predicate function.                                         |
