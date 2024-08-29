# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
    PROJECT SETUP

     STEP 1:
     npm create vite@latest gospel-delights-app

     STEP 2:
     select a framework: React

     STEP 3:
     select a variant: Javascript

     STEP 4:
     Go To D:\ExternalProject\GoSpelDelights\gospel-delights-app

     STEP 5:
     Now Run:
     npm install
     npm run dev

     STEP 6:
     Local: http://localhost:5173/

     STEP 7:
     open vite.config.js

     update export default defineConfig({
        plugins: [react()],
        server: {
            port: 3000,
        },
    });

    STEP 8:
    URL port has changed now run the below URL
    Local: http://localhost:3000/

    STEP 9:
    Install Router DOM
    npm i react-router-dom

    STEP 10:
    To Install MUI5
    npm install @mui/material @emotion/react @emotion/styled

    STEP 11:
    npm install @fontsource/roboto

    STEP 12:
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';

    STEP 13:
    npm install @mui/icons-material
    import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

    STEP 14:
    npm install --save react-grid-gallery
    import { Gallery } from "react-grid-gallery";

    STEP 15:
    npm i yet-another-react-lightbox
    import Lightbox from "yet-another-react-lightbox";
    import Captions from "yet-another-react-lightbox/plugins/captions";
    import "yet-another-react-lightbox/styles.css";
    import "yet-another-react-lightbox/plugins/captions.css";
    import { data } from "./data";

    const [open, setOpen] = useState(false);

    <button onClick={() => setOpen(true)}>
    Open</button>

    <LightBox
                open={open}
                slides={data}
                close={() => setOpen(false)}
              />

    export const data = [
        {
            src: "/gallery-01.jpeg",
            width: 320,
            height: 174,
            title:"abc",
            isSelected: true,
            caption: "abc",
            alt: "abc",
        },
        {
            src: "/gallery-02.jpeg",
            width: 320,
            height: 174,
            title:"xyz",
            isSelected: true,
            caption: "xyz",
            alt: "xyz",
        },
    ]

    Reference URL: https://youtu.be/Vc6SFpPf-V4

    STEP 16:

    npm install formik --save
    npm install yup --save

    STEP 17:
    npm i react-scroll-to-top

    Reference URL: https://www.npmjs.com/package/react-scroll-to-top
    import ScrollToTop from "react-scroll-to-top";
     <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
      />


    STEP 18:
    npm i axios



```
