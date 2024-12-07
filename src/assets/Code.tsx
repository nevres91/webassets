interface codeType {
  title: string;
  HTMLCode?: string;
  CSSCode?: string;
  jsCode?: string;
  MUI?: string;
}

// ------------BUTTON------------
export const buttonCode: codeType = {
  title: "Button",
  HTMLCode: `<button class="fancy-button">
    Click Me
  </button>`,
  CSSCode: `.fancy-button {
    padding: 10px 20px;
    border-radius: 5px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }`,
  jsCode: `document.querySelector('.fancy-button').addEventListener('click', () => {
    alert('Button Clicked!');
  });`,
};

// -----------PRIJAVI SE BUTTON-----------

export const registerButton: codeType = {
  title: "Register Button",
  MUI: `
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
    
    const CustomButton: React.FC<CustomButtonProps> = ({
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
    
    const StyledWrapper = styled.div<{ $colors: Colors }>\`
      .continue-application {
        --color: \${({ $colors }) => $colors.text || "#fff"};
        --text-hover: \${({ $colors }) => $colors.textHover || "#fff"};
        --background: \${({ $colors }) => $colors.background || "#404660"};
        --background-hover: \${({ $colors }) =>
          $colors.backgroundHover || "#3a4059"};
        --background-left: \${({ $colors }) => $colors.backgroundLeft || "#2b3044"};
        --folder: \${({ $colors }) => $colors.folder || "#f3e9cb"};
        --folder-inner: \${({ $colors }) => $colors.folderInner || "#beb393"};
        --paper: \${({ $colors }) => $colors.paper || "#ffffff"};
        --paper-lines: \${({ $colors }) => $colors.paperLines || "#bbc1e1"};
        --paper-behind: \${({ $colors }) => $colors.paperBehind || "#e1e6f9"};
        --pencil-cap: \${({ $colors }) => $colors.pencilCap || "#fff"};
        --pencil-top: \${({ $colors }) => $colors.pencilTop || "#275efe"};
        --pencil-middle: \${({ $colors }) => $colors.pencilMiddle || "#fff"};
        --pencil-bottom: \${({ $colors }) => $colors.pencilBottom || "#5c86ff"};
        --shadow: \${({ $colors }) => $colors.shadow || "rgba(13, 15, 25, 0.2)"};
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
    
      /* Other styles omitted for brevity */
    
    \`;
    
    export default CustomButton;
    `,
};
