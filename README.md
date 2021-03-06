# React UI Reference

Some common UI elements are intricate, which make them difficult to implement well. One example is a dialog. This
repository is collection of reference implementations of some these common UI elements. All of the examples in
this repository are written in React.

This is _not_ a UI component library that you can `npm install` and use in your application. Instead, it's a
collection of examples that you can reference when authoring _your own_ components.

## Goals

The UI elements in this repository should:

- follow a11y best practices, including
  - focus trapping
  - scroll locking
  - allow users to press <kbd>ESC</kbd> to exit modals
  - ARIA attributes
- support mount/unmount animations
  - support for both JS and CSS animations
  - support animations that depend on bounding boxes of relevant elements
  - demonstrate support for `prefers-reduced-motion`
- avoid "z-index" issues (and [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) issues)

## Examples

- [Popover](./components/popover)
- [Dialog](./components/dialog)

#### Coming soon

- Alert
- Menu
- Tooltip

## Understanding the Examples

Each example project has a `vendor` folder. You should think of the files in this directory as being
the code that would be installed into `node_modules` were this an npm package. The API of
vendor files is intended to be as general as possible.

Each example _also_ includes an `example_X.js` file, which is a wrapper for the file in vendor.
This is the "app code" you would write around the npm package to customize the component for your
app: things like custom styles, animations, and so on.

## Technical Details

The heavy lifting in this examples is done by a collection of libraries created by the React community. You can think
of this repository as one way to combine these libraries to create the UI elements.

- [Reach UI](https://reach.tech/) - A React component library focused on a11y
- [React Popper](https://popper.js.org/react-popper/) - A positioning library for React
- [Core Hooks](https://github.com/jamesplease/core-hooks) - A small collection of common React hooks
