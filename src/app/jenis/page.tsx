import axios from "axios"
import Link from "next/link"
import AddJenis from "./addJenis"
import DeleteJenis from "./deleteJenis"
import EditJenis from "./editJenis"

export const metadata = {
  title: "Jenis",
};
type Jenis = {
  id: number;
  nama_jenis: string;
  category_id: string;
};
const getJenis = async () => {
  const res = await axios.get("http://localhost:8000/api/jenis");
  return res.data.data;
};
const JenisList = async () => {
  const jenis: Jenis[] = await getJenis();
  return (
    <div className="py-10 px-10">
      <div className="py-2"></div>
      <AddJenis/>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th> Nama Jenis</th>
            <th> category id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
             {jenis.map((jenis, index) => (
              <tr key={jenis.id}>
                <td>{index + 1}</td>
                <td>{jenis.nama_jenis}</td>
                <td>{jenis.category_id}</td>
                <td className="flex">
                  <div className="mr-1">  
                     <EditJenis {...jenis} />
                     <DeleteJenis {...jenis} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default JenisList;