import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { icons } from '../constants';
import { useState } from 'react';

const TabBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  background-color: #bdd8b0;
  box-shadow: 0 -1px 6px rgba(189, 216, 208, 1);
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const TabIcon = styled.img`
  width: 4vh;
  height: 4vh;
`;

const QRIcon = styled.img`
    width: 7vh;
    height: 7vh;
`

const TabButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => (props.active ? '#04315b' : '#3c9284')};
`;

function BottomTab({ scrollPercent, togglePage, pages }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      togglePage(2, 0);
    }, 600);
    setTimeout(() => {
      setIsExpanded(false);
    }, 2000);
  };

  const opacity = Math.max(1 - scrollPercent / 100, 0.1);

  const location = useLocation();

  const activeIconTint = (active) => ({
    filter: active
      ? 'brightness(0) saturate(100%) invert(11%) sepia(71%) saturate(2753%) hue-rotate(195deg) brightness(95%) contrast(97%)'
      : 'none',
  });

  return (
    <TabBar>
        <TabButton onClick={() => togglePage(0, 0)} active={pages[0][0]}>
            <TabIcon 
            src={icons.xyzRescale} 
            alt="Rescale" 
            style={activeIconTint(pages[0][0])}
            />
            <p className='font-hnroman text-xs'>Rescale</p>
        </TabButton>

        <TabButton onClick={() => toggleExpand()} active={pages[2][0]}>
            <div style={{
            position: 'absolute',
            zIndex: isExpanded ? '100' : '',
            top: isExpanded ? "auto" : "-6vh",
            width: isExpanded ? "250vw" : "12vh",
            height: isExpanded ? "250vh" : "12vh",
            borderRadius: isExpanded ? "30vh" : "6vh",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#04315b',
            display: 'flex',
            opacity: isExpanded ? 100 : opacity,
            transition: 'width 0.3s ease-in, height 0.3s ease-in, opacity 0.3s ease',
            }}>
                { isExpanded ? '' :<QRIcon src={icons.xyzQR} alt="QR"/>}
            </div>
            <p className='text-primary'>⠀⠀⠀⠀</p>
        </TabButton>

        <TabButton onClick={() => togglePage(1, 0)} active={pages[1][0]}>
            <TabIcon 
            src={icons.xyzAccount} 
            alt="Account"
            style={activeIconTint(pages[1][0])}
            />
            <p className='font-hnroman text-xs'>Account</p>
        </TabButton>
    </TabBar>
  );
}

export default BottomTab;
