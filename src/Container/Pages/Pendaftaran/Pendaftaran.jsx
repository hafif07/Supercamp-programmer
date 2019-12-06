import React from "react";
import TablePendaftaran from "../../../Component/Pendaftaran/Content2/TablePendaftaran"


class TablePendaftaranContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      img: "",
      imagePreviewUrl:""
    };
  }

  handleChange = e => {
    e.preventDefault(); 
    let reader = new FileReader();
    let file = e.target.files[0];
 
    reader.onloadend = () => {
      this.setState({
        img: file,
        imagePreviewUrl: reader.result
      });
    }
 
   reader.readAsDataURL(file)
  };

  render() {
      console.log(this.state.img)
    return <TablePendaftaran handleChange={this.handleChange} img={this.state.imagePreviewUrl} />
  }
}

export default   TablePendaftaranContainer
