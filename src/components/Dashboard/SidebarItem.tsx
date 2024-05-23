import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item }: any) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                // color: "red",
                border: "1px solid red",
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemText
            primary={item.title}
          />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
