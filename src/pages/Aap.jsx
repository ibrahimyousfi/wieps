import '../styles/Aap.css';

function Aap() {
  return (
    <div className="app-container">
      <div className="content-wrapper" style={{ padding: 0, margin: 0 }}>
        <div className="left-section" style={{ padding: 0, margin: 0 }}>
          <div className="main-section" style={{ padding: 0, margin: 0 }}>
            <div className="alert-message">
              <p>after verification your account get approved by our team</p>
            </div>

            <div className="steps-list">
              <div className="step-item">
                <span className="number">1</span>
                <div className="step-content">
                  <div className="step-header">
                    <h3>test your project performance by ai and marketing expert whit -100%</h3>
                  </div>
                  <div className="step-body">
                    <div className="coupon-display">
                      <span className="coupon-text">code-coupon-2024</span>
                      <button className="copy-btn">📋</button>
                    </div>
                    <button className="start-btn">start test</button>
                  </div>
                </div>
              </div>

              <div className="step-item">
                <span className="number">2</span>
                <div className="step-content">
                  <div className="step-header">
                    <p>get your free post now    <span className="coupon-text">code-coupon-2024</span>
                    <button className="copy-btn">📋</button></p>
                  </div>
                  <div className="step-body">
                    <div className="coupon-display">
                      <span className="coupon-text">code-coupon-2024</span>
                      <button className="copy-btn">📋</button>
                    </div>
                    <button className="start-btn">start test</button>
                  </div>
                </div>
              </div>

              <div className="step-item">
                <span className="number">3</span>
                <div className="step-content">
            
                  <div className="step-body">
                    <div className="coupon-display">
                      <span className="coupon-text">code-coupon-2024</span>
                      <button className="copy-btn">📋</button>
                    </div>
                  </div>
                  <button className="start-btn">start now</button>

                </div>
              </div>

              <div className="step-item">
                <span className="number">4</span>
                <div className="step-content">
                  <div className="step-header">
                    <p>contact our expert now for free</p>
                  </div>
                  <button className="start-btn">start now</button>
                </div>
              </div>

              <div className="step-item">
                <span className="number">5</span>
                <div className="step-content">
                  <div className="step-header">
                    <p>start your first test campaign now whit -30% use coupon</p>
                    <div className="timer-badge">28.15.54</div>
                  </div>
                  
                  <div className="pricing-boxes">
                    <div className="price-box">
                      <h4>pack test business</h4>
                      <div className="features">
                        <p>ipsum - dolor sit amet</p>
                        <p>consectetur adipiscing elit</p>
                      </div>
                      <div className="price-tag">
                        <span className="price">$49</span>
                        <span className="period">/mo</span>
                      </div>
                      <button className="activate-btn">⚡active p-pack</button>
                    </div>
                    
                    <div className="price-box">
                      <h4>pack test business</h4>
                      <div className="features">
                        <p>ipsum - dolor sit amet</p>
                        <p>consectetur adipiscing elit</p>
                      </div>
                      <div className="price-tag">
                        <span className="price">$49</span>
                        <span className="period">/mo</span>
                      </div>
                      <button className="activate-btn">⚡active p-pack</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="score-section">
            <h3>your project score</h3>
              <div className="progress-bar" style={{ fontSize: '24px', height: '30px', backgroundColor: '#e0e0e0', borderRadius: '15px', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 10px', width: '100%' }}>
                <div style={{ width: '56%', height: '100%', backgroundColor: '#76ff03', borderRadius: '15px', transition: 'width 0.5s ease' }}></div>
                <span style={{ marginLeft: 'auto', color: 'white', fontWeight: 'bold' }}>26%</span>
              </div>
          </div>
          
          <div className="campaign-section">
            <img src="https://ae01.alicdn.com/kf/Se983ff17a0674a28ac80f35fb62ebd19H.jpg" alt="Campaign Image" className="campaign-image" style={{ width: '260px', height: 'auto' }} />
          </div>
          
          <div className="social-actions">
            <button className="social-btn">❤️</button>
            <button className="social-btn">💬</button>
            <button className="social-btn">↗️</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aap;
