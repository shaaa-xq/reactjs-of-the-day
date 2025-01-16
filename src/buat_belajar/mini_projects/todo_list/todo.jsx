import { useState } from 'react'

// Components: Buat beberapa komponen terpisah, seperti Header, TaskList, TaskItem, dan Footer.
// Props: Kirimkan data antar komponen, misalnya daftar tugas ke komponen TaskList.
// JSX: Gunakan untuk membuat struktur tampilan seperti input dan daftar tugas.
// useState: Kelola state untuk menyimpan daftar tugas.
// Conditional Rendering: Tampilkan pesan "Tidak ada tugas" jika daftar tugas kosong.
// Composition: Gabungkan beberapa komponen ke dalam satu tampilan utama.

// Komponen:
// Header: Untuk header aplikasi.
// TaskItem: Untuk menampilkan satu tugas.
// TaskList: Untuk menampilkan daftar tugas.
// App: Komponen utama yang menggabungkan semuanya.

// Props:
// TaskList menerima tasks dan deleteTask dari App.
// TaskItem menerima task dan onDelete dari TaskList.

// useState:
// tasks untuk menyimpan daftar tugas.
// input untuk menangani teks dari input.

// Conditional Rendering:
// Jika tidak ada tugas (tasks.length === 0), tampilkan pesan "Tidak ada tugas".

// Composition:
// App menggabungkan semua komponen (Header, TaskList, TaskItem).

// Header Component
function Header(){
  return(
    <header className='bg-violet-400 mt-0 p-10'>
      <h1>To-Do List</h1>
    </header>
  );
}

// TaskItem Component
function TaskItem({task, deleteItem}){
  return(
    <div className=''>
      <span>{task}</span>
      <button className=''>{deleteItem}</button>
    </div>
  );
}

// TaskList Component
function TaskList({tasks, deleteItem}){
  if(tasks.length === 0){
    return <p>Tidak ada tugas tersedia</p>
  }

  return(
    <div>
    </div>
  );
}

// Main App
const ToDoApp = () => {
  return(
    <>
      <Header />
      <TaskItem />
      <TaskList />
    </>
  )
}

export default ToDoApp;