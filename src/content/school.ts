export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type Program = {
  name: string;
  age: string;
};

export const school = {
  nameTh: "โรงเรียนอนุบาลมิตรอุดม",
  nameEn: "Mitudom Kindergarten",
  positioning:
    "โรงเรียนอนุบาลที่ออกแบบทุกการเรียนรู้ และทุกพื้นที่ เพื่อเด็กปฐมวัยโดยเฉพาะ",
  tagline: "เรียนอย่างมีความสุข สนุกอย่างมีความหมาย",
  phones: ["02-748-4854", "02-748-4855"],
  lineId: "@mitudom",
  lineUrl: "https://line.me/R/ti/p/@mitudom",
  facebookUrl: "https://www.facebook.com/mitudom",
} as const;

export const navigation: NavigationItem[] = [
  { label: "รู้จักโรงเรียน", href: "#about" },
  { label: "แนวทางการเรียนรู้", href: "#learning" },
  { label: "ระดับชั้น", href: "#programs" },
  { label: "บรรยากาศการเรียนรู้", href: "#environment" },
  { label: "ติดต่อสอบถาม", href: "#contact" },
];

export const programs: Program[] = [
  { name: "เนอร์เซอรี่", age: "1 ปี 6 เดือนขึ้นไป" },
  { name: "เตรียมอนุบาล", age: "2 ปี" },
  { name: "อนุบาล 1", age: "3 ปี" },
  { name: "อนุบาล 2", age: "4 ปี" },
  { name: "อนุบาล 3", age: "5 ปี" },
];

export const learningPrinciples = [
  {
    title: "อบอุ่น ปลอดภัย ใส่ใจรายบุคคล",
    description:
      "ครูเข้าใจเด็ก ดูแลใกล้ชิด และให้ความสำคัญกับความแตกต่างของเด็กแต่ละคน",
  },
  {
    title: "เรียนรู้ผ่านการเล่นอย่างมีเป้าหมาย",
    description:
      "เปิดพื้นที่ให้เด็กคิด ทดลอง ลงมือทำ และค้นพบคำตอบด้วยตนเอง",
  },
  {
    title: "เติบโตอย่างมั่นคงตามวัย",
    description:
      "ส่งเสริมพัฒนาการด้านร่างกาย อารมณ์ สังคม ภาษา และสติปัญญาอย่างสมดุล",
  },
] as const;

