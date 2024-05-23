export const drawerItems = (role: any): any => {
  const roleMenus: any = [];

  switch (role) {
    case "admin":
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
        }
      );
      break;

    case "user":
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "Change Password",
          path: `${role}/changePassword`,
        },
        {
          title: "My Donation Request",
          path: `${role}/myDonationRequest`,
        },
        {
          title: "Donation Request For Me",
          path: `${role}/donationRequestForMe`,
        },
      );
      break;
    default:
      break;
  }

  return [...roleMenus];
};
