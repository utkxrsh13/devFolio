import styled from 'styled-components';

interface LoaderProps {
  message?: string;
  overlay?: boolean; // when true, fills viewport with background
  className?: string;
}

const Loader = ({ message = 'Generating...', overlay = true, className }: LoaderProps) => {
  const chars = Array.from(message);
  return (
    <StyledWrapper $overlay={overlay} className={className} role="status" aria-live="polite" aria-label="Loading">
      <div className="loader" id="loader">
        <div className="loader-wrapper">
          {chars.map((ch, i) => (
            <span key={i} className="loader-letter" style={{ animationDelay: `${i * 0.1}s` }}>{ch}</span>
          ))}
          <div className="loader-circle" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ $overlay?: boolean }>`
  .loader {
    position: ${p => (p.$overlay ? 'fixed' : 'relative')};
    top: 0;
    left: 0;
    width: 100%;
    height: ${p => (p.$overlay ? '100vh' : '100%')};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${p => (p.$overlay ? 10 : 0)};
    background: ${p => (p.$overlay ? 'linear-gradient(0deg, #1a3379, #0f172a, #000)' : 'transparent')};
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(120px, 22vw, 200px);
    height: clamp(120px, 22vw, 200px);
    font-family: "Inter", sans-serif;
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    font-weight: 300;
    color: white;
    border-radius: 50%;
    background-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .loader-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: transparent;
    animation: loader-combined 2.3s linear infinite;
    z-index: 0;
  }
  @keyframes loader-combined {
    0% {
      transform: rotate(90deg);
      box-shadow:
        0 6px 12px 0 #38bdf8 inset,
        0 12px 18px 0 #005dff inset,
        0 36px 36px 0 #1e40af inset,
        0 0 3px 1.2px rgba(56, 189, 248, 0.3),
        0 0 6px 1.8px rgba(0, 93, 255, 0.2);
    }
    25% {
      transform: rotate(180deg);
      box-shadow:
        0 6px 12px 0 #0099ff inset,
        0 12px 18px 0 #38bdf8 inset,
        0 36px 36px 0 #005dff inset,
        0 0 6px 2.4px rgba(56, 189, 248, 0.3),
        0 0 12px 3.6px rgba(0, 93, 255, 0.2),
        0 0 18px 6px rgba(30, 64, 175, 0.15);
    }
    50% {
      transform: rotate(270deg);
      box-shadow:
        0 6px 12px 0 #60a5fa inset,
        0 12px 6px 0 #0284c7 inset,
        0 24px 36px 0 #005dff inset,
        0 0 3px 1.2px rgba(56, 189, 248, 0.3),
        0 0 6px 1.8px rgba(0, 93, 255, 0.2);
    }
    75% {
      transform: rotate(360deg);
      box-shadow:
        0 6px 12px 0 #3b82f6 inset,
        0 12px 18px 0 #0ea5e9 inset,
        0 36px 36px 0 #2563eb inset,
        0 0 6px 2.4px rgba(56, 189, 248, 0.3),
        0 0 12px 3.6px rgba(0, 93, 255, 0.2),
        0 0 18px 6px rgba(30, 64, 175, 0.15);
    }
    100% {
      transform: rotate(450deg);
      box-shadow:
        0 6px 12px 0 #4dc8fd inset,
        0 12px 18px 0 #005dff inset,
        0 36px 36px 0 #1e40af inset,
        0 0 3px 1.2px rgba(56, 189, 248, 0.3),
        0 0 6px 1.8px rgba(0, 93, 255, 0.2);
    }
  }

  .loader-letter {
    display: inline-block;
    opacity: 0.4;
    transform: translateY(0);
    animation: loader-letter-anim 2.4s infinite;
    z-index: 1;
    border-radius: 50ch;
    border: none;
    margin-inline: 1px;
  }
  /* timing is applied inline via style for variable-length messages */

  @media (prefers-reduced-motion: reduce) {
    .loader-circle { animation: none; }
    .loader-letter { animation: none; opacity: 1; }
  }

  @keyframes loader-letter-anim {
    0%,
    100% {
      opacity: 0.4;
      transform: translateY(0);
    }
    20% {
      opacity: 1;
      text-shadow: #f8fcff 0 0 5px;
    }
    40% {
      opacity: 0.7;
      transform: translateY(0);
    }
  }`;

export default Loader;
