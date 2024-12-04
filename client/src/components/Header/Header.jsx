import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const navItems = [
  { name: "Home", path: "/", icon: <span className="material-icons">house</span> }, 
  { name: "Notes", path: "/notes", icon: <span className="material-icons">sticky_note_2</span> }, 
  { name: "Todos", path: "/todos", icon: <span className="material-icons">check_circle_outline</span> }, 
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "#212121", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", color: "#FFF" }}>
            React
          </Typography>


          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
            {navItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color: "#FFF",
                    fontWeight: "bold",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#FF5733", 
                    },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon} 
                  <span style={{ marginLeft: "8px" }}>{item.name}</span> 
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <Button
              onClick={handleDrawerToggle}
              sx={{
                color: "#FFF",
                fontSize: "24px",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "rotate(90deg)",
                  color: "#FF5733",
                },
              }}
            >
              &#9776;
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Box
          component="div"
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            top: "0",
            left: mobileOpen ? "0" : "-100%",
            width: "100%",
            height: "100vh",
            backgroundColor: "#212121",
            transition: "left 0.3s ease",
            zIndex: 1300, 
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            {navItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                style={{
                  textDecoration: "none",
                  margin: "15px 0",
                }}
              >
                <Button
                  sx={{
                    color: "#FFF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#FF5733", 
                    },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon} 
                  <span style={{ marginLeft: "8px" }}>{item.name}</span>
                </Button>
              </NavLink>
            ))}
          </Box>
        </Box>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;