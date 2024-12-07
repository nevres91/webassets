import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import {
  Card,
  CardContent,
  Button,
  Box,
  Tabs,
  Tab,
  Typography,
  Grid,
} from "@mui/material";
import "prismjs/themes/prism-okaidia.css"; // Prism theme for syntax highlighting
import "prismjs/components/prism-core.min.js"; // Import the core Prism.js
import "prismjs/components/prism-markup.min.js"; // HTML
import "prismjs/components/prism-css.min.js"; // CSS
import "prismjs/components/prism-javascript.min.js"; // JavaScript
import "prismjs/components/prism-typescript.min.js"; // TypeScript (if needed)

interface CodeBlockProps {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ htmlCode, cssCode, jsCode }) => {
  const [copied, setCopied] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0); // Track selected tab

  // Syntax highlighting for the code
  useEffect(() => {
    // Ensures Prism highlights the code after rendering
    Prism.highlightAll();
  }, [htmlCode, cssCode, jsCode]); // Run after the code has changed

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleCopy = async () => {
    let codeToCopy = "";
    if (selectedTab === 0) {
      codeToCopy = htmlCode;
    } else if (selectedTab === 1) {
      codeToCopy = cssCode;
    } else {
      codeToCopy = jsCode;
    }

    try {
      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copy state after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Grid container spacing={3} sx={{ marginTop: 3 }}>
      {/* Result Section */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{ backgroundColor: "#f7f7f7", borderRadius: 2, boxShadow: 3 }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ marginBottom: 1 }}
            >
              Result
            </Typography>
            {/* Render the HTML code here */}
            <Box sx={{ border: "1px solid #ddd", padding: 2, borderRadius: 2 }}>
              <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Code Section */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{ backgroundColor: "#1e1e2f", borderRadius: 2, boxShadow: 3 }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ marginBottom: 1 }}
            >
              Code
            </Typography>

            {/* Tab Navigation */}
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="code tabs"
            >
              <Tab label="HTML" />
              <Tab label="CSS" />
              <Tab label="JavaScript" />
            </Tabs>

            {/* Display the code based on selected tab */}
            <Box sx={{ marginTop: 2 }}>
              {selectedTab === 0 && (
                <pre className="language-markup">
                  <code>{htmlCode}</code>
                </pre>
              )}
              {selectedTab === 1 && (
                <pre className="language-css">
                  <code>{cssCode}</code>
                </pre>
              )}
              {selectedTab === 2 && (
                <pre className="language-javascript">
                  <code>{jsCode}</code>
                </pre>
              )}
            </Box>

            {/* Copy Button */}
            <Button
              variant="contained"
              color={copied ? "success" : "primary"}
              onClick={handleCopy}
              sx={{ marginTop: 1 }}
            >
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CodeBlock;
