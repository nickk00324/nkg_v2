import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-top: ${props => props.theme.border};
  border-left: ${props => props.theme.border};
  padding: 2rem;
  p {
    margin: 0;
    font-size: 1.2rem;
    padding: 0 0.5rem;
  }
  a {
    font-size: 1.2rem;
    padding: 0 0.5rem;
  }
  .icon {
    a {
      font-size: 2rem;
      padding: 0 0.5rem;
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <p>1206 Maple Ave. Ste. 534, Los Angeles, CA 90015</p>
    <p>213.437.3951</p>
    <p>gallery open by appointment only</p>
    <a href='mailto:info@nickkochornswasdigallery.com'>
      info@nickkochornswasdigallery.com
    </a>
    <div className='icon'>
      <a href='https://instagram.com/nickkochornswasdigallery'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </FooterStyles>
);

export default Footer;
