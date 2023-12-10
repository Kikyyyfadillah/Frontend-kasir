import axios from "axios"
import Link from "next/link"
import AddPemesanan from "./addPemesanan"
import DeletePemesanan from "./deletePemesanan"
import EditPemesanan from "./editPemesanan"

export const metadata = {
  title: "Pemesanan",
};

type Pemesanan = {
  id: number;
meja_id: string;
tanggal_pemesanan: string;
jam_mulai: string;
jam_selesai: string;
nama_pemesan: string;
jumlah_pelanggan: string;
};
const getPemesanan = async () => {
  const res = await axios.get("http://localhost:8000/api/pemesanan");
  return res.data.data;
};
const PemesananList = async () => {
  const pemesanan: Pemesanan[] = await getPemesanan();
  return (
    <div className="py-10 px-10">
      <div className="py-2"></div>
      <AddPemesanan/>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th>meja_id</th>
            <th>tanggal_pemesanan</th>
            <th>jam_mulai</th>
            <th>jam_selesai</th>
            <th>nama_pemesan</th>
            <th>jumlah_pelanggan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
             {pemesanan.map((pemesanan, index) => (
              <tr key={pemesanan.id}>
                <td>{index + 1}</td>
                <td>{pemesanan.meja_id}</td>
                <td>{pemesanan.tanggal_pemesanan}</td>
                <td>{pemesanan.jam_mulai}</td>
                <td>{pemesanan.jam_selesai}</td>
                <td>{pemesanan.nama_pemesan}</td>
                <td>{pemesanan.jumlah_pelanggan}</td>
                <td className="flex">
                  <div className="mr-1">  
                     <EditPemesanan {...pemesanan} />
                     <DeletePemesanan {...pemesanan} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default PemesananList;