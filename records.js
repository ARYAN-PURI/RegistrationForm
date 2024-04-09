let records=document.getElementById('records');
let getdata=async()=>{
    let data=fetch('http://localhost:5000/getdata');
    return (await data).json();
}
getdata().then((data)=>{
    console.log(data);
    data.map((val)=>{
        let tr=document.createElement('tr');
        let interests=val.interests;
        let td=document.createElement('td');
        interests.forEach((val,index)=>{
            let div=document.createElement('div');
            div.innerHTML=`${index+1}.${val}`;
            td.appendChild(div);
        })
        tr.innerHTML=`<td>${val.fname}</td>
                      <td>${val.lname}</td>
                      <td>${val.dob}</td>
                      <td>${val.gender}</td>
                      <td>${val.mobile}</td>
                      <td>${val.profession}</td>
                      <td>${td.innerHTML}</td>
                      <td>${val.email}</td>
                      <td>${val.pass}</td>`;
        records.appendChild(tr);
    });
})
