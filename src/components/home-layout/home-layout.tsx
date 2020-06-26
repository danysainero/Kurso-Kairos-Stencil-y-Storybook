import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "home-layout",
  styleUrl: "home-layout.css",
  shadow: true,
})
export class HomeLayout implements ComponentInterface {
  render() {
    return ( 
      <main>
        <header>
          <slot name="header" />
        </header>
        <section>
          <slot  name="section" />
        </section>
        <footer>
          <slot name="footer" />
        </footer>
      </main>
    );
  }
}
