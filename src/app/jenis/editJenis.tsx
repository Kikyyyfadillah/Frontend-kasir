"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type Jenis = {
  id: number;
  nama_jenis: string;
  category_id: string;
};
const API_URL = 'http://127.0.0.1:8000/api'
const EditJenis = (jenis: Jenis) => {
  const [modal, setModal] = useState(false);
  const [nama_jenis, setNama_jenis] = useState(jenis.nama_jenis);
  const [category_id, setCategory_id] = useState(jenis.category_id);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/jenis/${jenis.id}`;
    const data = { nama_jenis: nama_jenis, category_id: category_id };
    await axios.patch(endpoint, data);
    setNama_jenis("");
    setCategory_id("");
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
          <h3 className="font-bold text-lg">Edit Jenis</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama Jenis</label>
              <input
                type="text"
                value={nama_jenis}
                onChange={(e) => setNama_jenis(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Jenis"
              />
              <label className="label font-bold">Categori ID</label>
              <input
                type="text"
                value={category_id}
                onChange={(e) => setCategory_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Categori ID"
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

export default EditJenis;