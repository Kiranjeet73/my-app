
export const userColums=[
    { field: 'id', headerName: 'ID', width: 70 },
    {field:"user", headerName:"User", width:230, renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="celling" src={params.row.img} alt="" />
                {params.row.username}
            </div>
        );
    },

    },
    {
      field:'email', headerName:'Email', width:230
    },
    { 
      field:'age', headerName:'Age', width:100
    },
    {
      field:'status', headName:'Status', width:'160',
      renderCell:(params)=>{
        return(
          <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
      }
    }
]


export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];