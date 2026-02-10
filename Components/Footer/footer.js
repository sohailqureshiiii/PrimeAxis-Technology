import Image from "next/image";
import React from "react";
import MainLogo from "../../public/DemandscoopMain-logo.png";
import BigDemand from "../../public/DemandscoopMain-logo.png";
import Facebook from "../../public/facebook.svg";
import LinkedIn from "../../public/linkedin.svg";
import Twitter from "../../public/social.svg";
import Phone from "../../public/phone-call.svg";
import IndianFlag from "../../public/india.png";
import DubaiFlag from "../../public/flag.png";
import USAFlag from "../../public/united-states.png";
import UKFlag from "../../public/united-kingdom.png";
import SAP from "../../public/SAP-Business-One.png";
import MICRO from "../../public/MS-gold-partner-logo.png";
import ISO from "../../public/ISO_Logo.png";
import CMMI from "../../public/CMMI-Article-Pic.png";
import GOOGLEP from "../../public/Google_Partner.png";

const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
import localFont from "next/font/local";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="back-grond-for-footer-at-bottom-end">
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section flxin-for-sdfg">
            <div className="white-box-with-background-on-footer-left">
              <div>
                <Image src={MainLogo} width={150} />
                <h2 className="header-at-footer-for-company-logo">
                  PrimeAxis Technology
                </h2>
                <div>
                  <p className="secound-para-header-at-footer-line">
                    Where Excellence
                  </p>
                  <p className="secound-para-header-at-footer-line">
                    Meets Stability
                  </p>
                </div>
              </div>
              {/* <p className="folow-us-header-at-footer-in-botttom">Follow Us</p>
              <div className="flx-in-for-follow-btn-at-bottom-last-end">
                <Link
                  href={
                    "https://www.linkedin.com/company/advertmarketers/?viewAsMember=true"
                  }
                >
                  <Image src={LinkedIn} width={20} />
                </Link>
                <Link href={"https://www.facebook.com/advertmarketerspvtltd/"}>
                  <Image src={Faceboook} width={20} />
                </Link>
                <Link href={"https://twitter.com/advertmarketers"}>
                  <Image src={Twitter} width={20} />
                </Link>
              </div> */}
            </div>
            <div className="padding-for-the-adress-and-other-opt-at-footer">
              <div className="flx-in-use-full-loink-and-servoces">
                {/* <div>
                  <div className="usefull-links-in-fotters-sectios-cjhs">
                    Useful Links
                  </div>
                  <div className="botom-line-of-luse-fil-links-snidr"></div>
                  <div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/careers">Careers</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/policies">Our Policies</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/gdpr">GDPR</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/termsandconditons">Terms & Conditions</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/dataaccessdatarectification">
                        Data Access & <br />
                        Data Rectification
                      </Link>
                    </div>
                  </div>
                </div> */}
                <div>
                  <div className="usefull-links-in-fotters-sectios-cjhs">
                    Services
                  </div>
                  <div className="botom-line-of-luse-fil-links-snidr"></div>
                  <div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service/account-based-marketing">
                        DEMAND GENERATION
                      </Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service/appointment-generation">
                        SALES DEVELOPMENT
                      </Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service/b2b-list-building">
                        DATABASE SERVICES
                      </Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service/email-marketing">
                        DIGITAL MARKETING
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="usefull-links-in-fotters-sectios-cjhs">
                    Contact Us
                  </div>
                  <div className="botom-line-of-luse-fil-links-snidr"></div>
                  <div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>+91 97674 46031</li>
                    </div>
                    {/* <div className="links-name-at-footer-secctions-djs">
                      <li>+91 8999 46 4197</li>
                    </div> */}
                    <div className="links-name-at-footer-secctions-djs">
                      <li>sales@primeaxistechnology.com </li>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>info@primeaxistechnology.com</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="displayflexat-ns">
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <div className="big-width-border-at-vskjskmf-dkf"></div>
            <div style={myFont.style}>
              <div className="dis-dss-sddjk-webksd-zcnd">
                <div>
                  <div className="flx-for-img-and-office-country">
                    <h2 className="service-header-at-footer-section">
                      India Office
                    </h2>
                    <Image
                      src={IndianFlag}
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <p className="adress-para-at-footer-sd">
                      Srno 74 flat 502 raut complex lane no13b 411028
                    </p>
                  </div>
                </div>
                {/* <div className="tp-in-ftr-mobile-view-only">
                  <div>
                    <div className="flx-for-img-and-office-country">
                      <h2 className="service-header-at-footer-section">
                        USA OFFICE
                      </h2>
                      <Image
                        src={USAFlag}
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </div>
                    <div>
                      <p className="adress-para-at-footer-sd">
                        1267 Willis St., STE 200, Redding, California 96001
                        United States
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="displayflexat-ns">
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <div className="big-width-border-at-vskjskmf-dkf"></div>
          </div>
        </div>
        <div className="displayflexat-ns">
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <p className="udsjdoicsklslkm">
              © Copyright 2026. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
{
  /* <>
<div className="footer-background">
  <div>
    <div>
      <div className="flx-in-for-footer-section-sr-top">
        <Image
          src={BigDemand}
          width={350}
          height={90}
          alt="Picture of the author"
        />
      </div>
      <div className="flx-in-for-footer-section-sr-top">
        <p className="end-text-for-website-deamnd">
          © 2022 PrimeAxis Technology - B2B marketing agency created and
          manged by B2B Digital Marketing
        </p>
      </div>
      <div className="flx-in-for-footer-section-sr-top gap-in-prosodn">
        <Image
          src={Twitter}
          width={20}
          height={20}
          alt="Picture of the author"
        />
        <Image
          src={Facebook}
          width={20}
          height={20}
          alt="Picture of the author"
        />{" "}
        <Image
          src={LinkedIn}
          width={20}
          height={20}
          alt="Picture of the author"
        />{" "}
      </div>
    </div>
    <div className="flx-in-for-footer-section-sr-top">
      <div className="border-for-footer-bottom-section"></div>{" "}
    </div>
  </div>

  <div className="flx-for-ftr-bc">
    <div className="header-layout-at-main-section low-oadding-at-footer-section flx-in-four-comlumas">
      {/* <div className="pad-top-fr-match-logo">
        <div className="flx-for-img-and-office-country">
          <h2 className="service-header-at-footer-section">USA OFFICE</h2>
          <Image
            src={USAFlag}
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </div>
        <p className="services-and-other-kinks-at-footer">
          PrimeAxis Technology Pvt. Ltd. 444 Alaska Avenue Suite #BPN742
          Torrance, CA 90503 USA
        </p>
      </div>
      <div className="pad-top-fr-match-logo">
        <div className="flx-for-img-and-office-country">
          <h2 className="service-header-at-footer-section">
            INDIA OFFICE
          </h2>
          <Image
            src={IndianFlag}
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </div>
        <p className="services-and-other-kinks-at-footer">
          Kalyani Nagar West Avenue, Marigold complex Maharashtra 411014,
          IN
        </p>
      </div>
      <div className="pad-top-fr-match-logo">
        <div className="flx-for-img-and-office-country">
          <h2 className="service-header-at-footer-section">
            DUBAI OFFICE
          </h2>
          <Image
            src={DubaiFlag}
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </div>
        <p className="services-and-other-kinks-at-footer">
          87556 - Hamsah A Building, Ansar Gallery Building - Al Karama -
          Dubai - United Arab Emirates
        </p>
      </div>*/
}

//     <div className="pad-top-fr-match-logo">
//       <h2 className="service-header-at-footer-section">SERVICES</h2>
//       <p className="services-and-other-kinks-at-footer">
//         Demand Generation
//       </p>
//       <p className="services-and-other-kinks-at-footer">
//         Sales Development
//       </p>
//       <p className="services-and-other-kinks-at-footer">
//         Database Services
//       </p>
//       <p className="services-and-other-kinks-at-footer">
//         Digital Marketing
//       </p>
//     </div>
//   </div>
// </div>
// <div className="flx-in-for-footer-section-sr-top">
//   <div className="border-for-footer-bottom-section"></div>{" "}
// </div>
// <div className="flx-in-for-footer-section-sr-top">
//   <div className="border-for-footer-bottom-section"></div>{" "}
// </div>
// <div className="footer-background no-padd-sdkfn flx-cntrkjsj">
//   <div className="black-bkrnd-for-foooter">
//     <div className="flx-in-wirsikd-djk">
//       <p>Job & Internship :</p>
//       <Image
//         src={Phone}
//         width={10}
//         height={10}
//         alt="Picture of the author"
//       />
//       <p>+91 86002 62424</p>
//     </div>
//     <div className="flx-in-wirsikd-djk">
//       <p>Resource Hiring:</p>
//       <Image
//         src={Phone}
//         width={10}
//         height={10}
//         alt="Picture of the author"
//       />
//       <p>+91 86002 62424</p>
//     </div>
//     <div className="flx-in-wirsikd-djk">
//       <p>Bussiness Inquiry: </p>
//       <Image
//         src={Phone}
//         width={10}
//         height={10}
//         alt="Picture of the author"
//       />
//       <p>+91 86002 62424</p>
//     </div>
//   </div>
// </div>

{
  /* <div className="dis-flx-in-last-end-compo-sectio-sk">
    <Image
      src={SAP}
      width={200}
      height={50}
      alt="Picture of the author"
    />
    <Image
      src={MICRO}
      width={200}
      height={50}
      alt="Picture of the author"
    />
    <Image
      src={ISO}
      width={120}
      height={90}
      alt="Picture of the author"
    />
    <Image
      src={CMMI}
      width={120}
      height={80}
      alt="Picture of the author"
    />
    <Image
      src={GOOGLEP}
      width={120}
      height={80}
      alt="Picture of the author"
    />
  </div> */
}
// </div>
// </> */}
