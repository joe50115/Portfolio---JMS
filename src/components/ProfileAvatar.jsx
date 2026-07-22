import { svgPlaceholder } from "../utils/placeholder.js";

// Placeholder avatar generated the same way project cover graphics are.
// Swap the <img src> below for a real photo (e.g. src="/avatar.jpg") once
// you have one — everything else on the page stays the same.
function ProfileAvatar({ label }) {
  const avatar = svgPlaceholder("profile-avatar", label, 240, 240);
  return <img className="avatar" src={avatar} alt="Profile placeholder" />;
}

export default ProfileAvatar;
