import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setDownloadComplete(false);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/uc?export=download&id=1XRF365FSinLAtsRFKYsKea4vFANSFIVh"; // Replace with your actual Google Drive File ID
      link.setAttribute("download", "My_Academic_Report.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
      setDownloadComplete(true);

      // Reset back to default after 3 seconds
      setTimeout(() => {
        setDownloadComplete(false);
      }, 3000);
    }, 2000); // Simulating download time
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: downloading ? 0.95 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="contained"
        startIcon={
          downloading ? (
            <CircularProgress size={20} sx={{ color: "white" }} />
          ) : downloadComplete ? (
            <CheckCircleIcon />
          ) : (
            <CloudDownloadIcon />
          )
        }
        onClick={handleDownload}
        sx={{
          background: downloadComplete
            ? "linear-gradient(90deg, #28a745 0%, #218838 100%)"
            : "linear-gradient(90deg, #4A90E2 0%, #007AFF 100%)",
          color: "#fff",
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: "bold",
          boxShadow: "0px 5px 15px rgba(0, 122, 255, 0.3)",
          transition: "0.3s ease-in-out",
          "&:hover": {
            background: downloadComplete
              ? "linear-gradient(90deg, #218838 0%, #28a745 100%)"
              : "linear-gradient(90deg, #007AFF 0%, #4A90E2 100%)",
            boxShadow: "0px 7px 20px rgba(0, 122, 255, 0.5)",
          },
        }}
        disabled={downloading}
      >
        {downloadComplete ? "Download Complete" : "Resume"}
      </Button>
    </motion.div>
  );
};

export default DownloadButton;
