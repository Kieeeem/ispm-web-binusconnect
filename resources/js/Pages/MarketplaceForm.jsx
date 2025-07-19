import React, { useState } from 'react';
import '../../css/marketplaceForm.css';


const MarketplaceForm = ({ onFormSubmit, onBackClick }) => {
  const [formData, setFormData] = useState({
    productTitle: '',
    productCategory: '',
    productDescription: '',
    eventLocation: '',
    startDate: '',
    endDate: '',
    startTime: '',
    finishTime: '',
    linkRegistrasi: '',
    poster: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, poster: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
    if (onFormSubmit) onFormSubmit();
  };

  return (
    <div className="marketplaceFormContainer">
      <div className="form-header">
        <button className="back-button" onClick={onBackClick}>
             <img src="/path/to/back-icon.png" alt="Back" />
        </button>
        <h2 className="form-title">Product Form</h2>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-section">
          <label className="form-label">Poster <span className="required">*</span></label>
          <div className="upload-area" onClick={() => document.getElementById('posterInput').click()}>
            {formData.poster ? formData.poster.name : 'Click to upload or drag and drop file PNG, JPG'}
          </div>
          <input
            id="posterInput"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            hidden
            required
          />
        </div>

        <div className="form-section">
          <h3 className="section-title">Product Information</h3>

          <div className="form-group">
            <label>Product Title <span className="required">*</span></label>
            <input
              type="text"
              name="productTitle"
              placeholder="Write your title here"
              value={formData.productTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Product Category <span className="required">*</span></label>
            <select
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              required
            >
              <option value="">Choose Product Category</option>
              <option value="food">Food</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="hoodie">Hoodie</option>
              <option value="pants">Pants</option>
            </select>
          </div>

          <div className="form-group">
            <label>Product Description <span className="required">*</span></label>
            <textarea
              name="productDescription"
              placeholder="Write your description here"
              value={formData.productDescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Event Location <span className="required">*</span></label>
            <input
              type="text"
              name="eventLocation"
              placeholder="Write your location here"
              value={formData.eventLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-double">
            <div className="form-group">
              <label>Start Date <span className="required">*</span></label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date <span className="required">*</span></label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-double">
            <div className="form-group">
              <label>Start Time <span className="required">*</span></label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Finish Time <span className="required">*</span></label>
              <input
                type="time"
                name="finishTime"
                value={formData.finishTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Link Registrasi <span className="required">*</span></label>
            <input
              type="url"
              name="linkRegistrasi"
              placeholder="Input link di sini yaa!!"
              value={formData.linkRegistrasi}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-submit-container">
            <button className="submit-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MarketplaceForm;
