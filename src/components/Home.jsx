import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import F from "../assets/F-icon"

function Home() {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://flipkart-email-mock.vercel.app/");
    const json = await response.json();
    setEmailList(json.list);
  }

  function getDatenTime(timestamp) {
    const datetime = new Date(timestamp);
    return datetime.toLocaleDateString() + " " + datetime.toLocaleTimeString();
  }



  // console.log(emailList)
  const displayEmails = emailList.map((email) => {
    return (
      <Link to={email?.id}
        key={email?.id}
        className="border border-solid border-gray-300 rounded-lg p-4 w-4/5 mx-auto mb-4 flex  gap-4"
      >
        <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center">
          <span className="text-white text-2xl">
            {email?.from?.name[0].toUpperCase()}
          </span>
        </div>
        <div className=" text-zinc-600  ">
          <span>From</span>{" "}
          <span className="font-bold">
            {email?.from?.name + " " + email?.from?.email}
          </span>
          <h2>
            <span>Subject: </span>
            <span className="font-bold">{email?.subject}</span>
          </h2>
          <p> {email?.short_description}</p>
          <p>{getDatenTime(email?.date)}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="">
      <div className="w-3/12  flex items-center justify-between ml-36 text-zinc-700  my-3">
        <span>Filter By:</span>
        <button className=" ">Unread</button>
        <button>Read</button>
        <button>Favourites</button>
      </div>
      {displayEmails}
    </div>
  );
}

export default Home;
