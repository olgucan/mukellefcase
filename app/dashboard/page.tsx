"use client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect ,useState } from "react";
import Image from "next/image";
export default function DashboardPage() {
  const { push } = useRouter();

  // This page is protected
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    //event.preventDefault();

    // const payload = {
    //   username: event.currentTarget.username.value,
    //   password: event.currentTarget.password.value,
    // };

    try {
      const { data } = await axios.get("/api/auth/logout");

      alert(JSON.stringify(data));

      // redirect the user to /dashboard
      push("/");
      
    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };
  interface User {
    id: string;
    url: string;
    width:number;
    height:number
  }
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

    useEffect(() => {
    foo()
    }, []);
    //console.log(users)
    const foo = async () => {
      axios
      .get<User[]>("https://api.thecatapi.com/v1/images/search")
      .then((res) => setUsers(res.data))
      .catch(err => {
       setError(err.message);
  });
    }
    const [addclass,setAddclass]=useState(true)
    useEffect(()=> {
     //console.log('resim değişti')
     setAddclass(a=>!a)
    },[users])
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Super Secret Dashboard</h1>
     {users[0] && <img className={addclass ? 'add' : ''} src={users[0].url} alt="cat" ></img> }
   <div className="flex gap-3 mt-6">
   <button onClick={foo} className="bg-green-300 p-2 rounded">Change</button> 
      <button onClick={handleSubmit} className="bg-[red] text-white p-2 rounded">Log out</button>
   </div>
    </div>
  );
}
