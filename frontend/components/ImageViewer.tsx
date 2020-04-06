import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

type ImageViewerProps = {
  images: string[];
};

type ImageViewerState = {
  current: number;
};

const ImageViewerStyles = styled.div`
  flex: 1;
  /* remove double click highlighting */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    min-width: 80rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 920px) {
    min-width: 50rem;
  }

  @media only screen and (max-width: 700px) {
    min-width: 0;
  }

  img {
    height: 60rem;
    @media only screen and (max-width: 1490px) {
      height: 45rem;
    }
    @media only screen and (max-width: 1000px) {
      height: 45rem;
    }
    @media only screen and (max-width: 920px) {
      height: 40rem;
    }
    @media only screen and (max-width: 840px) {
      height: 35rem;
    }
    @media only screen and (max-width: 760px) {
      height: 30rem;
    }
    @media only screen and (max-width: 590px) {
      height: 25rem;
    }
    @media only screen and (max-width: 420px) {
      height: 20rem;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    @media only screen and (max-width: 630px) {
      width: 100%;
      padding: 0 1rem;
    }
    @media only screen and (max-width: 420px) {
      margin: 0;
    }
  }

  .icon {
    font-size: 7rem;
    @media only screen and (max-width: 1200px) {
      font-size: 5rem;
    }
    @media only screen and (max-width: 760px) {
      font-size: 3rem;
    }
    color: ${props => props.theme.greenBlue};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.pink};
    }
  }
`;

class ImageViewer extends React.Component<ImageViewerProps, ImageViewerState> {
  // TODO: maybe add react transition groups
  // TODO: https://blog.bitsrc.io/how-to-implement-smooth-transitions-in-react-bd0497b06b8

  constructor(props: ImageViewerProps) {
    super(props);
    this.state = {
      current: 0
    };
  }

  handleKeyDown = (e: any) => {
    if (e.keyCode === 37) this.handleClick(e, "down");
    if (e.keyCode === 39) this.handleClick(e, "up");
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleClick = (target: Event | undefined, dir: string) => {
    let current = this.state.current;
    if (dir === "up") {
      current = current + 1;
      if (current === this.props.images.length) current = 0;
    } else {
      current = current - 1;
      if (current < 0) current = this.props.images.length - 1;
    }
    this.setState({ current });
  };

  render() {
    const { images } = this.props;
    return (
      <ImageViewerStyles>
        <div className='container'>
          <div className='icon' onClick={() => this.handleClick(event, "down")}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </div>
          <img src={images[this.state.current]} />
          <div className='icon' onClick={() => this.handleClick(event, "up")}>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
      </ImageViewerStyles>
    );
  }
}

export default ImageViewer;
