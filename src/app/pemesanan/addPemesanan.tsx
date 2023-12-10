"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";


const API_URL = 'http://127.0.0.1:8000/api'
const AddPemesanan = () => {
  const [modal, setModal] = useState(false)
  const [meja_id, setMeja_id] = useState("")
  const [tanggal_pemesanan, setTanggal_pemesanan] = useState("")
  const [jam_mulai, setJam_mulai] = useState("")
  const [jam_selesai, setJam_selesai] = useState("")
  const [nama_pemesan, setNama_pemesan] = useState("")
  const [jumlah_pelanggan, setJumlah_pelanggan] = useState("")
  const [isMutating, setIsMutating] = useState(false)
  const router = useRouter()
  const handleChange = () => setModal(!modal)
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setIsMutating(true)
    let endpoint = `${API_URL}/pemesanan`
    const data = {
      meja_id: meja_id,
      tanggal_pemesanan: tanggal_pemesanan,
      jam_mulai: jam_mulai,
      jam_selesai: jam_selesai,
      nama_pemesan: nama_pemesan,
      jumlah_pelanggan: jumlah_pelanggan
    }
    await axios.post(endpoint, data);
    setMeja_id('')
    setTanggal_pemesanan('')
    setJam_mulai('')
    setJam_selesai('')
    setNama_pemesan('')
    setJumlah_pelanggan('')
    setIsMutating(false);
    router.refresh()
    setModal(false)
  }
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Add New
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Meja</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">meja_id</label>
              <input
                type="text"
                value={meja_id}
                onChange={(e) => setMeja_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Meja Id"
              />
              <label className="label font-bold">tanggal_pemesanan</label>
              <input
                type="date"
                value={tanggal_pemesanan}
                onChange={(e) => setTanggal_pemesanan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Tanggal Pemesanan"
              />
               <label className="label font-bold">jam_mulai</label>
              <input
                type="time"
                value={jam_mulai}
                onChange={(e) => setJam_mulai(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Jam Mulai"
              />
               <label className="label font-bold">jam_selesai</label>
              <input
                type="time"
                value={jam_selesai}
                onChange={(e) => setJam_selesai(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Jam Selesai"
              />
               <label className="label font-bold">nama_pemesan</label>
              <input
                type="text"
                value={nama_pemesan}
                onChange={(e) => setNama_pemesan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Pemesan"
              />
               <label className="label font-bold">jumlah_pelanggan</label>
              <input
                type="text"
                value={jumlah_pelanggan}
                onChange={(e) => setJumlah_pelanggan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Jumlah Pelanggan"
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
}

export default AddPemesanan