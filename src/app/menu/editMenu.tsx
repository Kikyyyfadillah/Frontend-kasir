"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type Jenis = {
  id: number;
  nama_menu: string;
  harga: string;
  image: string;
  deskripsi: string;
  jenis_id: String;
};
const API_URL = 'http://127.0.0.1:8000/api'
const Editmenu = (menu: Jenis) => {
  const [modal, setModal] = useState(false);
  const [nama_menu, setNama_menu] = useState(menu.nama_menu)
  const [harga, setHarga] = useState(menu.harga)
  const [image, setImage] = useState(menu.image)
  const [deskripsi, setDeskripsi] = useState(menu.deskripsi)
  const [jenis_id, setJenis_id] = useState(menu.jenis_id)
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/menu/${menu.id}`;
    const data = { nama_menu: nama_menu,harga:harga,image:image,deskripsi:deskripsi,jenis_id:jenis_id}
    await axios.patch(endpoint, data);
    setNama_menu('')
    setHarga('')
    setImage('')
    setDeskripsi('')
    setJenis_id('')
    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Edit
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Menu</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">nama_menu</label>
              <input
                type="text"
                value={nama_menu}
                onChange={(e) => setNama_menu(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Name Menu"
              />
            </div>
             <div className="form-control">
              <label className="label font-bold">Harga</label>
              <input
                type="text"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Harga"
                          />
                          <label className="label font-bold">Image</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Image"
              />
              <label className="label font-bold">Deskripsi</label>
              <input
                type="text"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Deskripsi"
              />
              <label className="label font-bold">Jenis ID</label>
              <input
                type="text"
                value={jenis_id}
                onChange={(e) => setJenis_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Jenis ID menu"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Submit loading ...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editmenu;