

type Destination = {
    id: number;
    image: string;
    title: string;
    description: string;
    location: string;
    price: number;
    activities: string[];
  };
  

export const destinations: Destination[] = [
    {
      id: 1,
      image: "/assets/imgTour1+5.jpg",
      title: "Séoul City Tour",
      description: "Découvrez la capitale sud-coréenne à travers ses quartiers emblématiques et son riche patrimoine culturel",
      location: "Séoul, Corée du Sud",
      price: 299,
      activities: [
        "Visite du Palais Gyeongbokgung",
        "Balade dans le quartier traditionnel de Bukchon", 
        "Shopping à Myeongdong",
        "Découverte du marché de Gwangjang",
        "Tour Seoul Sky à Lotte World Tower"
      ]
    },
    {
      id: 2,
      image: "/assets/imgTour2+6.jpg", 
      title: "Busan Discovery Tour",
      description: "Explorez la deuxième plus grande ville de Corée du Sud, entre plages et temples",
      location: "Busan, Corée du Sud",
      price: 249,
      activities: [
        "Visite du Temple Haedong Yonggungsa",
        "Plage de Haeundae",
        "Marché aux poissons de Jagalchi",
        "Village culturel de Gamcheon",
        "BIFF Square et rue commerçante"
      ]
    },
    {
      id: 3,
      image: "/assets/imgTour3.jpg",
      title: "Jeju Island Adventure",
      description: "Découvrez l'île volcanique de Jeju et ses paysages à couper le souffle",
      location: "Jeju, Corée du Sud",
      price: 349,
      activities: [
        "Randonnée au Mont Hallasan",
        "Cascades de Cheonjeyeon",
        "Plage de Hyeopjae",
        "Parc national de Seongsan Ilchulbong",
        "Grotte de Manjanggul"
      ]
    },
    {
      id: 4,
      image: "/assets/imgTour4+8.jpg",
      title: "Gyeongju Historical Tour",
      description: "Plongez dans l'histoire millénaire de l'ancienne capitale du royaume de Silla",
      location: "Gyeongju, Corée du Sud",
      price: 199,
      activities: [
        "Temple Bulguksa",
        "Grotte de Seokguram",
        "Parc des Tumuli",
        "Étang Anapji",
        "Observatoire de Cheomseongdae"
      ]
    },
    {
      id: 5,
      image: "/assets/imgTour1+5.jpg",
      title: "Jeonju Cultural Experience",
      description: "Immergez-vous dans la culture traditionnelle coréenne à Jeonju",
      location: "Jeonju, Corée du Sud",
      price: 179,
      activities: [
        "Village traditionnel de Hanok",
        "Cours de cuisine de Bibimbap",
        "Musée du Hanji",
        "Temple Gyeonggijeon",
        "Dégustation de makgeolli"
      ]
    },
    {
      id: 6,
      image: "/assets/imgTour2+6.jpg",
      title: "Seoraksan Nature Tour",
      description: "Explorez l'un des plus beaux parcs nationaux de Corée du Sud",
      location: "Sokcho, Corée du Sud",
      price: 229,
      activities: [
        "Randonnée dans le parc national",
        "Temple Sinheungsa",
        "Téléphérique de Seorak",
        "Sources chaudes de Osaek",
        "Cascade de Biryong"
      ]
    },
    {
      id: 7,
      image: "/assets/imgTour7.jpg",
      title: "Andong Heritage Tour",
      description: "Découvrez le berceau de la culture confucéenne coréenne",
      location: "Andong, Corée du Sud",
      price: 189,
      activities: [
        "Village de Hahoe",
        "Musée des masques",
        "Temple Bongjeongsa",
        "Marché Andong Jungang",
        "Dégustation de soju traditionnel"
      ]
    },
    {
      id: 8,
      image: "/assets/imgTour4+8.jpg",
      title: "Daegu City Experience",
      description: "Explorez la ville dynamique de Daegu et sa culture moderne",
      location: "Daegu, Corée du Sud",
      price: 169,
      activities: [
        "Marché de Seomun",
        "Rue de la médecine orientale",
        "Arboretum de Daegu",
        "Rue de la mode de Dongseongno",
        "Mont Palgongsan"
      ]
    }
  ];

export const dataTours = destinations;