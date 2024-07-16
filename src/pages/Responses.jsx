import { Pagination } from "@mui/material";
import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Responses = () => {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;
  const { admin } = useSelector((state) => state.admin);
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
    setLoading(true);
    const res = await fetch(`https://api.launcherr.co/api/ShowQuiz`, {
      headers: {
        Authorization: `Bearer ${admin.access_token}`,
      },
    });
    const data = await res.json();
    setTable(data);
    console.log("hel", data);
    if (res.ok) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  // Pagination

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = table ? Math.ceil(table.length / itemsPerPage) : 1;
  const currentItems = table && table
    .filter((gigs) => {
      return search === ""
        ? gigs
        : gigs.name.toLowerCase().includes(search.toLowerCase());
    })
    .slice(indexOfFirstItem, indexOfLastItem);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <h5 className="mb-0">Quiz Responses</h5>
      <hr />
      <div className="card mt-4">
        <div className="card-body">
          <div className=" input-group d-flex gap-3">
            {" "}
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="table-responsive mt-3">
            <table
              id="example"
              className="table table-striped table-bordered"
              style={{ width: "100%" }}
            >
              {" "}
              {currentItems && currentItems ? (
                loading ? (
                  <div className="d-flex justify-content-center">
                    <div className="card">
                      <div className="card-body">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
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
                      {currentItems.map((section, index) => (
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
                <div>
                  <Empty />
                </div>
              )}
            </table>
            <div className="d-flex justify-content-center">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
                className="mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Responses;
