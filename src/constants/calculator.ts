export const structureTypes = [
    { 
      id: 'kayu', 
      label: 'Kayu', 
      image: '/images/calculator/kayu.jpg',
      imageStyle: 'object-cover'
    },
    { 
      id: 'baja', 
      label: 'Baja', 
      image: '/images/calculator/baja.jpg',
      imageStyle: 'object-cover'
    },
    { 
      id: 'tidak_yakin', 
      label: 'Saya tidak yakin', 
      image: '/images/calculator/tidakyakin.png',
      imageStyle: 'object-cover grayscale',
      showQuestionMark: true
    },
  ];
  
  export const roofTypes = [
    { 
      id: 'zyncallume', 
      label: 'Zyncallume', 
      image: '/images/calculator/roof/zyncallume.jpg',
      imageStyle: 'object-cover'
    },
    { 
      id: 'zyncallume_kliplock', 
      label: 'Zyncallume Kliplock', 
      image: '/images/calculator/roof/zyncallume-kliplock.jpg',
      imageStyle: 'object-cover'
    },
    { 
      id: 'spandek_upvc', 
      label: 'Spandek/UPVC', 
      image: '/images/calculator/roof/spandek.png',
      imageStyle: 'object-cover'
    },
    { 
      id: 'ballast_roof', 
      label: 'Ballast Roof', 
      image: '/images/calculator/roof/ballast-roof.jpeg',
      imageStyle: 'object-cover'
    },
    { 
      id: 'others', 
      label: 'Others', 
      image: '/images/calculator/roof/others.png',
      imageStyle: 'object-cover grayscale',
      showQuestionMark: true
    },
  ];
  
  interface RoofInfo {
    label: string;
    image: string;
    imageStyle: string;
    showQuestionMark?: boolean;
  }
  
  export const getRoofStructureInfo = (type: string): RoofInfo => {
    const structure = structureTypes.find(s => s.id === type);
    return structure || { label: type, image: '', imageStyle: 'object-cover', showQuestionMark: false };
  };
  
  export const getRoofTypeInfo = (type: string): RoofInfo => {
    const roofType = roofTypes.find(r => r.id === type);
    return roofType || { label: type, image: '', imageStyle: 'object-cover', showQuestionMark: false };
  };