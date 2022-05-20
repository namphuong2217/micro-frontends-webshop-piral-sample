// import * as React from "react";
import { PiletApi } from "app-shell";
import Tile from "../src/Tile.svelte";
import { fromSvelte } from "piral-svelte/convert";

export function setup(piral: PiletApi) {
  piral.registerPage("/sample", fromSvelte(Tile));
  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() =>
  //   <a href="https://docs.piral.io" target="_blank">Documentation</a>
  // );
  // app.registerTile(() => <div>Welcome to Piral!</div>, {
  //   initialColumns: 2,
  //   initialRows: 1,
  // });
  // piral.registerPage("/sample-for-vue", {
  //   type: "html",
  //   component: {
  //     mount(parent, props) {
  //       const el = parent.appendChild(document.createElement("div"));
  //       new Vue({
  //         el,
  //         render(h) {
  //           return h(BuyButton, {
  //             props,
  //           });
  //         },
  //       });
  //     },
  //   },
  // });
}
