import { useState } from 'react';
import '../styles/Account.css';

function Account() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // القسم الأول: معلومات عامة
    businessType: '',
    foundingYear: '',
    location: '',
    legalForm: '',
    employeesCount: '',
    projectDescription: '',
    communicationPreference: [],

    // القسم الثاني: الأهداف والرؤية
    shortTermGoals: [],
    longTermGoals: [],
    vision: '',
    coreValues: [],
    publicMessage: '',

    // القسم الثالث: الجمهور المستهدف
    problemsSolved: [],
    loyalCustomersPercentage: '',

    // القسم الرابع: حالة المشروع
    isOperating: '',
    operationDuration: '',
    currentChallenges: [],
    efficiency: '',
    bestSeller: '',
    worstSeller: '',
    lowSeasonPeriod: '',

    // القسم الخامس: الحضور الرقمي
    hasWebsite: '',
    websiteUrl: '',
    digitalPlatforms: [],
    followersCount: {},
    engagementRate: '',
    successfulContent: [],
    paidAds: '',
    adsBudget: '',
    marketingChannels: [],

    // القسم السادس: تحليل السوق
    products: [],
    uniqueValue: [],
    competitors: [],

    // القسم السابع: المحتوى والتسويق
    contentType: [],
    publishingFrequency: '',
    marketingPartners: '',

    // القسم الثامن: الميزانية
    monthlyMarketingBudget: '',

    // القسم التاسع: التقييم
    projectStrength: '',
    achievingGoals: '',
    neededServices: [],

    // القسم العاشر: ملاحظات
    ideasToDiscuss: '',
    decisionMaking: [],
    crisisManagement: [],
    keyPartner: '',
    crmSystem: '',
    marketChange: '',
    overallRating: ''
  });

  // تعريف الخيارات لكل سؤال
  const options = {
    businessTypes: [
      { id: 'restaurants', label: 'مطاعم' },
      { id: 'ecommerce', label: 'تجارة إلكترونية' },
      { id: 'services', label: 'خدمات' },
      { id: 'manufacturing', label: 'صناعات' }
    ],

    employeesCounts: [
      { id: '1-5', label: '1-5 موظفين' },
      { id: '6-20', label: '6-20 موظف' },
      { id: '21-50', label: '21-50 موظف' },
      { id: '50+', label: 'أكثر من 50 موظف' }
    ],

    communicationMethods: [
      { id: 'phone', label: 'التفاق' },
      { id: 'email', label: 'البريد الإلكتروني' },
      { id: 'meetings', label: 'اجتماعات شخصية' },
      { id: 'video', label: 'مكالمات فيديو' }
    ],

    shortTermGoals: [
      { id: 'increase_sales', label: 'زيادة المبيعات' },
      { id: 'expand_market', label: 'توسيع السوق' },
      { id: 'improve_service', label: 'تحسين الخدمة' },
      { id: 'reduce_costs', label: 'تقليل التكاليف' }
    ],

    digitalPlatforms: [
      { id: 'instagram', label: 'Instagram' },
      { id: 'facebook', label: 'Facebook' },
      { id: 'tiktok', label: 'TikTok' },
      { id: 'linkedin', label: 'LinkedIn' }
    ],

    contentTypes: [
      { id: 'photos', label: 'صور' },
      { id: 'videos', label: 'فيديوهات' },
      { id: 'articles', label: 'مقالات' },
      { id: 'stories', label: 'قصص' }
    ],

    publishingFrequencies: [
      { id: 'daily', label: 'يومي' },
      { id: 'weekly', label: 'أسبوعي' },
      { id: 'biweekly', label: 'مرتين في الأسبوع' },
      { id: 'monthly', label: 'شهري' }
    ],

    projectStrengths: [
      { id: 'weak', label: 'ضعيف' },
      { id: 'medium', label: 'متوسط' },
      { id: 'good', label: 'جيد' },
      { id: 'excellent', label: 'ممتاز' }
    ],

    decisionMaking: [
      { id: 'individual', label: 'قرار فردي' },
      { id: 'team', label: 'قرار جماعي' },
      { id: 'consultative', label: 'استشاري' },
      { id: 'data_driven', label: 'مبني على البيانات' }
    ],

    marketingChannels: [
      { id: 'social_media', label: 'وسائل التواصل الاجتماعي' },
      { id: 'search_engines', label: 'محركات البحث' },
      { id: 'traditional', label: 'الإعلان التقليدي' },
      { id: 'influencers', label: 'المؤثرين' }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData(prev => {
      const currentValues = prev[name] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return {
        ...prev,
        [name]: newValues
      };
    });
  };

  const renderQuestionCard = (title, children) => (
    <div className="question-card">
      <h4>{title}</h4>
      {children}
    </div>
  );

  const renderOptionsGrid = (options, name, multiple = false) => (
    <div className="options-grid">
      {options.map(option => (
        <div 
          key={option.id}
          className={`option-item ${multiple 
            ? formData[name]?.includes(option.id) 
            : formData[name] === option.id 
            ? 'selected' 
            : ''}`}
          onClick={() => multiple 
            ? handleMultiSelect(name, option.id)
            : handleInputChange({
                target: { name, value: option.id }
              })
          }
        >
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3>معلومات عامة عن المشروع 📋</h3>
            
            {renderQuestionCard("مجال النشاط التجاري", 
              renderOptionsGrid(options.businessTypes, 'businessType')
            )}

            {renderQuestionCard("عدد الموظفين الحاليين",
              renderOptionsGrid(options.employeesCounts, 'employeesCount')
            )}

            {renderQuestionCard("طرق التواصل المفضلة", 
              renderOptionsGrid(options.communicationMethods, 'communicationPreference', true)
            )}

            {renderQuestionCard("وصف مختصر لمشروع", (
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="اكتب وصفاً مختصراً لمشروعك..."
                className="form-textarea"
                rows="4"
              />
            ))}
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h3>الأهداف والرؤية المستقبلية 🎯</h3>
            
            {renderQuestionCard("الأهداف قصيرة المدى",
              renderOptionsGrid(options.shortTermGoals, 'shortTermGoals', true)
            )}

            {renderQuestionCard("رؤية المشروع", (
              <textarea
                name="vision"
                value={formData.vision}
                onChange={handleInputChange}
                placeholder="ما هي رؤيتك المستقبلية للمشروع؟"
                className="form-textarea"
                rows="4"
              />
            ))}
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h3>الحضور الرقمي 💻</h3>
            
            {renderQuestionCard("المنصات الرقمية المستخدمة",
              renderOptionsGrid(options.digitalPlatforms, 'digitalPlatforms', true)
            )}

            {renderQuestionCard("نوع المحتوى المفضل",
              renderOptionsGrid(options.contentTypes, 'contentTypes', true)
            )}

            {renderQuestionCard("تواتر النشر المفضل",
              renderOptionsGrid(options.publishingFrequencies, 'publishingFrequency')
            )}
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h3>تحليل السوق والمنافسة 📊</h3>
            
            {renderQuestionCard("قنوات التسويق الحالية",
              renderOptionsGrid(options.marketingChannels, 'marketingChannels', true)
            )}

            {renderQuestionCard("كيف يتم اتخاذ القرارات المهمة؟",
              renderOptionsGrid(options.decisionMaking, 'decisionMaking')
            )}

            {renderQuestionCard("تقييم قوة المشروع",
              renderOptionsGrid(options.projectStrengths, 'projectStrength')
            )}
          </div>
        );

      case 5:
        return (
          <div className="step-content">
            <h3>حملات التسويق والإعلان 📢</h3>
            
            {renderQuestionCard("هل قمت بحملات إعلانية مدفوعة سابقاً؟", (
              <div className="options-grid">
                {[
                  { id: 'yes_facebook', label: 'نعم - فيسبوك' },
                  { id: 'yes_instagram', label: 'نعم - انستغرام' },
                  { id: 'yes_google', label: 'نعم - جوجل' },
                  { id: 'no', label: 'لا، لم أقم بأي حملات' }
                ].map(option => (
                  <div 
                    key={option.id}
                    className={`option-item ${formData.paidAds === option.id ? 'selected' : ''}`}
                    onClick={() => handleInputChange({
                      target: { name: 'paidAds', value: option.id }
                    })}
                  >
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            ))}

            {formData.paidAds?.startsWith('yes') && renderQuestionCard("ما هي الميزانية التي تم استخدامها؟", (
              <div className="options-grid">
                {[
                  { id: 'less_500', label: 'أقل من 500$' },
                  { id: '500_1000', label: '500$ - 1000$' },
                  { id: '1000_5000', label: '1000$ - 5000$' },
                  { id: 'more_5000', label: 'أكثر من 5000$' }
                ].map(option => (
                  <div 
                    key={option.id}
                    className={`option-item ${formData.adsBudget === option.id ? 'selected' : ''}`}
                    onClick={() => handleInputChange({
                      target: { name: 'adsBudget', value: option.id }
                    })}
                  >
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );

      case 6:
        return (
          <div className="step-content">
            <h3>تحديات المشروع 🎯</h3>
            
            {renderQuestionCard("ما هي أبرز التحديات الحالية؟", (
              <div className="options-grid">
                {[
                  { id: 'competition', label: 'المنافسة القوية' },
                  { id: 'marketing', label: 'صعوبة التسويق' },
                  { id: 'costs', label: 'ارتفاع التكاليف' },
                  { id: 'customers', label: 'جذب العملاء' }
                ].map(option => (
                  <div 
                    key={option.id}
                    className={`option-item ${formData.currentChallenges?.includes(option.id) ? 'selected' : ''}`}
                    onClick={() => handleMultiSelect('currentChallenges', option.id)}
                  >
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            ))}

            {renderQuestionCard("هل تعتقد أن المشروع يُدار بكفاءة؟", (
              <div className="options-grid">
                {[
                  { id: 'very_efficient', label: 'نعم، بكفاءة عالية' },
                  { id: 'somewhat_efficient', label: 'نعم، إلى حد ما' },
                  { id: 'needs_improvement', label: 'يحتاج إلى تحسين' },
                  { id: 'not_efficient', label: 'لا، يحتاج إلى تطوير كبير' }
                ].map(option => (
                  <div 
                    key={option.id}
                    className={`option-item ${formData.efficiency === option.id ? 'selected' : ''}`}
                    onClick={() => handleInputChange({
                      target: { name: 'efficiency', value: option.id }
                    })}
                  >
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );

      case 7:
        return (
          <div className="step-content">
            <h3>الميزانية والتخطيط المالي 💰</h3>
            
            {renderQuestionCard("هل تخصص ميزانية شهرية للتسويق؟", (
              <div className="options-grid">
                {[
                  { id: 'yes_fixed', label: 'نعم، ميزانية ثابتة' },
                  { id: 'yes_variable', label: 'نعم، ميزانية متغيرة' },
                  { id: 'no_planning', label: 'أخطط للبدء قريباً' },
                  { id: 'no', label: 'لا أخصص ميزانية' }
                ].map(option => (
                  <div 
                    key={option.id}
                    className={`option-item ${formData.monthlyMarketingBudget === option.id ? 'selected' : ''}`}
                    onClick={() => handleInputChange({
                      target: { name: 'monthlyMarketingBudget', value: option.id }
                    })}
                  >
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );

      case 8:
        return (
          <div className="step-content">
            <h3>التقييم النهائي ⭐</h3>
            
            {renderQuestionCard("كيف تقيم مشروعك بشكل عام؟", (
              <div className="options-grid">
                {[
                  { id: '10', label: 'ممتاز (10/10)' },
                  { id: '8', label: 'جيد جداً (8/10)' },
                  { id: '6', label: 'جيد (6/10)' },
                  { id: '4', label: 'يحتاج تحسين (4/10)' }
                ].map(option => (
                  <div 
                    key={option.id}
                    className={`option-item ${formData.overallRating === option.id ? 'selected' : ''}`}
                    onClick={() => handleInputChange({
                      target: { name: 'overallRating', value: option.id }
                    })}
                  >
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            ))}

            {renderQuestionCard("ملاحظات إضافية", (
              <textarea
                name="ideasToDiscuss"
                value={formData.ideasToDiscuss}
                onChange={handleInputChange}
                placeholder="هل لديك ��ي أفكار أو ملاحظات تريد مناقشتها"
                className="form-textarea"
                rows="4"
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="account-wrapper">
      <div className="account-container">
        <div className="profile-section">
          <div className="profile-content">
            <div className="profile-logo">
              <img 
                src="https://via.placeholder.com/120" 
                alt="شعار المشروع" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/120";
                }}
              />
              <button className="edit-logo">
                <i className="fas fa-camera"></i>
              </button>
            </div>
            
            <div className="profile-info">
              <div className="profile-header">
                <h2>اسم المشروع</h2>
                <div className="project-score">
                  <div className="score-circle">
                    <svg viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="3"
                        strokeDasharray="85, 100"
                      />
                    </svg>
                    <span>85%</span>
                  </div>
                  <span className="score-label">سكور المشروع</span>
                </div>
              </div>
              
              <div className="profile-details">
                <div className="detail-item">
                  <i className="fas fa-envelope"></i>
                  <span>البريد الإلكتروني: example@domain.com</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-phone"></i>
                  <span>رقم الهاتف: +966 123456789</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-building"></i>
                  <span>نوع النشاط: تجار�� إلكترونية</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>الموقع: الرياض، السعودية</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quiz-container">
          <div className="steps-progress">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
              <div 
                key={step} 
                className={`step-item ${currentStep === step ? 'active' : ''} 
                           ${currentStep > step ? 'completed' : ''}`}
                onClick={() => setCurrentStep(step)}
              >
                <div className="step-circle">
                  {currentStep > step ? (
                    <i className="fas fa-check"></i>
                  ) : (
                    <span>{step}</span>
                  )}
                </div>
                <div className="step-line"></div>
              </div>
            ))}
          </div>

          <div className="quiz-content">
            {renderStep()}
            
            <div className="form-navigation">
              {currentStep > 1 && (
                <button className="btn-secondary" onClick={() => setCurrentStep(prev => prev - 1)}>
                  <i className="fas fa-arrow-right"></i>
                  السابق
                </button>
              )}
              {currentStep < 8 ? (
                <button className="btn-primary" onClick={() => setCurrentStep(prev => prev + 1)}>
                  التالي
                  <i className="fas fa-arrow-left"></i>
                </button>
              ) : (
                <button className="btn-success" onClick={() => console.log(formData)}>
                  إنهاء
                  <i className="fas fa-check"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account; 