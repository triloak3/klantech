// Gallery data for Klantech Autosport
// Using placeholder images — replace with real club photos later
import CADbuggy from "../assets/CADbuggy.png"
import Welding from "../assets/Welding.jpeg"
import Cutting from "../assets/Cutting.jpeg"
import Grinding from "../assets/Grinding.jpeg"
import Buggy from "../assets/buggy.png"
import Sut1 from "../assets/Sut1.jpeg"
import S2 from "../assets/sutv.jpeg"
import Sa1 from "../assets/sutach1.jpeg"
//import Sa2 from "../assets/sutach2.png"
import S3 from "../assets/sutteam.jpeg"
import G1 from "../assets/garage.jpeg"
//import S4 from "../assets/sut2.png"

export const galleryData = [
  { id: 1, title: "Cutting", category: "Workshop", image: Cutting },
  { id: 2, title: "Buggy", category: "Projects", image: Buggy },
  { id: 3, title: "CAD Design of Buggy", category: "Projects", image: CADbuggy },
  { id: 4, title: "Suttur Visit", category: "Events", image: S2 },
  { id: 5, title: "Garage", category: "Workshop", image: G1 },
  { id: 6, title: "Fabrication Work", category: "Workshop", image: Grinding },
 // { id: 7, title: "Technical Expo", category: "Events", image: null },
  { id: 8, title: "Welding Practice", category: "Workshop", image: Welding },
  { id: 9, title: "Suttur Exhibition Team", category: "Team", image: S3 },
  { id: 10, title: "Award Ceremony", category: "Competition", image: Sa1 },
  { id: 11, title: "Suttur Visit", category: "Events", image: Sut1 },
 // { id: 12, title: "Project Showcase", category: "Projects", image: null },
];

export const galleryCategories = ["All", "Workshop", "Team", "Projects", "Competition", "Events"];
