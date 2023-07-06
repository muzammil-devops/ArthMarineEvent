import React from 'react'
import './style.css'

const Main = (props) => {
  return (
    <section className="main-container">
      <div className="a_wrapper">
        <div className="button-wrapper">
          <button className="button" onClick={props.onRegistration}>
            Register Now
          </button>
        </div>

        <div className="main-content">
          <h1 className="section-heading">Marine Innovation Seminar 2023</h1>

          <p className="main-description">
            Dive into the world of artificial intelligence and its
            transformative impact on the marine industry at our upcoming
            seminar. Join us as we explore the cutting-edge applications and
            advancements of AI in marine technology, from the way of autonomous
            vessels to ocean data analysis. Learn from leading experts as they
            share their insights, case studies, and success stories, providing
            you with actionable knowledge to navigate the evolving landscape of
            AI in the marine sector. Don't miss this opportunity to connect with
            industry peers, gain a competitive edge, and chart a course towards
            a smarter, more sustainable future for maritime operations. Secure
            your spot now and embark on a voyage of AI exploration in the marine
            industry.
          </p>
        </div>

        <div className="schedule-description">
          <h1 className="section-heading">Seminar Agenda</h1>
          <div className="schedule-description">
            <h2 className="heading" style={{ marginBottom: '40px' }}>
              3:00 PM - 3:15 PM: Registration,&nbsp;
              <div className="text-content">
                by the leading technology experts
              </div>
            </h2>

            <div className="presentation-details">
              <h2 className="heading">
                3:15 PM - 6:15 PM: Various Presentations
              </h2>

              <div className="text-content" style={{ marginTop: '10px' }}>
                <ul>
                  <li>Navigating the Future on Wartsila ECDIS (Singapore)</li>
                  <li>Presenter: TBA</li>
                </ul>
              </div>

              <div className="text-content">
                <ul>
                  <li>
                    Kelvin Hughes Navigation RADARS - A view over the horizon
                  </li>
                  <li>
                    Presenter: Richard Myers - Strategic Support Manager,
                    Hensoldt (United Kingdom){' '}
                  </li>
                </ul>
              </div>

              <div className="text-content">
                <ul>
                  <li>Medical Care Anywhere </li>
                  <li>
                    Presenter: Walther Boon Founder / Managing Director
                    MedAssist Online (Netherlands){' '}
                  </li>
                </ul>
              </div>

              <div className="text-content">
                <ul>
                  <li>AI is the New Competitive edge in Shipping</li>
                  <li>
                    Presenter: Kevin Brunn Director, Business Development,
                    ShipIn (USA)
                  </li>
                </ul>
              </div>

              <div className="text-content">
                <ul>
                  <li>
                    Big Marine Data - great rewards "Sea-performer as a tool to
                    improve fleet efficiency
                  </li>
                  <li>
                    Presenter: Mr. Wojciech Gorski (PhD, Naval Arch) – Director
                    of Research & Production Division, Enamor(Poland)
                  </li>
                </ul>
              </div>
            </div>

            <div className="networking-reception" style={{ margin: '40px 0' }}>
              <h2 className="heading">
                6:15 PM - 7:15 PM: Networking(Cocktail) Reception
              </h2>
            </div>

            <div
              className="networking-reception"
              style={{ marginBottom: '10px' }}
            >
              <h2 className="heading">
                {' '}
                7:15 PM - 10:00 PM: Dinner with light entertainment
              </h2>
            </div>

            <p className="text-content">
              Relish in a sumptuous feast, meticulously crafted by a talented
              culinary team, featuring a tantalizing array of Flavors and
              culinary creations. Savor each delectable bite while enjoying the
              company of like-minded professionals and industry experts. As you
              dine, be enthralled by the enchanting light entertainment that
              will grace the stage. Immerse yourself in a delightful fusion of
              music, and artistic performances that will transport you to a
              world of wonder and joy. This is the perfect opportunity to
              unwind, forge new connections, and reflect on the knowledge gained
              throughout the seminar. Join us for an unforgettable evening of
              culinary delights, entertainment, and camaraderie.
            </p>

            <p className="text-content" style={{ marginTop: '10px' }}>
              Register now and experience a truly memorable event that will be
              the highlight of your seminar journey.
            </p>
          </div>
        </div>

        <div className="button-wrapper">
          <button className="button" onClick={props.onRegistration}>
            Register Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Main
