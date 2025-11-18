export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  image: string;
  features: string[];
  featuresAr: string[];
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'PVC Pipes',
    nameAr: 'أنابيب PVC',
    description: 'High-quality PVC pipes for plumbing and irrigation systems. Available in various diameters and lengths.',
    descriptionAr: 'أنابيب PVC عالية الجودة لأنظمة السباكة والري. متوفرة بأقطار وأطوال مختلفة.',
    category: 'Plumbing',
    categoryAr: 'السباكة',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
    features: ['Durable', 'Corrosion Resistant', 'Easy Installation', 'Long Lifespan'],
    featuresAr: ['متين', 'مقاوم للتآكل', 'سهل التركيب', 'عمر طويل']
  },
  {
    id: '2',
    name: 'Sanitary Fittings',
    nameAr: 'تركيبات صحية',
    description: 'Complete range of sanitary fittings including faucets, valves, and connectors. Premium quality materials.',
    descriptionAr: 'مجموعة كاملة من التركيبات الصحية بما في ذلك الحنفيات والصمامات والموصلات. مواد عالية الجودة.',
    category: 'Sanitary',
    categoryAr: 'صحي',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    features: ['Premium Quality', 'Leak Proof', 'Easy Maintenance', 'Modern Design'],
    featuresAr: ['جودة ممتازة', 'مقاوم للتسرب', 'صيانة سهلة', 'تصميم عصري']
  },
  {
    id: '3',
    name: 'Plastic Containers',
    nameAr: 'حاويات بلاستيكية',
    description: 'Food-grade plastic containers in various sizes. Perfect for storage and transportation.',
    descriptionAr: 'حاويات بلاستيكية مناسبة للطعام بأحجام مختلفة. مثالية للتخزين والنقل.',
    category: 'Storage',
    categoryAr: 'التخزين',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800',
    features: ['Food Safe', 'Stackable', 'Lightweight', 'Reusable'],
    featuresAr: ['آمن للطعام', 'قابل للتكديس', 'خفيف الوزن', 'قابل لإعادة الاستخدام']
  },
  {
    id: '4',
    name: 'Water Tanks',
    nameAr: 'خزانات المياه',
    description: 'Large capacity water storage tanks made from high-grade materials. Suitable for residential and commercial use.',
    descriptionAr: 'خزانات مياه كبيرة السعة مصنوعة من مواد عالية الجودة. مناسبة للاستخدام السكني والتجاري.',
    category: 'Storage',
    categoryAr: 'التخزين',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
    features: ['Large Capacity', 'UV Resistant', 'Durable', 'Easy Installation'],
    featuresAr: ['سعة كبيرة', 'مقاوم للأشعة فوق البنفسجية', 'متين', 'سهل التركيب']
  },
  {
    id: '5',
    name: 'Drainage Systems',
    nameAr: 'أنظمة الصرف',
    description: 'Comprehensive drainage solutions for residential and commercial buildings. Efficient water management.',
    descriptionAr: 'حلول صرف شاملة للمباني السكنية والتجارية. إدارة فعالة للمياه.',
    category: 'Plumbing',
    categoryAr: 'السباكة',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
    features: ['Efficient Flow', 'Easy Maintenance', 'Durable', 'Various Sizes'],
    featuresAr: ['تدفق فعال', 'صيانة سهلة', 'متين', 'أحجام مختلفة']
  },
  {
    id: '6',
    name: 'Plastic Sheets',
    nameAr: 'ألواح بلاستيكية',
    description: 'High-quality plastic sheets for construction and industrial applications. Available in multiple thicknesses.',
    descriptionAr: 'ألواح بلاستيكية عالية الجودة للتطبيقات الإنشائية والصناعية. متوفرة بسمكات متعددة.',
    category: 'Construction',
    categoryAr: 'البناء',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
    features: ['Weather Resistant', 'Flexible', 'Easy to Cut', 'Long Lasting'],
    featuresAr: ['مقاوم للطقس', 'مرن', 'سهل القطع', 'يدوم طويلاً']
  }
];

