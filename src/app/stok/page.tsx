export const metadata = {
  title: "Stok",
}
import axios from 'axios'
import Link from 'next/link'
import AddStok from './addStok'
import EditStok from './editStok'
import DeleteStok from './deleteStok'

type Stok = {
  id: number;
  menu_id: string;
  jumlah: string;
}
const getStok = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/stok");

  return res.data.data
}
const StokList = async () => {
  const stok: Stok[] = await getStok()
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddStok />
      </div>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th>Menu id</th>
            <th>Jumlah</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stok.map((stok, index) => (
            <tr key={stok.id}>
              <td>{index + 1}</td>
              <td>{stok.menu_id}</td>
              <td>{stok.jumlah}</td>
              <td className="flex">
                <div className="mr-1">
                  <EditStok {...stok} />
                  <DeleteStok {...stok} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StokList;
