import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrganizationSetup.css";

function OrganizationSetup() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebsite: "",
    companyDescription: "",
  });

  const [webpages, setWebpages] = useState([
    { url: "https://example.com/home", status: "Scraped", chunks: ["Welcome message", "Company intro"] },
    { url: "https://example.com/about", status: "Pending", chunks: [] },
    { url: "https://example.com/contact", status: "Scraping", chunks: [] },
  ]);

  const [selectedPage, setSelectedPage] = useState(null);
  const [metaFetched, setMetaFetched] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchMetaDescription = () => {
    if (!formData.companyWebsite) {
      alert("Enter a website URL first!");
      return;
    }
    setTimeout(() => {
      setFormData({ ...formData, companyDescription: "Sample meta description fetched from website." });
      setMetaFetched(true);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/integration-testing");
  };

  return (
    <div className="organization-container">
      <div className="organization-card">
        <h2 className="organization-heading">Setup Your Organization</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="companyWebsite">Company Website:</label>
            <input type="url" id="companyWebsite" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} required />
            <button type="button" className="fetch-meta-btn" onClick={fetchMetaDescription} disabled={metaFetched}>Fetch Meta Description</button>
          </div>
          <div className="input-group">
            <label htmlFor="companyDescription">Company Description:</label>
            <textarea id="companyDescription" name="companyDescription" value={formData.companyDescription} onChange={handleChange} required />
          </div>
          <button type="submit">Next</button>
        </form>
      </div>

      <div className="scraping-status">
        <h3>Webpage Scraping Status</h3>
        <ul>
          {webpages.map((page, index) => (
            <li key={index} className={page.status.toLowerCase()} onClick={() => setSelectedPage(page)}>
              {page.url} - <span>{page.status}</span>
            </li>
          ))}
        </ul>
        {selectedPage && (
          <div className="scraped-data">
            <h4>Scraped Data from {selectedPage.url}</h4>
            {selectedPage.chunks.length > 0 ? (
              <ul>
                {selectedPage.chunks.map((chunk, i) => (
                  <li key={i}>{chunk}</li>
                ))}
              </ul>
            ) : (
              <p>No data available yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrganizationSetup;
