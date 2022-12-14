import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButton = () => {
  const [showScrollToTop, setScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setScrollToTop(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollWrap>
      {showScrollToTop && (
        <div onClick={scrollToTop}>
          <ScrollButton>
            <img src="/up.svg" alt="Up-button" />
          </ScrollButton>
        </div>
      )}
    </ScrollWrap>
  );
};

export default ScrollToTopButton;

const ScrollWrap = styled.div`
  position: fixed;
  display: relative;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
`

const ScrollButton = styled.div`
  padding: 0.2rem;
  border-radius: 0.5rem;
  box-shadow: -5px -5px 15px;
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  animation: fadeIn 0.5s;
  transition: 0.4s;
`;
