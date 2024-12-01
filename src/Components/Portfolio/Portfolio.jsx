import React, { useState } from 'react';
import image1 from '../../assets/poert1.png';
import image2 from '../../assets/port2.png';
import image3 from '../../assets/port3.png';
import './Portfolio.model.css'

export default function Portfolio() {
  const [previewSrc, setPreviewSrc] = useState(null);

  function previewImg(src) {
    setPreviewSrc(src);
  }

  function closeImg() {
    setPreviewSrc(null);
  }

  return (
    <>
      <section id="portfolio" className="min-vh-100 d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="container mt-5">
          <div className="title mt-5">
            <h1 className="text-center display-6 fw-bold t-color">PORTFOLIO COMPONENT</h1>

            <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
              <div id="line"></div>
              <i className="fa fa-solid fa-star t-color"></i>
              <div id="line"></div>
            </div>
          </div>
          <div className="row">
            {[image1, image2, image3, image1, image2, image3].map((img, index) => (
              <div className="col-md-4 p-3" key={index}>
                <img
                  src={img}
                  className="w-100 d-block img-fluid rounded"
                  alt={`Portfolio ${index + 1}`}
                  onClick={() => previewImg(img)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Overlay */}
      {previewSrc && (
        <div className="preview-img position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75">
          <div className="position-relative ">
            <img src={previewSrc} alt="Preview" className="img-fluid rounded " />
            <button
              onClick={closeImg}
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              style={{ transform: 'translate(50%, -50%)' }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
