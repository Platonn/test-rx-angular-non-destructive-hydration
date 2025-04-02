# Test RxAngular with Non-destructive Hydration of Angular

## Problem

This app shows that RxFor renders each component in separate task (becasue each of them takes more than 50ms to render - actually 500ms in this example to exaggerate the effect visually). And unfortunately hydration is considered done by Angular much earlier than all the components are rendered. Therefore the DOM is destroyed and recreated, while the components are re-rendered in separate tasks. It causes flickering / layout shifts while the components are rendered incrementally.

## How to run

Rn

```
ng serve
```

It runs the SSR dev server

## Open in browser

```
http://localhost:4200
```

See that all the components are displayed first (thanks to server-side-rendered HTML) and then they disappear to be incrementally rendered in CSR in separate tasks (thanks to RxFor splitting the rendering into separate tasks).
