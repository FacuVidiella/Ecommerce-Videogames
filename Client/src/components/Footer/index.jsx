import StyledFooter from "../styles/styled_footer/styledFooter";

export default function Footer() {
  return (
    <StyledFooter>
      <h2>ECOMMERCE</h2>
      <div>
        <label htmlFor="">Terms of service</label>
        <label htmlFor="">Privacy</label>
        <label htmlFor="">Legal</label>
        <label htmlFor="">Contact us</label>
      </div>

      <p>
        ©Ecommerce ~ This is a fictional project for the bootcamp Henry. All
        rights reserved. All trademarks, service marks and company names are the
        property of their respective owners.
      </p>
    </StyledFooter>
  );
}
