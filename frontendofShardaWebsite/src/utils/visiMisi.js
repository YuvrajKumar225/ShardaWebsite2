import MisiMSN from "../assets/images/VisiMisiImg/misi.svg"
import LayananMSN from "../assets/images/VisiMisiImg/layanan.svg"
import VisiMSN from "../assets/images/VisiMisiImg/visi.svg"

const visionMission = [
    {
        id: 1,
        title: "Mission",
        icon: <img src={MisiMSN} alt="Mission - MSN PRODUCTION" />,
        description:
            "To become a reliable private company in providing services and trade in accordance with our KBLI (Indonesian Standard Industrial Classification).",
    },
    {
        id: 2,
        title: "Services",
        icon: <img src={LayananMSN} alt="Services - MSN PRODUCTION" />,
        description:
            "Gain consumer loyalty by providing them with memorable experiences through creating mutually beneficial relationships.",
    },
    {
        id: 3,
        title: "Vision",
        icon: <img src={VisiMSN} alt="Vision - MSN PRODUCTION" />,
        description:
            "In carrying out its tasks, Mulia Sejati Nusantara Production always maintains professionalism, honesty, togetherness, order, and occupational health to produce high-quality work.",
    },
];

export default visionMission;
