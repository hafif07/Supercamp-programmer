import React, { Component } from "react";
import Keunggulan from "../../Component/Home/Keungulan/Keunggulan";

class KeunggulanContainer extends Component {
  state = {
    data: [
      {
        i: "fas fa-book",
        text: "Modul disusun dalam bahasa indonesia"
      },
      {
        i: "fas fa-user-tie",
        text: "Dibimbing oleh trainer yang sudah mempunyai pengalaman mengajar dibidangnya"
      },
      {
        i: "fas fa-store-alt",
        text: "Penginapan gratis bagi peserta diluar kota"
      },
      {
        i: "fas fa-coins",
        text: "Biaya pelatihan murah"
      },
      {
        i: "fas fa-laptop-code",
        text: "30% teori, 70% praktik langsung ke dalam project"
      },
      {
        i: "fas fa-chalkboard-teacher",
        text: "Join grup telegram alumni untuk diskusi materi dan info loker"
      }
    ]
  };
  render() {
    return (
      <div>
        <Keunggulan keunggulan={this.state.data} />
      </div>
    );
  }
}
export default KeunggulanContainer;
