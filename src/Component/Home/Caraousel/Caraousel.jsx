import React from "react";
import "./Caraousel.scss";

const Caraousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide coba"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
      </ol>
      <div className="carousel-inner carousel-img">
        <div className="carousel-item active">
          <div className="card card-title-caraousel">
            <div className="card-body ">
              <h5 className="card-title">Dinamis</h5>
              <p className="card-text">
                Belajar Pemrograman tidak hanya terpaut dengan satu teknologi ,
                melainkan terus update berdasarkan kebutuhan dunia kerja
              </p>
            </div>
          </div>
          <img
            src="https://cdn.ucfbootcamps.com/wp-content/uploads/sites/113/2017/04/code_overview-1140x440.jpg"
            className="d-block "
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <div className="card card-title-caraousel">
            <div className="card-body">
              <h5 className="card-title">Proffesional </h5>
              <p className="card-text">
                Belajar dengan orang yang sudah berpengalaman dalam mengajar ,
                hal ini akan efektif karena materi nantinya akan mudah diserap
                dan mudah dipraktikan
              </p>
            </div>
          </div>
          <img
            src="https://training.unh.edu/sites/default/files/media/coding_boot_camp_0.jpg"
            className="d-block "
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <div className="card card-title-caraousel">
            <div className="card-body">
              <h5 className="card-title">Kreatif</h5>
              <p className="card-text">
                Belajar tidak hanya untuk berkerja , melainkan juga memberikan
                wawasan untuk menciptakan peluang usaha
              </p>
            </div>
          </div>
          <img
            src="https://training.unh.edu/sites/default/files/media/coding_boot_camp_0.jpg"
            className="d-block "
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <div className="card card-title-caraousel">
            <div className="card-body">
              <h5 className="card-title">Sinergi </h5>
              <p className="card-text">
                Menanamkan nilai kerjasama adalah asas penting untuk membangun
                negeri yang berdiri di kaki sendiri
              </p>
            </div>
          </div>
          <img
            src="https://training.unh.edu/sites/default/files/media/coding_boot_camp_0.jpg"
            className="d-block "
            alt="..."
          />
        </div>
        <div className="bg"></div>
      </div>
    </div>
  );
};

export default Caraousel;
