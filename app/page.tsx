'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Noorpatta</div>
          <button 
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
            <a 
              href="#bio" 
              className={activeSection === 'bio' ? 'active' : ''} 
              onClick={() => scrollToSection('bio')}
            >
              Bio
            </a>
            <a 
              href="#education" 
              className={activeSection === 'education' ? 'active' : ''} 
              onClick={() => scrollToSection('education')}
            >
              Education
            </a>
            <a 
              href="#research" 
              className={activeSection === 'research' ? 'active' : ''} 
              onClick={() => scrollToSection('research')}
            >
              Research
            </a>
            <a 
              href="#teaching" 
              className={activeSection === 'teaching' ? 'active' : ''} 
              onClick={() => scrollToSection('teaching')}
            >
              Teaching
            </a>
            <a 
              href="#publications" 
              className={activeSection === 'publications' ? 'active' : ''} 
              onClick={() => scrollToSection('publications')}
            >
              Publications
            </a>
            <a 
              href="#awards" 
              className={activeSection === 'awards' ? 'active' : ''} 
              onClick={() => scrollToSection('awards')}
            >
              Awards
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container">
        {/* Home / Hero Section */}
        <section id="home" className="hero fade-in">
          <div className="hero-wrapper">
            <div className="hero-grid">
              <div className="hero-image-column">
                <div className="profile-image-container">
                  <img 
                    src="/noorudeen-mustafa.jpg" 
                    alt="Noorudeen Mustafa Pattasseri" 
                    className="profile-image"
                  />
                </div>
              </div>
              
              <div className="hero-info-column">
                <h1 className="hero-title">Noorudeen Mustafa<br />Pattasseri</h1>
                
                <div className="hero-meta">
                  <p className="meta-role">Doctoral Fellow</p>
                  <p className="meta-institution">Berlin Institute for Islamic Theology</p>
                </div>
                
                <p className="hero-subtitle">Islamic Legal Scholar | Educator | Digital Humanist</p>
                
                <p className="hero-excerpt">
                  Exploring the dialectical relationship between law and society in the Muslim world, focusing on South Asian Islam, Islamic legal philosophy, and Indian Ocean intellectual networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section id="bio" className="slide-in">
          <h2>Bio</h2>
          <div className="bio-content">
            <p>
              Noorudeen Mustafa Pattasseri is a Doctoral Fellow at the Berlin Institute for Islamic Theology, Humboldt University of Berlin. His research examines the dialectical relationship between law and society in the Muslim world, with a particular focus on the Indian Ocean region, South Asian Islam, Islamic legal philosophy, and legal history. His work examines how legal thought and social realities intersect across historical and geographical contexts, especially within the Muslim tradition and the Indian Ocean's transregional intellectual networks.
            </p>
            <p>
              Alongside his research, he teaches undergraduate and postgraduate courses on Islamic law, modern Muslim discourses, and Islamic civilization. His teaching integrates textual and historical analysis with contemporary debates, encouraging students to engage critically with Islamic intellectual and legal traditions in diverse social and political settings.
            </p>
            <p>
              Beyond academia, he leads and collaborates on projects in cultural heritage, Islamicate digital humanities, local Muslim histories, and creative media. Through public lectures, workshops, and essays, he works to bridge academic inquiry and public discourse, making scholarly perspectives on Islam and Muslim societies accessible to broader audiences.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="slide-in">
          <h2>Education</h2>
          <div className="education-grid">
            <div className="education-item">
              <h4>PhD (in progress)</h4>
              <p><strong>Islamic Theology</strong></p>
              <p className="institution">Humboldt University of Berlin</p>
              <p className="date">2025–2029</p>
            </div>
            <div className="education-item">
              <h4>MA</h4>
              <p><strong>Islamic Studies</strong></p>
              <p className="institution">Hamad Bin Khalifa University, Qatar</p>
              <p className="date">2019–2021</p>
            </div>
            <div className="education-item">
              <h4>MA</h4>
              <p><strong>Islamic Studies</strong></p>
              <p className="institution">University of Calicut, India</p>
              <p className="date">2016–2018</p>
            </div>
            <div className="education-item">
              <h4>BA</h4>
              <p><strong>Economics</strong></p>
              <p className="institution">University of Calicut, India</p>
              <p className="date">2012–2015</p>
            </div>
            <div className="education-item">
              <h4>BA (Honours)</h4>
              <p><strong>Islamic Studies</strong></p>
              <p className="institution">Jamia Madeenathunoor, Kerala, India</p>
              <p className="date">2011–2016</p>
            </div>
            <div className="education-item">
              <h4>Diplomas</h4>
              <p><strong>Functional Arabic & Urdu</strong></p>
              <p className="institution">National Council for Promotion of Urdu Language (NCPUL)</p>
              <p className="date">2010–2014</p>
            </div>
          </div>
        </section>

        {/* Affiliations Section */}
        <section className="slide-in">
          <h2>Affiliations</h2>
          <div className="affiliations-list">
            <div className="affiliation-item">
              <h4>Research Fellow</h4>
              <p>Berlin Institute for Islamic Theology, Humboldt University of Berlin <span className="date-badge">since 2025</span></p>
            </div>
            <div className="affiliation-item">
              <h4>Co-founder & Director (Strategy & Governance)</h4>
              <p>Malaibar Foundation for Research and Development <span className="date-badge">since 2017</span></p>
            </div>
            <div className="affiliation-item">
              <h4>Editor & Writer</h4>
              <p>Traversing Tradition <span className="date-badge">since Sep 2025</span></p>
            </div>
            <div className="affiliation-item">
              <h4>Co-founder & Director (Innovation)</h4>
              <p>Paper and Pencil <span className="date-badge">since 2025</span></p>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="slide-in">
          <h2>Research</h2>
          <div className="research-highlight">
            <h3>Research Interests</h3>
            <div className="interest-tags">
              <span className="tag">Islamic Law</span>
              <span className="tag">Legal Philosophy</span>
              <span className="tag">South Asian Islam</span>
              <span className="tag">Indian Ocean Studies</span>
              <span className="tag">Digital Humanities</span>
              <span className="tag">Muslim Intellectual History</span>
            </div>
          </div>

          <h3 style={{marginTop: '2rem'}}>Projects</h3>
          <div className="project-list">
            <div className="project-item">
              <h4>Digital Malabar</h4>
              <p>A digital humanities initiative in collaboration with the Malaibar Foundation for Research and Development, Hill Museum and Manuscript Library, and Roshan Institute for Persian Studies <span className="date-badge">since 2024</span></p>
            </div>
            <div className="project-item">
              <h4>Makers of Islam in Malabar</h4>
              <p>A biographical project documenting 100 influential Muslim scholars, reformers, and intellectuals from South India <span className="date-badge">since 2022</span></p>
            </div>
          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="slide-in">
          <h2>Teaching</h2>
          
          <h3>MA Level</h3>
          <div className="course-item">
            <h4>Mapping the Islamic Legal Corpora: Texts, Traditions, and Transformations in the Shāfiʿī School</h4>
            <p><strong>Semester:</strong> Summer (April–July 2026)</p>
          </div>

          <h3>BA Level</h3>
          <div className="course-item">
            <h4>Islamic Law and Modernity: Colonial Encounters and Legal Transformations in South Asia</h4>
            <p><strong>Semester:</strong> Summer (April–July 2026)</p>
          </div>
          <div className="course-item">
            <h4>Fatwa Discourses in the Muslim World</h4>
            <p><strong>Semester:</strong> Winter (September 2026–February 2027)</p>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="slide-in">
          <h2>Publications</h2>

          <h3>Books</h3>
          <div className="publication-item">
            <p><strong>Bengal Sketch</strong> (Malayalam). Travelogue. Islamic Publishing Bureau, Calicut, India, 2019.</p>
          </div>

          <h3>Thesis</h3>
          <div className="publication-item">
            <p><strong>Islamic Law in the Indian Ocean World:</strong> A Study of Zayn al-Dīn al-Makhdūm's al-Ajwiba al-ʿajība ʿan al-asʾilat al-gharība. Hamad Bin Khalifa University (Qatar), ProQuest Dissertations & Theses, 2021. <a href="https://www.proquest.com/openview/d0b48bdd0176f615d9eef3a565383f22/1.pdf?pq-origsite=gscholar&cbl=2026366&diss=y" target='_blank' rel="noopener noreferrer">Link</a></p>
          </div>
          <div className="publication-item">
            <p><strong>Ibn Khaldun and the Science of Civilization:</strong> Accounting the Cultural Crisis in the Muslim World through the Muqaddima. Postgraduate Department of Islamic Studies, SAFI Institute of Advanced Study (SIAS), University of Calicut, 2018 (Unpublished).</p>
          </div>

          <h3>Academic Papers</h3>
          <div className="publication-item">
            <p><strong>"Islamic Law in the Maritime World: Malabar and the (Re)formation of Legal Circularities Across the Indian Ocean,"</strong> Astrolabe: CIS Student Research Journal, Issue 4, Vol. 2022, pp. 119–131. <a href="https://www.hbku.edu.qa/sites/default/files/islamiclawmaritime.pdf" target='_blank' rel="noopener noreferrer">Link</a></p>
          </div>

          <h3>Essays</h3>
          <div className="publication-item">
            <p><strong>"Kayalpattinam – The 'Cairo' of the East,"</strong> Traversing Tradition, 29 Oct 2025. <a href="https://traversingtradition.com/2025/10/29/kayalpattinam-the-cairo-of-the-east/" target='_blank' rel="noopener noreferrer">Link</a></p>
          </div>
          <div className="publication-item">
            <p><strong>"Development of Islamic Scholarship in the 16th Century: Shaykh Zayn al-Dīn Makhdūm and the Indian Ocean Network,"</strong> Traversing Tradition, 30 Sep 2025. <a href="https://traversingtradition.com/2025/09/29/development-of-islamic-scholarship-in-the-16th-century-shaykh-zayn-al-din-makhdum-and-indian-ocean-network/" target='_blank' rel="noopener noreferrer">Link</a></p>
          </div>
          <div className="publication-item">
            <p><strong>"The Quran in the South Indian Linguistic World: In Vernacular Literature, Local Teachings, and Customary Practices,"</strong> Traversing Tradition, 18 Sep 2025. <a href="https://traversingtradition.com/2025/09/17/the-quran-in-the-south-indian-linguistic-world/" target='_blank' rel="noopener noreferrer">Link</a></p>
          </div>
          <div className="publication-item">
            <p><strong>"'Ulama, Fatwas, and the Struggle for Islamic Legitimacy in Colonial India,"</strong> Traversing Tradition, 16 Jun 2025. <a href="https://traversingtradition.com/2025/06/16/ulama-fatwas-and-the-struggle-for-islamic-legitimacy-in-colonial-india/" target='_blank' rel="noopener noreferrer">Link</a></p>
          </div>
          <div className="publication-item">
            <p><strong>Masjids in Malaibar,</strong> Coffee Table Book — Project Lead & Content Writer, Malaibar Press, 2023.</p>
          </div>
          <div className="publication-item">
            <p><strong>Istanbul Letters,</strong> Travelogue Series (10 chapters), Risala Update, 2023. <a href="https://risalaupdate.com/stories/tag/istanbul-letters" target='_blank' rel="noopener noreferrer">Link</a></p>
          </div>
          <div className="publication-item">
            <p><strong>"Islamic Tradition and Reform: Sir Sayed Ahmed Khan's Vision in Post-Colonial Education,"</strong> Centre for Islamic Pluralism, 30 Dec 2015. <a href="http://www.islamicpluralism.org/2539/islamic-tradition-and-reform" target='_blank' rel="noopener noreferrer">Link</a></p>
          </div>
          <div className="publication-item">
            <p><strong>"Origin and Evolution of Human Society in Ibn Khaldun's Philosophy of Human Society,"</strong> Centre for Islamic Pluralism, 11 Mar 2015. <a href="http://www.islamicpluralism.org/2469/origin-and-evolution-of-human-society-in-ibn">Link</a></p>
          </div>
        </section>

        {/* Awards & Fellowships Section */}
        <section id="awards" className="slide-in">
          <h2>Awards & Recognition</h2>
          <div className="awards-list">
            <div className="award-item">
              <div className="award-year">2025</div>
              <div className="award-content">
                <h4>Sharjah International Award for Cultural Heritage</h4>
                <p>Sharjah Institute for Heritage, UAE</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2023</div>
              <div className="award-content">
                <h4>Leadership Excellence Award</h4>
                <p>ICCN–UNESCO 9th General Assembly, Calicut, India</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2023</div>
              <div className="award-content">
                <h4>Al Sharq International Youth Fellow</h4>
                <p>Al Sharq Forum</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2017</div>
              <div className="award-content">
                <h4>Best Postgraduate Student of the Year</h4>
                <p>SAFI Institute of Advanced Studies / University of Calicut</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2015</div>
              <div className="award-content">
                <h4>Sir Sayed National Award for Excellence</h4>
                <p>All India English Essay Writing Competition, Aligarh Muslim University</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2014</div>
              <div className="award-content">
                <h4>State Champion (English Elocution)</h4>
                <p>Sunni Students Federation Kerala State Literary Festival, Kayamkulam</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2013</div>
              <div className="award-content">
                <h4>Best Writer of the Year</h4>
                <p>Madeenathunoor College</p>
              </div>
            </div>
          </div>

          <h3 style={{marginTop: '2.5rem'}}>Memberships & Training</h3>
          <div className="membership-list">
            <div className="membership-item">
              <h4>Working Group – COST Action CA23144 (ESIND)</h4>
              <p>European Cooperation in Science and Technology (COST Association) <span className="date-badge">since 2025</span></p>
            </div>
            <div className="membership-item">
              <h4>Public Engagement Training Portfolio</h4>
              <p>Berlin School of Public Engagement and Open Science <span className="date-badge">since 2025</span></p>
            </div>
            <div className="membership-item">
              <h4>Al Sharq Youth Fellowship</h4>
              <p>Al Sharq Youth Forum <span className="date-badge">2023-2024</span></p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="slide-in">
          <h2>Contact & Connect</h2>
          
          <div className="contact-container">
            <div className="contact-box">
              <h3>📍 Office Address</h3>
              <p>
                Berliner Institut für Islamische Theologie<br />
                Humboldt-Universität zu Berlin<br />
                Hannoversche Straße 6, Room 3.26<br />
                10115 Berlin, Germany
              </p>
              <p style={{marginTop: '1rem', marginBottom: '0.5rem'}}>
                <strong>Postal Address:</strong><br />
                Unter den Linden 6, 10099 Berlin, Germany
              </p>
            </div>

            <div className="contact-box">
              <h3>📞 Communication</h3>
              <p><strong>Phone:</strong> <a href="tel:+493020939860">+49 (0)30 2093 98606</a></p>
              <p><strong>Email:</strong> <a href="mailto:noorudeen.pattasseri@hu-berlin.de">noorudeen.pattasseri@hu-berlin.de</a></p>
            </div>

            <div className="contact-box">
              <h3>🔗 Social & Networks</h3>
              <div className="social-icons">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.794.306-1.459.717-2.126 1.384S.935 3.35.63 4.116C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.842.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.645.07 4.849 0 3.205-.009 3.584-.07 4.849-.054 1.171-.244 1.806-.408 2.228-.217.561-.477.96-.896 1.382-.42.419-.819.679-1.38.896-.422.164-1.057.354-2.227.408-1.265.061-1.645.07-4.849.07-3.206 0-3.584-.009-4.849-.07-1.171-.054-1.806-.244-2.228-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.645-.07-4.849 0-3.204.009-3.584.07-4.849.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.056-.354 2.227-.408 1.264-.061 1.645-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon facebook"
                  title="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Noorudeen Mustafa Pattasseri. All rights reserved.</p>
      </footer>
    </div>
  );
}
