[4.1.0]
=====

* [ADDED] Ability to pass context through themeable's constructor

* [CHANGED] Updating dev dependencies to fix npm install errors
* [CHANGED] React dependency top boundry from `0.14.0-beta1` to `15.x.x`


[4.0.2]
=====

* [CHANGED] Removed Webpack dev dependency as it is not used


[4.0.0]
=====

* [BREAKING] Updated several dependencies (Notable React@15, Babel@6, and Eslint@2)
* [BREAKING] Renamed `Themeable` to `themeable`

  Since `themeable` is a function that takes and returns a component, and not a class that
  gets `new`ed up itself, it has been lowercased to indicate such.
  That means that CommonJS code consuming react-textarea-autosize package should
  Before:
    ```javascript
    import { Themeable } from 'rethemeable'
    ```
  Now:
    ```javascript
    import { themeable } from 'rethemeable'
    ```

* [BUGFIX] ApplyTheme is now properly exported in index.js
* [BUGFIX] The default value for `defaultTheme` was moved to fix an error when not defining a theme.

[3.0.0]
=====

[2.0.4]
=====

[2.0.3]
=====

[2.0.2]
=====

[2.0.1]
=====

[2.0.0]
=====


[Unreleased]: https://github.com/andreypopp/rethemeable/compare/v4.1.0...HEAD
[4.1.0]: https://github.com/andreypopp/rethemeable/compare/v4.0.2...v4.1.0
[4.0.2]: https://github.com/andreypopp/rethemeable/compare/v4.0.0...v4.0.2
[4.0.0]: https://github.com/andreypopp/rethemeable/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/andreypopp/rethemeable/compare/v2.0.4...v3.0.0
[2.0.4]: https://github.com/andreypopp/rethemeable/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/andreypopp/rethemeable/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/andreypopp/rethemeable/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/andreypopp/rethemeable/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/andreypopp/rethemeable/compare/v1.0.0...v2.0.0
