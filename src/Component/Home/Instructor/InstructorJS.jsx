import React from "react";
import "./Instructor.scss";
import Risqan from "../../../Assets/risqan.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const InstructorJS = () => {
  return (
    <div className="row mt-5 text-center ins">
      <div className="col-md-12 inst-txt">
        <ScrollAnimation animateIn="fadeInDown">
          <h1>Instructor</h1>
        </ScrollAnimation>
      </div>

      <div className="col-md-12">
        <div className="row d-flex justify-content-center">
          <ScrollAnimation animateIn="fadeInLeft">
            <div className="box-1 ml-5 mt-5">
              <div className="imgBx">
                <img className="foto1" src={Risqan} alt="" />
              </div>
              <div className="content-mutiara">
                <h5 className="text-center">
                  Risqan Ramdhani<br></br>
                  <p className="title-ceo">React Native Instructor</p>
                </h5>

                <p className="mt-5 text-center">
                  "Siap mentransformasi kamu menjadi developer yang profesional
                  , kreatif dan inovatif"
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight">
            <div className="box-1 ml-5 mt-5">
              <div className="imgBx">
                <img
                  className="foto1"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////F2t3B19vT4+XP4OPJ3N/6/PzF2d30+Pja5+ns8/TW5Off6uzx9vfL3eDm7/BcGlvgAAAFRElEQVR4nO2d25arIBBEAyre9f//9micjJpRo9AlRQ77KY+p1U3faPXxiEQikUgkEolEIpFI5FZMUfVNWdZ1WTZ9VRjf/0eWtqkzpbRWP4y/urLy/beEKJp0lrZC67QP3ZSmLbMdeT8iVd36/pMOjPIO1L1EJoFqNE33Wd0PdYC+2ian5T3tGJgZi0ad8M61xJDiaptonV8UOND7/t9nMdfcc2HFQCT2SlnYbyJtevrjaNKr5+/NjkPuTJhtWWRO+p7kQ370rWOXwto/19BKNDL6FG3QMQIu+iKnrHFss8QmtW81G/RuUfSdwreeP8gdwonSt6A/lMIKc9+C3ilkfZQwnEqbkC7WSJ/CEd+a1ggH0hHNlRJTcYFkB9HIm5AsXwCcVKnOt6ologXbL75VLYEIZCrcIMdQKaKJRgVRyDRfhAQapYgUypdsI0wJERNKmbw0FZpAvSkksqHggGapkMiGEIH/g0KifIhRyJTxQQqJqjaQQqIWGKTQt6wFkHSoMt+yFmDyYepb1gJMTcM0TsTUpUxzGkxv0fiWtaBBCGQqvDEdMFNZ+mghComKNswkShMVbZiihuveApEQtW9RKxDpgkshJJj6FrUCEkx9i1qBuALmUvjoAKHGt6Y1tbxArkiDCKZcGR9iQ6bKeziH8gpzph5ffiNqhKq5ADipolpVgJiQ6iRi5jRERgSZkKgJBl3jK55xG2QQNZKzuCnOhiyVG2ad5qmQZJLRogTShBpYLKVRCOl/o8J7wSlk6RFxCkliKeiGVPHkQ1DzNOJb2QtY2UbT5sPKNpbKGzPyHtA0F92gTXamSQ1GIE+ygI0xWNrDByzU0AQaVHdBdAwhM2+lMp5jCMr5RE6KaaBoGouJUv4kkr3+A2BEplM40tq8GmqXXHdsAgeJZ14+dxJNtXo5U/SJUNZo+Az4wogsZbDMnzYReDCfqpT5i0ANTpYl3nFfOyE3oUT5xhtlnrj3UUyPymzhftNGfgwFhlJUHcUGhatA0mpmxr0C51mi2cb5xXtEa0I7uFam7OnQvWzjV+h6D0U2u9igdGwuiObcOziXbb4FfMS1bGNP+M5lG832xT6ORQ3RZcwubumC34RutzQ8l76H2McazfQI/hGNrcQQDuGE5SUGf7KfsYs2YRzCCatow/mW8j1sjMg+oFljE09DclKrHSL+5v4X0zZWkSZLyr4K4iyqw290HdtR6wBy4vc3F66jKJqd0j3cx/rsgxr3K1LyvCjxhBC3ESX2MKl7KJF9aOqRqcwXBIhPotCTiMQ5UWjxi+bp2D+Ivf+DtQqXfOyCMtiYTHA7kdJPZb/EwpcUjfCnZsi+EFjY9bwfSHqO02j6Ooe9GEOVvrv+tuzsO/pzInXaeDOl6R2/q3qa1Et+LEqH7+Je5/bF6Oou8/2i0xv3UEwjuJd/QWPX32PIFhc7P2pUJT7qVIjMdwWss5rGm/lmdAa74WgBj29ZAXLW+6PnEToRdlZP0fMI0cha1PmNuf00g7PKaORyzzUCZQChe65xdNa2Vtz6Rhwiq/fkfh4bZx1aB37zzej8WvNh+i4keRM6PXsih8Y2KPPNaJWcEFklgcqbGEQeHsmiJKisXdH784CWOLVfQydbt1ffo29Ep+8aTf1N+kb0umitfP8fADpbmNF6b5mafL6G/E6Bar5pxb3p2DvTs37uj+4S81ytDqeDsGC8hsS9q5oC3X63CdV4Xe77H8CJCsMnKgyfqDB8osLwiQrDJyoMn6gwfKLC8IkKwycqDJ+oMHyiwvCJCsMnKgyfqDB8osLw+X6F/wDLoG5NhZ1NuQAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div className="content-mutiara">
                <h5 className="text-center">
                  Bagas Ihsan<br></br>
                  <p className="title-ceo">React JS Instructor</p>
                </h5>

                <p className="mt-5 text-center">
                  "Siap membantu kamu untuk mencapai semua tujuanmu"
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default InstructorJS;
