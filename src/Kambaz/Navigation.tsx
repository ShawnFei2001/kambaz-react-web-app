import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const location = useLocation(); // Get current route to determine active link

  const navLinks = [
    { to: "/Kambaz/Account", id: "wd-account-link", icon: <FaRegCircleUser className="fs-1 text-white" />, label: "Account" },
    { to: "/Kambaz/Dashboard", id: "wd-dashboard-link", icon: <AiOutlineDashboard className="fs-1 text-danger" />, label: "Dashboard" },
    { to: "/Kambaz/Courses", id: "wd-course-link", icon: <LiaBookSolid className="fs-1 text-danger" />, label: "Courses" },
    { to: "/Kambaz/Calendar", id: "wd-calendar-link", icon: <IoCalendarOutline className="fs-1 text-danger" />, label: "Calendar" },
    { to: "/Kambaz/Inbox", id: "wd-inbox-link", icon: <FaInbox className="fs-1 text-danger" />, label: "Inbox" },
    { to: "/Labs", id: "wd-labs-link", icon: <LiaCogSolid className="fs-1 text-danger" />, label: "Labs" },
  ];

  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" />
      </a>

      {navLinks.map(({ to, id, icon, label }) => (
        <Link
          key={id}
          to={to}
          id={id}
          className={`list-group-item text-center border-0 ${
            location.pathname === to ? "bg-white text-danger" : "bg-black text-white"
          }`}
        >
          {icon}
          <div className="small">{label}</div>
        </Link>
      ))}
    </div>
  );
}
