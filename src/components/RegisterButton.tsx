import { Box } from "@mui/material";
import styled from "styled-components";

interface Colors {
  text?: string;
  textHover?: string;
  background?: string;
  backgroundHover?: string;
  backgroundLeft?: string;
  folder?: string;
  folderInner?: string;
  paper?: string;
  paperLines?: string;
  paperBehind?: string;
  pencilCap?: string;
  pencilTop?: string;
  pencilMiddle?: string;
  pencilBottom?: string;
  shadow?: string;
}

interface CustomButtonProps {
  label?: string;
  onClick?: () => void;
  $colors?: Colors;
}

const RegisterButton: React.FC<CustomButtonProps> = ({
  label = "Prijavi Se",
  onClick,
  $colors = {},
}) => {
  return (
    <Box display={{ xs: "none", lg: "block" }}>
      <StyledWrapper $colors={$colors}>
        <button className="continue-application" onClick={onClick}>
          <div>
            <div className="pencil" />
            <div className="folder">
              <div className="top">
                <svg viewBox="0 0 24 27">
                  <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
                </svg>
              </div>
              <div className="paper" />
            </div>
          </div>
          {label}
        </button>
      </StyledWrapper>
    </Box>
  );
};

const StyledWrapper = styled.div<{ $colors: Colors }>`
  .continue-application {
    --color: ${({ $colors }) => $colors.text || "#fff"};
    --text-hover: ${({ $colors }) => $colors.textHover || "#fff"};
    --background: ${({ $colors }) => $colors.background || "#404660"};
    --background-hover: ${({ $colors }) =>
      $colors.backgroundHover || "#3a4059"};
    --background-left: ${({ $colors }) => $colors.backgroundLeft || "#2b3044"};
    --folder: ${({ $colors }) => $colors.folder || "#f3e9cb"};
    --folder-inner: ${({ $colors }) => $colors.folderInner || "#beb393"};
    --paper: ${({ $colors }) => $colors.paper || "#ffffff"};
    --paper-lines: ${({ $colors }) => $colors.paperLines || "#bbc1e1"};
    --paper-behind: ${({ $colors }) => $colors.paperBehind || "#e1e6f9"};
    --pencil-cap: ${({ $colors }) => $colors.pencilCap || "#fff"};
    --pencil-top: ${({ $colors }) => $colors.pencilTop || "#275efe"};
    --pencil-middle: ${({ $colors }) => $colors.pencilMiddle || "#fff"};
    --pencil-bottom: ${({ $colors }) => $colors.pencilBottom || "#5c86ff"};
    --shadow: ${({ $colors }) => $colors.shadow || "rgba(13, 15, 25, 0.2)"};
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 19px;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    padding: 15px 29px 15px 69px;
    transition: all 0.3s;
    color: var(--color);
    background: var(--bg, var(--background));
  }

  .continue-application > div {
    top: 0;
    left: 0;
    bottom: 0;
    width: 53px;
    position: absolute;
    overflow: hidden;
    border-radius: 5px 0 0 5px;
    background: var(--background-left);
  }

  .continue-application > div .folder {
    width: 23px;
    height: 27px;
    position: absolute;
    left: 15px;
    top: 13px;
  }

  .continue-application > div .folder .top {
    left: 0;
    top: 0;
    z-index: 2;
    position: absolute;
    transform: translateX(var(--fx, 0));
    transition: transform 0.4s ease var(--fd, 0.3s);
  }

  .continue-application > div .folder .top svg {
    width: 24px;
    height: 27px;
    display: block;
    fill: var(--folder);
    transform-origin: 0 50%;
    transition: transform 0.3s ease var(--fds, 0.45s);
    transform: perspective(120px) rotateY(var(--fr, 0deg));
  }

  .continue-application > div .folder:before,
  .continue-application > div .folder:after,
  .continue-application > div .folder .paper {
    content: "";
    position: absolute;
    left: var(--l, 0);
    top: var(--t, 0);
    width: var(--w, 100%);
    height: var(--h, 100%);
    border-radius: 1px;
    background: var(--b, var(--folder-inner));
  }

  .continue-application > div .folder:before {
    box-shadow: 0 1.5px 3px var(--shadow), 0 2.5px 5px var(--shadow),
      0 3.5px 7px var(--shadow);
    transform: translateX(var(--fx, 0));
    transition: transform 0.4s ease var(--fd, 0.3s);
  }

  .continue-application > div .folder:after,
  .continue-application > div .folder .paper {
    --l: 1px;
    --t: 1px;
    --w: 21px;
    --h: 25px;
    --b: var(--paper-behind);
  }

  .continue-application > div .folder:after {
    transform: translate(var(--pbx, 0), var(--pby, 0));
    transition: transform 0.4s ease var(--pbd, 0s);
  }

  .continue-application > div .folder .paper {
    z-index: 1;
    --b: var(--paper);
  }

  .continue-application > div .folder .paper:before,
  .continue-application > div .folder .paper:after {
    content: "";
    width: var(--wp, 14px);
    height: 2px;
    border-radius: 1px;
    transform: scaleY(0.5);
    left: 3px;
    top: var(--tp, 3px);
    position: absolute;
    background: var(--paper-lines);
    box-shadow: 0 12px 0 0 var(--paper-lines), 0 24px 0 0 var(--paper-lines);
  }

  .continue-application > div .folder .paper:after {
    --tp: 6px;
    --wp: 10px;
  }

  .continue-application > div .pencil {
    height: 2px;
    width: 3px;
    border-radius: 1px 1px 0 0;
    top: 8px;
    left: 105%;
    position: absolute;
    z-index: 3;
    transform-origin: 50% 19px;
    background: var(--pencil-cap);
    transform: translateX(var(--pex, 0)) rotate(35deg);
    transition: transform 0.4s ease var(--pbd, 0s);
  }

  .continue-application > div .pencil:before,
  .continue-application > div .pencil:after {
    content: "";
    position: absolute;
    display: block;
    background: var(
      --b,
      linear-gradient(
        var(--pencil-top) 55%,
        var(--pencil-middle) 55.1%,
        var(--pencil-middle) 60%,
        var(--pencil-bottom) 60.1%
      )
    );
    width: var(--w, 5px);
    height: var(--h, 20px);
    border-radius: var(--br, 2px 2px 0 0);
    top: var(--t, 2px);
    left: var(--l, -1px);
  }

  .continue-application > div .pencil:before {
    -webkit-clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
    clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
  }

  .continue-application > div .pencil:after {
    --b: none;
    --w: 3px;
    --h: 6px;
    --br: 0 2px 1px 0;
    --t: 3px;
    --l: 3px;
    border-top: 1px solid var(--pencil-top);
    border-right: 1px solid var(--pencil-top);
  }

  .continue-application:before,
  .continue-application:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: var(--color);
    transform-origin: 9px 1px;
    transform: translateX(var(--cx, 0)) scale(0.5) rotate(var(--r, -45deg));
    top: 23px;
    right: 20px;
    transition: transform 0.3s;
  }

  .continue-application:after {
    --r: 45deg;
  }

  .continue-application:hover {
    --cx: 2px;
    --bg: var(--background-hover);
    --fx: -40px;
    --fr: -60deg;
    --fd: 0.15s;
    --fds: 0s;
    --pbx: 3px;
    --pby: -3px;
    --pbd: 0.15s;
    --pex: -24px;
    --color: var(--text-hover);
  }
`;

export default RegisterButton;