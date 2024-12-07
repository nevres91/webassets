import { Box } from "@mui/material";
import { Sidebar } from "./Sidebar";
import CodeShowcase from "./CodeShowcase";
import { registerButton } from "../assets/Code";

export const LandingPage = () => {
  return (
    <>
      <Box
        display={"flex"}
        bgcolor={"#94d9ff"}
        // bgcolor={"#6da5c0"}
        marginTop={"70px"}
        width={"100%"}
        height={"calc(100vh - 70px)"}
      >
        <Sidebar />
        {/* <CodeShowcase /> */}
        {/* <CodeShowcase
          title={buttonCode.title}
          htmlCode={buttonCode.HTMLCode ? buttonCode.HTMLCode : ""}
          cssCode={buttonCode.CSSCode ? buttonCode.CSSCode : ""}
          jsCode={buttonCode.jsCode ? buttonCode.jsCode : ""}
          MUI={""}
        /> */}
        <CodeShowcase
          title={registerButton.title}
          htmlCode={""}
          cssCode={""}
          jsCode={""}
          MUI={registerButton.MUI ? registerButton.MUI : ""}
        />
      </Box>
    </>
  );
};
