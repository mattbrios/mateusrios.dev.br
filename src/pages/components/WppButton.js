import React from 'react';
import styled from 'styled-components';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const WppContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  height: 64px;
  width: 64px;
  background: var(--whatsapp);
  border-radius: 50%;
  text-align: center;
  padding: 14px 0;
  cursor: pointer;
`;

const wppClickHandler = () => {
  let text = "Olá, Mateus. Já escolhi o template para o meu novo site. O template é o "
  let url = "https://wa.me/5515996236179/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

const WppButton = () => {
  return (
    <WppContainer onClick={wppClickHandler}>
      <WhatsAppIcon fontSize="large" style={{ color: "#FFF" }} />
    </WppContainer>
  );
}

export default WppButton;