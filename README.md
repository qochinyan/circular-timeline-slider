# Circular Timeline Slider

**Interactive circular timeline block** implemented in React + TypeScript, styled with SCSS, built with Webpack. Each block displays 2–6 time periods around a circle. Clicking a period rotates the circle to highlight the selected period and updates a Swiper slider below with detailed events for that period. GSAP provides smooth animations. The component is self-contained; multiple instances can coexist without interference.

## Demo

![Demo GIF](./demo.gif)

## Features

* **Dynamic periods:** Supports 2 to 6 periods.
* **Circular layout:** Evenly spaced interactive points around a circle.
* **Swiper integration:** Detailed events slider per period.
* **GSAP animations:** Smooth rotation and fade effects.
* **Standalone block:** Can be used multiple times on the same page without conflicts.
* **Responsive:** Adjusts to container size; supports different screen widths.

## Technologies

* **React** + **TypeScript**
* **SCSS** modules with mixins and variables
* **Webpack** for bundling
* **Swiper** for slider functionality
* **GSAP** for animations

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/qochinyan/circular-timeline-slider.git
   cd circular-timeline-slider
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## Available Scripts

* `npm run start` - Starts development server on [http://localhost:3000](http://localhost:3000)
* `npm run build` - Builds production-ready files into `dist/`

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TimeSliderBlock/
│   │   │   ├── AnimatedCircles.tsx
│   │   │   ├── TimeSliderBlock.tsx
│   │   │   ├── types.ts
│   │   │   ├── sampleData.ts
│   │   │   └── AnimatedCircles.scss
│   │   ├── SwitcherButton/
│   │   │   ├── SwitcherButton.tsx
│   │   │   └── SwitcherButton.scss
│   │   ├── AnimatedNumber/
│   │   │   └── AnimatedNumber.tsx
│   ├── styles/
│   │   ├── vars.scss    
│   │   ├── mixins.scss   
│   │   └── global.scss
│   ├── App.tsx
│   ├── App.scss
│   └── index.tsx
├── .gitignore
├── tsconfig.json
├── webpack.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Usage

Import and use the `TimeSliderBlock` component anywhere:

```tsx
import React from 'react';
import TimeSliderBlock from './components/TimeSliderBlock/TimeSliderBlock';
import { sampleData } from './components/TimeSliderBlock/sampleData';

function App() {
  return <TimeSliderBlock data={sampleData} />;
}
```

## Customization

* **Data:** Edit `sampleData.ts` or pass your own `TimePeriodData[]` to the component.
* **Styles:** Modify SCSS variables in `vars.scss` or override component styles via CSS modules.
* **Animation:** Adjust GSAP timelines or CSS transitions in component files.

## License

MIT © Aren Qochinyan
