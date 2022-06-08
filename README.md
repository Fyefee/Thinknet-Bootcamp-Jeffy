# Thinknet Bootcamp Assignment
## MongoDB Assignment
<br>
4. สร้างเงื่อนไขเพื่อหานักเรียนที่ gender เป็น “female” และอยู่ในชมรม (club)  “cooking”

```
{ gender: 'female', club: 'cooking' }
```
<br>
5. สร้างเงื่อนไขเพื่อหานักเรียน gpa  ของ grade 7 น้อยกว่า 3.00

```
{ 
    gpa: { 
        $elemMatch: { 
            grade: 7, gpa: { $lt: 3 } 
        } 
    } 
}
```
<br>
6. สร้างเงื่อนไขเพื่อหานักเรียน gpa  ของ grade 7 น้อยกว่า 3.00 และอยู่ในชมรม (club)  “piano”

```
{
    gpa: {
        $elemMatch: { 
            grade: 7, gpa: { $lt: 3 }
        }
    },
    club: 'piano'
}
```
<br>
7. จงเขียน aggregation เพื่อนับจำนวนนักเรียนที่เป็นสมาชิกในแต่ละชมรม (club) โดยเรียงจำนวนสมาชิกแต่ละชมรมจากมากไปน้อย

```
[{
    $unwind: {
        path: '$club'
    }
}, {
    $group: {
        _id: '$club',
        count: {
            $sum: 1
        }
    }
}, {
    $sort: {
        count: -1
    }
}]
```
<br>
8. จงเขียน aggregation เพื่อหาเกรดเฉลี่ยรวม (GPAX) ของแต่ละคน โดยคิดจากเกรดเฉลี่ยของแต่ละชั้นปี (GPA) ของนักเรียนที่เรียนถึงชั้น grade 9 เท่านั้น โดยผลลัพธ์ให้แสดงชื่อ, นามสกุล, ห้องเรียน (class), อายุ และ GPAX,  

```
[{
 $match: {
  gpa: {
   $elemMatch: {
    grade: 9
   }
  }
 }
}, {
 $project: {
  firstname: '$firstname',
  lastname: '$lastname',
  'class': '$class',
  age: {
   $dateDiff: {
    startDate: {
     $toDate: '$birthday'
    },
    endDate: ISODate('2022-06-08T05:42:00.525Z'),
    unit: 'year'
   }
  },
  gpax: {
   $avg: '$gpa.gpa'
  }
 }
}]
```