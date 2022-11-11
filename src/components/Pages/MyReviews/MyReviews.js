import { useContext, useEffect, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../Context/AuthProvider";
import MyReviewData from "./MyReviewData";

const MyReviews = () => {
  useTitle('My reviews')
  const { user,logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    // if(!user?.email) return;
    fetch(
      `https://service-review-server-side-2pzeurh94-progna-labony-roy.vercel.app/reviews?email=${user?.email}`,{
        headers: {
          authorization: `Bearer ${localStorage.getItem('reviewToken')}`
        }
      }
      
    )
      .then((res) => {
        if(res.status ===401 || res.status === 403){
          logOut()
        }
        return res.json()
      })
      .then((data) => {
        console.log('reviews',data);
        setMyReviews(data);
      });
  }, [user?.email]);

  // delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Delete?");
    if (proceed) {
      fetch(`https://service-review-server-side-2pzeurh94-progna-labony-roy.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted succesfully");
            const remaining = myReviews.filter((myRev) => myRev._id !== id);
            setMyReviews(remaining);
                        
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto w-full max-w-screen-xl mx-auto my-16">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Service</th>
              <th>Review</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myReviews.map((myReview) => (
              <MyReviewData
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
                
              ></MyReviewData>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyReviews;
