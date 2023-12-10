export const metadata = {
  title: "Menu",
}
import axios from 'axios'
import Link from 'next/link'
import AddMenu from './addMenu'
import DeleteMenu from './deleteMenu'
import EditMenu from './editMenu'

type Menu = {
  id: number;
  nama_menu: string;
  harga: string;
  image: string;
  deskripsi: string;
  jenis_id: string;
};
const getMenu = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/menu");

  return res.data.data
}
const  MenuList = async () => {
  const menu: Menu[] = await getMenu()
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddMenu />
      </div>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>no</th>
            <th>nama_menu</th>
            <th>harga</th>
            <th>image</th>
            <th>deskripsi</th>
            <th>jenis_id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((menu, index) => (
            <tr key={menu.id}>
              <td>{index + 1}</td>
              <td>{menu.nama_menu}</td>
              <td>{menu.harga}</td>
              <td>{menu.image}</td>
              <td>{menu.deskripsi}</td>
              <td>{menu.jenis_id}</td>
              <td className="flex">
                <div className="mr-1">
                  <EditMenu {...menu} />
                  <DeleteMenu {...menu} />
                  </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuList
