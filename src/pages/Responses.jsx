import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Responses = () => {
 const [table, setTable] = useState([])
 const [loading, setLoading] = useState(false)
const {admin} = useSelector(state => state.admin)
  const headers = [
    "#",
    "Name",
    "Email",
    "Phone",
    "Answer 1",
    "Answer 2",
    "Answer 3",
  ];

    const getResponse = async () => {
    setLoading(true)
    const res = await fetch(`https://api.launcherr.co/api/ShowQuiz`, {
      headers: {
        Authorization: `Bearer ${admin.access_token}`,
      },
    });
    const data = await res.json();
     setTable(data);
     console.log("hel", data);
    if(res.ok){
      setLoading(false)
    }else{
      setLoading(false)
    }
   
  };

  useEffect(() => {
    getResponse();
  }, []);
  

  return (
    <>
        <h5 className="mb-0">Quiz Responses</h5>
        <hr />
      <div className="card mt-4">
        <div className="card-body">
          <div className="table-responsive mt-3">
            <table
              id="example"
              className="table table-striped table-bordered"
              style={{ width: "100%" }}
            >
              {" "}
              {table ? (
                loading ? (
                  <div className="d-flex justify-content-center">
                    <div class="card">
                      <div class="card-body">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <thead>
                      <tr>
                        {headers.map((header, index) => (
                          <th key={index + header}>{header}</th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {table.map((section, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className="text-wrap">{section.name}</td>
                          <td className="text-wrap">{section.email}</td>
                          <td className="text-wrap">{section.phone}</td>
                          <td className="text-wrap">{section.answer1}</td>
                          <td className="text-wrap">{section.answer2}</td>
                          <td className="text-wrap">{section.answer3}</td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                )
              ) : (
                <div>No data found</div>
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Responses
