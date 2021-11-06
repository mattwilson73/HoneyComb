import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <HomeIcon /> <AccountBoxIcon /> <CalendarTodayIcon /> <DriveFolderUploadIcon />
      </div>
      <p> &copy; 2021 honeycomb.edu</p>
    </div>
  );
}

export default Footer;
