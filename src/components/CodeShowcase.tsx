import React, { useState } from "react";
import { Box, Button, Tabs, Tab, Typography, Paper } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface CodeShowcaseProps {
  title: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

const CodeShowcase: React.FC<CodeShowcaseProps> = ({
  title,
  htmlCode,
  cssCode,
  jsCode,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const codeSnippets = [
    { label: "HTML", language: "html", code: htmlCode },
    { label: "CSS", language: "css", code: cssCode },
    { label: "JavaScript", language: "javascript", code: jsCode },
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
          <style>{cssCode}</style>
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </Box>
      </Paper>

      {/* Code Tabs */}
      <Box
        sx={{
          width: "50%",
          backgroundColor: "#05161a",
          borderRadius: "10px",
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
              },
            },
          }}
        >
          {codeSnippets.map((snippet, index) => (
            <Tab key={index} label={snippet.label} />
          ))}
        </Tabs>
        <Box sx={{ mt: 2, mx: 3 }}>
          <SyntaxHighlighter
            language={codeSnippets[activeTab].language}
            style={dracula} // Dark theme
            customStyle={{
              borderRadius: "8px",
              fontSize: "0.9rem",
              padding: "16px",
            }}
          >
            {codeSnippets[activeTab].code}
          </SyntaxHighlighter>
          <Button
            startIcon={<ContentCopyIcon />}
            onClick={handleCopyCode}
            sx={{
              fontSize: "12px",
              height: "30px",
              width: "90px",
              position: "absolute",
              top: 70,
              right: 30,
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
      </Box>
    </Box>
  );
};

export default CodeShowcase;