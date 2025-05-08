import React from 'react';

interface SideBarProps {}

const SideBar = ({ theme, width, isOpen }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: isOpen ? width : 0,
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  zIndex: theme.zIndex.drawer,
});

export const SideBar: React.FC<SideBarProps> = ({
  children,
  isOpen = true,
  width = 240,
}) => {
  return (
    <SideBarContainer width={width} isOpen={isOpen}>
      {children}
    </SideBarContainer>
  );
};
