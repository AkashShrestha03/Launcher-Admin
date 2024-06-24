import  {Chart1, Chart3, Chart2, Chart4, Chart5, Chart6, Chart7} from "../components/Chart1";


const Dashboard = () => {
  
	
  return <> <div className="row row-cols-1 row-cols-lg-4">
        <div className="col">
          <div className="card rounded-4 overflow-hidden">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="">
                  <h5 className="mb-0">2.5K</h5>
                  <p className="mb-0">Orders</p>
                </div>
                <div className="fs-4">
                  <i className="bi bi-basket3"></i>
                </div>
              </div>
              {/* <div id="chart2"></div> */}
              <Chart1></Chart1>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded-4 overflow-hidden">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="">
                  <h5 className="mb-0">14K</h5>
                  <p className="mb-0">Visits</p>
                </div>
                <div className="fs-4">
                  <i className="bi bi-lightbulb"></i>
                </div>
              </div>
              {/* <div id="chart3"></div> */}
              <Chart2/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded-4 overflow-hidden">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="">
                  <h5 className="mb-0">$52K</h5>
                  <p className="mb-0">Sales</p>
                </div>
                <div className="fs-4">
                  <i className="bi bi-currency-dollar"></i>
                </div>
              </div>
              {/* <div id="chart4"></div> */}
              <Chart3/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded-4 overflow-hidden">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="">
                  <h5 className="mb-0">8.3K</h5>
                  <p className="mb-0">New Users</p>
                </div>
                <div className="fs-4">
                  <i className="bi bi-cup-hot"></i>
                </div>
              </div>
             <Chart4/>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-lg-3">
        <div className="col d-flex">
          <div className="card rounded-4 w-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <h6 className="mb-0">Sales Goals</h6>
                <div className="fs-5 ms-auto dropdown">
                  <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                      className="bi bi-three-dots"></i></div>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
           <Chart5/>
            </div>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card rounded-4 w-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <h6 className="mb-0">Total Clicks</h6>
                <div className="fs-5 ms-auto dropdown">
                  <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                      className="bi bi-three-dots"></i></div>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <Chart6/>
            </div>
          </div>
        </div>
      

      </div>

    <div class="row row-cols-1 row-cols-lg-2">
        <div class="col d-flex">
          <div class="card rounded-4 w-100">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <h6 class="mb-0">Social Sales</h6>
                <div class="fs-5 ms-auto dropdown">
                  <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                      class="bi bi-three-dots"></i></div>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider"/>
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div class="social-leads">
                <div class="d-flex align-items-center gap-3">
                  <div class="widget-icon bg-facebook text-white">
                    <i class="bi bi-facebook"></i>
                  </div>
                  <div class="fs-5 flex-grow-1">
                    <p class="mb-0">Facebook</p>
                  </div>
                  <div class="leads-count">
                    <p class="mb-0">78 Sales</p>
                  </div>
                </div>
                <hr/>
                <div class="d-flex align-items-center gap-3">
                  <div class="widget-icon bg-twitter text-white">
                    <i class="bi bi-twitter"></i>
                  </div>
                  <div class="fs-5 flex-grow-1">
                    <p class="mb-0">Twitter</p>
                  </div>
                  <div class="leads-count">
                    <p class="mb-0">68 Sales</p>
                  </div>
                </div>
                <hr/>
                <div class="d-flex align-items-center gap-3">
                  <div class="widget-icon bg-linkedin text-white">
                    <i class="bi bi-linkedin"></i>
                  </div>
                  <div class="fs-5 flex-grow-1">
                    <p class="mb-0">Linkedin</p>
                  </div>
                  <div class="leads-count">
                    <p class="mb-0">120 Sales</p>
                  </div>
                </div>
                <hr/>
                <div class="d-flex align-items-center gap-3">
                  <div class="widget-icon bg-danger text-white">
                    <i class="bi bi-pinterest"></i>
                  </div>
                  <div class="fs-5 flex-grow-1">
                    <p class="mb-0">Pinterest</p>
                  </div>
                  <div class="leads-count">
                    <p class="mb-0">752 Sales</p>
                  </div>
                </div>
                <hr/>
                <div class="d-flex align-items-center gap-3">
                  <div class="widget-icon bg-pink text-white">
                    <i class="bi bi-browser-chrome"></i>
                  </div>
                  <div class="fs-5 flex-grow-1">
                    <p class="mb-0">Chrome</p>
                  </div>
                  <div class="leads-count">
                    <p class="mb-0">58 Sales</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="card rounded-4 w-100">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <h6 class="mb-0">Traffic Resources</h6>
                <div class="fs-5 ms-auto dropdown">
                  <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                      class="bi bi-three-dots"></i></div>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider"/>
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr>
                      <td>Direct</td>
                      <td>$4,5627</td>
                      <td><i class="bi bi-arrow-up text-success"></i></td>
                      <td>4.2%</td>
                    </tr>
                    <tr>
                      <td>Search</td>
                      <td>$3,6587</td>
                      <td><i class="bi bi-arrow-up text-success"></i></td>
                      <td>3.2%</td>
                    </tr>
                    <tr>
                      <td>Emails</td>
                      <td>$8,3762</td>
                      <td><i class="bi bi-arrow-down text-danger"></i></td>
                      <td>5.2%</td>
                    </tr>
                    <tr>
                      <td>Socials</td>
                      <td>$2,1842</td>
                      <td><i class="bi bi-arrow-up text-success"></i></td>
                      <td>1.4%</td>
                    </tr>
                    <tr>
                      <td>Advertisement</td>
                      <td>$5,2635</td>
                      <td><i class="bi bi-arrow-down text-danger"></i></td>
                      <td>2.8%</td>
                    </tr>
                    <tr>
                      <td>Referrals</td>
                      <td>$6,3462</td>
                      <td><i class="bi bi-arrow-up text-success"></i></td>
                      <td>9.2%</td>
                    </tr>
                    <tr>
                      <td>Website</td>
                      <td>$7,2453</td>
                      <td><i class="bi bi-arrow-up text-success"></i></td>
                      <td>6.2%</td>
                    </tr>
                    <tr>
                      <td>Emails</td>
                      <td>$8,3762</td>
                      <td><i class="bi bi-arrow-down text-danger"></i></td>
                      <td>5.2%</td>
                    </tr>
                    <tr>
                      <td>Referrals</td>
                      <td>$6,3462</td>
                      <td><i class="bi bi-arrow-up text-success"></i></td>
                      <td>9.2%</td>
                    </tr>
                    <tr>
                      <td>Socials</td>
                      <td>$2,1842</td>
                      <td><i class="bi bi-arrow-up text-success"></i></td>
                      <td>1.4%</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    
    </>
 
}

export default Dashboard;
