import { writable } from 'svelte/store';
const data = [
  {
    title: "บทที่ 1 ติดตั้งและใช้งาน Component เบื้องต้น",
    linkVideo: "qXY7HDyX1Qo",
    homework: "true",
  },
  {
    title: "บทที่ 2 การใช้ props ที่มากกว่า 1 และติดตั้ง tailwindsCSS",
    linkVideo: "wRzHHIAYWK8",
    homework: "true",
  },
  {
    title: "บทที่ 3 การใช้ condition เงื่อนไข if else",
    linkVideo: "S-LEVyCPvrQ",
    homework: "true",
  },
  {
    title: "บทที่ 4 การใช้ loop ใน react ด้วย map",
    linkVideo: "IEjEq-d9K2A",
    homework: "true",
  },
  {
    title: "บทที่ 5 การใช้ useState()",
    linkVideo: "2B0u1_EIlQY",
    homework: "true",
  },



];

export default writable(data)


