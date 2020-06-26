import { storiesOf } from "@storybook/html";
import notes from "./readme.md";

storiesOf("Components", module).add(
  "Grid Layout",
  () => {
    return `<grid-layout>
                <div slot="header">Contenido header</div> 
                <div slot="nav">Contenido nav</div>
                <div slot="aside">Contenido aside</div> 
                <div slot="section">Contenido section</div> 
                <div slot="footer">Contenido footer</div>
  </grid-layout>`;
  },
  { notes }
);
