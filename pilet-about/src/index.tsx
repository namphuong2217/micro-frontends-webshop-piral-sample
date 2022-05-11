import * as React from "react";
import { PiletApi } from "app-shell";

export function setup(app: PiletApi) {
  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      About
    </a>
  ));
  app.registerTile(() => <div>About Page pilet-about</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
