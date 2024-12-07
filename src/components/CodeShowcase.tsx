import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Tabs, Tab, Typography, Paper } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RegisterButton from "./RegisterButton";

interface CodeShowcaseProps {
  title: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  MUI: string;
}

const CodeShowcase: React.FC<CodeShowcaseProps> = ({
  title,
  htmlCode,
  cssCode,
  jsCode,
  MUI,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const codeSnippets = [
    {
      label: "HTML",
      language: "html",
      code: htmlCode === "" ? "No Code Available" : htmlCode,
    },
    {
      label: "CSS",
      language: "css",
      code: cssCode === "" ? "No Code Available" : cssCode,
    },
    {
      label: "JavaScript",
      language: "javascript",
      code: jsCode === "" ? "No Code Available" : jsCode,
    },
    {
      label: "MUI",
      language: "typescript",
      code: MUI === "" ? "No Code Available" : MUI,
    },
  ];

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippets[activeTab].code);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(null), 2000); // Reset status after 2 seconds
    } catch (err) {
      setCopyStatus("Failed to copy!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        mt: "3px",
        mx: "auto",
        transform: "translateX(2px)",
        width: { xs: "49%", sm: "64%", md: "79%", lg: "81%", xl: "87.4%" },
      }}
    >
      {/* Component Preview */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "50%",
          borderRadius: 2,
          backgroundColor: "#eefbfc",
        }}
      >
        <Typography color="#106f73" variant="h6" mb={2}>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 1,
            background: "#f9f9f9",
          }}
        >
          {MUI ? (
            <RegisterButton />
          ) : (
            <>
              <style>{cssCode}</style>
              <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
            </>
          )}
        </Box>
      </Paper>

      {/* Code Tabs */}
      <Box
        id={"code-container"}
        sx={{
          width: "50%",
          backgroundColor: "#05161a",
          borderRadius: "10px",
          position: "relative",
          overflow: "auto",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": {
              color: "#b8e3e6", // Replace with your custom color
              "&.Mui-selected": {
                color: "white", // Replace with your selected color
                background: "#112b25",
              },
            },
          }}
        >
          {codeSnippets.map((snippet, index) => (
            <Tab key={index} label={snippet.label} />
          ))}
        </Tabs>
        <Box sx={{ mt: 2, mx: 3 }}>
          <Box>
            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"end"}
              sx={{
                transition: "all ease-in-out 0.2s",
                transform: "translateY(5px)",
                position: "sticky",
                top: 2,
                paddingRight: "10px",
              }}
            >
              <Button
                startIcon={<ContentCopyIcon />}
                onClick={handleCopyCode}
                sx={{
                  transition: "all ease-in 0.1s",
                  fontSize: "12px",
                  height: "30px",
                  width: "90px",
                  backgroundColor: "rgba(105, 105, 105, 0.5)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#294d61",
                  },
                }}
              >
                {copyStatus || "Copy"}
              </Button>
            </Box>
            <SyntaxHighlighter
              id={"syntax-highlighter"}
              language={codeSnippets[activeTab].language}
              style={dracula} // Dark theme
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem",
                padding: "16px",
                minHeight: "60px",
                // transform: "translateY(-34px)",
                marginTop: "-28px",
              }}
            >
              {codeSnippets[activeTab].code}
            </SyntaxHighlighter>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeShowcase;
