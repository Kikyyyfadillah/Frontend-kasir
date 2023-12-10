export const metadata = {
  title: "Category",
}
import axios from 'axios'
import Link from 'next/link'
import AddCategory from './addCategory'
import DeleteCategory from './deleteCategory'
import EditCategory from './editCategory'

type Category = {
  id: number;
  nama_category: string;
}
const getCategory = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/category");

  return res.data.data
}
const  CategoryList = async () => {
  const category: Category[] = await getCategory()
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddCategory />
      </div>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th>Nama Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.nama_category}</td>
              <td className="flex">
                <div className="mr-1">
                  <EditCategory {...category} />
                  <DeleteCategory {...category} />
                  </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
