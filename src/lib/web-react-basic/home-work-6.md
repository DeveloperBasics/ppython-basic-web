- สร้าง Component ชื่อว่า `Students.jsx` โค้ดเริ่มต้นให้มีดังนี้

```jsx
const Students = ({ name, score }) => {
  return (
    <>
      <p>
        {name} คะแนน {score} คะแนน
      </p>
    </>
  );
};
export default Students;
```

- import นำเข้าไปใช้ในโค้ด `Counter.jsx` และใช้แทน `Items.jsx`
- `Counter.jsx` ทำการเปลี่ยน

```jsx
const [items, setItems] = useState([
  {
    name: "",
    amount: "",
  },
]);
```

เป็น

```jsx
const [students, setStudents] = useState([
  {
    name: "",
    score: "",
  },
]);
```

- แต่ตรงนี้

```jsx
i.name != "" && i.amount != "" ? (
  <Items key={index} name={i.name} amount={i.amount} />
) : (
  ""
);
```

เปลี่ยนเป็น

```jsx
i.name != "" && i.score != "" ? (
  <Items key={index} name={i.name} score={i.score} />
) : (
  ""
);
```

- จากนั้นทำการเปลี่ยนแปลงโค้ดที่เหลือให้ทำงานได้อย่างสมบูรณ์
- อ้างอิงจากโค้ดจากคลิปวิดีโอได้เลย ถ้าทำตามคลิปทำได้แน่นอน 🥳
