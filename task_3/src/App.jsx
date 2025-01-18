import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import './App.css';

function SpaForm() {
  const [spaDetails, setSpaDetails] = useState({
    name: "",
    location: {
      city: "",
      area: "",
    },
    cost: "",
    openHours: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setSpaDetails({ ...spaDetails, images: Array.from(files) });
    } else if (name.includes('city') || name.includes('area')) {
      setSpaDetails({
        ...spaDetails,
        location: {
          ...spaDetails.location,
          [name]: value,
        },
      });
    } else {
      setSpaDetails({ ...spaDetails, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!spaDetails.name || !spaDetails.location.city || !spaDetails.location.area || !spaDetails.cost || !spaDetails.openHours || spaDetails.images.length === 0) {
      alert("Please fill in all fields and upload at least one image.");
      return;
    }

    const dataToSend = new FormData();
    dataToSend.append("spa_name", spaDetails.name);
    dataToSend.append("city", spaDetails.location.city);
    dataToSend.append("area", spaDetails.location.area);
    dataToSend.append("price", spaDetails.cost);
    dataToSend.append("timing", spaDetails.openHours);
    spaDetails.images.forEach((image, idx) => {
      dataToSend.append(`images[${idx}]`, image);
    });

    try {
      const response = await fetch(
        "http://20.193.149.47:2242/spas/vendor-spa-update-test/1/",
        {
          method: "PUT",
          body: dataToSend,
        }
      );
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="spa-form-container">
      <div className="form-preview-container">
        <section className="form-section">
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Spa Name:</label>
              <input
                type="text"
                name="name"
                value={spaDetails.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={spaDetails.location.city}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Area:</label>
              <input
                type="text"
                name="area"
                value={spaDetails.location.area}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Price:</label>
              <input
                type="number"
                name="cost"
                value={spaDetails.cost}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Opening Hours:</label>
              <input
                type="time"
                name="openHours"
                value={spaDetails.openHours}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Upload Images:</label>
              <input
                type="file"
                name="images"
                multiple
                onChange={handleInputChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </section>


        <section className="preview-section">
          <h2>Live Preview</h2>
          <p><strong>Spa Name:</strong> {spaDetails.name}</p>
          <p><strong>City:</strong> {spaDetails.location.city}</p>
          <p><strong>Area:</strong> {spaDetails.location.area}</p>
          <p><strong>Price:</strong> ₹{spaDetails.cost}</p>
          <p><strong>Opening Hours:</strong> {spaDetails.openHours}</p>

          <Swiper
            slidesPerView={1.2}
            spaceBetween={15}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="swiper-container"
          >
            {spaDetails.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Image ${idx + 1}`}
                  className="preview-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}

export default SpaForm;
