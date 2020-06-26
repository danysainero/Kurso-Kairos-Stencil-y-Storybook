import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'post-detail-comments',
  styleUrl: 'post-detail-comments.css',
  shadow: true,
})
export class PostDetailComments implements ComponentInterface {

  @Prop() comments: Object[] = [];
  @Prop() commentDate: string;

  componentDidLoad(){
   this.commentDate =  new Date(this.comments['createdAt']).toISOString().slice(0,10);
  }

  render() {
    return (
      <div class="card__footer">
      <div class="card__footer__comment">
        <p class="card__footer__comment__autor">{this.comments['commentAuthorName']} / {this.commentDate}</p>
        <p class="card__footer__comment__text">{this.comments['commentContent']}</p>
      </div>
    </div>
    );
  }

}
