import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { NextSeo } from "next-seo";

const ContactUs = (props) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jzucn2y",
        "template_7lx41d9",
        e.target,
        "user_UyswRsHeLVHb6DDdODSRr"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const SEO = {
    title: "Contact Us for any Help | Uquicks",
    description:
      "Contact Us | Uquicks, contact Us for any help, We are readily available 24 / 7",
    additionalMetaTags: [
      {
        property: "keywords",
        name: "keywords",
        content:
          "Uquicks, uquick, sda, kblc, kasese better living center, light fm kasese, awr light fm, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,",
      },
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mD38LmQPJr85y9SCay6C_tWpOu_OwJR8NQ&usqp=CAU",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
        type: "text/css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Droid+Serif:400,700,700italic,400italic",
        type: "text/css",
      },
    ],
    openGraph: {
      type: "website",
      url: "https://uquicks.com/ContactUs",
      title: "Contact Us for any Help | Uquicks",
      description:
        "Contact Us | Uquicks, contact Us for any help, We are readily available 24 / 7",
      images: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mD38LmQPJr85y9SCay6C_tWpOu_OwJR8NQ&usqp=CAU",
          width: 800,
          height: 600,
          alt: "uquicks",
          type: "image/png",
        },

        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mD38LmQPJr85y9SCay6C_tWpOu_OwJR8NQ&usqp=CAU",
        },
      ],
    },
    twitter: {
      handle: "@Bwambalejoshua",
      site: "@uquicks",
      cardType: "summary_large_image",
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Container>
        <div className="text-center text-lg mb-1 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-gray-400 rounded-full text-white px-4 py-3 mx-10 ">
          <h1>Contact Uquicks</h1>
        </div>
        <p>
          Please type your full name and correct email if you want to connect
          with me / follow the address below to find me in person / call or
          email me directly on the phone numbers and emails below
        </p>
        <ContactWrapper>
          <Content>
            <Address>
              <h3>Address</h3>
              <p>1345 Asaba Street</p>
              <p>Kasese-Mbarara Road, Saluti 'A'</p>
            </Address>
            <Phone>
              <h3>Phone</h3>
              <p>0772951826</p>
              <p>0741881477</p>
              <p>0726173579</p>
            </Phone>
            <Email>
              <h3>Email</h3>
              <p>asimwegers96.com</p>
            </Email>
          </Content>
          <ContactForm onSubmit={handleSubmit}>
            <form onSubmit={sendEmail}>
              <Inputbox>
                <h2>Send Message</h2>
                <input type="text" name="name" required="required" />
                <span>Full Name</span>
              </Inputbox>

              <Inputbox>
                <input type="text" name="user_email" required="required" />
                <span>Email</span>
              </Inputbox>

              <Inputbox>
                <textarea name="message" required="required"></textarea>
                <span>Type your Message...</span>
              </Inputbox>
              <Inputbox>
                <input type="submit" value="Send" />
              </Inputbox>
              {message && <span>Message Submitted Successfully,</span>}
              {message && <span> I will reply ASAP ;)</span>}
            </form>
          </ContactForm>
        </ContactWrapper>
      </Container>
    </>
  );
};

export default ContactUs;

const Container = styled.div`
  width: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  padding: 20px;
  // background: url("/images/sda03.jpg") center center / cover no-repeat fixed;
  h2 {
    color: #000;
  }

  p {
    color: #000;
  }
`;

const ContactWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  @media (max-width: 991px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  position: relative;
  gap: 12px;
  font-size: 16px;
  font-weight: 300;

  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background: #000;
  padding: 20px;
  @media (max-width: 991px) {
    width: 100%;
    span {
      color: green;
    }
    form {
      span {
        color: green;
      }
    }
  }
`;

const Address = styled.div`
  h3 {
    font-size: 29px;
    font-weight: 500;
    color: #00bcd4;
  }

  p {
    font-weight: 300;
    letter-spacing: 1px;
    color: #000;
  }
`;

const Phone = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    color: #00bcd4;
  }

  p {
    font-weight: 300;
    letter-spacing: 1px;
    color: #000;
  }
`;

const Email = styled.div`
  h3 {
    font-size: 19px;
    font-weight: 500;
    color: #00bcd4;
  }

  p {
    font-weight: 300;
    letter-spacing: 1px;
    color: #000;
  }
`;

const Inputbox = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;

  h2 {
    font-size: 30px;
    margin-bottom: 8px;
    color: #00bcd4;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 5px 3px;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;

    &:focus ~ span {
      color: #e91e63;
      font-size: 12px;
      transform: translateY(-20px);
    }

    &:valid ~ span {
      color: #e91e63;
      font-size: 12px;
      transform: translateY(-20px);
    }
  }

  textarea {
    width: 100%;
    padding: 5px 3px;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
    overflow-y: hidden;

    &:focus ~ span {
      color: #e91e63;
      font-size: 12px;
      transform: translateY(-20px);
    }

    &:valid ~ span {
      color: #e91e63;
      font-size: 12px;
      transform: translateY(-20px);
    }
  }

  span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.6s;
    color: #666;
  }

  input[type="submit"] {
    width: 100px;
    background: #00bcd4;
    color: #000;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;

    &:hover {
      background: lightseagreen;
      color: #444;
    }
  }
`;
