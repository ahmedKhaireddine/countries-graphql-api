import styled from '@emotion/styled';

export const Container = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(255,255,255,0.2);
  transform-origin: center;
  transform-style: preserve-3d;
  transform: ${props => props.index && `rotateY(calc(${props.index} * 30deg))`} translateZ(400px);
  -webkit-box-reflect: below 0 linear-gradient(transparent, transparent, #0004);
  &:hover {
      box-shadow: 0 8px 16px 0 rgba(255,255,255,0.2);
  }
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

export const TitleCard = styled.h3`
  margin: 0 auto;
  position: absolute;
  display: block;
  top: 85%;
  color: black;
  font-size: .7em;
  line-height: 10px;
  text-align: center;
  padding: 0 10px;
`;