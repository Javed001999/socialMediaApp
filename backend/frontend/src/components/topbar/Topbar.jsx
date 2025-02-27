// import "./topbar.css";
// import { Search} from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// export default function Topbar() {
//   const { user } = useContext(AuthContext);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   return (
//     <div className="topbarContainer">
//       <div className="topbarLeft">
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span className="logo">socialMediaApp</span>
//         </Link>
//       </div>
//       <div className="topbarCenter">
//         <div className="searchbar">
//           <Search className="searchIcon" />
//           <input
//             placeholder="Search for friend, post or video"
//             className="searchInput"
//           />
//         </div>
//       </div>
//       <div className="topbarRight">
//         <Link to={`/profile/${user.username}`}>
//           <img
//             src={
//               user.profilePicture
//                 ? PF + user.profilePicture
//                 : PF + "person/noAvatar.png"
//             }
//             alt="profile"
//             className="topbarImg"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// }

import "./topbar.css";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user, logout } = useContext(AuthContext); // Destructure logout function
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLogout = () => {
    logout(); // Call the logout function from context
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">socialMediaApp</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="profile"
            className="topbarImg"
          />
        </Link>
        <button onClick={handleLogout} className="logoutButton">
          Logout
        </button>
      </div>
    </div>
  );
}
