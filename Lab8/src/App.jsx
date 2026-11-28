import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  })

  const [submitted, setSubmitted] = useState(null)

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan"
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted({ ...formData })
  }

  return (
    <div className="container">
      <div className="form-card">
        <h1>Data Entry Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="1234 Main St"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Address 2</label>
            <input
              type="text"
              name="address2"
              placeholder="Apartment, studio, or floor"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="field">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Province</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                {provinces.map((prov) => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="checkbox-field">
            <label>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              Agree Terms & Condition?
            </label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {/* Part II – Display submitted data */}
        {submitted && (
          <div className="result">
            <h3>Submitted Information</h3>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Address:</strong> {submitted.address}</p>
            <p><strong>Address 2:</strong> {submitted.address2}</p>
            <p><strong>City:</strong> {submitted.city}</p>
            <p><strong>Province:</strong> {submitted.province}</p>
            <p><strong>Postal Code:</strong> {submitted.postalCode}</p>
            <p><strong>Agreed to Terms:</strong> {submitted.agree ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App