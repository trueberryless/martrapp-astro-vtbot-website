No, its not a roBOT, its a <b>B</b>ag <b>o</b>f <b>T</b>ricks!

A current deployment of this code can be found at https://events-3bg.pages.dev/

# Astro Bag of Tricks for View Transitions

The bag of tricks provides support around Astro's view transitions.
Some of the contents are technical demos, some are useful tools, and some are reusable components that you can use in your own project to handle edge cases that go beyond Astro's standard features.

## Tech Demos

The bag of tricks currently contains [several technical demos](https://events-3bg.pages.dev/demos/) that show examples of the implementation of various effects using the view transition events.

The sources are in the [`example` folder](https://github.com/martrapp/astro-vt-bot/tree/main/example).

## Reusable Components

For functionality and usage [see the documentation](https://events-3bg.pages.dev/components/).

### Feature Enhancements

#### In this release

- `<ReplacementSwap />`: An alterantive DOM swap(), which preserves elements in the original DOM to avoid reinitialization of iframes or CSS animations.

#### Ideas for upcomming components

- A component that identifies and activates the current link in a persistent navigation bar
- A component that preloads images used in view transitions (including load indicator)
- A component that simplifies the creation of pages with multiple different transitions

### Development support

#### In this release

- `<VtBotDebug />`: A Debugging component that logs the events and their data as they occur.

#### Ideas for upcomming components

- A linter component that helps you identify problems when setting up transitions.

## Todo list

- find & fix bugs
- provide additional components and demos
- replace `<xmp>` with something more stable. Maybe it would be helpful to move content heavy pages to mdx.
