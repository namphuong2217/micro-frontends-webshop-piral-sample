import "piral/polyfills";
import * as React from "react";
import { Redirect } from "react-router-dom";
import { render } from "react-dom";
import {
  createPiral,
  Piral,
  SetRedirect,
  createInstance,
  renderInstance,
} from "piral";
import { createContainersApi } from "piral-containers";
import { createMenuApi } from "piral-menu";
import { layout, errors } from "./layout";

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl =
  "https://feed.piral.cloud/api/v1/pilet/micro-frontends-thesis-nguyen-feed";

const landing: React.FC = () => <Redirect to="/landing" />;

// renderInstance({
//   layout,
//   errors,
//   plugins: [createVueApi(), createMenuApi(), createContainersApi()],
//   requestPilets() {
//     return fetch(feedUrl)
//       .then((res) => res.json())
//       .then((res) => res.items);
//   },
// });

const piralInstance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
    routes: {
      "/": landing,
    },
  },
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
  plugins: [createMenuApi(), createContainersApi()],
});

const app = (
  <Piral instance={piralInstance}>
    {/* <SetRedirect from="/" to="/landing" /> */}
  </Piral>
);

render(app, document.querySelector("#app"));

// renderInstance({
//   layout,
//   errors,
//   requestPilets() {
//     return fetch(feedUrl)
//       .then((res) => res.json())
//       .then((res) => res.items);
//   },
// });
