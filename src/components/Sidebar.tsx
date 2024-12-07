import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const sidebarItems = [
  { text: "Components", href: "#" },
  { text: "Buttons", href: "#simple-list" },
  { text: "Cards", href: "#simple-list" },
];

export const Sidebar = () => (
  <Box
    bgcolor="#106f73"
    height="calc(100% - 3px)"
    borderRadius="0 10px 0 0"
    width={{ xs: "50%", sm: "35%", md: "20%", lg: "18%", xl: "12%" }}
    sx={{ transform: "translate(3px, 3px)" }}
  >
    <List>
      {sidebarItems.map(({ text, href }) => (
        <ListItem
          key={text}
          sx={{ color: "#b8e3e6", "&:hover": { backgroundColor: "#0c6366" } }}
          disablePadding
        >
          <ListItemButton component="a" href={href}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);
