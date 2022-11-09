import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import WorkIcon from '@mui/icons-material/Work';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import DashboardIcon from '@mui/icons-material/Dashboard';


export const routes = [
  {
    title: "Dashboard",
    link: "/",
    icon: <DashboardIcon />
  },
  {
    title: "My Job Posts",
    link: "/job-posts",
    icon:<WorkIcon />
  },
  {
    title: "Create Job Post",
    link: "/new-job-post",
    icon: <CreateIcon />
  },
  {
    title: "Offers",
    link: "/offers",
    icon: <LocalOfferOutlinedIcon />
  },
  {
    title: "My Profile",
    link: "/profile",
    icon: <AccountCircleIcon />
  },
  {
    title: "My Company",
    link: "/company-profile",
    icon: <BusinessCenterIcon />
  },
  
]