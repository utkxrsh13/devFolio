import styled from 'styled-components';

export interface ResumeProps {
  href?: string;          // file path
  label?: string;         // button text
  variant?: 'A' | 'B' | 'C';
  download?: boolean;     // add download attribute
  compact?: boolean;      // smaller height (navbar)
  fullWidth?: boolean;    // stretch to parent width
  className?: string;     // extra classes
  onClick?: () => void;   // optional callback
  ariaLabel?: string;     // accessible label override
}

const Resume: React.FC<ResumeProps> = ({
  href = '/resume.pdf',
  label = 'Resume',
  variant = 'C',
  download = true,
  compact = false,
  fullWidth = false,
  className,
  onClick,
  ariaLabel,
}) => {
  const handleClick = () => {
    onClick?.();
    // Fallback: if download attr ignored, force programmatic download
    if (download) {
      // Allow natural behavior first; if cross-origin or blocked skip
      const isPdf = href.endsWith('.pdf');
      if (!isPdf) return;
      // Delay to let native download fire; if not triggered we could implement extra logic
    }
  };

  return (
    <StyledWrapper
      data-variant={variant}
      data-compact={compact}
      data-full={fullWidth}
      className={className}
    >
      <a
        href={href}
        className={`button type--${variant}`}
        {...(download ? { download: true } : {})}
        aria-label={ariaLabel || `${label} download`}
        onClick={handleClick}
      >
        <div className="button__line" />
        <div className="button__line" />
        <span className="button__text">
          <svg
            className="dl-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v14" />
            <path d="M6 11l6 6 6-6" />
            <path d="M5 21h14" />
          </svg>
          <span className="txt">{label}</span>
        </span>
        <div className="button__drow1" />
        <div className="button__drow2" />
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
  --line_color: #0d9488;
  --back_color: #083c38;

  &[data-variant='A'] { --line_color:#555; --back_color:#2d2d2d; }
  &[data-variant='B'] { --line_color:#1b1919; --back_color:#173042; }
  &[data-variant='C'] { --line_color:#14b8a6; --back_color:#0d2725; }

  .button { position:relative; z-index:0; width:240px; height:56px; text-decoration:none; font-size:13px; font-weight:600; color:var(--line_color); letter-spacing:2px; transition:all .35s ease; font-family:ui-sans-serif,system-ui,sans-serif; text-transform:uppercase; }
  &[data-compact='true'] .button { height:40px; width:190px; font-size:11px; }
  @media (max-width: 480px) { .button { width:200px; height:52px; } &[data-compact='true'] .button { width:160px; height:38px; } }
  &[data-full='true'] .button { width:100%; max-width:320px; }

  .dl-icon { margin-right:6px; opacity:.85; transition:transform .4s ease; }
  .button:hover .dl-icon { transform:translateY(2px); }

  .button__text { display:flex; justify-content:center; align-items:center; width:100%; height:100%; position:relative; }
  .button::before,.button::after,.button__text::before,.button__text::after{ content:""; position:absolute; height:3px; border-radius:2px; background:var(--line_color); transition:all .55s cubic-bezier(.65,.05,.36,1); }
  .button::before{ top:0; left:54px; width:calc(100% - 56px * 2 - 16px); }
  .button::after{ top:0; right:54px; width:8px; }
  .button__text::before{ bottom:0; right:54px; width:calc(100% - 56px * 2 - 16px); }
  .button__text::after{ bottom:0; left:54px; width:8px; }

  .button__line{ position:absolute; top:0; width:56px; height:100%; overflow:hidden; }
  .button__line::before{ content:""; position:absolute; top:0; width:150%; height:100%; box-sizing:border-box; border-radius:300px; border:solid 3px var(--line_color); }
  .button__line:nth-child(1), .button__line:nth-child(1)::before{ left:0; }
  .button__line:nth-child(2), .button__line:nth-child(2)::before{ right:0; }

  .button__drow1,.button__drow2{ position:absolute; z-index:-1; border-radius:16px; transform-origin:16px 16px; background:var(--back_color); }
  .button__drow1{ top:-16px; left:40px; width:32px; height:0; transform:rotate(30deg); }
  .button__drow2{ top:44px; left:77px; width:32px; height:0; transform:rotate(-127deg); }
  .button__drow1::before,.button__drow1::after,.button__drow2::before,.button__drow2::after{ content:""; position:absolute; background:var(--back_color); }
  .button__drow1::before{ bottom:0; left:0; width:0; height:32px; border-radius:16px; transform-origin:16px 16px; transform:rotate(-60deg); }
  .button__drow1::after{ top:-10px; left:45px; width:0; height:32px; border-radius:16px; transform-origin:16px 16px; transform:rotate(69deg); }
  .button__drow2::before{ bottom:0; left:0; width:0; height:32px; border-radius:16px; transform-origin:16px 16px; transform:rotate(-146deg); }
  .button__drow2::after{ bottom:26px; left:-40px; width:0; height:32px; border-radius:16px; transform-origin:16px 16px; transform:rotate(-262deg); }

  .button:hover{ letter-spacing:6px; color:var(--line_color); }
  .button:hover::before, .button:hover .button__text::before{ width:8px; }
  .button:hover::after, .button:hover .button__text::after{ width:calc(100% - 56px * 2 - 16px); }
  .button:hover .button__drow1{ animation:drow1 ease-in .06s forwards; }
  .button:hover .button__drow1::before{ animation:drow2 linear .08s .06s forwards; }
  .button:hover .button__drow1::after{ animation:drow3 linear .03s .14s forwards; }
  .button:hover .button__drow2{ animation:drow4 linear .06s .2s forwards; }
  .button:hover .button__drow2::before{ animation:drow3 linear .03s .26s forwards; }
  .button:hover .button__drow2::after{ animation:drow5 linear .06s .32s forwards; }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce){
    .button{ transition:none; letter-spacing:2px !important; }
    .button:hover{ letter-spacing:2px; }
    .button__drow1,.button__drow2,.button__drow1::before,.button__drow1::after,.button__drow2::before,.button__drow2::after{ animation:none !important; height:0; width:0; }
  }

  @keyframes drow1{0%{height:0;}100%{height:100px;}}
  @keyframes drow2{0%{width:0;opacity:0;}10%{opacity:0;}11%{opacity:1;}100%{width:120px;}}
  @keyframes drow3{0%{width:0;}100%{width:80px;}}
  @keyframes drow4{0%{height:0;}100%{height:120px;}}
  @keyframes drow5{0%{width:0;}100%{width:124px;}}
`;

export default Resume;
