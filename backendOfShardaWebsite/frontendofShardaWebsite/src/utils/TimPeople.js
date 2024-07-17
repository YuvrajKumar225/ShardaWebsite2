import Aldi from "../assets/images/People/Aldi.jpg"
import Dadang from "../assets/images/People/Dadang.jpg"
import Gilbert from "../assets/images/People/Gilbert.jpg"

const TeamMembers = [
    {
        id: 1,
        name: "Aldi Ramdani",
        icon: <img src={Aldi} alt="Aldi Ramdani - MSN PRODUCTION" />,
        role: "Mobile Developer",
    },
    {
        id: 2,
        name: "Dadang Darsono",
        icon: <img src={Dadang} alt="Dadang Darsono - MSN PRODUCTION" />,
        role: "Chief Executive Officer",
    },
    {
        id: 3,
        name: "Gilbert Hutapea",
        icon: <img src={Gilbert} alt="Gilbert Hutapea - MSN PRODUCTION" />,
        role: "Full Stack Developer",
    },
];

export default TeamMembers;
