import Table from 'react-bootstrap/Table';
import generateAddr from '../utils/genAddr';

function TableSchool({ data }) {
  return (
    <Table style={{overflowY: 'scroll'}} striped bordered hover responsive>
      <thead>
        <tr>
          <th style={{textAlign: "center", fontSize: "16px"}}>ชื่อโรงเรียน(ไทย)</th>
          <th style={{textAlign: "center", fontSize: "16px"}}>ชื่อโรงเรียน(อังกฤษ)</th>
          <th style={{textAlign: "center", fontSize: "16px"}}>สังกัด</th>
          <th style={{textAlign: "center", fontSize: "16px"}}>เบอร์โทรศัพท์</th>
          <th style={{textAlign: "center", fontSize: "16px"}}>เว็บไซต์</th>
          <th style={{textAlign: "center", fontSize: "16px"}}>ที่อยู่</th>
          <th style={{textAlign: "center", fontSize: "16px"}}>อีเมล์</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele) => 
            <tr key={ele["creator"]}>
              <td style={{textAlign: "center"}}>{ele["name"]["thai"]? ele["name"]["thai"]: '-'}</td>
              <td style={{textAlign: "center"}}>{ele["name"]["english"]? ele["name"]["english"]: '-'}</td>
              <td style={{textAlign: "center"}}>{ele["educationServiceArea"]? ele["educationServiceArea"]: '-'}</td>
              <td style={{textAlign: "center"}}>{ele["phone"]? ele["phone"]: '-'}</td>   
              <td style={{textAlign: "center"}}>{ele["website"]? <a href={ele["website"]}>คลิก</a> : '-'}</td>    
              <td style={{textAlign: "center"}}>{generateAddr(ele["addresses"][0])}</td>
              <td style={{textAlign: "center"}}>{ele["email"]? ele["email"]: '-'}</td>    
            </tr>
         )}  
      </tbody>
    </Table>
  );
}

export default TableSchool;