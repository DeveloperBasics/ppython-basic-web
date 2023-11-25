# React: เรียนรู้ไลบรารีสุดนิยมสำหรับสร้าง UI

React เป็นไลบรารี JavaScript สำหรับเบราว์เซอร์ที่มุ่งเน้นไปที่การลดความซับซ้อนในการพัฒนาส่วนติดต่อผู้ใช้ (UI)

เรียกว่าไลบรารีฟรอนต์เอนด์ เนื่องจาก React เกี่ยวข้องกับฟรอนต์เอนด์เท่านั้น ซึ่งหมายถึงสิ่งที่ทำงานภายในเบราว์เซอร์

ไม่เกี่ยวข้องกับด้านเซิร์ฟเวอร์หรือวิธีการเข้าถึงข้อมูลจากฐานข้อมูล ซึ่งเป็นสิ่งที่ต้องใช้ไลบรารีอื่นร่วมกับ React หรือเรียกว่าเมตาเฟรมเวิร์ก เช่น Remix และ Next.js

React โดยเนื้อแท้เป็นการแยกส่วนของ DOM API ที่เราได้เห็นในหน่วย DOM

พัฒนาโดย Facebook และเปิดตัวในปี 2013 ไดร์ฟแอพที่ใช้กันอย่างแพร่หลายที่สุดซึ่งขับเคลื่อน Facebook และ Instagram รวมถึงแอพพลิเคชันอื่นๆ อีกมากมาย

เป้าหมายหลักคือการทำให้การคิดเกี่ยวกับอินเทอร์เฟซและสถานะของมันในทุกช่วงเวลาง่ายขึ้น โดยแบ่ง UI ออกเป็นคอลเลกชันของคอมโพเนนต์

คุณจะพบปัญหาเบื้องต้นในการเรียนรู้ React แต่เมื่อมันเข้าใจมันแล้ว รับประกันได้เลยว่าจะเป็นหนึ่งในประสบการณ์ที่ดีที่สุดที่คุณจะมีเลย เพราะ React ทำให้สิ่งต่างๆ ง่ายขึ้นมากมายกว่าที่เคย และระบบนิเวศน์ของมันเต็มไปด้วยไลบรารีและเครื่องมือที่ยอดเยี่ยม

การใช้งาน React พื้นฐานต้องการให้คุณรู้จักชุดคุณสมบัติขนาดเล็ก และโดยทั่วไปคุณจำเป็นต้องเข้าใจแนวคิด 4 ประการเพื่อเริ่มต้น:

1. Components (คอมโพเนนต์)

2. JSX (JSX)

3. State (สถานะ)

4. Props (พร็อพส์)

เราจะสำรวจทั้งหมดนี้ในหน่วยนี้

แน่นอนว่ายังมีอีกมากมายสำหรับการใช้งานขั้นสูง แต่เราสามารถเริ่มต้นด้วยสิ่งเหล่านี้ได้

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

```
cd test
```

จากนั้นเปิด `Vs Code` ด้วยคำสั่ง

```
code .
```

การเรียกใช้งานครั้งแรกจะติดตั้งสิ่งต่างๆในไฟล์ แต่ไม่ต้องห่วงเพียงแค่ใช้คำสั่งนี้

```
npm install
```

ทำการรันได้เลย!

```
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

ความสะดวกอย่างหนึ่งของเครื่องมืออย่าง Vite คือคุณสามารถเพิ่มไฟล์ได้ และ Vite จะจดจำไฟล์เหล่านั้นโดยอัตโนมัติ โดยไม่ต้องรีสตาร์ทแล้วรันใหม่ด้วย `npm run dev` เหมือนที่เราเคยทำกับโปรเจ็กต์ Node.js

และเมื่อคุณบันทึกคอมโพเนนต์ คอมโพเนนต์นั้นจะได้รับการอัปเดตในเบราว์เซอร์ของคุณโดยอัตโนมัติ

ทำให้การพัฒนาเป็นไปอย่างรวดเร็วและสนุกสนาน!

# React : React คอมโพเนนต์ (Component)

React เป็นไลบรารี JavaScript ที่ใช้สำหรับสร้าง user interfaces (UIs) แบบ declarative คอมโพเนนต์เป็นส่วนประกอบพื้นฐานของแอปพลิเคชัน React แต่ละคอมโพเนนต์เป็นฟังก์ชัน JavaScript ที่รับข้อมูล (props) และส่งคืนสิ่งที่จะแสดงบนหน้าจอ (JSX)

และคุณเพิ่งได้เห็นวิธีการสร้างแอปพลิเคชัน React แรกของคุณ.

แอปพลิเคชั่นนี้มาพร้อมกับไฟล์หลายชุดที่ทําสิ่งต่างๆ ส่วนใหญ่เกี่ยวข้องกับการกําหนดค่าต่างๆ แต่ว่ามีไฟล์หนึ่งไฟล์ที่โดดเด่นก็คือ: `App.jsx`

`App.jsx` จะเป็น react คอมโพเนนต์แรกของคุณที่คุณจะได้พบ โค้ดจะเป็นในลักษณะนี้

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
```

แต่อย่าพึ่งตกใจและกลัวไปแค่เอามาแสดงให้ดูเฉยๆ 😎

เอาหล่ะ แอปพลิเคชันที่สร้างขึ้นโดยใช้ React หรือหนึ่งในเฟรมเวิร์ก frontend ยอดนิยมอันอื่นๆ เช่น `Vue` และ `Svelte` เหล่านี้ถูกสร้างขึ้นโดยใช้คอมโพเนนต์หลายสิบรายการ

แต่เพื่อให้เริ่มต้นในการวิเคราะห์คอมโพเนนต์แรกนี้ง่ายขึ้น เราจะทําให้โค้ดนี้ง่ายขึ้นดังนี้:

```
function App() {
  return /* ทำอะไรบางอย่าง */
}
```

คุณจะเห็นว่าเรากําหนดฟังก์ชั่นที่เรียกว่า `App`

`App` นั้นเป็นฟังก์ชั่นที่ติดตัวมาและตัวอย่างที่โปรแกรมให้มาทำการ `return` อะไรที่มันดูแปลกๆ

ดูเหมือนว่าจะทั้ง `HTM`L แล้วก็มี `JavaScript` ฝังอยู่ในนั้นด้วย

เพื่อง่ายขึ้นเราจะทำเป็นแบบนี้กันเริ่ม:

```
function App() {
  return <p>test</p>
}
```

นั่นคือ `JSX` ซึ่งเป็นภาษาพิเศษที่เราใช้ในการสร้างเอาต์พุตของคอมโพเนนต์

และเราจะพูดถึง `JSX` เพิ่มเติมในหัวข้อถัดไป

และที่จริงแล้วคอมโพเนนต์ก็คือฟังก์ชัน ดังนั้นคุณสามารถใช้ Arrow Function (ฟังก์ชันลูกศร) เพื่อกำหนดมันได้แบบนี้:

```
const App = () => {
  return <p>test</p>
}
```

ข้อแตกต่างหลักตรงนี้คืออย่าแรกคือฟังก์ชั่นแต่ละตัวจะมีชื่อเป็นของตัวเอง ดังนั้นเมื่อคุณพบข้อผิดพลาด คุณจะเห็นชื่อของคอมโพเนนต์ในข้อความแสดงข้อผิดพลาด ซึ่งเป็นสิ่งที่ดีไม่กลัวไป

นอกเหนือจากการกำหนด `JSX` เพื่อใช้ return แล้วคอมโพเนนต์ยังมีลักษณะอื่นๆ อีกหลายประการ

คอมโพเนนต์ สามารถมี `สถานะ (state)` ของตัวเองได้ ซึ่งหมายความว่ามันอาจจะห่อหุ้มด้วยตัวแปรบางตัวจากคอมโพเนนต์อื่น ที่จะไม่สามารถเข้าถึงได้หากคอมโพเนนต์นี้ไม่ได้เปิดเผย `สถานะ (state) `นี้ให้กับแอปพลิเคชันอื่นๆ

คอมโพเนนต์ ยังสามารถรับข้อมูลจากคอมโพเนนต์อื่นๆ ได้ ในกรณีนี้ ที่เราพูดถึงตือ `พร็อพส์ (props)`

อย่ากังวลไป เราจะพาเข้าไปดูรายละเอียดของคำศัพท์เหล่านั้นทั้งหมดทั้ง (JSX, State และ Props) ในเร็วๆนี้

# React : รู้เบื้องต้นเกี่ยวกับ JSX

เราจะไม่สามารถพูดถึง React ได้เลยหากไม่อธิบาย JSX ก่อน

คุณได้พบกับ React คอมโพเนนต์ แรกของคุณไปแล้ว ซึ่งเป็น คอมโพเนนต์ ของแอปที่กำหนดไว้ในแอปพลิเคชันเริ่มต้นที่เราสร้างโดยใช้ Vite

โค้ดของมันคือ:

```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
```

ก่อนหน้านี้เราได้ละเลยทุกสิ่งที่อยู่ในคำสั่ง return และในส่วนนี้ เราจะพูดถึงมัน

เราจะเรียก `JSX` ทุกอย่างที่อยู่ภายใน `return (..)` มาให้แบบนี้ ว่าอะไรคือสิ่งที่เราเรียกว่า `JSX` กันแน่

```
<div className="App">
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://reactjs.org" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
</div>
```

ลักษณะดูเหมือน HTML แต่ก็ไม่ใช่ HTML จริงๆ เพราะมันแตกต่างออกไปเล็กน้อย

และมันก็แปลกนิดหน่อยที่จะมีโค้ด HTML ลักษณะนี้อยู่ในไฟล์ JavaScript นี่ดูไม่เหมือน JavaScript เลย!

ภายใต้หลังคาของ React จะทำการประมวลผล JSX จากนั้นก็จะแปลงไปเป็น JavaScript ที่เบราว์เซอร์สามารถเข้าใจได้

ในขณะที่เราเขียน `JSX` ไปแต่ยังไงในท้ายที่สุดแล้ว ก็จะมีขั้นตอนการแปลที่ทำให้สามารถย่อยเป็น JavaScript

React ให้เราเราแบบนี้ก็ด้วยเหตุผลเดียวคือ `การสร้างอินเทอร์เฟซ UI โดยใช้ JSX นั้นง่ายกว่า`

เมื่อคุณจะคุ้นเคยกับมันมากขึ้นแล้วแน่นอนว่า

ในหัวข้อถัดไป เราจะพูดถึงวิธีที่ JSX ช่วยให้คุณสร้าง UI ได้อย่างง่ายดาย จากนั้นเราจะมาดูความแตกต่างกับ “HTML ปกติ” ที่คุณต้องรู้กัน
