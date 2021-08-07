import { useContext, useState } from "react";
import { AppContext } from "../Context";

const UserList = () => {
  const {users} = useContext(AppContext);

  



  return  (
 
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
         
        </tr>
      </thead>
      <tbody>
        {users.map(({ ...user }) => {
          return user=== true, 
           
            <tr>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
             
            </tr>
        
        })}
      </tbody>
    </table>
  );
};

export default UserList;
