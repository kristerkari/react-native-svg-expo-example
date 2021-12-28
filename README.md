# Expo SVG demo

![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

A simple example app that shows how you can use SVG files in Expo.

The SVG images used in this app can be found from the [logos](/logos) folder.

## How does it work?

The `.svg` files can be imported inside a React component:

```jsx
import Logo from "./logo.svg";
```

The images can then be used as a component:

```jsx
<Logo width={120} height={40} />
```

## Try it

### Step 1: Install Expo

- Install Expo: https://docs.expo.dev/get-started/installation/

### Step 2: Clone the repo and move to project

```sh
git clone git@github.com:kristerkari/react-native-svg-expo-example.git
cd react-native-svg-expo-example
```

### Step 3: Install example app's dependencies

```sh
expo install
```

### Step 4: Run Expo

```sh
yarn start
```
