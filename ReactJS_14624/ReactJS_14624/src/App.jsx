import { useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  return <Web />;
}

function Web() {
  return (
    <div className='bg-grey-100'>
      <div className='flex flex-row min-h-screen'>
        <Sider />
        <Content />
      </div>
    </div>
  );
}

function Sider() {
  return (
    <aside className="bg-indigo-900 w-64 text-white">
      <div className="p-4">
        <h2 className="font-bold text-2xl">Admin Panel</h2>
        <nav className="mt-4 ml-4">
          <ul>
            <li className="mb-4 flex items-center">
              <i data-feather="home" className="mr-2"></i>
              <a href="#" className="hover:underline">Dashboard</a>
            </li>
            <li className="mb-4 flex items-center">
              <i data-feather="users" className="mr-2"></i>
              <a href="#" className="hover:underline">Mahasiswa</a>
            </li>
            <li className="flex items-center">
              <i data-feather="settings" className="mr-2"></i>
              <a href="#" className="hover:underline">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function Content() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-orange-200 p-4 flex justify-end">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
    </header>
  );
}

function Main() {
  const [students, setStudents] = useState([
    { nim: "A11.2022.14264", nama: "Faathir El Tasleem" },
    { nim: "A11.2022.14719", nama: "Sikimaku Zakura" },
    { nim: "A11.2022.14599", nama: "Dimasukin" }
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
    <main className="bg-white p-6 flex-grow">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="font-bold text-xl mb-4">Daftar Mahasiswa</h2>
        <button className="bg-green-500 px-4 py-2 rounded-xl text-white mb-4" onClick={() => openModal()}>Tambah Mahasiswa</button>
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
                <td className="border px-4 py-2">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2" onClick={() => openModal(student)}>Edit</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => {
                    Swal.fire({
                      title: 'Apakah Yakin Sirrr?',
                      text: `ElKecepatan Akan Menghapus Data Ini`,
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setStudents((prev) => prev.filter((s) => s.nim !== student.nim));
                        Swal.fire({
                          title: "Terhapus!",
                          text: "Data Mahasiswa Telah Dihapus Sirrr.",
                          icon: "success"
                        });
                      }
                    });
                  }}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalVisible && <TambahMahasiswa student={currentStudent} onSubmit={handleSubmit} onClose={closeModal} />}
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-red-500 text-center text-white p-4">
      &copy; 2024 Fatlem Terlalu SigmaMewing.
    </footer>
  );
}

function TambahMahasiswa({ student, onSubmit, onClose }) {
  return (
    <div id="studentModal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/3 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4" id="modalTitle">{student ? 'Edit Mahasiswa' : 'Tambah Mahasiswa'}</h2>
        <form id="studentForm" onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="nim" className="block font-semibold mb-1">NIM</label>
            <input type="text" id="nim" name="nim" defaultValue={student?.nim || ''} className="w-full border px-4 py-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="nama" className="block font-semibold mb-1">Nama</label>
            <input type="text" id="nama" name="nama" defaultValue={student?.nama || ''} className="w-full border px-4 py-2" required />
          </div>
          <div className="flex justify-end">
            <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded mr-2" onClick={onClose}>Batal</button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
