import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    gender: '',
    city: ''
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body: JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    // Reset form after submission
    setFormData({
      name: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      gender: '',
      city: ''
    });
  };

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/demo',{
      method:'GET',
      
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '5px' 
     
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ 
          width: '100%', 
          padding: '10px', 
          backgroundColor: '#007bff', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}>Register</button>
      </form>

      {/* <p style={{ textAlign: 'center', marginTop: '20px' }}>Already have an Account?</p>
      <div style={{ textAlign: 'center' }}>
      <Link to="/login" className = "btn btn-default border w-100 bg-light rounded-0 text-decoration-none text-align-center">
           Login
      </Link>
      </div> */}

      <div>
        <ul>
        {users.map(user=><li>{user.username},{user.city}</li>)}
        </ul>
      </div>
    </div>
  );
}
