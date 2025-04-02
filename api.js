import kuma from "./src/assets/kuma.jpg";
import john from "./src/assets/john.png";
import himalayan from "./src/assets/himalayan.jpeg";
import nepalart from "./src/assets/nepalart.jpeg";
import everest from "./src/assets/everest.jpeg";

const events = [
  {
    id: 1,
    name: "Nepali Concert - Kuma Sagar",
    image: kuma,
    price: 1500,
    date: "2025-04-10",
    location: "Kathmandu, Nepal",
    artists: ["Kuma Sagar", "Swapnil Sharma"],
    category: "Live",
    ticket_available: true,
  },
  {
    id: 2,
    name: "John Chamling - Live Concert",
    image: john,
    price: 2000,
    date: "2025-05-20",
    location: "Pokhara, Nepal",
    artists: ["John Chamling Ray"],
    category: "Live",
    ticket_available: true,
  },
  {
    id: 3,
    name: "Himalayan Beats Festival",
    image: himalayan,
    price: 2500,
    date: "2025-06-15",
    location: "Bhaktapur, Nepal",
    artists: ["Various Artists"],
    category: "Live",
    ticket_available: false,
  },
  {
    id: 4,
    name: "Everest Marathon 2025",
    image: everest,
    price: 5000,
    date: "2025-08-10",
    location: "Solukhumbu, Nepal",
    artists: [],
    category: "Sports",
    ticket_available: true,
  },
  {
    id: 5,
    name: "Nepal Art & Theater Expo",
    image: nepalart,
    price: 800,
    date: "2025-09-05",
    location: "Kathmandu, Nepal",
    artists: ["Various Artists"],
    category: "Art & Theater",
    ticket_available: true,
  },
];

export default events;
