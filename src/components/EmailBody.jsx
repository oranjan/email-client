import { useParams } from "react-router-dom";

function EmailBody() {
    let { id } = useParams();

    console.log(id)
    // const [emailBody, setEmailBody] = useState([]);

    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    // async function fetchData() {
    //   const response = await fetch(" const [emailList, setEmailList] = useState([]);

    //   useEffect(() => {
    //     fetchData();
    //   }, []);
    
    //   async function fetchData() {
    //     const response = await fetch("https://flipkart-email-mock.vercel.app/");
    //     const json = await response.json();
    //     setEmailList(json.list);
    //   }
    // ");
    //   const json = await response.json();
    //   setEmailList(json.list);
    // }
  
  return (
    <main>
      <h1>hey</h1>
    </main>
  )
}

export default EmailBody
