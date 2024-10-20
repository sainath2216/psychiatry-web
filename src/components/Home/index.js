import React from 'react';
import Headers from "../Headers"
import Reviews from "../Reviews"
import Faqs from "../Faqs"
import { Link } from 'react-router-dom';
import ReactSlick from '../ReactSlick'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { GrPlan } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

import "./index.css"


const faqsList = [
    {
        id: 0,
        questionText: 'Convenient access ?',
        answerText:
            'We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home. ',
    },
    {
        id: 1,
        questionText: 'Concierge approach?',
        answerText:
            'Patients will have direct access to their providers by phone, text, or email: online booking and expedited appointments.',
    },
    {
        id: 2,
        questionText:
            'High quality service?',
        answerText:
            'We provide express visits and extended appointment times to meet each clients needs.',
    },
    {
        id: 3,
        questionText: 'Trusted and empathic providers',
        answerText:
            'Our priority is to build a client-provider relationship from day one.',
    },
]

const Home = () => {
    return (
        <>
            <Headers />
            <section className="app-section">
                <div className="container">
                    <ReactSlick />
                    <section className="founder-section">
                        <div className='founder-container'>
                            <div className='founder-image'>
                                <img src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.amazonaws.com%2FHome%2F1719990235238.webp&w=640&q=90" className='founder-img' alt="founder" />
                            </div>
                            <div className='founder-details'>
                                <h2>Meet The founder</h2>
                                <h3>Lakeisha Appleton</h3>
                                <p>FNP-C, PMHNP-BC</p>
                                <blockquote>
                                    “Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
                                </blockquote>
                                <button className='learn-more'>Learn More <HiOutlineArrowSmallRight className='arrow-icon' /></button>
                            </div>
                        </div>
                    </section>
                    <section className='treatment-container' >
                        <div className="treatment-focus">
                            <h1>Our Treatment Focus</h1>
                            <div className="mental-health-section">
                                <div className="image-container">
                                    <img src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1721634655217.webp&w=1080&q=90" alt="treatment-img" className="focus-image" />
                                </div>
                                <div className="text-container">
                                    <h2 className='treatment-heading'>Mental Health</h2>
                                    <p className='treatment-para'>
                                        Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act.
                                        It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions.
                                        Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as
                                        Depression, Anxiety, ADHD, Bipolar, and more.
                                    </p>
                                    <button className="learn-more-btn">Learn More <HiOutlineArrowSmallRight className='arrow-icon' /> </button>
                                </div>
                            </div>
                            <div className="mental-health-section">

                                <div className="text-container">
                                    <h2 className='treatment-heading'>Addiction And Recovery</h2>
                                    <p className='treatment-para'>
                                        Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior,
                                        display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response.
                                        At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery.
                                        Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.
                                    </p>
                                    <button className="learn-more-btn">Learn More <HiOutlineArrowSmallRight className='arrow-icon' /> </button>
                                </div>
                                <div className="image-container">
                                    <img src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1721709195639.webp&w=1080&q=90" alt="treatment-img" className="focus-image" />
                                </div>
                            </div>
                            <div className="mental-health-section">
                                <div className="image-container">
                                    <img src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1721634506363.webp&w=1080&q=90" alt="treatment-img" className="focus-image" />
                                </div>
                                <div className="text-container">
                                    <h2 className='treatment-heading'>Supervised Medical Weight Loss</h2>
                                    <p className='treatment-para'>
                                        The primary indicator of obesity is when a person’s body mass index (BMI) is 30 or
                                        higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own.
                                        Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client’s needs.
                                    </p>
                                    <button className="learn-more-btn">Learn More <HiOutlineArrowSmallRight className='arrow-icon' /> </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='black-container'>
                            <h1 className='black-heading'>We help people living with and experiencing difficult times</h1>
                        </div>
                    </section>
                    <section className='services-container'>
                        <h1 className='service-heading'>Our Services</h1>
                        <div className='services-cards'>
                            <div className='card-container'>
                                <img src='https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1698862746368.webp&w=128&q=100'
                                    className='service-img' alt="img" />
                                <p className='card-description'>Psychiatric Evaluation</p>
                            </div>
                            <div className='card-container'>
                                <img src='https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1698862772597.webp&w=128&q=100'
                                    className='service-img' alt="img" />
                                <p className='card-description'>Medication Management</p>
                            </div>
                            <div className='card-container'>
                                <img src='https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1698862800240.webp&w=128&q=100'
                                    className='service-img' alt="img" />
                                <p className='card-description'>Supportive Psychotherapy</p>
                            </div>
                            <div className='card-container'>
                                <img src='https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1698862834461.webp&w=128&q=100'
                                    className='service-img' alt="img" />
                                <p className='card-description'>ADHD Testing</p>
                            </div>
                            <div className='card-container'>
                                <img src='https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1698862859625.webp&w=128&q=100'
                                    className='service-img' alt="img" />
                                <p className='card-description'>MAT Treatment</p>
                            </div>
                            <div className='card-container'>
                                <img src='https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1698862772597.webp&w=128&q=100'
                                    className='service-img' alt="img" />
                                <p className='card-description'>Gene Sight Testing</p>
                            </div>
                        </div>
                        <div className='btn-container'>
                            <button className="learn-more-btn">View our service <HiOutlineArrowSmallRight className='arrow-icon' /> </button>
                        </div>
                    </section>
                    <section>
                        <div className="choose-container">
                            <div className="choose-img-container">
                                <img
                                    src="https://www.adapsychiatry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpsychiatry.e3015222.webp&w=3840&q=90"
                                    className="why-img"
                                    alt="Ada Psychiatry"
                                />
                            </div>
                            <div className="choose-text-container">

                                <div className="why-text">

                                    <Faqs faqsList={faqsList} />

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='start-container'>
                        <h1 className='start-heading'>Four Simple Steps To Get Started </h1>
                        <div className='start-cards'>
                            <div className='start-card-container'>
                                <RiCalendarScheduleFill className='start-icons' />
                                <h1 className='number'>01</h1>
                                <p className='details'>Schedule an appointmentn</p>
                            </div>

                            <div className='start-card-container'>
                                <FaHandshake className='start-icons' />
                                <h1 className='number'>02</h1>

                                <p className='details'>Connect with your provider</p>

                            </div>
                            <div className='start-card-container'>
                                <GiDiscussion className='start-icons' />
                                <h1 className='number'>03</h1>
                                <p className='details'>Discuss your comprehensive assessment</p>
                            </div>
                            <div className='start-card-container'>
                                <GrPlan className='start-icons' />
                                <h1 className='number'>04</h1>
                                <p className='details'>Receive your individualized treatment plan</p>
                            </div>

                        </div>
                        <div className='btn-container'>
                            <button className="schedule-btn">Schedule a Call <HiOutlineArrowSmallRight className='arrow-icon' /> </button>
                        </div>
                    </section>
                    <section className="states-section">
                        <h2 className="section-header">
                            Now Accepting Patients In The Following States
                        </h2>
                        <div className="states-container">
                            <div className="state-item">
                                <img
                                    src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1719990831680.webp&w=750&q=90"
                                    className="state-img"
                                    alt="Arizona"
                                />
                                <h3>Arizona</h3>
                                <p>In-person and Virtual appointment</p>
                            </div>
                            <div className="state-item">
                                <img
                                    src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1719990878783.webp&w=750&q=90"
                                    className="state-img"
                                    alt="Washington"
                                />
                                <h3>Washington</h3>
                                <p>Virtual appointment</p>
                            </div>
                            <div className="state-item">
                                <img
                                    src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Fadaassets.s3.us-west-2.amazonaws.com%2FHome%2F1719990927623.webp&w=750&q=90"
                                    className="state-img"
                                    alt="Oregon"
                                />
                                <h3>Oregon</h3>
                                <p>Virtual appointment</p>
                            </div>
                        </div>
                        <div className='question-container'>
                            <h1 className='f-question-header'>Frequently asked questions</h1>
                            <div className='questions'>
                                <Faqs faqsList={faqsList} />
                            </div>
                        </div>
                        <div>
                            <button className="faq-button">See All FAQ <HiOutlineArrowSmallRight className='arrow-icon' /> </button>
                        </div>
                    </section>
                    <section>
                        <div className='review-container'>
                            <h1 className='main-heading'>What Our Patients Are saying</h1>
                            <Reviews />
                        </div>
                        
                    </section>
                    <section className='footer-section'>
                        <div className='footer-container'>
                            <div className='footer-links'>
                                <h1 className='f-header'>Quick Links</h1>
                                <p className='f-des'>Who we are</p>
                                <p className='f-des'>What We Treat</p>
                                <p className='f-des'>Services</p>
                                <p className='f-des'>Contact Us</p>
                            </div>
                            <div className='footer-links'>
                                <h1 className='f-header'>Resources</h1>
                                <p className='f-des'>FAQ</p>
                                <p className='f-des'>Blog</p>
                                <p className='f-des'>Fees and Insurance</p>
                                <p className='f-des'>Contact Us</p>
                            </div>
                            <div className='footer-links'>
                                <h1 className='f-header'>Legal</h1>
                                <p className='f-des'>Terms</p>
                                <p className='f-des'>Privacy</p>
                                <p className='f-des'>Return Policy</p>
                                <p className='f-des'>Cooking Settings</p>
                            </div>
                            <div className='footer-links'>
                                <h1 className='f-header'>Business Hours</h1>
                                <p className='f-des'>Monday - Thursday</p>
                                <p className='f-des'>09:00 am - 4:00 pm </p>
                                <h1 className='f-header'> For Careers</h1>
                                <p className='f-des'>Interested in joining the ADA Team?
                                    <br />
                                    Career@adapsychiatry.com</p>
                            </div>
                            <div className='footer-contact'>
                                <div className='footer-img-container'>
                                    <img src="https://www.adapsychiatry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d9ef92fd.png&w=128&q=100"
                                        className='footer-logo' alt="img" />
                                    <h1 className='logo-des'>Ada Psychiatry</h1>
                                </div>
                                <div className='logo-locate-container'>
                                    <h1 className='f-header'>Locate Us</h1>
                                    <p className='f-des'>
                                        1820 E Ray Road, STE A107,
                                        Chandler, Arizona 85225
                                        Phone: 480-526-9292</p>
                                    <h1 className='f-header'>Follow Us</h1>
                                    <div className='social-links'>
                                        <Link><FaFacebook className='social-icon' /></Link>
                                        <Link><FaLinkedin className='social-icon' /></Link>
                                        <Link><FaInstagram className='social-icon' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='copy-rights-container'>
                            <FaRegCopyright className='c-right-icon' /> <h1 className='c-rights-description'>Ada Psychiatry. All rights reserved. 2024</h1>
                        </div>
                    </section>


                </div >
            </section >
        </>
    );
}

export default Home;
