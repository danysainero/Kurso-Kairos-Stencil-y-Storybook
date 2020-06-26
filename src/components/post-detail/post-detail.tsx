import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "post-detail",
  styleUrl: "post-detail.css",
  shadow: true,
})
export class PostDetail implements ComponentInterface {
  
  @Prop() post: Object = {};

  render() {
    return (
      <div class="card">
        <div class="card__header">
          <p class="card__header__info">
            Autor: {this.post["postAuthorName"]}
          </p>
        </div>
        <div class="card__body">
          <p class="card__body__title">{this.post["postTitle"]}</p>
          <div class="card__body__img">
            <slot name="card-img" />
          </div>
          <p class="card__body__text">{this.post["postContent"]}</p>
        </div>
        <div class="card__footer"></div>
      </div>
    );
  }
}
