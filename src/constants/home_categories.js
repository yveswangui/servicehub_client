import {
  Camera,
  Banknote,
  CloudLightning,
  PiggyBank,
  Clock,
  ScanBarcode,
  FlaskConical,
  PawPrint,
  PartyPopper,
  Cable,
  Hammer,
  PaintBucket,
  LandPlot,
} from "lucide-react";

export const categories = [
  "Cleaning",
  "Repair",
  "Lawning",
  "Electronics",
  "Construction",
];

export const popularServices = [
  {
    name: "Transport",
    bgColor: "blue",
    imageSrc: "./transport.jpg",
    hoverContent:
      "Get the best transport services from our best service providers",
  },
  {
    name: "House cleaning",
    bgColor: "violet",
    imageSrc: "./house_cleaning.jpg",
    hoverContent: "You house sparkling clean in no time",
  },
  {
    name: "Photography",
    bgColor: "default",
    imageSrc: "./photography.jpg",
    hoverContent: "Capture memories with our best photographers, best in town",
  },
  {
    name: "Events",
    bgColor: "yellow",
    imageSrc: "./events.jpg",
    hoverContent: "Let our event organizers save you the hustle of planning",
  },
  {
    name: "Phone repair",
    bgColor: "pink",
    imageSrc: "./phone_repair.jpg",
    hoverContent:
      "Have your phone repaired by the best phone repairers in town",
  },
  {
    name: "Metal work",
    bgColor: "orange",
    imageSrc: "./metal_work.jpg",
    hoverContent: "You need any handy work done? We are the best in town",
  },
];

export const talentAtYourFingerTips = [
  {
    title: "Over 700 Categories",
    description:
      "Get results from skilled freelancers from all over the world, for every task, at any price point.",
    icon: Camera,
  },
  {
    title: "Quality work done faster",
    description:
      "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
    icon: CloudLightning,
  },
  {
    title: "Clear, upfront pricing",
    description:
      "No hourly rates, just project-based pricing. Payments only get released when you approve.",
    icon: Banknote,
  },
];

export const reviewsContent = [
  {
    reviewerName: "Smith Kare",
    content:
      "Provides one of the best service in the planet, i promise that you will not regret consulting one of their service providers",
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    reviewerName: "Brian Odhiambo",
    content:
      "Provides one of the best service in the planet, i promise that you will not regret consulting one of their service providers",
    imageUrl: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    reviewerName: "Johnstone Kirui",
    content:
      "Provides one of the best service in the planet, i promise that you will not regret consulting one of their service providers",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    reviewerName: "Morara Sun Tzu",
    content:
      "Provides one of the best service in the planet, i promise that you will not regret consulting one of their service providers",
    imageUrl: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    reviewerName: "Mary Leaky Cauldron",
    content:
      "Provides one of the best service in the planet, i promise that you will not regret consulting one of their service providers",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    reviewerName: "Maria Db",
    content:
      "Provides one of the best service in the planet, i promise that you will not regret consulting one of their service providers",
    imageUrl: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

export const howTrustIsBuilt = [
  {
    icon: PiggyBank,
    description:
      "Payment is done through the platform. No other charges incurred.",
  },
  {
    icon: ScanBarcode,
    description: "Manual verification is done for all service providers",
  },
  {
    icon: Clock,
    description: "Time is saved. They are just one click away",
  },
];

export const serviceCategories = [
  {
    title: "Cleaning",
    Icon: PaintBucket,
  },
  {
    title: "Repair",
    Icon: Hammer,
  },
  {
    title: "Lawning",
    Icon: LandPlot,
  },
  {
    title: "Electronics",
    Icon: Cable,
  },
  {
    title: "Events",
    Icon: PartyPopper,
  },
  {
    title: "Scaping",
    Icon: FlaskConical,
  },
  {
    title: "Animal Wash",
    Icon: PawPrint,
  },
];

export const serviceList = [
  {
    title: "Repair Services",
    items: [
      {
        id: "1",
        providerName: "Elsa Jones",
        serviceName: "House Cleaning",
        description:
          "SparkleClean Housekeeping offers thorough and reliable house cleaning services tailored to your needs. From regular upkeep to deep cleaning sessions, our professional cleaners ensure your home is spotless and welcoming. We use eco-friendly products to keep your home safe and healthy.",
        amount: "KES 10,000",
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        coverUrl: "../events.jpg",
        rating: 4.5,
      },
      {
        id: "2",
        providerName: "Hilda Jane",
        serviceName: "Mobile Phone Repair",
        description:
          " FixIt Mobile Repairs provides quick and reliable repair services for smartphones, tablets, and other mobile devices. Our certified technicians handle screen replacements, battery issues, software troubleshooting, and more, ensuring your devices are back in working order swiftly.",
        amount: "KES 1,400",
        avatarUrl: "https://randomuser.me/api/portraits/women/56.jpg",
        coverUrl: "../house_cleaning.jpg",
        rating: 3,
      },
      {
        id: "3",
        providerName: "Joseph Omollo",
        serviceName: "Home repairs",
        description:
          "HandyHome Repairs offers a wide range of handyman services for all your household maintenance needs. Whether it's fixing leaky faucets, repairing drywall, or assembling furniture, our skilled professionals ensure quality work and customer satisfaction.",
        amount: "KES 7,800",
        avatarUrl: "https://randomuser.me/api/portraits/men/13.jpg",
        coverUrl: "../metal_work.jpg",
        rating: 2,
      },
      {
        id: "4",
        providerName: "Elbiver Tala",
        serviceName: "Laundry",
        description:
          "FreshStart Laundry Services takes the hassle out of laundry day with our convenient pick-up and delivery service. We handle washing, drying, folding, and ironing, using premium detergents and care for your clothes to ensure they look and feel their best.",
        amount: "KES 138",
        avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg",
        coverUrl: "../phone_repair.jpg",
        rating: 1,
      },
      {
        id: "5",
        providerName: "Jakonyango",
        serviceName: "Computer repairs",
        description:
          "TechieHome Computer Services offers in-home computer repair and IT support. Our experts handle hardware repairs, software installations, virus removal, network setup, and more, ensuring your home technology runs smoothly and efficiently.",
        amount: "KES 8,200",
        avatarUrl: "https://randomuser.me/api/portraits/women/34.jpg",
        coverUrl: "../photography.jpg",
        rating: 5,
      },
      {
        id: "6",
        providerName: "Elijah Kyut boy",
        serviceName: "Landscaping",
        description:
          "GreenThumb Landscaping provides professional gardening and landscaping services to enhance the beauty of your outdoor space. From lawn care and planting to custom garden designs and maintenance, our team brings your vision to life with meticulous attention to detail.",
        amount: "KES 4,500",
        avatarUrl: "https://randomuser.me/api/portraits/men/52.jpg",
        coverUrl: "../transport.jpg",
        rating: 4,
      },
    ],
  },
  {
    title: "Cleaning Services",
    items: [
      {
        id: "7",
        providerName: "Red Red",
        serviceName: "Electrical repairs",
        description:
          "BrightSpark Electrical Services delivers expert electrical solutions for your home. From wiring and lighting installations to electrical repairs and safety inspections, our certified electricians ensure your electrical systems are safe and efficient.",
        amount: "KES 6,933",
        avatarUrl: "https://randomuser.me/api/portraits/women/18.jpg",
        coverUrl: "../work1.jpg",
        rating: 1,
      },
      {
        id: "8",
        providerName: "Brian Obegi",
        serviceName: "Locksmithing",
        description:
          "SecureLock Locksmiths offers reliable locksmith services for your home. Our services include emergency lockouts, lock repairs and replacements, key cutting, and security system installations, ensuring your home remains secure and accessible.",
        amount: "KES 3,099",
        avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
        coverUrl: "../work2.jpg",
        rating: 5,
      },
      {
        id: "9",
        providerName: "Jane Jones",
        serviceName: "HVAC Cleaning",
        description:
          "CleanAir HVAC Services provides comprehensive heating, ventilation, and air conditioning solutions. Our services include system installations, repairs, maintenance, and air quality testing, ensuring your home remains comfortable year-round.",
        amount: "KES 30,400",
        avatarUrl: "https://randomuser.me/api/portraits/men/17.jpg",
        coverUrl: "../work3.jpg",
        rating: 5,
      },
      {
        id: "10",
        providerName: "Charity Riusiri",
        serviceName: "Fabrication and Repair",
        description:
          "MetalMaster Fabrication offers custom metalwork services for home projects. Our skilled craftsmen create bespoke metal fixtures, railings, gates, and furniture with precision and quality, adding a unique touch to your home decor and functional needs.",
        amount: "KES 7,500",
        avatarUrl: "https://randomuser.me/api/portraits/women/25.jpg",
        coverUrl: "../work4.jpg",
        rating: 3,
      },
      {
        id: "11",
        providerName: "Otieno otieno",
        serviceName: "Plumbing",
        description:
          "ProPlumb Plumbing Services provides expert plumbing solutions for your home. Our services include leak repairs, pipe installations, drain cleaning, water heater maintenance, and emergency plumbing support, ensuring your plumbing system functions flawlessly.",
        amount: "KES 2,300",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        coverUrl: "../work5.jpg",
        rating: 2,
      },
    ],
  },
  {
    title: "Animal wash Services",
    items: [
      {
        id: "12",
        providerName: "Jackson Mitch",
        serviceName: "Electrical repairs",
        description:
          "BrightSpark Electrical Services delivers expert electrical solutions for your home. From wiring and lighting installations to electrical repairs and safety inspections, our certified electricians ensure your electrical systems are safe and efficient.",
        amount: "KES 6,933",
        avatarUrl: "https://randomuser.me/api/portraits/women/19.jpg",
        coverUrl: "../house_cleaning.jpg",
        rating: 1,
      },
      {
        id: "13",
        providerName: "Simon Nyaira",
        serviceName: "Locksmithing",
        description:
          "SecureLock Locksmiths offers reliable locksmith services for your home. Our services include emergency lockouts, lock repairs and replacements, key cutting, and security system installations, ensuring your home remains secure and accessible.",
        amount: "KES 3,099",
        avatarUrl: "https://randomuser.me/api/portraits/women/11.jpg",
        coverUrl: "../transport.jpg",
        rating: 5,
      },
      {
        id: "14",
        providerName: "Milline Ryce",
        serviceName: "HVAC Cleaning",
        description:
          "CleanAir HVAC Services provides comprehensive heating, ventilation, and air conditioning solutions. Our services include system installations, repairs, maintenance, and air quality testing, ensuring your home remains comfortable year-round.",
        amount: "KES 30,400",
        avatarUrl: "https://randomuser.me/api/portraits/men/14.jpg",
        coverUrl: "../work1.jpg",
        rating: 5,
      },
      {
        id: "15",
        providerName: "Hopekins Nderitu",
        serviceName: "Fabrication and Repair",
        description:
          "MetalMaster Fabrication offers custom metalwork services for home projects. Our skilled craftsmen create bespoke metal fixtures, railings, gates, and furniture with precision and quality, adding a unique touch to your home decor and functional needs.",
        amount: "KES 7,500",
        avatarUrl: "https://randomuser.me/api/portraits/women/13.jpg",
        coverUrl: "../phone_repair.jpg",
        rating: 3,
      },
      {
        id: "16",
        providerName: "Japheth Muchiri",
        serviceName: "Plumbing",
        description:
          "ProPlumb Plumbing Services provides expert plumbing solutions for your home. Our services include leak repairs, pipe installations, drain cleaning, water heater maintenance, and emergency plumbing support, ensuring your plumbing system functions flawlessly.",
        amount: "KES 2,300",
        avatarUrl: "https://randomuser.me/api/portraits/men/76.jpg",
        coverUrl: "../work4.jpg",
        rating: 2,
      },
      {
        id: "17",
        providerName: "Erick Obila",
        serviceName: "Plumbing",
        description:
          "ProPlumb Plumbing Services provides expert plumbing solutions for your home. Our services include leak repairs, pipe installations, drain cleaning, water heater maintenance, and emergency plumbing support, ensuring your plumbing system functions flawlessly.",
        amount: "KES 2,300",
        avatarUrl: "https://randomuser.me/api/portraits/men/75.jpg",
        coverUrl: "../work5.jpg",
        rating: 2,
      },
      {
        id: "18",
        providerName: "Elton John",
        serviceName: "Plumbing",
        description:
          "ProPlumb Plumbing Services provides expert plumbing solutions for your home. Our services include leak repairs, pipe installations, drain cleaning, water heater maintenance, and emergency plumbing support, ensuring your plumbing system functions flawlessly.",
        amount: "KES 2,300",
        avatarUrl: "https://randomuser.me/api/portraits/men/76.jpg",
        coverUrl: "../house_cleaning.jpg",
        rating: 2,
      },
    ],
  },
  {
    title: "Events Services",
    items: [
      {
        id: "19",
        providerName: "Kerubo Peggs",
        serviceName: "Electrical repairs",
        description:
          "BrightSpark Electrical Services delivers expert electrical solutions for your home. From wiring and lighting installations to electrical repairs and safety inspections, our certified electricians ensure your electrical systems are safe and efficient.",
        amount: "KES 6,933",
        avatarUrl: "https://randomuser.me/api/portraits/women/10.jpg",
        coverUrl: "../work5.jpg",
        rating: 1,
      },
      {
        id: "20",
        providerName: "Jeniffer Atis",
        serviceName: "Locksmithing",
        description:
          "SecureLock Locksmiths offers reliable locksmith services for your home. Our services include emergency lockouts, lock repairs and replacements, key cutting, and security system installations, ensuring your home remains secure and accessible.",
        amount: "KES 3,099",
        avatarUrl: "https://randomuser.me/api/portraits/women/63.jpg",
        coverUrl: "../work4.jpg",
        rating: 5,
      },
      {
        id: "21",
        providerName: "A Tie No",
        serviceName: "HVAC Cleaning",
        description:
          "CleanAir HVAC Services provides comprehensive heating, ventilation, and air conditioning solutions. Our services include system installations, repairs, maintenance, and air quality testing, ensuring your home remains comfortable year-round.",
        amount: "KES 30,400",
        avatarUrl: "https://randomuser.me/api/portraits/men/61.jpg",
        coverUrl: "../work2.jpg",
        rating: 5,
      },
      {
        id: "22",
        providerName: "Zannelle",
        serviceName: "Fabrication and Repair",
        description:
          "MetalMaster Fabrication offers custom metalwork services for home projects. Our skilled craftsmen create bespoke metal fixtures, railings, gates, and furniture with precision and quality, adding a unique touch to your home decor and functional needs.",
        amount: "KES 7,500",
        avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        coverUrl: "../work1.jpg",
        rating: 3,
      },
      {
        id: "23",
        providerName: "Henga Mike",
        serviceName: "Plumbing",
        description:
          "ProPlumb Plumbing Services provides expert plumbing solutions for your home. Our services include leak repairs, pipe installations, drain cleaning, water heater maintenance, and emergency plumbing support, ensuring your plumbing system functions flawlessly.",
        amount: "KES 2,300",
        avatarUrl: "https://randomuser.me/api/portraits/men/18.jpg",
        coverUrl: "../work3.jpg",
        rating: 2,
      },
      {
        id: "24",
        providerName: "Punyeto",
        serviceName: "Plumbing",
        description:
          "ProPlumb Plumbing Services provides expert plumbing solutions for your home. Our services include leak repairs, pipe installations, drain cleaning, water heater maintenance, and emergency plumbing support, ensuring your plumbing system functions flawlessly.",
        amount: "KES 2,300",
        avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
        coverUrl: "../work5.jpg",
        rating: 2,
      },
      {
        id: "25",
        providerName: "Harry Potter",
        serviceName: "Plumbing",
        description:
          "ProPlumb Plumbing Services provides expert plumbing solutions for your home. Our services include leak repairs, pipe installations, drain cleaning, water heater maintenance, and emergency plumbing support, ensuring your plumbing system functions flawlessly.",
        amount: "KES 2,300",
        avatarUrl: "https://randomuser.me/api/portraits/men/19.jpg",
        coverUrl: "../work5.jpg",
        rating: 2,
      },
    ],
  },
];

export const slideImages = [
  {
    image: "work1.jpg",
    title: "Hiring should be stress free",
    description:
      "Forget about insecurities when hiring or looking for work. Security is enhanced here.",
  },
  {
    image: "work2.jpg",
    title: "Get the best service",
    description:
      "Get the best service from the best service providers in the world.",
  },
  {
    image: "work3.jpg",
    title: "Fast and reliable",
    description:
      "Get fast and reliable service from the best service providers in the world.",
  },
  {
    image: "work4.jpg",
    title: "Over 6,000 successfully served clients",
    description:
      "We have been able to serve over 6,000 clients successfully. We are the best in the market.",
  },
  {
    image: "work5.jpg",
    title: "24/7 support",
    description:
      "We offer 24/7 support to our clients. We are always available to serve you.",
  },
];
