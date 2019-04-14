import React, { Component } from 'react';
import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,

} from 'react-share';




class Demo extends Component {
  render() {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';

    return (
      <div className="container">
        <div className="network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>

          {/* <FacebookShareCount
            url={shareUrl}
            className="network__share-count">
            {count => count}
          </FacebookShareCount> */}
        </div>

        <div className="network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </div>

        <div className="network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="network__share-button">
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>

        <div className="network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="network__share-button">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        <div className="network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>

          {/* <LinkedinShareCount
            url={shareUrl}
            className="network__share-count">
            {count => count}
          </LinkedinShareCount> */}
        </div>

       
        <div className="network">
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="network__share-button">
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>

          {/* <RedditShareCount url={shareUrl}
            className="network__share-count" /> */}
        </div>
      </div>
    );
  }
}

export default Demo;