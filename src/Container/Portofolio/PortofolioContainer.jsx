import React from "react";
import Portofolio from "../../Component/Home/Portofolio/Portofolio";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// import web1 from "../../Assets/portofolio/"
// import images from "../../Component/Home/Portofolio/Data.json"

const images = [
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200146/DImas nitip/muslim-chat_waqjc9.jpg",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200150/DImas nitip/g-chat-lp_jlt5fg.jpg",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200129/DImas%20nitip/osans-lp_rrywpb.png",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200143/DImas nitip/osans_ya51ur.jpg",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200131/DImas nitip/osans_w0szxk.png",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200160/DImas nitip/aiwah_jlbwa0.png",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200141/DImas nitip/beta_se4ixd.png"
];

class PortofolioContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: "",
      isOpen: false
    };
  }

  handleChange = img => {
      const foto = img.id
      console.log("belum", img.id)
    this.setState({
      photoIndex:foto,  
      isOpen: true
    });
    console.log(this.state.photoIndex)
  };

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <>
        <Portofolio handleChange={this.handleChange} />
        {isOpen && (
          <Lightbox 
            mainSrc={images[photoIndex]}
            nextSrc={images[photoIndex]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </>
    );
  }
}

export default PortofolioContainer;
