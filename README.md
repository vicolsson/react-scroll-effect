# react-scroll-effect

Makes scroll based animations a breeze

<br/>

## Test it out in a sandbox
[![Test it out in a sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-scroll-effect-example-hyexx?fontsize=14&hidenavigation=1&theme=dark)

<br/>

## Getting started

First create an animation:

```css
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100%;
  }
}

.animate-fadeIn {
  animation: fadeIn ease;
}
```
Don't worry about duration or delay. The library will overwrite it anyway.

<br/>

Then add the React components to your application.

```jsx
const MyComponent = () => {
  <ReactScrollEffect.Container
    scrollContainer={document.body}
    scrollDistance={window.innerHeight * 2}
  >
    {(scrollPercentage) => (
      <ReactScrollEffect.Animation
        percentage={scrollPercentage}
        animationClassName="animate-fadeIn"
      >
        <div>
          Fading text!
        </div>
      </ReactScrollEffect.Animation>
    )}
  </ReactScrollEffect.Container>
};
```
The `Container` creates an empty element you scroll through and keeps track of how far you've scrolled.

`scrollContainer` is the element you're scrolling, probably the closest element with `overflow: auto` or if none has overflow set it's just `document.body`.

`scrollDistance` is the amount of pixels you need to scroll to run through the animation.

Other optional parameters are:
* `onlyAnimateFullyVisible`: default **false**, delays the animation until the animation container is fully in view
* `logPercentage`: default **false**, logs the percentage to the console, nice to have when creating advanced animations
* `containerClassName`: any extra styling of the container element

<br/>

The `Animation` creates an element with the animation class and sets the animation position based on the percentage.

An optional parameter is:
* `className`: any extra styling of the container element

<br/>

## How it works
The `Container` keeps track of how far you've scrolled by adding a `scroll`-event listener to the `scrollContainer`. With some math it calculates the scroll percentage and reports it by calling the `children`-function. It also wraps its children in an element with `position: sticky` so they don't move when you scroll.

The `Animation` takes the percentage and moves an animation forward by setting the `animation-play-state` to `paused` and the `animation-delay` to a value between 0 and -1. At 25% scrolled down the `animation-delay` will be `-0.25s`.
