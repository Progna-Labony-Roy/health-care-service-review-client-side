import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyReviewData from "./MyReviewData";

const MyReviews = () => {

  const {user} = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState({});


  useEffect(() => {
    fetch(`https://service-review-server-side-jet.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email]);

  const handleDelete =(id) =>{
    const proceed = window.confirm("Delete?");
    if(proceed){
     fetch(`https://service-review-server-side-jet.vercel.app/reviews/${id}`,{
       method:'DELETE'
     })
     .then(res => res.json())
     .then(data => {
       console.log(data);
       if(data.deletedCount >0){
         alert('deleted succesfully');
         const remaining= myReviews.filter(myRev => myRev._id !==id);
         setMyReviews(remaining)
       }
     })
    }
 }

  return (
        <div className="overflow-x-auto w-full max-w-screen-xl mx-auto my-16">
          {MyReviews.length}
  {/* <table className="table w-full">
 
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Service Name</th>
        <th>Email</th>
        <th>Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
    {
              user?.email ?
              <>
              {myReviews.map((myReview) => (
              <MyReviewData
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
              ></MyReviewData>
            ))}
              </>
              :
              <></>
            }
    </tbody>    
  </table> */}
</div>
  );
};

export default MyReviews;
