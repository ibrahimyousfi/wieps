function Test() {
  return (
    <div className="test-container">
      <div className="test-header">
        <h2>AI Performance Test</h2>
        <p>Test your content against AI-powered metrics</p>
      </div>

      <div className="test-content">
        <div className="test-form">
          <div className="form-group">
            <label>Select Test Type</label>
            <select>
              <option value="content">Content Analysis</option>
              <option value="performance">Performance Test</option>
              <option value="engagement">Engagement Metrics</option>
            </select>
          </div>

          <div className="form-group">
            <label>Upload Content</label>
            <div className="upload-area">
              <input type="file" id="content-upload" />
              <label htmlFor="content-upload" className="upload-button">
                Choose File or Drag & Drop
              </label>
            </div>
          </div>

          <button className="start-analysis-btn">
            Start Analysis
          </button>
        </div>

        <div className="results-section">
          <h3>Previous Test Results</h3>
          <div className="results-list">
            <div className="result-card">
              <div className="result-header">
                <span className="date">28.02.2024</span>
                <span className="score">Score: 85/100</span>
              </div>
              <div className="result-details">
                <p>Content Type: Image Post</p>
                <p>Engagement Rate: 4.5%</p>
                <p>Reach: 10,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test; 