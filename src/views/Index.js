/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              A quick start to your learning and career.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                <a
                  href="/#"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  QuickSkill
                </a>
                {' '}is a one stop solution to meet all of your learning objectives. We, at {" "}
                <a
                  href="/#"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  QuickSkill
                </a>
                , provide amazing, live and interactive learning experience. So, you can quick start your career right after graduating from{' '}
                <a
                  href="/#"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  QuickSkill
                </a>
              </p>
              <div className="mt-12">
                <a
                  href="/#"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Start Learning
                </a>
                <a
                  href="/#"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Browse Courses
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/index-header-bg.png").default}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome career
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together everything from material to learning experience, from raw knowledge to portfolio, from zero to hero, our approach helps you stand out among your competitor.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Website Development
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      QuickSkill offers courses in front-end and back-end web development technologies and techniques.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Graphics Design
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      QuickSkill offers courses in various graphic design skills and software.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Social Media Marketing</h6>
                      <p className="mb-4 text-blueGray-500">
                      QuickSkill offers courses in social media marketing strategy and tactics.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Freelancing
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      QuickSkill offers courses to help freelancers build successful and sustainable careers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Social Media Marketing
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Want to up your social media game and reach a wider audience? QuickSkill's social media marketing courses can help you master the latest strategies and tactics.
              From creating a social media marketing plan to analyzing and measuring your results, QuickSkill has all the tools and guidance you need to succeed.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Facebook
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Instagram
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  LinkedIn
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tiktok
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Google Ads
                </span>
                
              </div>
              <a
                href="/#"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-btn.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-card.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-2.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-menu.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-btn-pink.png").default}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="/#"
                    target="_blank"
                  >
                    <div className="bg-adobe-illustrator shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/adobe_illustrator_logo_icon.jpg").default}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Adobe Illustrator
                      </p>
                    </div>
                  </a>
                  <a
                    href="/#"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://pdnonline.com/wp-content/uploads/2017/05/photoshop-logo.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Adobe Photoshop
                      </p>
                    </div>
                  </a>
                  {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Adobe After Effects
                      </p>
                    </div>
                  </a> */}
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="/#"
                    target="_blank"
                  >
                    <div className="bg-adobe-premiere-pro shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://thumbs.dreamstime.com/b/premiere-pro-logo-icon-vector-logos-logo-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-emblem-wallpaper-background-208329670.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Adobe Premier Pro
                      </p>
                    </div>
                  </a>
                  <a
                    href="/#"
                    target="_blank"
                  >
                    <div className="bg-adobe-after-effects shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://toppng.com/uploads/preview/after-effect-logo-adobe-after-effects-cc-2018-logo-11562895157j0r5ch2c1g.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                      Adobe After Effects
                      </p>
                    </div>
                  </a>
                  {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                    </div>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Creative Design
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Looking to improve your graphic design skills or learn new software? QuickSkill has a range of courses to help you create stunning visual designs.

              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              From branding and logo design to photo editing and video production, QuickSkill's expert instructors will guide you every step of the way.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Logo
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Cover
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Brand Identity
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Brouchure
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Flyers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Web/App UI
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Social Media
                </span>
              </div>
              <a
                href="/#"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Website Development
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                QuickSkill offers comprehensive web development courses to help you master the latest technologies and techniques in front-end and back-end development.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Expert instructors: Provides guidance and support from experienced professionals in the field.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Comprehensive curriculum: Covers all the essential technologies and techniques needed to build professional websites.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Practical projects: Allows students to apply their learning through hands-on projects and exercises.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Why should you choose QuickSkill?</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            With a focus on practical application and hands-on learning, QuickSkill courses equip students with the tools and confidence to immediately apply their skills in real-world situations.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Social Media Marketing
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/social-media-marketing.png").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Graphics Design
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/graphics-design.png").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Freelancing
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/freelancing.png").default}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        {/* <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div> */}
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
              Unlock your full potential and take your career to the next level with QuickSkill.
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Don't let your lack of knowledge or skills hold you back any longer. Take the first step towards achieving your goals and start your journey with QuickSkill today. You'll be glad you did.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/#"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Start browsing
                </a>
                <a
                  href="/#"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fas fa-user text-lg mr-1"></i>
                  <span>{' '}Register Yourself</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
