import React from 'react'
import styled from 'styled-components';

const FooterPage = () => {
  return (
    <Footer>
     <FooterContent>
        <ContactInfo>
          <h3>Contact Us</h3>
          <p>Email: rohitsinghmaurya20@gmail.com</p>
          <p>Phone: +91 - 7007839424</p>
        </ContactInfo>

        <SocialLinks>
          <h3>Follow Us</h3>
        
          <div className="instagram">
            <img src="./images/instagram.png" alt="Instagram" />
            <a href="https://www.instagram.com/r_s_m87/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        
          <div className="facebook">
            <img src="./images/facebook.png" alt="Facebook" />
            <a href="https://www.facebook.com/share/1AAwkUqGNC/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        
          <div className="github">
            <img src="./images/github.png" alt="GitHub" />
            <a href="https://github.com/rohit5349" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        
          <div className="linkdin">
            <img src="./images/linkdin.png" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/rohit5349/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </SocialLinks>

         </FooterContent>
     </Footer>  
  );
};

export default FooterPage;

const Footer = styled.footer`
  background: #1a1a1a;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  flex: 1;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 4px 0;
    font-size: 14px;
  }
`;

const SocialLinks = styled.div`
  flex: 1;

  h3 {
    margin-bottom: 10px;
  }

  div {
    display: block;
    align-items: center;
    margin: 8px 0;

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
