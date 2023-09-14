import React, { useEffect, useState } from 'react'
import ToDoHeader from './ToDoHeader'
import axios from 'axios'

const ViewToDo = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      (response) => {
        setData(response.data)
      }
    )
  }, [])
  return (
    <div>
      <ToDoHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">User ID</th>
                      <th scope="col">Title</th>

                    </tr>
                  </thead>
                  <tbody>
                    {data.map(
                      (value, index) => {
                        return <tr>
                          <td>{value.id}</td>
                          <td>{value.userId}</td>
                          <td>{value.title}</td>
                        </tr>
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewToDo