import Swal from 'sweetalert2';
import TambahMahasiswa from './TambahMahasiswa';
import { useState } from 'react';
import Button from './Button';

const Table = () => {
    const [students, setStudents] = useState([
        { nim: "A11.2022.14624", nama: "Faathir El Tasleem" },
        { nim: "A11.2022.14719", nama: "Shikimaku Zakura" },
        { nim: "A11.2022.14599", nama: "Dimasukin" },
      ]);
      const [modalVisible, setModalVisible] = useState(false);
      const [currentStudent, setCurrentStudent] = useState(null);
    
      const openModal = (student = null) => {
        setCurrentStudent(student);
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setCurrentStudent(null);
        setModalVisible(false);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const nim = e.target.nim.value;
        const nama = e.target.nama.value;
    
        if (currentStudent) {
          // Update student
          setStudents((prev) =>
            prev.map((s) => (s.nim === currentStudent.nim ? { nim, nama } : s))
          );
        } else {
          // Add new student
          setStudents((prev) => [...prev, { nim, nama }]);
        }
    
        closeModal();
        Swal.fire('Berhasil!', 'Data Mahasiswa Berhasil Disimpan!', 'success');
      };
  return (
    <>
    <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="font-bold text-xl mb-4">Daftar Mahasiswa</h2>
<Button title='Tambah Mahasiswa' color='bg-green-500' onClick={openModal} />
    <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">No.</th>
                <th className="border px-4 py-2">NIM</th>
                <th className="border px-4 py-2">Nama</th>
                <th className="border px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                  <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}.</td>
                  <td className="border px-4 py-2">{student.nim}</td>
                  <td className="border px-4 py-2">{student.nama}</td>
                  <td className="border px-4 py-2 flex gap-5">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => openModal(student)}>Edit</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => {
                        Swal.fire({
                          title: "Apakah Yakin Sirrr?",
                          text: "ElKecepatan Akan Menghapus Data InI!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Ya, Hapus!"
                        }).then((result) => {
                          if (result.isConfirmed) {
                          setStudents((prev) => prev.filter((s) => s.nim !== student.nim));
                            Swal.fire({
                              title: "Terhapus!",
                              text: "Data Mahasiswa Telah Dihapus Sirrr.",
                              icon: "success"
                            });
                          }
                        });;
                    }}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  {modalVisible && <TambahMahasiswa student={currentStudent} onSubmit={handleSubmit} onClose={closeModal} />}
    </>
  )
}

export default Table