import axios from "axios"
import Link from "next/link"
import AddMeja from "./addMeja"
import DeleteMeja from "./deleteMeja"
import EditMeja from "./editMeja"

export const metadata = {
  title: "Meja",
};
type Meja = {
  id: number;
  nomor_meja: string;
  kapasitas: string;
  status: string;
};

const getMeja = async () => {
  const res = await axios.get("http://localhost:8000/api/meja");
  return res.data.data;
};
const MejaList = async () => {
  const meja: Meja[] = await getMeja();
  return (
    <div className="py-10 px-10">
      <div className="py-2"></div>
      <AddMeja/>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th>Nomor_meja</th>
            <th>Kapasitas</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
             {meja.map((meja, index) => (
              <tr key={meja.id}>
                <td>{index + 1}</td>
                <td>{meja.nomor_meja}</td>
                <td>{meja.kapasitas}</td>
                <td>{meja.status}</td>
                <td className="flex">
                  <div className="mr-1">  
                     <EditMeja {...meja} />
                     <DeleteMeja {...meja} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default MejaList;