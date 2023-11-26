# สร้างโปรเจ็กต์ React ด้วย Vite

มีหลายวิธีในการสร้างโปรเจ็กต์ React แต่ขอแนะนำให้ใช้ Vite

Vite เป็นเครื่องมือที่ทันสมัยที่จัดเตรียมเซิร์ฟเวอร์สำหรับการพัฒนา มีความเร็วสูง และนักพัฒนา JS หลายคนต่างเห็นว่าเป็นตัวเลือกที่ดีที่สุด

💁‍♂️ หมายเหตุ: Vite สามารถใช้แทน `create-react-app ` ซึ่งเป็นเครื่องมือยอดนิยมอีกตัวหนึ่งแต่ช้ากว่า คุณสามารถใช้แทนกันได้หากต้องการ แต่พบว่า Vite นั้นยอดเยี่ยมมากและสามารถใช้กับไลบรารีอื่นๆ ได้ไม่ใช่แค่ React

ก่อนอื่นคุณจำเป็นต้องติดตั้ง Node JS เพื่อเป็นตัวพึ่งพาในการใช้งาน react คล้ายกับที่คุณติดตั้ง python นั่นเองโดยไปที่ [https://nodejs.org/en/download/](https://nodejs.org/en/download/) แล้วดาวน์โหลดเวอร์ชั่น LTS เพื่อความเสถียร์ได้เลย

![img](https://media.discordapp.net/attachments/372372440334073859/1178077742558871613/image.png?ex=6574d565&is=65626065&hm=130692bd06def78f9c2325515fe35ba88f46173efbaceddce513c2ce584a49a0&=&format=webp)

จากนั้นในการสร้างโปรเจ็กต์โดยใช้ Vite ให้คุณเข้าไปที่โฟลเดอร์ที่คุณจะเก็บโปรเจ็กต์ทั้งหมดของคุณ ในกรณีจะขอใช้เป็นเป็นโฟลเดอร์ที่ชื่อว่า dev ในโฟลเดอร์หลักของผู้ใช้แล้วกัน หากคุณใช้ window คุณสามารถไปที่โฟลเดอร์เก็บโปรเจ็กต์แล้ว พิมพ์ `cmd` ตรงช่อง address ได้เลย

![img](https://media.discordapp.net/attachments/372372440334073859/1178078028782387200/image.png?ex=6574d5a9&is=656260a9&hm=ee159cac07f5da08aa9c2c30d69780cb983196764e67ed755b1d17b02678b275&=&format=webp)

จากนั้นเรียกใช้คำสั่งต่อไปนี้

```bash
npm  create  vite@latest
```

![](https://media.discordapp.net/attachments/372372440334073859/1178078182272933938/1-demo-setting-up-a-react-project-with-vite.png?ex=6574d5ce&is=656260ce&hm=50e152ae3993e0ad4552489f37fd2a3f39be348614e6de5b675be04edd1bb078&=&format=webp&width=1193&height=671)

เลือกชื่อสำหรับโปรเจ็กต์ นี่จะเป็นชื่อโฟลเดอร์ของโปรเจ็กต์ของคุณ ในกรณีนี้ขอใช้ชื่อเป็น `test` แล้วกัน

![](https://media.discordapp.net/attachments/372372440334073859/1178078688521228348/1-demo-setting-up-a-react-project-with-vite-1.png?ex=6574d646&is=65626146&hm=a65cac314459f19bf50f5a558015d203bdc8ce85dd68b1ccbd621ffaf22146cc&=&format=webp&width=1193&height=671)

ตอนนี้คุณเลือกลูกศร ขึ้นลง เพื่อไปเลือก framework `React` จากนั้นกด `Enter`

![](https://cdn.discordapp.com/attachments/372372440334073859/1178079168894877846/1-demo-setting-up-a-react-project-with-vite-2.png?ex=6574d6b9&is=656261b9&hm=6a3e68e5441ad847a89a804d040f57798046009e166ee1be886194d5cb22dcf2&)

เลือก JavaScript เพื่อความง่าย

![](https://cdn.discordapp.com/attachments/372372440334073859/1178079477771817022/1-demo-setting-up-a-react-project-with-vite-3.png?ex=6574d703&is=65626203&hm=b482b7fb6b4bd03c582ddf9deb6755e212e3ca572061a30b899a7a430d1fe45f&)

เสร็จแล้ว!!

![](https://media.discordapp.net/attachments/372372440334073859/1178079637901942826/1-demo-setting-up-a-react-project-with-vite-4.png?ex=6574d729&is=65626229&hm=a1311d138a7ac61904a427190b0b7c1ebc5bf7f844f39cb2fdd55941d919d59e&=&format=webp&width=1193&height=671)
ตอนนี้ไปที่โฟลเดอร์โครงการที่สร้างขึ้นใหม่ ใช้คำสั่ง

```bash
cd test
```

จากนั้นเปิด `Vs Code` ด้วยคำสั่ง

```bash
code .
```

การเรียกใช้งานครั้งแรกจะติดตั้งสิ่งต่างๆในไฟล์ แต่ไม่ต้องห่วงเพียงแค่ใช้คำสั่งนี้

```bash
npm install
```

ทำการรันได้เลย!

```bash
npm run dev
```

เว็บแอปพลิเคชันควรจะทํางานที่ [http://localhost:5173](http://localhost:5173/) ( แต่บางทีพอร์ตอาจแตกต่างกันไป ) แต่คุณสามรถกด `ctrl` + `คลิกเมาส์ซ้าย` ที่ตัวลิงก์ที่โปรแกรมแสดงออกมาเพื่อเปิดได้

![enter image description here](https://media.discordapp.net/attachments/372372440334073859/1178081941392719882/Screenshot-2023-11-13T08.png?ex=6574d94e&is=6562644e&hm=c0446ef5d34988b61ef4dc9df157e903b320aa4622f225331187d8a6eff568e6&=&format=webp)

ก็จะได้แบบนี้มา
![enter image description here](https://media.discordapp.net/attachments/372372440334073859/1178082602578620466/1-demo-setting-up-a-react-project-with-vite-6.png?ex=6574d9ec&is=656264ec&hm=a21c31a41a3a663cc05af50de9545a256d8376462991945c7df43ccad5c71b71&=&format=webp&width=881&height=671)

ตอนนี้คุณพร้อมที่จะทํางานกับแอปพลิเคชันนี้แล้ว!

นี่คือโฟลเดอร์แอปพลิเคชันที่เปิดใน `VS Code`

อย่างที่คุณเห็น Vite สร้างแอปพลิเคชันพื้นฐานให้คุณแล้วและตอนนี้คุณสามารถเปิดที่ไฟล์ `src/App.jsx` ได้เพื่อเริ่มลุยต่อ

![enter image description here](https://media.discordapp.net/attachments/372372440334073859/1178083162568540350/1-demo-setting-up-a-react-project-with-vite-7.png?ex=6574da71&is=65626571&hm=c27de6f087679453df91e7433703c955d93d4f78f42ec896e9562b9d14dfe0d3&=&format=webp&width=890&height=671)

ความสะดวกอย่างหนึ่งของเครื่องมืออย่าง Vite คือคุณสามารถเพิ่มไฟล์ได้ และ Vite จะจดจำไฟล์เหล่านั้นโดยอัตโนมัติ โดยไม่ต้องรีสตาร์ทแล้วรันใหม่ด้วย
`npm run dev` เหมือนที่เราเคยทำกับโปรเจ็กต์ Node.js

และเมื่อคุณบันทึกคอมโพเนนต์ คอมโพเนนต์นั้นจะได้รับการอัปเดตในเบราว์เซอร์ของคุณโดยอัตโนมัติ

ทำให้การพัฒนาเป็นไปอย่างรวดเร็วและสนุกสนาน!

[บทความถัดไป React : React คอมโพเนนต์ (Component)](https://ppythonbasic.github.io/ppython-basic-web/articles/article-content/react3)
