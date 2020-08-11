# ReactNative-movieApp
Inspired by disney+  movie app


[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://github.com/expo/expo) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo) 


<p align="center">
  <img src="assets/screenshots/spashpage.png?raw=true" />
</p>

<p align="center">
  <img src="assets/screenshots/homepage.png?raw=true" />
</p>


## Table of Contents

- [Install & Build](#install--build)
- [Stats](#stats)
- [Features](#features)
- [Demo & Release Notes](#release-notes)

## Install & Build

Install : `npm install`

Run Client :`expo start`

## Stats

- Expo SDK 38
- iOS, Android 
- React Navigation v5
- PropTypes

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file



## Release Notes

### version 0.0.1 (current)

- upgraded to [Expo SDK 38](https://blog.expo.io/expo-sdk-38-is-now-available-dd5770f066a6)
- started with [React Navigation v5](https://reactnavigation.org/docs/getting-started)
- iOS and Android
- Tab Navigation (stacks created)
  - Home
    - Horizontal Album component
    - Album Screen
      - animation opacity on header
      - scroll sticky of shuffle button
      - current song playing shows in album list view
    - Album More Options (added by [@bidah](https://github.com/bidah))
      - blur view
      - SafeAreaView example
      - action list with supporting icons
    - Header animation on scroll event
      - animation opacity on iPhoneX notch
      - animation opacity on cog icon
  - Search
    - Sticky search bar (animated width)
    - Playlists sections added (with mock data)
  - Library
    - Menu items from mock data
  - Custom Bar for Music Player added to `<BottomTabBar />`
- Modals (bottom to top)
  - Music Player
